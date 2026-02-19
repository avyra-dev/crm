import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CrmObjectRecord, ObjectService } from '../../../../services/object.service';
import { BusinessService } from '../../../../services/business.service';

type ObjectViewMode = 'cards' | 'table';
type ObjectStatusFilter = 'all' | 'active' | 'inactive';
type ObjectSortMode = 'recent' | 'oldest' | 'name_asc' | 'name_desc' | 'links_desc';

@Component({
  selector: 'app-dashboard-page',
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.css',
})
export class DashboardPage {
  private readonly businessService = inject(BusinessService);
  private readonly objectService = inject(ObjectService);

  readonly objects = this.objectService.objects;
  readonly isLoading = this.objectService.isLoading;
  readonly selectedBusinessId = this.businessService.selectedBusinessId;
  readonly workspaceLabel = computed(() => this.businessService.selectedBusiness()?.name ?? 'Default Workspace');
  readonly workspaceScopeLabel = computed(() =>
    this.businessService.selectedBusiness()
      ? 'Objects mapped to this business'
      : 'Reusable object library for your default workspace',
  );
  readonly activeObjects = computed(() =>
    this.objects().filter((objectRecord) => Number(objectRecord.status) === 1).length,
  );
  readonly inactiveObjects = computed(() =>
    this.objects().filter((objectRecord) => Number(objectRecord.status) !== 1).length,
  );
  readonly totalBusinessLinks = computed(() =>
    this.objects().reduce((count, objectRecord) => count + Number(objectRecord.mapped_business_count || 0), 0),
  );

  readonly statusFilterOptions: { value: ObjectStatusFilter; label: string }[] = [
    { value: 'all', label: 'All Statuses' },
    { value: 'active', label: 'Active Only' },
    { value: 'inactive', label: 'Inactive Only' },
  ];

  readonly sortOptions: { value: ObjectSortMode; label: string }[] = [
    { value: 'recent', label: 'Recently Created' },
    { value: 'oldest', label: 'Oldest Created' },
    { value: 'name_asc', label: 'Name (A-Z)' },
    { value: 'name_desc', label: 'Name (Z-A)' },
    { value: 'links_desc', label: 'Most Business Links' },
  ];

  actionErrorMessage = signal<string>('');
  deletingObjectId = signal<string | null>(null);

  viewMode = signal<ObjectViewMode>('cards');
  searchTerm = signal<string>('');
  statusFilter = signal<ObjectStatusFilter>('all');
  sortMode = signal<ObjectSortMode>('recent');

  readonly filteredObjects = computed(() => {
    let records = [...this.objects()];
    const statusFilter = this.statusFilter();
    const searchTerm = this.searchTerm().trim().toLowerCase();
    const sortMode = this.sortMode();

    if (statusFilter === 'active') {
      records = records.filter((objectRecord) => Number(objectRecord.status) === 1);
    } else if (statusFilter === 'inactive') {
      records = records.filter((objectRecord) => Number(objectRecord.status) !== 1);
    }

    if (searchTerm) {
      records = records.filter((objectRecord) => this.matchesObjectSearch(objectRecord, searchTerm));
    }

    records.sort((left, right) => this.compareObjects(left, right, sortMode));
    return records;
  });

  readonly hasActiveFilters = computed(
    () => this.searchTerm().trim().length > 0 || this.statusFilter() !== 'all' || this.sortMode() !== 'recent',
  );

  readonly filteredCount = computed(() => this.filteredObjects().length);
  readonly totalCount = computed(() => this.objects().length);

  setViewMode(mode: ObjectViewMode) {
    this.viewMode.set(mode);
  }

  onSearchInput(value: string) {
    this.searchTerm.set(String(value || ''));
  }

  onStatusFilterChange(value: string) {
    const normalized = String(value || '').trim().toLowerCase();
    if (normalized === 'active' || normalized === 'inactive' || normalized === 'all') {
      this.statusFilter.set(normalized);
    }
  }

