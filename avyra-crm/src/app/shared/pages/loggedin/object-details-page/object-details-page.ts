import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, ViewChild, computed, effect, inject, signal, untracked } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map, startWith } from 'rxjs';
import { BusinessService } from '../../../../services/business.service';
import { CreateFieldPayload, CrmFieldRecord, FieldService } from '../../../../services/field.service';
import {
  CrmObjectDataField,
  CrmObjectDataRecord,
  CrmObjectListView,
  ObjectRecordService,
} from '../../../../services/object-record.service';
import { CrmObjectRecord, ObjectService } from '../../../../services/object.service';

@Component({
  selector: 'app-object-details-page',
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './object-details-page.html',
  styleUrl: './object-details-page.css',
})
export class ObjectDetailsPage implements AfterViewInit {
  @ViewChild('recordsTableShell')
  private recordsTableShellRef?: ElementRef<HTMLDivElement>;

  private readonly route = inject(ActivatedRoute);
  private readonly businessService = inject(BusinessService);
  private readonly objectService = inject(ObjectService);
  private readonly fieldService = inject(FieldService);
  private readonly objectRecordService = inject(ObjectRecordService);
  private readonly fb = inject(FormBuilder);

  readonly objects = this.objectService.objects;
  readonly isLoading = this.objectService.isLoading;
  readonly fields = this.fieldService.fields;
  readonly isFieldsLoading = this.fieldService.isLoading;
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
    const objectRecord = this.selectedObject();
    return objectRecord?.name || this.formatRouteName(this.objectNameParam());
  });
  readonly workspaceLabel = computed(() => this.businessService.selectedBusiness()?.name ?? 'Default Workspace');
  readonly description = computed(() => {
    const objectDescription = this.selectedObject()?.description?.trim();
    if (objectDescription) {
      return objectDescription;
    }
    return 'Configure record lifecycle, field structure, and team workflows for this CRM object.';
  });
  readonly relatedObjects = computed(() => {
    const activeObjectId = this.objectIdParam();
    return this.objects()
      .filter((objectRecord) => objectRecord.id !== activeObjectId)
      .slice(0, 5);
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
  readonly showInlineFieldCreation = computed(() => !this.isFieldsLoading() && this.fields().length === 0);
  readonly hasMappedFields = computed(() => !this.isFieldsLoading() && this.fields().length > 0);
  readonly canAddRecord = computed(() => this.hasMappedFields() && Boolean(this.selectedObject()));
  readonly isInfoPopupOpen = signal<boolean>(false);
  readonly isColumnPickerOpen = signal<boolean>(false);
  fieldOptionDraft = signal<string>('');
  fieldOptionErrorMessage = signal<string>('');
  columnPreferenceMessage = signal<string>('');

  records = signal<CrmObjectDataRecord[]>([]);
  recordFields = signal<CrmObjectDataField[]>([]);
  isLoadingRecords = signal<boolean>(false);
  isExportingRecords = signal<boolean>(false);
  recordErrorMessage = signal<string>('');
  recordSearchTerm = signal<string>('');
  recordCurrentPage = signal<number>(1);
  readonly recordPageSize = signal<number>(10);
  recordTotal = signal<number>(0);
  recordTotalPages = signal<number>(1);
  recordSortField = signal<string>('created_at');
  recordSortDirection = signal<'asc' | 'desc'>('desc');
  visibleFieldColumnIds = signal<string[]>([]);
  listViews = signal<CrmObjectListView[]>([]);
  selectedListViewId = signal<string | null>(null);
  isLoadingListViews = signal<boolean>(false);
  isSavingListView = signal<boolean>(false);
  listViewErrorMessage = signal<string>('');
  listViewSuccessMessage = signal<string>('');
  hasHorizontalOverflow = signal<boolean>(false);
  canScrollTableLeft = signal<boolean>(false);
  canScrollTableRight = signal<boolean>(false);

  readonly tableFields = computed<CrmObjectDataField[]>(() => {
    const backendFields = this.recordFields();
    if (backendFields.length) {
      return backendFields;
    }

    return this.fields().map((fieldRecord) => ({
      id: fieldRecord.id,
      name: fieldRecord.name,
      key: fieldRecord.key,
      type: fieldRecord.type,
      is_required: fieldRecord.is_required,
      options: Array.isArray(fieldRecord.options) ? fieldRecord.options : [],
      status: Number(fieldRecord.status),
    }));
  });
  readonly visibleTableFields = computed<CrmObjectDataField[]>(() => {
    const allFields = this.tableFields();
    if (!allFields.length) {
      return [];
    }

    const visibleIds = this.visibleFieldColumnIds();
    if (!visibleIds.length) {
      return allFields;
    }

    const visibleSet = new Set(visibleIds);
    return allFields.filter((fieldRecord) => visibleSet.has(fieldRecord.id));
  });
  readonly hiddenFieldColumnCount = computed(() =>
    Math.max(this.tableFields().length - this.visibleTableFields().length, 0),
  );
  readonly selectedListView = computed<CrmObjectListView | null>(() => {
    const selectedId = this.selectedListViewId();
    const views = this.listViews();
    if (!views.length) {
      return null;
    }

    if (selectedId) {
      const matched = views.find((view) => view.id === selectedId);
      if (matched) {
        return matched;
      }
    }

    return views.find((view) => view.is_default) ?? views[0] ?? null;
  });
  readonly recordColumnCount = computed(() => this.visibleTableFields().length + 2);
  readonly recordRangeStart = computed(() => {
    if (!this.recordTotal()) {
      return 0;
    }
    return (this.recordCurrentPage() - 1) * this.recordPageSize() + 1;
  });
  readonly recordRangeEnd = computed(() => {
    if (!this.recordTotal()) {
      return 0;
    }
    return Math.min(this.recordCurrentPage() * this.recordPageSize(), this.recordTotal());
  });

  isCreatingField = signal<boolean>(false);
  removingFieldId = signal<string | null>(null);
  fieldErrorMessage = signal<string>('');
  fieldSuccessMessage = signal<string>('');

  createFieldForm = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(120)]],
    key: ['', [Validators.maxLength(64)]],
    type: ['text', [Validators.required]],
    description: ['', [Validators.maxLength(400)]],
    is_required: [false, [Validators.required]],
    options: ['', [Validators.maxLength(1200)]],
    status: [1, [Validators.required]],
  });
  readonly createFieldType = toSignal(
    this.createFieldForm.controls.type.valueChanges.pipe(startWith(this.createFieldForm.controls.type.value ?? 'text')),
    { initialValue: this.createFieldForm.controls.type.value ?? 'text' },
  );
  readonly showFieldOptionsInput = computed(() => String(this.createFieldType() || '').trim().toLowerCase() === 'select');
  readonly createFieldOptionsPreview = computed(() => this.parseOptions(this.createFieldForm.controls.options.value));

  constructor() {
    effect(() => {
      const objectId = this.objectIdParam();
      const businessId = this.selectedBusinessId();

      if (!objectId) {
        this.fieldService.clearState();
        return;
      }

      untracked(() => {
        this.fieldService.loadFields(businessId, objectId);
      });
    });

    effect(() => {
      this.objectIdParam();
      this.selectedBusinessId();

      this.isInfoPopupOpen.set(false);
      this.isColumnPickerOpen.set(false);
      this.columnPreferenceMessage.set('');
      this.recordSearchTerm.set('');
      this.recordCurrentPage.set(1);
      this.recordSortField.set('created_at');
      this.recordSortDirection.set('desc');
      this.visibleFieldColumnIds.set([]);
      this.listViews.set([]);
      this.selectedListViewId.set(null);
      this.isLoadingListViews.set(false);
      this.isSavingListView.set(false);
      this.listViewErrorMessage.set('');
      this.listViewSuccessMessage.set('');
      this.recordErrorMessage.set('');
      this.records.set([]);
      this.recordFields.set([]);
      this.recordTotal.set(0);
      this.recordTotalPages.set(1);
      this.resetTableScrollState();
    });

    effect(() => {
      const objectId = this.objectIdParam();
      const businessId = this.selectedBusinessId();
      const hasFields = this.hasMappedFields();
      const page = this.recordCurrentPage();
      const limit = this.recordPageSize();
      const search = this.recordSearchTerm();
      const sortField = this.recordSortField();
      const sortDirection = this.recordSortDirection();

      if (!objectId || !hasFields) {
        this.records.set([]);
        this.recordFields.set([]);
        this.recordTotal.set(0);
        this.recordTotalPages.set(1);
        this.isLoadingRecords.set(false);
        return;
      }

      untracked(() => {
        this.loadRecords({
          objectId,
          businessId,
          page,
          limit,
          search,
          sortField,
          sortDirection,
        });
      });
    });

    effect(() => {
      const objectId = this.objectIdParam();
      const businessId = this.selectedBusinessId();
      const hasFields = this.hasMappedFields();

      if (!objectId || !hasFields) {
        this.listViews.set([]);
        this.selectedListViewId.set(null);
        this.isLoadingListViews.set(false);
        return;
      }

      untracked(() => {
        this.loadListViews(objectId, businessId);
      });
    });

    effect(() => {
      const views = this.listViews();
      const selectedViewId = this.selectedListViewId();
      if (!views.length) {
        if (selectedViewId !== null) {
          this.selectedListViewId.set(null);
        }
        return;
      }

      if (selectedViewId && views.some((view) => view.id === selectedViewId)) {
        return;
      }

      const fallbackViewId = views.find((view) => view.is_default)?.id ?? views[0].id;
      if (fallbackViewId !== selectedViewId) {
        this.selectedListViewId.set(fallbackViewId);
      }
    });

    effect(() => {
      const showOptions = this.showFieldOptionsInput();
      if (!showOptions) {
        this.fieldOptionDraft.set('');
        this.fieldOptionErrorMessage.set('');
        this.createFieldForm.controls.options.setValue('', { emitEvent: false });
      }
    });

    effect(() => {
      const availableFields = this.tableFields();
      const selectedView = this.selectedListView();
      if (!availableFields.length) {
        this.visibleFieldColumnIds.set([]);
        return;
      }

      const availableIds = availableFields.map((fieldRecord) => fieldRecord.id);
      const configuredIds = selectedView?.visible_field_ids ?? [];
      const nextVisible = configuredIds.length
        ? availableIds.filter((fieldId) => configuredIds.includes(fieldId))
        : availableIds;
      const normalizedVisible = nextVisible.length ? nextVisible : availableIds.slice(0, 1);

      if (!this.areArraysEqual(normalizedVisible, this.visibleFieldColumnIds())) {
        this.visibleFieldColumnIds.set(normalizedVisible);
        this.syncSortWithVisibleColumns(normalizedVisible);
      }
      this.deferRefreshTableScrollState();
    });

    effect(() => {
      this.visibleTableFields();
      this.deferRefreshTableScrollState();
    });
  }

  ngAfterViewInit() {
    this.deferRefreshTableScrollState();
  }

  @HostListener('window:resize')
  onWindowResize() {
    this.deferRefreshTableScrollState();
  }

  buildObjectRoute(objectRecord: CrmObjectRecord): string[] {
    const routeName = this.toRouteSegment(objectRecord.name || objectRecord.key || 'object');
    return ['/objects', objectRecord.id, routeName];
  }

  buildAddRecordRoute(objectRecord: CrmObjectRecord): string[] {
    const routeName = this.toRouteSegment(objectRecord.name || objectRecord.key || 'object');
    return ['/objects', objectRecord.id, routeName, 'new'];
  }

  objectInitial(name: string): string {
    const trimmed = String(name || '').trim();
    return trimmed ? trimmed.charAt(0).toUpperCase() : 'O';
  }

  statusLabel(status: number): string {
    return Number(status) === 1 ? 'Active' : 'Inactive';
  }

  fieldTypeLabel(type: string): string {
    return this.fieldTypeOptions.find((option) => option.value === type)?.label ?? type;
  }

  openInfoPopup() {
    this.isInfoPopupOpen.set(true);
  }

  closeInfoPopup() {
    this.isInfoPopupOpen.set(false);
  }

  toggleInfoPopup() {
    this.isInfoPopupOpen.update((value) => !value);
  }

  toggleColumnPicker() {
    this.isColumnPickerOpen.update((value) => !value);
    this.columnPreferenceMessage.set('');
  }

  closeColumnPicker() {
    this.isColumnPickerOpen.set(false);
    this.columnPreferenceMessage.set('');
  }

  onListViewSelect(viewId: string) {
    const normalizedViewId = String(viewId || '').trim();
    if (!normalizedViewId || normalizedViewId === this.selectedListViewId()) {
      return;
    }

    this.selectedListViewId.set(normalizedViewId);
    this.listViewSuccessMessage.set('');
    this.listViewErrorMessage.set('');
    this.setListViewAsDefault(normalizedViewId);
  }

  createListView() {
    const objectId = this.objectIdParam();
    if (!objectId || this.isSavingListView() || this.isLoadingListViews()) {
      return;
    }

    const tableFieldIds = this.tableFields().map((fieldRecord) => fieldRecord.id);
    if (!tableFieldIds.length) {
      this.listViewErrorMessage.set('Add at least one field before creating list views.');
      return;
    }

    const visibleColumns = this.visibleFieldColumnIds();
    const payloadColumns = visibleColumns.length ? visibleColumns : tableFieldIds;

    this.isSavingListView.set(true);
    this.listViewErrorMessage.set('');
    this.listViewSuccessMessage.set('');

    this.objectRecordService
      .createListView(objectId, {
        businessId: this.selectedBusinessId(),
        visibleFieldIds: payloadColumns,
      })
      .subscribe({
        next: (response) => {
          this.isSavingListView.set(false);
          if (!response.status || !response.data?.view) {
            this.listViewErrorMessage.set(response.message || 'Unable to create list view.');
            return;
          }

          this.upsertListView(response.data.view);
          this.selectedListViewId.set(response.data.view.id);
          this.listViewSuccessMessage.set(`${response.data.view.name} created.`);
          this.setListViewAsDefault(response.data.view.id);
          this.columnPreferenceMessage.set('');
        },
        error: (error) => {
          this.isSavingListView.set(false);
          this.listViewErrorMessage.set(error?.error?.message || 'Unable to create list view.');
        },
      });
  }

  showAllFieldColumns() {
    const allFieldIds = this.tableFields().map((fieldRecord) => fieldRecord.id);
    if (!allFieldIds.length) {
      return;
    }

    this.visibleFieldColumnIds.set(allFieldIds);
    this.persistVisibleColumnsToSelectedView(allFieldIds, 'Showing all columns.');
    this.deferRefreshTableScrollState();
  }

  showRequiredFieldColumns() {
    const allFields = this.tableFields();
    if (!allFields.length) {
      return;
    }

    const requiredColumns = allFields.filter((fieldRecord) => fieldRecord.is_required).map((fieldRecord) => fieldRecord.id);
    const nextColumns = requiredColumns.length ? requiredColumns : [allFields[0].id];
    this.visibleFieldColumnIds.set(nextColumns);
    this.syncSortWithVisibleColumns(nextColumns);
    this.persistVisibleColumnsToSelectedView(
      nextColumns,
      requiredColumns.length ? 'Showing required columns only.' : 'No required fields, showing first column.',
    );
    this.deferRefreshTableScrollState();
  }

  toggleFieldColumn(fieldId: string, checked: boolean) {
    const availableIds = this.tableFields().map((fieldRecord) => fieldRecord.id);
    if (!availableIds.includes(fieldId)) {
      return;
    }

    const current = this.visibleFieldColumnIds();
    const currentSet = new Set(current.length ? current : availableIds);

    if (checked) {
      currentSet.add(fieldId);
    } else {
      currentSet.delete(fieldId);
      if (!currentSet.size) {
        this.columnPreferenceMessage.set('At least one column must remain visible.');
        return;
      }
    }

    const nextVisible = availableIds.filter((id) => currentSet.has(id));
    this.visibleFieldColumnIds.set(nextVisible);
    this.syncSortWithVisibleColumns(nextVisible);
    this.persistVisibleColumnsToSelectedView(nextVisible);
    this.deferRefreshTableScrollState();
  }

  isFieldColumnVisible(fieldId: string): boolean {
    return this.visibleTableFields().some((fieldRecord) => fieldRecord.id === fieldId);
  }

  onRecordsTableScroll() {
    this.refreshTableScrollState();
  }

  scrollRecordsTable(direction: 'left' | 'right') {
    const shell = this.recordsTableShellRef?.nativeElement;
    if (!shell) {
      return;
    }

    const delta = direction === 'left' ? -320 : 320;
    shell.scrollBy({ left: delta, behavior: 'smooth' });

    if (typeof window !== 'undefined') {
      window.setTimeout(() => this.refreshTableScrollState(), 220);
    } else {
      this.refreshTableScrollState();
    }
  }

  onFieldOptionDraftInput(value: string) {
    this.fieldOptionDraft.set(String(value || ''));
    if (this.fieldOptionErrorMessage()) {
      this.fieldOptionErrorMessage.set('');
    }
  }

  addFieldOption(event?: Event) {
    event?.preventDefault();

    const draft = String(this.fieldOptionDraft() || '').trim();
    if (!draft) {
      return;
    }

    const normalizedDraft = draft.slice(0, 120);
    const existing = this.createFieldOptionsPreview();
    if (existing.some((option) => option.toLowerCase() === normalizedDraft.toLowerCase())) {
      this.fieldOptionErrorMessage.set(`"${normalizedDraft}" is already added.`);
      return;
    }

    this.setCreateFieldOptions([...existing, normalizedDraft]);
    this.fieldOptionDraft.set('');
    this.fieldOptionErrorMessage.set('');
  }

  removeFieldOption(optionToRemove: string) {
    const remaining = this.createFieldOptionsPreview().filter((option) => option !== optionToRemove);
    this.setCreateFieldOptions(remaining);
  }

  submitCreateField() {
    const objectRecord = this.selectedObject();
    const objectId = objectRecord?.id;
    if (!objectId) {
      this.fieldErrorMessage.set('Object context is unavailable.');
      return;
    }

    if (this.createFieldForm.invalid || this.isCreatingField()) {
      this.createFieldForm.markAllAsTouched();
      return;
    }

    const fieldType = String(this.createFieldForm.value.type || 'text');
    const options = this.parseOptions(this.createFieldForm.value.options);
    if (fieldType === 'select' && !options.length) {
      this.fieldOptionErrorMessage.set('Select fields require at least one option.');
      this.fieldErrorMessage.set('Select fields require at least one option.');
      return;
    }

    this.fieldOptionErrorMessage.set('');
    this.fieldErrorMessage.set('');
    this.fieldSuccessMessage.set('');
    this.isCreatingField.set(true);

    const businessId = this.selectedBusinessId();
    const payload: CreateFieldPayload = {
      name: String(this.createFieldForm.value.name || '').trim(),
      key: String(this.createFieldForm.value.key || '').trim() || undefined,
      type: fieldType,
      description: String(this.createFieldForm.value.description || '').trim() || null,
      is_required: Boolean(this.createFieldForm.value.is_required),
      options: fieldType === 'select' ? options : [],
      status: Number(this.createFieldForm.value.status ?? 1),
    };

    this.fieldService
      .createField(payload, businessId, objectId, { businessId, objectId })
      .subscribe({
        next: (response) => {
          this.isCreatingField.set(false);
          if (!response.status) {
            this.fieldErrorMessage.set(response.message || 'Unable to create field.');
            return;
          }

          this.fieldSuccessMessage.set(`Field added to ${objectRecord.name}.`);
          this.resetFieldForm();
        },
        error: (error) => {
          this.isCreatingField.set(false);
          this.fieldErrorMessage.set(error?.error?.message || 'Unable to create field.');
        },
      });
  }

  unmapField(fieldRecord: CrmFieldRecord) {
    const objectRecord = this.selectedObject();
    const objectId = objectRecord?.id;
    if (!objectId || this.removingFieldId()) {
      return;
    }

    if (typeof window !== 'undefined') {
      const confirmed = window.confirm(`Remove field "${fieldRecord.name}" from this object?`);
      if (!confirmed) {
        return;
      }
    }

    const businessId = this.selectedBusinessId();
    const mappingBusinessId = this.resolveFieldUnmapBusinessId(fieldRecord, objectId, businessId);
    this.fieldErrorMessage.set('');
    this.fieldSuccessMessage.set('');
    this.removingFieldId.set(fieldRecord.id);
    this.fieldService
      .unmapFieldFromObject(fieldRecord.id, objectId, mappingBusinessId, { businessId, objectId })
      .subscribe({
        next: (response) => {
          this.removingFieldId.set(null);
          if (!response.status) {
            this.fieldErrorMessage.set(response.message || 'Unable to unmap field.');
            return;
          }
          this.fieldSuccessMessage.set(`Field "${fieldRecord.name}" removed from object.`);
        },
        error: (error) => {
          this.removingFieldId.set(null);
          this.fieldErrorMessage.set(error?.error?.message || 'Unable to unmap field.');
        },
      });
  }

  onRecordSearch(value: string) {
    this.recordSearchTerm.set(String(value || '').trim());
    this.recordCurrentPage.set(1);
  }

  onRecordSort(field: string) {
    const activeField = this.recordSortField();
    if (activeField === field) {
      this.recordSortDirection.set(this.recordSortDirection() === 'asc' ? 'desc' : 'asc');
    } else {
      this.recordSortField.set(field);
      this.recordSortDirection.set(field === 'created_at' ? 'desc' : 'asc');
    }
    this.recordCurrentPage.set(1);
  }

  sortIndicator(field: string): string {
    if (this.recordSortField() !== field) {
      return 'fa-solid fa-sort';
    }

    return this.recordSortDirection() === 'asc'
      ? 'fa-solid fa-sort-up'
      : 'fa-solid fa-sort-down';
  }

  goToPreviousPage() {
    if (this.recordCurrentPage() <= 1 || this.isLoadingRecords()) {
      return;
    }

    this.recordCurrentPage.update((value) => value - 1);
  }

  goToNextPage() {
    if (this.recordCurrentPage() >= this.recordTotalPages() || this.isLoadingRecords()) {
      return;
    }

    this.recordCurrentPage.update((value) => value + 1);
  }

  exportRecords() {
    const objectId = this.objectIdParam();
    if (!objectId || this.isExportingRecords()) {
      return;
    }

    this.recordErrorMessage.set('');
    this.isExportingRecords.set(true);

    this.objectRecordService
      .exportRecords(objectId, {
        businessId: this.selectedBusinessId(),
        search: this.recordSearchTerm(),
        sortField: this.recordSortField(),
        sortDirection: this.recordSortDirection(),
      })
      .subscribe({
        next: (response) => {
          this.isExportingRecords.set(false);
          if (!response.status || !response.data) {
            this.recordErrorMessage.set(response.message || 'Unable to export records.');
            return;
          }

          if (typeof window === 'undefined') {
            return;
          }

          const blob = new Blob([response.data.content || ''], {
            type: response.data.mime_type || 'text/csv;charset=utf-8',
          });
          const url = window.URL.createObjectURL(blob);
          const anchor = window.document.createElement('a');
          anchor.href = url;
          anchor.download = response.data.file_name || `${this.objectHeading().toLowerCase()}_records.csv`;
          window.document.body.appendChild(anchor);
          anchor.click();
          anchor.remove();
          window.URL.revokeObjectURL(url);
        },
        error: (error) => {
          this.isExportingRecords.set(false);
          this.recordErrorMessage.set(error?.error?.message || 'Unable to export records.');
        },
      });
  }

  recordCellValue(record: CrmObjectDataRecord, field: CrmObjectDataField): string {
    const rawValue = record.values[field.id];
    if (rawValue === undefined || rawValue === null || String(rawValue).trim() === '') {
      return '—';
    }

    const fieldType = String(field.type || '').trim().toLowerCase();
    if (fieldType === 'boolean') {
      return this.parseBoolean(rawValue) ? 'Yes' : 'No';
    }

    if (fieldType === 'number') {
      const parsed = typeof rawValue === 'number' ? rawValue : Number(String(rawValue));
      if (Number.isFinite(parsed)) {
        return new Intl.NumberFormat('en-US', {
          maximumFractionDigits: 2,
        }).format(parsed);
      }
    }

    if (fieldType === 'date') {
      const formatted = this.formatDateOnly(rawValue);
      return formatted || '—';
    }

    if (fieldType === 'datetime') {
      return this.formatDate(String(rawValue));
    }

    return String(rawValue);
  }

  formatDate(value: string | null): string {
    if (!value) {
      return 'N/A';
    }

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

  private loadRecords(options: {
    objectId: string;
    businessId: string;
    page: number;
    limit: number;
    search: string;
    sortField: string;
    sortDirection: 'asc' | 'desc';
  }) {
    this.isLoadingRecords.set(true);
    this.recordErrorMessage.set('');

    this.objectRecordService
      .listRecords(options.objectId, {
        businessId: options.businessId,
        page: options.page,
        limit: options.limit,
        search: options.search,
        sortField: options.sortField,
        sortDirection: options.sortDirection,
      })
      .subscribe({
        next: (response) => {
          this.isLoadingRecords.set(false);
          if (!response.status || !response.data) {
            this.records.set([]);
            this.recordFields.set([]);
            this.recordTotal.set(0);
            this.recordTotalPages.set(1);
            this.recordErrorMessage.set(response.message || 'Unable to load records.');
            this.deferRefreshTableScrollState();
            return;
          }

          this.recordFields.set(Array.isArray(response.data.fields) ? response.data.fields : []);
          this.records.set(Array.isArray(response.data.items) ? response.data.items : []);
          this.recordTotal.set(Number(response.data.pagination?.total ?? 0));
          this.recordTotalPages.set(Math.max(1, Number(response.data.pagination?.total_pages ?? 1)));
          const currentPage = Number(response.data.pagination?.page ?? options.page);
          if (currentPage !== this.recordCurrentPage()) {
            this.recordCurrentPage.set(currentPage);
          }
          this.deferRefreshTableScrollState();
        },
        error: (error) => {
          this.isLoadingRecords.set(false);
          this.records.set([]);
          this.recordFields.set([]);
          this.recordTotal.set(0);
          this.recordTotalPages.set(1);
          this.recordErrorMessage.set(error?.error?.message || 'Unable to load records.');
          this.deferRefreshTableScrollState();
        },
      });
  }

  private loadListViews(objectId: string, businessId: string) {
    this.isLoadingListViews.set(true);
    this.listViewErrorMessage.set('');

    this.objectRecordService
      .listViews(objectId, { businessId })
      .subscribe({
        next: (response) => {
          this.isLoadingListViews.set(false);
          if (!response.status || !response.data) {
            this.listViews.set([]);
            this.selectedListViewId.set(null);
            this.listViewErrorMessage.set(response.message || 'Unable to load list views.');
            return;
          }

          const viewItems = Array.isArray(response.data.items) ? response.data.items : [];
          this.listViews.set(viewItems);

          const currentSelected = this.selectedListViewId();
          const hasCurrentSelected =
            Boolean(currentSelected) && viewItems.some((viewRecord) => viewRecord.id === currentSelected);

          const fallbackDefaultId =
            response.data.default_view_id ||
            viewItems.find((viewRecord) => viewRecord.is_default)?.id ||
            viewItems[0]?.id ||
            null;

          this.selectedListViewId.set(
            hasCurrentSelected ? (currentSelected as string) : fallbackDefaultId,
          );
          this.listViewErrorMessage.set('');
        },
        error: (error) => {
          this.isLoadingListViews.set(false);
          this.listViews.set([]);
          this.selectedListViewId.set(null);
          this.listViewErrorMessage.set(error?.error?.message || 'Unable to load list views.');
        },
      });
  }

  private parseBoolean(value: unknown): boolean {
    if (value === true || value === false) {
      return value;
    }

    const normalized = String(value || '')
      .trim()
      .toLowerCase();
    return ['1', 'true', 'yes', 'y'].includes(normalized);
  }

  private formatDateOnly(value: unknown): string {
    const parsed = new Date(String(value || ''));
    if (Number.isNaN(parsed.getTime())) {
      return '';
    }

    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: '2-digit',
      year: 'numeric',
    }).format(parsed);
  }

  private formatRouteName(value: string | null): string {
    const normalized = String(value || '')
      .replace(/[-_]+/g, ' ')
      .trim();
    return normalized || 'Object Workspace';
  }

  private toRouteSegment(value: string): string {
    const trimmed = String(value || '').trim();
    if (!trimmed) {
      return 'object';
    }
    return trimmed.replace(/\//g, '-');
  }

  private parseOptions(value: string | null | undefined): string[] {
    const normalized = String(value || '')
      .split(/[\n,]/g)
      .map((option) => option.trim())
      .filter((option) => option.length > 0)
      .map((option) => option.slice(0, 120));
    return Array.from(new Set(normalized)).slice(0, 50);
  }

  private setCreateFieldOptions(options: string[]) {
    const normalized = this.parseOptions(options.join('\n'));
    this.createFieldForm.controls.options.setValue(normalized.join('\n'));
    this.createFieldForm.controls.options.markAsDirty();
    this.createFieldForm.controls.options.markAsTouched();
  }

  private syncSortWithVisibleColumns(visibleColumns: string[]) {
    const activeSortField = this.recordSortField();
    if (activeSortField === 'created_at' || activeSortField === 'updated_at') {
      return;
    }

    if (!visibleColumns.includes(activeSortField)) {
      this.recordSortField.set('created_at');
      this.recordSortDirection.set('desc');
      this.recordCurrentPage.set(1);
    }
  }

  private setListViewAsDefault(viewId: string) {
    const objectId = this.objectIdParam();
    if (!objectId) {
      return;
    }

    this.isSavingListView.set(true);
    this.objectRecordService
      .updateListView(objectId, viewId, {
        businessId: this.selectedBusinessId(),
        isDefault: true,
      })
      .subscribe({
        next: (response) => {
          this.isSavingListView.set(false);
          if (!response.status || !response.data?.view) {
            this.listViewErrorMessage.set(response.message || 'Unable to switch list view.');
            return;
          }

          this.upsertListView(response.data.view);
          this.selectedListViewId.set(response.data.view.id);
          this.listViewErrorMessage.set('');
        },
        error: (error) => {
          this.isSavingListView.set(false);
          this.listViewErrorMessage.set(error?.error?.message || 'Unable to switch list view.');
        },
      });
  }

  private persistVisibleColumnsToSelectedView(visibleFieldIds: string[], preferenceMessage: string = '') {
    const objectId = this.objectIdParam();
    const selectedViewId = this.selectedListViewId();
    if (!objectId || !selectedViewId) {
      this.columnPreferenceMessage.set('Select a list view before changing columns.');
      return;
    }

    this.columnPreferenceMessage.set(preferenceMessage);
    this.listViewErrorMessage.set('');
    this.listViewSuccessMessage.set('');

    this.isSavingListView.set(true);
    this.objectRecordService
      .updateListView(objectId, selectedViewId, {
        businessId: this.selectedBusinessId(),
        visibleFieldIds,
      })
      .subscribe({
        next: (response) => {
          this.isSavingListView.set(false);
          if (!response.status || !response.data?.view) {
            this.listViewErrorMessage.set(response.message || 'Unable to save column visibility.');
            return;
          }

          this.upsertListView(response.data.view);
          this.listViewErrorMessage.set('');
        },
        error: (error) => {
          this.isSavingListView.set(false);
          this.listViewErrorMessage.set(error?.error?.message || 'Unable to save column visibility.');
        },
      });
  }

  private upsertListView(view: CrmObjectListView) {
    this.listViews.update((currentViews) => {
      const existingIndex = currentViews.findIndex((viewRecord) => viewRecord.id === view.id);
      const nextViews =
        existingIndex >= 0
          ? currentViews.map((viewRecord, index) => (index === existingIndex ? view : viewRecord))
          : [...currentViews, view];

      if (!view.is_default) {
        return nextViews;
      }

      return nextViews.map((viewRecord) =>
        viewRecord.id === view.id ? view : { ...viewRecord, is_default: false },
      );
    });
  }

  private areArraysEqual(left: string[], right: string[]): boolean {
    if (left.length !== right.length) {
      return false;
    }

    return left.every((value, index) => value === right[index]);
  }

  private deferRefreshTableScrollState() {
    if (typeof window === 'undefined') {
      this.refreshTableScrollState();
      return;
    }

    window.requestAnimationFrame(() => this.refreshTableScrollState());
  }

  private refreshTableScrollState() {
    const shell = this.recordsTableShellRef?.nativeElement;
    if (!shell) {
      this.resetTableScrollState();
      return;
    }

    const overflow = shell.scrollWidth - shell.clientWidth;
    this.hasHorizontalOverflow.set(overflow > 2);
    this.canScrollTableLeft.set(shell.scrollLeft > 2);
    this.canScrollTableRight.set(shell.scrollLeft < overflow - 2);
  }

  private resetTableScrollState() {
    this.hasHorizontalOverflow.set(false);
    this.canScrollTableLeft.set(false);
    this.canScrollTableRight.set(false);
  }

  private resolveFieldUnmapBusinessId(
    fieldRecord: CrmFieldRecord,
    objectId: string,
    currentBusinessId: string,
  ): string {
    const objectMappings = fieldRecord.mapped_objects.filter((mapping) => mapping.object_id === objectId);
    if (!objectMappings.length) {
      return currentBusinessId;
    }

    if (currentBusinessId !== 'default') {
      const businessScoped = objectMappings.find((mapping) => mapping.business_id === currentBusinessId);
      if (businessScoped) {
        return currentBusinessId;
      }
    }

    const globalScoped = objectMappings.find((mapping) => mapping.business_id === null);
    if (globalScoped) {
      return 'default';
    }

    return currentBusinessId;
  }

  private resetFieldForm() {
    this.createFieldForm.reset({
      name: '',
      key: '',
      type: 'text',
      description: '',
      is_required: false,
      options: '',
      status: 1,
    });
    this.fieldOptionDraft.set('');
    this.fieldOptionErrorMessage.set('');
  }
}
