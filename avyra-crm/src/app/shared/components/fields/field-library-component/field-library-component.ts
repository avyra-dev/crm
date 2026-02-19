import { CommonModule } from '@angular/common';
import { Component, computed, effect, inject, signal, untracked } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { startWith } from 'rxjs';
import { BusinessService } from '../../../../services/business.service';
import { CreateFieldPayload, CrmFieldRecord, FieldService } from '../../../../services/field.service';
import { CrmObjectRecord, ObjectService } from '../../../../services/object.service';

@Component({
  selector: 'app-field-library-component',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './field-library-component.html',
  styleUrl: './field-library-component.css',
})
export class FieldLibraryComponent {
  private readonly fieldService = inject(FieldService);
  private readonly objectService = inject(ObjectService);
  private readonly businessService = inject(BusinessService);
  private readonly fb = inject(FormBuilder);

  readonly selectedBusinessId = this.businessService.selectedBusinessId;
  readonly businesses = this.businessService.businesses;
  readonly activeBusinessId = computed(() => this.selectedBusinessId() || 'default');
  readonly isDefaultWorkspace = computed(() => this.activeBusinessId() === 'default');
  readonly isBusinessWorkspace = computed(() => !this.isDefaultWorkspace());
  readonly fields = this.fieldService.fields;
  readonly isLoadingFields = this.fieldService.isLoading;

  userObjectOptions = signal<CrmObjectRecord[]>([]);
  isLoadingObjectOptions = signal<boolean>(false);
  isCreatingField = signal<boolean>(false);
  isMappingField = signal<boolean>(false);
  deletingFieldId = signal<string | null>(null);
  optionDraft = signal<string>('');
  optionErrorMessage = signal<string>('');
  createErrorMessage = signal<string>('');
  createSuccessMessage = signal<string>('');
  mapErrorMessage = signal<string>('');
  mapSuccessMessage = signal<string>('');