  onSortModeChange(value: string) {
    const normalized = String(value || '').trim().toLowerCase();
    if (['recent', 'oldest', 'name_asc', 'name_desc', 'links_desc'].includes(normalized)) {
      this.sortMode.set(normalized as ObjectSortMode);
    }
  }

  clearFilters() {
    this.searchTerm.set('');
    this.statusFilter.set('all');
    this.sortMode.set('recent');
  }

  deleteObject(objectRecord: CrmObjectRecord) {
    if (this.deletingObjectId() || !objectRecord?.id) {
      return;
    }

    if (typeof window !== 'undefined') {
      const confirmed = window.confirm(
        `Delete object "${objectRecord.name}"? This will remove it from all business mappings.`,
      );
      if (!confirmed) {
        return;
      }
    }

    this.actionErrorMessage.set('');
    const businessId = this.selectedBusinessId();
    this.deletingObjectId.set(objectRecord.id);
    this.objectService.deleteObject(objectRecord.id, businessId).subscribe({
      next: (response) => {
        this.deletingObjectId.set(null);
        if (!response.status) {
          this.actionErrorMessage.set(response.message || 'Unable to delete object.');
        }
      },
      error: (error) => {
        this.deletingObjectId.set(null);
        this.actionErrorMessage.set(error?.error?.message || 'Unable to delete object.');
      },
    });
  }

  openObjectRoute(objectRecord: CrmObjectRecord): string[] {
    const routeName = this.toRouteSegment(objectRecord.name || objectRecord.key || 'object');
    return ['/objects', objectRecord.id, routeName];
  }

  addRecordRoute(objectRecord: CrmObjectRecord): string[] {
    const routeName = this.toRouteSegment(objectRecord.name || objectRecord.key || 'object');
    return ['/objects', objectRecord.id, routeName, 'new'];
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

  statusLabel(status: number): string {
    return Number(status) === 1 ? 'Active' : 'Inactive';
  }

  private matchesObjectSearch(objectRecord: CrmObjectRecord, searchTerm: string): boolean {
    const content = [
      objectRecord.name,
      objectRecord.key,
      objectRecord.description || '',
      this.statusLabel(objectRecord.status),
      String(objectRecord.mapped_business_count || 0),
    ]
      .join(' ')
      .toLowerCase();

    return content.includes(searchTerm);
  }

  private compareObjects(left: CrmObjectRecord, right: CrmObjectRecord, sortMode: ObjectSortMode): number {
    if (sortMode === 'name_asc') {
      return left.name.localeCompare(right.name, 'en', { sensitivity: 'base', numeric: true });
    }

    if (sortMode === 'name_desc') {
      return right.name.localeCompare(left.name, 'en', { sensitivity: 'base', numeric: true });
    }

    if (sortMode === 'links_desc') {
      const linksDiff = Number(right.mapped_business_count || 0) - Number(left.mapped_business_count || 0);
      if (linksDiff !== 0) {
        return linksDiff;
      }
      return left.name.localeCompare(right.name, 'en', { sensitivity: 'base', numeric: true });
    }

    const leftTime = this.toTimestamp(left.created_at);
    const rightTime = this.toTimestamp(right.created_at);

    if (sortMode === 'oldest') {
      if (leftTime !== rightTime) {
        return leftTime - rightTime;
      }
    } else {
      if (leftTime !== rightTime) {
        return rightTime - leftTime;
      }
    }

    return left.name.localeCompare(right.name, 'en', { sensitivity: 'base', numeric: true });
  }

  private toTimestamp(value: string | null): number {
    if (!value) {
      return 0;
    }

    const parsed = new Date(value);
    if (Number.isNaN(parsed.getTime())) {
      return 0;
    }

    return parsed.getTime();
  }

  private toRouteSegment(value: string): string {
    const trimmed = String(value || '').trim();
    if (!trimmed) {
      return 'object';
    }
    return trimmed.replace(/\//g, '-');
  }
}
