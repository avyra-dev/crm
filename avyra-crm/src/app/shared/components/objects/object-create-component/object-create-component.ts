import { CommonModule } from '@angular/common';
import { Component, computed, effect, inject, signal, untracked } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { BusinessService } from '../../../../services/business.service';
import { CrmObjectRecord, CreateObjectPayload, ObjectService } from '../../../../services/object.service';

type CreationMode = 'new' | 'clone';

@Component({
  selector: 'app-object-create-component',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './object-create-component.html',
  styleUrl: './object-create-component.css',
})
export class ObjectCreateComponent {
  private readonly objectService = inject(ObjectService);
  private readonly businessService = inject(BusinessService);
  private readonly fb = inject(FormBuilder);

  readonly selectedBusinessId = this.businessService.selectedBusinessId;
  readonly workspaceLabel = computed(() => this.businessService.selectedBusiness()?.name ?? 'Default');
  readonly isBusinessWorkspace = computed(() => this.selectedBusinessId() !== 'default');
  readonly workspaceModeLabel = computed(() =>
    this.isBusinessWorkspace() ? 'Business Workspace' : 'Default Object Library',
  );

  creationMode = signal<CreationMode>('new');
  cloneSourceId = signal<string>('');
  isLoadingCloneOptions = signal<boolean>(false);
  userObjectOptions = signal<CrmObjectRecord[]>([]);
  isSubmitting = signal<boolean>(false);
  formErrorMessage = signal<string>('');
  formSuccessMessage = signal<string>('');

  readonly cloneOptionCount = computed(() => this.userObjectOptions().length);
  readonly modeHelpText = computed(() => {
    if (!this.isBusinessWorkspace()) {
      return 'Objects created here become reusable templates for all businesses.';
    }

    return this.creationMode() === 'clone'
      ? 'Clone pulls from your user object library and pre-fills this form for faster setup.'
      : 'Create a business-specific object from scratch with your own schema definition.';
  });

  createObjectForm = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(120)]],
    key: ['', [Validators.maxLength(64)]],
    description: ['', [Validators.maxLength(400)]],
    status: [1, [Validators.required]],
  });

  constructor() {
    effect(() => {
      const businessId = this.selectedBusinessId();
      this.creationMode.set('new');
      this.cloneSourceId.set('');
      this.formErrorMessage.set('');
      this.formSuccessMessage.set('');
      this.resetForm();

      if (businessId === 'default') {
        this.userObjectOptions.set([]);
        this.isLoadingCloneOptions.set(false);
        return;
      }

      untracked(() => this.loadCloneOptions());
    });
  }

  setCreationMode(mode: CreationMode) {
    this.creationMode.set(mode);
    this.cloneSourceId.set('');
    this.formErrorMessage.set('');
    this.formSuccessMessage.set('');
    this.resetForm();

    if (mode === 'clone') {
      this.loadCloneOptions();
    }
  }

  onCloneSourceSelect(sourceObjectId: string) {
    this.cloneSourceId.set(sourceObjectId);
    if (!sourceObjectId) {
      return;
    }

    const sourceObject = this.userObjectOptions().find((item) => item.id === sourceObjectId);
    if (!sourceObject) {
      return;
    }

    const draft = this.buildCloneDraft(sourceObject);
    this.createObjectForm.patchValue({
      name: draft.name,
      key: draft.key,
      description: draft.description,
      status: draft.status,
    });
  }

  submitCreateObject() {
    if (this.createObjectForm.invalid || this.isSubmitting()) {
      this.createObjectForm.markAllAsTouched();
      return;
    }

    if (this.isBusinessWorkspace() && this.creationMode() === 'clone' && !this.cloneSourceId()) {
      this.formErrorMessage.set('Select an existing object to clone.');
      return;
    }

    this.formErrorMessage.set('');
    this.formSuccessMessage.set('');
    this.isSubmitting.set(true);

    const businessId = this.selectedBusinessId();
    const payload: CreateObjectPayload = {
      name: String(this.createObjectForm.value.name ?? '').trim(),
      key: String(this.createObjectForm.value.key ?? '').trim() || undefined,
      description: String(this.createObjectForm.value.description ?? '').trim() || null,
      status: Number(this.createObjectForm.value.status ?? 1),
    };

    this.objectService.createObject(payload, businessId).subscribe({
      next: (response) => {
        this.isSubmitting.set(false);
        if (!response.status) {
          this.formErrorMessage.set(response.message || 'Unable to create object.');
          return;
        }

        this.formSuccessMessage.set(
          this.creationMode() === 'clone'
            ? 'Object cloned and assigned successfully.'
            : 'Object created successfully.',
        );
        this.creationMode.set('new');
        this.cloneSourceId.set('');
        this.resetForm();
        if (this.isBusinessWorkspace()) {
          this.loadCloneOptions();
        }
      },
      error: (error) => {
        this.isSubmitting.set(false);
        this.formErrorMessage.set(error?.error?.message || 'Unable to create object.');
      },
    });
  }

  private loadCloneOptions() {
    if (!this.isBusinessWorkspace() || this.isLoadingCloneOptions()) {
      return;
    }

    this.isLoadingCloneOptions.set(true);
    this.objectService.fetchUserObjects().subscribe({
      next: (response) => {
        this.isLoadingCloneOptions.set(false);
        const options = Array.isArray(response.data) ? response.data : [];
        this.userObjectOptions.set(options);
        if (!options.length && this.creationMode() === 'clone') {
          this.creationMode.set('new');
        }
      },
      error: () => {
        this.isLoadingCloneOptions.set(false);
        this.userObjectOptions.set([]);
        if (this.creationMode() === 'clone') {
          this.creationMode.set('new');
        }
      },
    });
  }

  private buildCloneDraft(sourceObject: CrmObjectRecord) {
    const existingNames = new Set(
      this.userObjectOptions()
        .map((item) => (item.name || '').trim().toLowerCase())
        .filter((name) => name.length > 0),
    );
    const existingKeys = new Set(
      this.userObjectOptions()
        .map((item) => this.normalizeKey(item.key || item.name))
        .filter((key) => key.length > 0),
    );

    const baseName = `${(sourceObject.name || 'Object').trim()} Copy`.trim();
    const name = this.ensureUniqueName(baseName, existingNames);

    const baseKey = this.normalizeKey(`${sourceObject.key || sourceObject.name || 'object'}_copy`) || 'object_copy';
    const key = this.ensureUniqueKey(baseKey, existingKeys);

    return {
      name,
      key,
      description: sourceObject.description ?? '',
      status: Number(sourceObject.status) === 0 ? 0 : 1,
    };
  }

  private ensureUniqueName(baseName: string, existingNames: Set<string>) {
    let candidate = baseName || 'Object Copy';
    let counter = 2;
    while (existingNames.has(candidate.toLowerCase())) {
      candidate = `${baseName} ${counter}`;
      counter += 1;
    }
    return candidate;
  }

  private ensureUniqueKey(baseKey: string, existingKeys: Set<string>) {
    let candidate = this.normalizeKey(baseKey) || 'object_copy';
    let counter = 2;
    while (existingKeys.has(candidate)) {
      candidate = this.normalizeKey(`${baseKey}_${counter}`);
      counter += 1;
    }
    return candidate || 'object_copy';
  }

  private normalizeKey(value: string): string {
    return String(value || '')
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '_')
      .replace(/^_+|_+$/g, '')
      .slice(0, 64);
  }

  private resetForm() {
    this.createObjectForm.reset({
      name: '',
      key: '',
      description: '',
      status: 1,
    });
  }
}