  createFieldForm = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(120)]],
    key: ['', [Validators.maxLength(64)]],
    type: ['text', [Validators.required]],
    description: ['', [Validators.maxLength(400)]],
    is_required: [false, [Validators.required]],
    options: ['', [Validators.maxLength(1200)]],
    object_id: [''],
    status: [1, [Validators.required]],
  });

  mapFieldForm = this.fb.group({
    field_id: ['', [Validators.required]],
    business_id: ['default', [Validators.required]],
    object_id: ['', [Validators.required]],
  });

  readonly fieldTypeOptions = [
    { value: 'text', label: 'Text' },
    { value: 'textarea', label: 'Long Text' },
    { value: 'number', label: 'Number' },
    { value: 'date', label: 'Date' },
    { value: 'datetime', label: 'Date Time' },
    { value: 'boolean', label: 'Yes / No' },
    { value: 'email', label: 'Email' },
    { value: 'phone', label: 'Phone' },
    { value: 'select', label: 'Select' },
  ];

  readonly createFieldType = toSignal(
    this.createFieldForm.controls.type.valueChanges.pipe(startWith(this.createFieldForm.controls.type.value ?? 'text')),
    { initialValue: this.createFieldForm.controls.type.value ?? 'text' },
  );
  readonly showOptionsInput = computed(() => String(this.createFieldType() || '').trim().toLowerCase() === 'select');
  readonly fieldOptionsPreview = computed(() => this.parseOptions(this.createFieldForm.controls.options.value));
  readonly mappingBusinessId = computed(() => String(this.mapFieldForm.value.business_id || 'default'));
  readonly createTargetObjectOptions = computed(() => {
    const activeBusinessId = this.activeBusinessId();
    const allObjects = this.userObjectOptions();

    if (activeBusinessId === 'default') {
      return allObjects;
    }

    return allObjects.filter((objectRecord) => objectRecord.mapped_business_ids.includes(activeBusinessId));
  });
  readonly filteredObjectOptions = computed(() => {
    const selectedBusinessId = this.mappingBusinessId();
    const allObjects = this.userObjectOptions();
    if (selectedBusinessId === 'default') {
      return allObjects;
    }
    return allObjects.filter((objectRecord) => objectRecord.mapped_business_ids.includes(selectedBusinessId));
  });

  constructor() {
    effect(() => {
      const activeBusinessId = this.activeBusinessId();

      this.createErrorMessage.set('');
      this.mapErrorMessage.set('');
      this.createSuccessMessage.set('');
      this.mapSuccessMessage.set('');
      this.createFieldForm.patchValue({ object_id: '' });
      this.mapFieldForm.patchValue({
        business_id: activeBusinessId === 'default' ? 'default' : activeBusinessId,
        object_id: '',
      });

      untracked(() => {
        this.fieldService.loadFields(activeBusinessId);
        this.loadObjectOptions();
      });
    });

    effect(() => {
      const showOptions = this.showOptionsInput();
      if (!showOptions) {
        this.optionDraft.set('');
        this.optionErrorMessage.set('');
        this.createFieldForm.controls.options.setValue('', { emitEvent: false });
      }
    });

    this.mapFieldForm.controls.business_id.valueChanges.subscribe(() => {
      this.mapFieldForm.patchValue({ object_id: '' });
    });
  }

  onOptionDraftInput(value: string) {
    this.optionDraft.set(String(value || ''));
    if (this.optionErrorMessage()) {
      this.optionErrorMessage.set('');
    }
  }

  addOption(event?: Event) {
    event?.preventDefault();

    const draft = String(this.optionDraft() || '').trim();
    if (!draft) {
      return;
    }

    const normalizedDraft = draft.slice(0, 120);
    const existing = this.fieldOptionsPreview();
    if (existing.some((option) => option.toLowerCase() === normalizedDraft.toLowerCase())) {
      this.optionErrorMessage.set(`"${normalizedDraft}" is already added.`);
      return;
    }

    this.setOptions([...existing, normalizedDraft]);
    this.optionDraft.set('');
    this.optionErrorMessage.set('');
  }

  removeOption(optionToRemove: string) {
    const remaining = this.fieldOptionsPreview().filter((option) => option !== optionToRemove);
    this.setOptions(remaining);
  }

  submitCreateField() {
    if (this.createFieldForm.invalid || this.isCreatingField()) {
      this.createFieldForm.markAllAsTouched();
      return;
    }

    const activeBusinessId = this.activeBusinessId();
    const selectedObjectId = String(this.createFieldForm.value.object_id || '');
    if (this.isBusinessWorkspace() && !selectedObjectId) {
      this.createErrorMessage.set('Select an object for business-level field creation.');
      return;
    }

    const fieldType = String(this.createFieldForm.value.type || 'text');
    const options = this.parseOptions(this.createFieldForm.value.options);
    if (fieldType === 'select' && !options.length) {
      this.optionErrorMessage.set('Add at least one option for select fields.');
      this.createErrorMessage.set('Add at least one option for select fields.');
      return;
    }

    this.optionErrorMessage.set('');
    this.createErrorMessage.set('');
    this.createSuccessMessage.set('');
    this.isCreatingField.set(true);

    const payload: CreateFieldPayload = {
      name: String(this.createFieldForm.value.name || '').trim(),
      key: String(this.createFieldForm.value.key || '').trim() || undefined,
      type: fieldType,
      description: String(this.createFieldForm.value.description || '').trim() || null,
      is_required: Boolean(this.createFieldForm.value.is_required),
      options: fieldType === 'select' ? options : [],
      status: Number(this.createFieldForm.value.status ?? 1),
    };

    this.fieldService.createField(
      payload,
      activeBusinessId,
      activeBusinessId === 'default' ? undefined : selectedObjectId,
      { businessId: activeBusinessId },
    ).subscribe({
      next: (response) => {
        this.isCreatingField.set(false);
        if (!response.status) {
          this.createErrorMessage.set(response.message || 'Unable to create field.');
          return;
        }

        this.createSuccessMessage.set(
          this.isDefaultWorkspace()
            ? 'Field schema created in reusable library.'
            : 'Field created and mapped to selected business object.',
        );
        this.resetCreateFieldForm();
      },
      error: (error) => {
        this.isCreatingField.set(false);
        this.createErrorMessage.set(error?.error?.message || 'Unable to create field.');
      },
    });
  }

  submitMapField() {
    if (!this.isDefaultWorkspace()) {
      this.mapErrorMessage.set('Field mapping across businesses is available from default workspace.');
      return;
    }

    if (this.mapFieldForm.invalid || this.isMappingField()) {
      this.mapFieldForm.markAllAsTouched();
      return;
    }

    const selectedObjectId = String(this.mapFieldForm.value.object_id || '');
    const hasObject = this.filteredObjectOptions().some((objectRecord) => objectRecord.id === selectedObjectId);
    if (!hasObject) {
      this.mapErrorMessage.set('Select an object available for the selected business context.');
      return;
    }

    this.mapErrorMessage.set('');
    this.mapSuccessMessage.set('');
    this.isMappingField.set(true);

    const fieldId = String(this.mapFieldForm.value.field_id || '');
    const businessId = String(this.mapFieldForm.value.business_id || 'default');
    this.fieldService
      .mapFieldToObject(fieldId, selectedObjectId, businessId, { businessId: 'default' })
      .subscribe({
        next: (response) => {
          this.isMappingField.set(false);
          if (!response.status) {
            this.mapErrorMessage.set(response.message || 'Unable to map field.');
            return;
          }

          this.mapSuccessMessage.set('Field mapped successfully.');
          this.mapFieldForm.patchValue({ object_id: '' });
        },
        error: (error) => {
          this.isMappingField.set(false);
          this.mapErrorMessage.set(error?.error?.message || 'Unable to map field.');
        },
      });
  }

  deleteField(fieldRecord: CrmFieldRecord) {
    if (this.deletingFieldId()) {
      return;
    }

    if (typeof window !== 'undefined') {
      const confirmed = window.confirm(
        `Delete field "${fieldRecord.name}"? This will remove all object mappings for this field.`,
      );
      if (!confirmed) {
        return;
      }
    }

    this.mapErrorMessage.set('');
    this.createErrorMessage.set('');
    this.deletingFieldId.set(fieldRecord.id);
    this.fieldService.deleteField(fieldRecord.id, { businessId: 'default' }).subscribe({
      next: (response) => {
        this.deletingFieldId.set(null);
        if (!response.status) {
          this.mapErrorMessage.set(response.message || 'Unable to delete field.');
        }
      },
      error: (error) => {
        this.deletingFieldId.set(null);
        this.mapErrorMessage.set(error?.error?.message || 'Unable to delete field.');
      },
    });
  }

  businessLabel(businessId: string | null): string {
    if (!businessId) {
      return 'Default';
    }
    return this.businesses().find((business) => business.id === businessId)?.name ?? 'Business';
  }

  fieldTypeLabel(type: string): string {
    return this.fieldTypeOptions.find((option) => option.value === type)?.label ?? type;
  }

  formatDate(value: string | null): string {
    if (!value) return 'N/A';
    const parsed = new Date(value);
    if (Number.isNaN(parsed.getTime())) {
      return 'N/A';
    }

    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(parsed);
  }

  private loadObjectOptions() {
    if (this.isLoadingObjectOptions()) {
      return;
    }

    this.isLoadingObjectOptions.set(true);
    this.objectService.fetchUserObjects().subscribe({
      next: (response) => {
        this.isLoadingObjectOptions.set(false);
        const options = Array.isArray(response.data) ? response.data : [];
        this.userObjectOptions.set(options);
      },
      error: () => {
        this.isLoadingObjectOptions.set(false);
        this.userObjectOptions.set([]);
      },
    });
  }

  private setOptions(options: string[]) {
    const normalized = this.parseOptions(options.join('\n'));
    this.createFieldForm.controls.options.setValue(normalized.join('\n'));
    this.createFieldForm.controls.options.markAsDirty();
    this.createFieldForm.controls.options.markAsTouched();
  }

  private parseOptions(value: string | null | undefined): string[] {
    const normalized = String(value || '')
      .split(/[\n,]/g)
      .map((option) => option.trim())
      .filter((option) => option.length > 0)
      .map((option) => option.slice(0, 120));
    return Array.from(new Set(normalized)).slice(0, 50);
  }

  private resetCreateFieldForm() {
    this.createFieldForm.reset({
      name: '',
      key: '',
      type: 'text',
      description: '',
      is_required: false,
      options: '',
      object_id: '',
      status: 1,
    });
    this.optionDraft.set('');
    this.optionErrorMessage.set('');
  }
}
