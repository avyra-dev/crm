import { CommonModule } from '@angular/common';
import { Component, computed, effect, inject, signal, untracked } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { BusinessService } from '../../../../services/business.service';
import { CrmFieldRecord, FieldService } from '../../../../services/field.service';
import { ObjectService } from '../../../../services/object.service';
import { ObjectRecordService } from '../../../../services/object-record.service';

@Component({
  selector: 'app-object-record-create-page',
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './object-record-create-page.html',
  styleUrl: './object-record-create-page.css',
})
export class ObjectRecordCreatePage {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly businessService = inject(BusinessService);
  private readonly objectService = inject(ObjectService);
  private readonly fieldService = inject(FieldService);
  private readonly objectRecordService = inject(ObjectRecordService);
  private readonly fb = inject(FormBuilder);

  readonly objects = this.objectService.objects;
  readonly fields = this.fieldService.fields;
  readonly isLoadingFields = this.fieldService.isLoading;
  readonly selectedBusinessId = this.businessService.selectedBusinessId;
  readonly objectIdParam = toSignal(this.route.paramMap.pipe(map((params) => params.get('objectId'))), {
    initialValue: null,
  });
  readonly objectNameParam = toSignal(this.route.paramMap.pipe(map((params) => params.get('objectName'))), {
    initialValue: null,
  });
  readonly selectedObject = computed(() => {
    const objectId = this.objectIdParam();
    if (!objectId) {
      return null;
    }

    return this.objects().find((objectRecord) => objectRecord.id === objectId) ?? null;
  });
  readonly objectHeading = computed(() => {
    return this.selectedObject()?.name ?? this.formatRouteName(this.objectNameParam());
  });
  readonly workspaceLabel = computed(() => this.businessService.selectedBusiness()?.name ?? 'Default Workspace');
  readonly hasFields = computed(() => this.fields().length > 0);
  readonly fieldPreview = computed(() => this.fields().slice(0, 8));
  readonly remainingFieldCount = computed(() => Math.max(0, this.fields().length - this.fieldPreview().length));

  recordForm = this.fb.group({});

  isSubmitting = signal<boolean>(false);
  formErrorMessage = signal<string>('');

  constructor() {
    effect(() => {
      const objectId = this.objectIdParam();
      const businessId = this.selectedBusinessId();

      this.formErrorMessage.set('');

      if (!objectId) {
        this.fieldService.clearState();
        this.recordForm = this.fb.group({});
        return;
      }

      untracked(() => {
        this.objectService.loadObjects(businessId);
        this.fieldService.loadFields(businessId, objectId);
      });
    });

    effect(() => {
      const fields = this.fields();
      this.recordForm = this.buildForm(fields);
    });
  }

  submitRecord() {
    const objectId = this.objectIdParam();
    if (!objectId) {
      this.formErrorMessage.set('Object context is unavailable.');
      return;
    }

    if (!this.fields().length) {
      this.formErrorMessage.set('Add at least one field before creating records.');
      return;
    }

    if (this.recordForm.invalid || this.isSubmitting()) {
      this.recordForm.markAllAsTouched();
      return;
    }

    const values: Record<string, unknown> = {};
    this.fields().forEach((fieldRecord) => {
      const rawValue = this.recordForm.get(fieldRecord.id)?.value;
      const normalized = this.normalizeInputValue(fieldRecord.type, rawValue);
      if (normalized !== undefined) {
        values[fieldRecord.id] = normalized;
      }
    });

    this.formErrorMessage.set('');
    this.isSubmitting.set(true);

    const businessId = this.selectedBusinessId();
    this.objectRecordService.createRecord(objectId, { values }, businessId).subscribe({
      next: (response) => {
        this.isSubmitting.set(false);
        if (!response.status) {
          this.formErrorMessage.set(response.message || 'Unable to create record.');
          return;
        }

        this.navigateToObjectDetails(objectId);
      },
      error: (error) => {
        this.isSubmitting.set(false);
        this.formErrorMessage.set(error?.error?.message || 'Unable to create record.');
      },
    });
  }

  buildObjectRoute(): string[] {
    const objectId = this.objectIdParam();
    if (!objectId) {
      return ['/dashboard'];
    }

    const objectRecord = this.selectedObject();
    const routeName = this.toRouteSegment(
      objectRecord?.name || objectRecord?.key || this.objectNameParam() || 'object',
    );
    return ['/objects', objectId, routeName];
  }

  fieldInputType(fieldType: string): string {
    const normalized = String(fieldType || '').trim().toLowerCase();
    if (normalized === 'number') {
      return 'number';
    }
    if (normalized === 'date') {
      return 'date';
    }
    if (normalized === 'datetime') {
      return 'datetime-local';
    }
    if (normalized === 'email') {
      return 'email';
    }
    if (normalized === 'phone') {
      return 'tel';
    }
    return 'text';
  }

  isTextAreaField(fieldType: string): boolean {
    return String(fieldType || '').trim().toLowerCase() === 'textarea';
  }

  isSelectField(fieldType: string): boolean {
    return String(fieldType || '').trim().toLowerCase() === 'select';
  }

  isBooleanField(fieldType: string): boolean {
    return String(fieldType || '').trim().toLowerCase() === 'boolean';
  }

  private buildForm(fields: CrmFieldRecord[]) {
    const controls: Record<string, FormControl> = {};

    fields.forEach((fieldRecord) => {
      const validators = [] as any[];
      if (fieldRecord.is_required) {
        validators.push(Validators.required);
      }

      const normalizedType = String(fieldRecord.type || '').trim().toLowerCase();
      if (normalizedType === 'email') {
        validators.push(Validators.email);
      }

      controls[fieldRecord.id] = this.fb.control('', validators);
    });

    return this.fb.group(controls);
  }

  private normalizeInputValue(fieldType: string, rawValue: unknown): unknown {
    if (rawValue === undefined || rawValue === null) {
      return undefined;
    }

    const normalizedType = String(fieldType || '').trim().toLowerCase();
    const value = typeof rawValue === 'string' ? rawValue.trim() : rawValue;
    if (value === '') {
      return undefined;
    }

    if (normalizedType === 'number') {
      const parsed = typeof value === 'number' ? value : Number(String(value));
      return Number.isFinite(parsed) ? parsed : value;
    }

    if (normalizedType === 'boolean') {
      if (value === true || value === false) {
        return value;
      }

      const text = String(value).toLowerCase();
      if (['1', 'true', 'yes', 'y'].includes(text)) {
        return true;
      }
      if (['0', 'false', 'no', 'n'].includes(text)) {
        return false;
      }
      return value;
    }

    return value;
  }

  private navigateToObjectDetails(objectId: string) {
    const objectRecord = this.selectedObject();
    const routeName = this.toRouteSegment(
      objectRecord?.name || objectRecord?.key || this.objectNameParam() || 'object',
    );
    this.router.navigate(['/objects', objectId, routeName]);
  }

  private formatRouteName(value: string | null): string {
    const normalized = String(value || '')
      .replace(/[-_]+/g, ' ')
      .trim();
    return normalized || 'Object';
  }

  private toRouteSegment(value: string): string {
    const trimmed = String(value || '').trim();
    if (!trimmed) {
      return 'object';
    }
    return trimmed.replace(/\//g, '-');
  }
}
