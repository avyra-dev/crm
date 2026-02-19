import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ObjectService } from '../../../../services/object.service';
import { BusinessService } from '../../../../services/business.service';
import * as i0 from "@angular/core";
const _c0 = () => ({ tab: "Objects" });
const _forTrack0 = ($index, $item) => $item.value;
const _forTrack1 = ($index, $item) => $item.id;
function DashboardPage_Conditional_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 14);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.actionErrorMessage());
} }
function DashboardPage_For_48_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 21);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r2 = ctx.$implicit;
    i0.ɵɵproperty("value", option_r2.value);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(option_r2.label);
} }
function DashboardPage_For_54_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 21);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r3 = ctx.$implicit;
    i0.ɵɵproperty("value", option_r3.value);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(option_r3.label);
} }
function DashboardPage_Conditional_77_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 35);
    i0.ɵɵelement(1, "i", 39);
    i0.ɵɵelementStart(2, "p");
    i0.ɵɵtext(3, "Loading objects...");
    i0.ɵɵelementEnd()();
} }
function DashboardPage_Conditional_78_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 36);
    i0.ɵɵelement(1, "i", 40);
    i0.ɵɵelementStart(2, "h3");
    i0.ɵɵtext(3, "No Objects Yet");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5, "Create your first object in settings to start building your CRM structure.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "a", 41);
    i0.ɵɵtext(7, "Create In Settings");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("queryParams", i0.ɵɵpureFunction0(1, _c0));
} }
function DashboardPage_Conditional_79_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 36);
    i0.ɵɵelement(1, "i", 42);
    i0.ɵɵelementStart(2, "h3");
    i0.ɵɵtext(3, "No Matching Objects");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5, "Try broadening filters or reset controls to view your full object library.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "button", 43);
    i0.ɵɵlistener("click", function DashboardPage_Conditional_79_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.clearFilters()); });
    i0.ɵɵtext(7, "Reset Filters");
    i0.ɵɵelementEnd()();
} }
function DashboardPage_Conditional_80_For_2_Conditional_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Deleting... ");
} }
function DashboardPage_Conditional_80_For_2_Conditional_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Delete ");
} }
function DashboardPage_Conditional_80_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article", 44)(1, "header", 45)(2, "div")(3, "h3", 46);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 47);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "span", 48);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "p", 49);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 50)(12, "span");
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "span");
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "footer", 51)(17, "a", 52);
    i0.ɵɵtext(18, "Open");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "a", 53);
    i0.ɵɵtext(20, "Add Record");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "button", 54);
    i0.ɵɵlistener("click", function DashboardPage_Conditional_80_For_2_Template_button_click_21_listener() { const objectRecord_r6 = i0.ɵɵrestoreView(_r5).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.deleteObject(objectRecord_r6)); });
    i0.ɵɵconditionalCreate(22, DashboardPage_Conditional_80_For_2_Conditional_22_Template, 1, 0)(23, DashboardPage_Conditional_80_For_2_Conditional_23_Template, 1, 0);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const objectRecord_r6 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(objectRecord_r6.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(objectRecord_r6.key);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("object-card__status--active", objectRecord_r6.status === 1);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.statusLabel(objectRecord_r6.status), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", objectRecord_r6.description || "No description added for this object yet.", " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Mapped: ", objectRecord_r6.mapped_business_count, " businesses");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Created ", ctx_r0.formatDate(objectRecord_r6.created_at));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("routerLink", ctx_r0.openObjectRoute(objectRecord_r6));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("routerLink", ctx_r0.addRecordRoute(objectRecord_r6));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r0.deletingObjectId() === objectRecord_r6.id);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.deletingObjectId() === objectRecord_r6.id ? 22 : 23);
} }
function DashboardPage_Conditional_80_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 37);
    i0.ɵɵrepeaterCreate(1, DashboardPage_Conditional_80_For_2_Template, 24, 12, "article", 44, _forTrack1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r0.filteredObjects());
} }
function DashboardPage_Conditional_81_For_18_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "p", 56);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p", 57);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "td")(7, "code");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "td")(10, "span", 48);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "td");
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "td");
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "td")(17, "div", 58)(18, "a", 59);
    i0.ɵɵtext(19, "Open");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "a", 59);
    i0.ɵɵtext(21, "Add");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "button", 60);
    i0.ɵɵlistener("click", function DashboardPage_Conditional_81_For_18_Template_button_click_22_listener() { const objectRecord_r8 = i0.ɵɵrestoreView(_r7).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.deleteObject(objectRecord_r8)); });
    i0.ɵɵtext(23, " Delete ");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const objectRecord_r8 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(objectRecord_r8.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(objectRecord_r8.description || "No description");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(objectRecord_r8.key);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("object-card__status--active", objectRecord_r8.status === 1);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.statusLabel(objectRecord_r8.status), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(objectRecord_r8.mapped_business_count);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.formatDate(objectRecord_r8.created_at));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("routerLink", ctx_r0.openObjectRoute(objectRecord_r8));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("routerLink", ctx_r0.addRecordRoute(objectRecord_r8));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r0.deletingObjectId() === objectRecord_r8.id);
} }
function DashboardPage_Conditional_81_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 38)(1, "table", 55)(2, "thead")(3, "tr")(4, "th");
    i0.ɵɵtext(5, "Object");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "th");
    i0.ɵɵtext(7, "Key");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "th");
    i0.ɵɵtext(9, "Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "th");
    i0.ɵɵtext(11, "Mapped Businesses");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "th");
    i0.ɵɵtext(13, "Created");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "th");
    i0.ɵɵtext(15, "Actions");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(16, "tbody");
    i0.ɵɵrepeaterCreate(17, DashboardPage_Conditional_81_For_18_Template, 24, 11, "tr", null, _forTrack1);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(17);
    i0.ɵɵrepeater(ctx_r0.filteredObjects());
} }
export class DashboardPage {
    businessService = inject(BusinessService);
    objectService = inject(ObjectService);
    objects = this.objectService.objects;
    isLoading = this.objectService.isLoading;
    selectedBusinessId = this.businessService.selectedBusinessId;
    workspaceLabel = computed(() => this.businessService.selectedBusiness()?.name ?? 'Default Workspace', ...(ngDevMode ? [{ debugName: "workspaceLabel" }] : []));
    workspaceScopeLabel = computed(() => this.businessService.selectedBusiness()
        ? 'Objects mapped to this business'
        : 'Reusable object library for your default workspace', ...(ngDevMode ? [{ debugName: "workspaceScopeLabel" }] : []));
    activeObjects = computed(() => this.objects().filter((objectRecord) => Number(objectRecord.status) === 1).length, ...(ngDevMode ? [{ debugName: "activeObjects" }] : []));
    inactiveObjects = computed(() => this.objects().filter((objectRecord) => Number(objectRecord.status) !== 1).length, ...(ngDevMode ? [{ debugName: "inactiveObjects" }] : []));
    totalBusinessLinks = computed(() => this.objects().reduce((count, objectRecord) => count + Number(objectRecord.mapped_business_count || 0), 0), ...(ngDevMode ? [{ debugName: "totalBusinessLinks" }] : []));
    statusFilterOptions = [
        { value: 'all', label: 'All Statuses' },
        { value: 'active', label: 'Active Only' },
        { value: 'inactive', label: 'Inactive Only' },
    ];
    sortOptions = [
        { value: 'recent', label: 'Recently Created' },
        { value: 'oldest', label: 'Oldest Created' },
        { value: 'name_asc', label: 'Name (A-Z)' },
        { value: 'name_desc', label: 'Name (Z-A)' },
        { value: 'links_desc', label: 'Most Business Links' },
    ];
    actionErrorMessage = signal('', ...(ngDevMode ? [{ debugName: "actionErrorMessage" }] : []));
    deletingObjectId = signal(null, ...(ngDevMode ? [{ debugName: "deletingObjectId" }] : []));
    viewMode = signal('cards', ...(ngDevMode ? [{ debugName: "viewMode" }] : []));
    searchTerm = signal('', ...(ngDevMode ? [{ debugName: "searchTerm" }] : []));
    statusFilter = signal('all', ...(ngDevMode ? [{ debugName: "statusFilter" }] : []));
    sortMode = signal('recent', ...(ngDevMode ? [{ debugName: "sortMode" }] : []));
    filteredObjects = computed(() => {
        let records = [...this.objects()];
        const statusFilter = this.statusFilter();
        const searchTerm = this.searchTerm().trim().toLowerCase();
        const sortMode = this.sortMode();
        if (statusFilter === 'active') {
            records = records.filter((objectRecord) => Number(objectRecord.status) === 1);
        }
        else if (statusFilter === 'inactive') {
            records = records.filter((objectRecord) => Number(objectRecord.status) !== 1);
        }
        if (searchTerm) {
            records = records.filter((objectRecord) => this.matchesObjectSearch(objectRecord, searchTerm));
        }
        records.sort((left, right) => this.compareObjects(left, right, sortMode));
        return records;
    }, ...(ngDevMode ? [{ debugName: "filteredObjects" }] : []));
    hasActiveFilters = computed(() => this.searchTerm().trim().length > 0 || this.statusFilter() !== 'all' || this.sortMode() !== 'recent', ...(ngDevMode ? [{ debugName: "hasActiveFilters" }] : []));
    filteredCount = computed(() => this.filteredObjects().length, ...(ngDevMode ? [{ debugName: "filteredCount" }] : []));
    totalCount = computed(() => this.objects().length, ...(ngDevMode ? [{ debugName: "totalCount" }] : []));
    setViewMode(mode) {
        this.viewMode.set(mode);
    }
    onSearchInput(value) {
        this.searchTerm.set(String(value || ''));
    }
    onStatusFilterChange(value) {
        const normalized = String(value || '').trim().toLowerCase();
        if (normalized === 'active' || normalized === 'inactive' || normalized === 'all') {
            this.statusFilter.set(normalized);
        }
    }
    onSortModeChange(value) {
        const normalized = String(value || '').trim().toLowerCase();
        if (['recent', 'oldest', 'name_asc', 'name_desc', 'links_desc'].includes(normalized)) {
            this.sortMode.set(normalized);
        }
    }
    clearFilters() {
        this.searchTerm.set('');
        this.statusFilter.set('all');
        this.sortMode.set('recent');
    }
    deleteObject(objectRecord) {
        if (this.deletingObjectId() || !objectRecord?.id) {
            return;
        }
        if (typeof window !== 'undefined') {
            const confirmed = window.confirm(`Delete object "${objectRecord.name}"? This will remove it from all business mappings.`);
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
    openObjectRoute(objectRecord) {
        const routeName = this.toRouteSegment(objectRecord.name || objectRecord.key || 'object');
        return ['/objects', objectRecord.id, routeName];
    }
    addRecordRoute(objectRecord) {
        const routeName = this.toRouteSegment(objectRecord.name || objectRecord.key || 'object');
        return ['/objects', objectRecord.id, routeName, 'new'];
    }
    formatDate(value) {
        if (!value)
            return 'N/A';
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
    statusLabel(status) {
        return Number(status) === 1 ? 'Active' : 'Inactive';
    }
    matchesObjectSearch(objectRecord, searchTerm) {
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
    compareObjects(left, right, sortMode) {
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
        }
        else {
            if (leftTime !== rightTime) {
                return rightTime - leftTime;
            }
        }
        return left.name.localeCompare(right.name, 'en', { sensitivity: 'base', numeric: true });
    }
    toTimestamp(value) {
        if (!value) {
            return 0;
        }
        const parsed = new Date(value);
        if (Number.isNaN(parsed.getTime())) {
            return 0;
        }
        return parsed.getTime();
    }
    toRouteSegment(value) {
        const trimmed = String(value || '').trim();
        if (!trimmed) {
            return 'object';
        }
        return trimmed.replace(/\//g, '-');
    }
    static ɵfac = function DashboardPage_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DashboardPage)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DashboardPage, selectors: [["app-dashboard-page"]], decls: 82, vars: 21, consts: [[1, "objects-page"], [1, "objects-shell"], [1, "objects-header"], [1, "objects-header__kicker"], [1, "objects-header__title"], [1, "objects-header__subtitle"], [1, "objects-header__actions"], ["routerLink", "/settings", 1, "objects-create-link", 3, "queryParams"], [1, "fa-solid", "fa-gear"], [1, "objects-metrics"], [1, "metric-card"], [1, "metric-card__label"], [1, "metric-card__value", "metric-card__value--text"], [1, "metric-card__value"], [1, "objects-banner", "objects-banner--error"], ["aria-label", "Object controls", 1, "objects-toolbar"], [1, "objects-control", "objects-control--search"], [1, "fa-solid", "fa-magnifying-glass"], ["type", "text", "placeholder", "Search by name, key, description", 3, "input", "value"], [1, "objects-control"], [3, "change", "value"], [3, "value"], ["role", "group", "aria-label", "View mode", 1, "objects-view-toggle"], ["type", "button", 3, "click"], [1, "fa-solid", "fa-grip"], [1, "fa-solid", "fa-table"], ["type", "button", 1, "objects-clear-btn", 3, "click", "disabled"], [1, "fa-solid", "fa-rotate-left"], [1, "objects-panel"], [1, "objects-panel__header"], [1, "objects-panel__title"], [1, "objects-panel__subtitle"], [1, "objects-panel__badges"], [1, "objects-badge"], [1, "objects-badge", "objects-badge--muted"], [1, "objects-state"], [1, "objects-state", "objects-state--empty"], [1, "objects-grid"], [1, "objects-table-shell"], [1, "fa-solid", "fa-spinner", "fa-spin"], [1, "fa-regular", "fa-square-plus"], ["routerLink", "/settings", 1, "objects-state__btn", 3, "queryParams"], [1, "fa-solid", "fa-filter-circle-xmark"], ["type", "button", 1, "objects-state__btn", 3, "click"], [1, "object-card"], [1, "object-card__header"], [1, "object-card__title"], [1, "object-card__key"], [1, "object-card__status"], [1, "object-card__description"], [1, "object-card__meta"], [1, "object-card__actions"], [1, "object-card__open", 3, "routerLink"], [1, "object-card__add", 3, "routerLink"], ["type", "button", 1, "object-card__delete", 3, "click", "disabled"], [1, "objects-table"], [1, "objects-table__name"], [1, "objects-table__desc"], [1, "objects-table__actions"], [3, "routerLink"], ["type", "button", 3, "click", "disabled"]], template: function DashboardPage_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0)(1, "div", 1)(2, "header", 2)(3, "div")(4, "p", 3);
            i0.ɵɵtext(5, "CRM Objects");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "h1", 4);
            i0.ɵɵtext(7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "p", 5);
            i0.ɵɵtext(9, " Professional object management for schema, records, and business mapping. ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(10, "div", 6)(11, "a", 7);
            i0.ɵɵelement(12, "i", 8);
            i0.ɵɵtext(13, " Manage Objects ");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(14, "div", 9)(15, "article", 10)(16, "p", 11);
            i0.ɵɵtext(17, "Scope");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "p", 12);
            i0.ɵɵtext(19);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(20, "article", 10)(21, "p", 11);
            i0.ɵɵtext(22, "Total Objects");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "p", 13);
            i0.ɵɵtext(24);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(25, "article", 10)(26, "p", 11);
            i0.ɵɵtext(27, "Active");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "p", 13);
            i0.ɵɵtext(29);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(30, "article", 10)(31, "p", 11);
            i0.ɵɵtext(32, "Business Links");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(33, "p", 13);
            i0.ɵɵtext(34);
            i0.ɵɵelementEnd()()();
            i0.ɵɵconditionalCreate(35, DashboardPage_Conditional_35_Template, 2, 1, "p", 14);
            i0.ɵɵelementStart(36, "section", 15)(37, "label", 16)(38, "span");
            i0.ɵɵtext(39, "Search");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(40, "div");
            i0.ɵɵelement(41, "i", 17);
            i0.ɵɵelementStart(42, "input", 18);
            i0.ɵɵlistener("input", function DashboardPage_Template_input_input_42_listener($event) { return ctx.onSearchInput($event.target.value); });
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(43, "label", 19)(44, "span");
            i0.ɵɵtext(45, "Status");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(46, "select", 20);
            i0.ɵɵlistener("change", function DashboardPage_Template_select_change_46_listener($event) { return ctx.onStatusFilterChange($event.target.value); });
            i0.ɵɵrepeaterCreate(47, DashboardPage_For_48_Template, 2, 2, "option", 21, _forTrack0);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(49, "label", 19)(50, "span");
            i0.ɵɵtext(51, "Sort");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(52, "select", 20);
            i0.ɵɵlistener("change", function DashboardPage_Template_select_change_52_listener($event) { return ctx.onSortModeChange($event.target.value); });
            i0.ɵɵrepeaterCreate(53, DashboardPage_For_54_Template, 2, 2, "option", 21, _forTrack0);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(55, "div", 22)(56, "button", 23);
            i0.ɵɵlistener("click", function DashboardPage_Template_button_click_56_listener() { return ctx.setViewMode("cards"); });
            i0.ɵɵelement(57, "i", 24);
            i0.ɵɵtext(58, " Cards ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(59, "button", 23);
            i0.ɵɵlistener("click", function DashboardPage_Template_button_click_59_listener() { return ctx.setViewMode("table"); });
            i0.ɵɵelement(60, "i", 25);
            i0.ɵɵtext(61, " Table ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(62, "button", 26);
            i0.ɵɵlistener("click", function DashboardPage_Template_button_click_62_listener() { return ctx.clearFilters(); });
            i0.ɵɵelement(63, "i", 27);
            i0.ɵɵtext(64, " Reset ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(65, "section", 28)(66, "header", 29)(67, "div")(68, "h2", 30);
            i0.ɵɵtext(69, "Object Library");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(70, "p", 31);
            i0.ɵɵtext(71);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(72, "div", 32)(73, "span", 33);
            i0.ɵɵtext(74);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(75, "span", 34);
            i0.ɵɵtext(76);
            i0.ɵɵelementEnd()()();
            i0.ɵɵconditionalCreate(77, DashboardPage_Conditional_77_Template, 4, 0, "div", 35)(78, DashboardPage_Conditional_78_Template, 8, 2, "div", 36)(79, DashboardPage_Conditional_79_Template, 8, 0, "div", 36)(80, DashboardPage_Conditional_80_Template, 3, 0, "div", 37)(81, DashboardPage_Conditional_81_Template, 19, 0, "div", 38);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate(ctx.workspaceLabel());
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("queryParams", i0.ɵɵpureFunction0(20, _c0));
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate(ctx.workspaceScopeLabel());
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.totalCount());
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.activeObjects());
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.totalBusinessLinks());
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.actionErrorMessage() ? 35 : -1);
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("value", ctx.searchTerm());
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("value", ctx.statusFilter());
            i0.ɵɵadvance();
            i0.ɵɵrepeater(ctx.statusFilterOptions);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("value", ctx.sortMode());
            i0.ɵɵadvance();
            i0.ɵɵrepeater(ctx.sortOptions);
            i0.ɵɵadvance(3);
            i0.ɵɵclassProp("objects-view-toggle__btn--active", ctx.viewMode() === "cards");
            i0.ɵɵadvance(3);
            i0.ɵɵclassProp("objects-view-toggle__btn--active", ctx.viewMode() === "table");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("disabled", !ctx.hasActiveFilters());
            i0.ɵɵadvance(9);
            i0.ɵɵtextInterpolate2(" Showing ", ctx.filteredCount(), " of ", ctx.totalCount(), " objects ");
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1("Active: ", ctx.activeObjects());
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1("Inactive: ", ctx.inactiveObjects());
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.isLoading() ? 77 : !ctx.objects().length ? 78 : !ctx.filteredObjects().length ? 79 : ctx.viewMode() === "cards" ? 80 : 81);
        } }, dependencies: [CommonModule, RouterLink], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.objects-page[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 86px);\n  padding: 14px 10px 24px;\n}\n\n.objects-shell[_ngcontent-%COMP%] {\n  max-width: 1260px;\n  margin: 0 auto;\n  border-radius: 24px;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 58%, white);\n  background:\n    radial-gradient(circle at top right, color-mix(in srgb, var(--theme-primary) 12%, transparent), transparent 42%),\n    color-mix(in srgb, var(--theme-bg-surface) 96%, transparent);\n  box-shadow: 0 24px 70px rgba(15, 23, 42, 0.11);\n  padding: 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n\n.objects-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 14px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid color-mix(in srgb, var(--theme-border) 50%, white);\n}\n\n.objects-header__kicker[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: 0.12em;\n  font-weight: 700;\n  color: var(--theme-text-muted);\n}\n\n.objects-header__title[_ngcontent-%COMP%] {\n  margin: 5px 0 0;\n  font-size: 30px;\n  line-height: 1.1;\n  letter-spacing: -0.02em;\n  color: var(--theme-text-primary);\n}\n\n.objects-header__subtitle[_ngcontent-%COMP%] {\n  margin: 7px 0 0;\n  font-size: 13px;\n  color: var(--theme-text-muted);\n}\n\n.objects-header__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n\n.objects-create-link[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 11px;\n  padding: 11px 14px;\n  min-height: 42px;\n  font-size: 12px;\n  font-weight: 700;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  color: var(--theme-primary-contrast);\n  background: linear-gradient(120deg, var(--theme-primary), var(--theme-accent-end));\n  text-decoration: none;\n}\n\n.objects-metrics[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 10px;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n}\n\n.metric-card[_ngcontent-%COMP%] {\n  border-radius: 14px;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 58%, white);\n  background: var(--theme-bg-surface);\n  padding: 11px 12px;\n}\n\n.metric-card__label[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--theme-text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\n\n.metric-card__value[_ngcontent-%COMP%] {\n  margin: 7px 0 0;\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--theme-text-primary);\n}\n\n.metric-card__value--text[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  line-height: 1.45;\n}\n\n.objects-banner[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 10px 12px;\n  border-radius: 10px;\n  font-size: 13px;\n  font-weight: 600;\n}\n\n.objects-banner--error[_ngcontent-%COMP%] {\n  color: var(--theme-danger);\n  background: color-mix(in srgb, var(--theme-danger) 12%, white);\n}\n\n.objects-toolbar[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 10px;\n  grid-template-columns: minmax(260px, 1.5fr) minmax(140px, 0.7fr) minmax(170px, 0.8fr) auto auto;\n  align-items: end;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 55%, white);\n  background: color-mix(in srgb, var(--theme-bg-surface) 98%, transparent);\n  border-radius: 14px;\n  padding: 10px;\n}\n\n.objects-control[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n\n.objects-control[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  color: var(--theme-text-muted);\n}\n\n.objects-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.objects-control[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  border-radius: 9px;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 62%, white);\n  background: var(--theme-bg-surface);\n  color: var(--theme-text-primary);\n  min-height: 36px;\n  padding: 0 10px;\n  font-size: 12px;\n}\n\n.objects-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus-visible, \n.objects-control[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus-visible {\n  outline: none;\n  border-color: color-mix(in srgb, var(--theme-primary) 48%, white);\n  box-shadow: 0 0 0 3px color-mix(in srgb, var(--theme-primary) 16%, transparent);\n}\n\n.objects-control--search[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  border-radius: 9px;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 62%, white);\n  background: var(--theme-bg-surface);\n  min-height: 36px;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 0 10px;\n}\n\n.objects-control--search[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--theme-text-muted);\n}\n\n.objects-control--search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  min-height: 0;\n  padding: 0;\n  width: 100%;\n}\n\n.objects-control--search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus-visible {\n  box-shadow: none;\n}\n\n.objects-view-toggle[_ngcontent-%COMP%] {\n  display: inline-flex;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 60%, white);\n  border-radius: 10px;\n  overflow: hidden;\n  min-height: 36px;\n}\n\n.objects-view-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: none;\n  background: var(--theme-bg-surface);\n  color: var(--theme-text-secondary);\n  font-size: 12px;\n  font-weight: 700;\n  min-width: 88px;\n  padding: 0 12px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  cursor: pointer;\n}\n\n.objects-view-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]    + button[_ngcontent-%COMP%] {\n  border-left: 1px solid color-mix(in srgb, var(--theme-border) 60%, white);\n}\n\n.objects-view-toggle__btn--active[_ngcontent-%COMP%] {\n  color: var(--theme-primary);\n  background: color-mix(in srgb, var(--theme-primary) 11%, white) !important;\n}\n\n.objects-clear-btn[_ngcontent-%COMP%] {\n  border: 1px solid color-mix(in srgb, var(--theme-border) 60%, white);\n  border-radius: 10px;\n  background: var(--theme-bg-surface);\n  color: var(--theme-text-secondary);\n  min-height: 36px;\n  padding: 0 12px;\n  font-size: 12px;\n  font-weight: 700;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n}\n\n.objects-clear-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n.objects-panel[_ngcontent-%COMP%] {\n  border-radius: 18px;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 55%, white);\n  background: color-mix(in srgb, var(--theme-bg-surface) 98%, transparent);\n  padding: 14px;\n  min-height: 380px;\n}\n\n.objects-panel__header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 10px;\n  padding-bottom: 12px;\n  border-bottom: 1px solid color-mix(in srgb, var(--theme-border) 50%, white);\n}\n\n.objects-panel__title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 17px;\n  color: var(--theme-text-primary);\n}\n\n.objects-panel__subtitle[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  font-size: 12px;\n  color: var(--theme-text-muted);\n}\n\n.objects-panel__badges[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  flex-wrap: wrap;\n}\n\n.objects-badge[_ngcontent-%COMP%] {\n  border-radius: 999px;\n  border: 1px solid color-mix(in srgb, var(--theme-success) 45%, white);\n  background: color-mix(in srgb, var(--theme-success) 11%, white);\n  color: var(--theme-success);\n  font-size: 10px;\n  font-weight: 700;\n  padding: 4px 8px;\n}\n\n.objects-badge--muted[_ngcontent-%COMP%] {\n  border-color: color-mix(in srgb, var(--theme-border) 64%, white);\n  background: var(--theme-bg-surface);\n  color: var(--theme-text-secondary);\n}\n\n.objects-state[_ngcontent-%COMP%] {\n  min-height: 260px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  gap: 9px;\n  color: var(--theme-text-secondary);\n}\n\n.objects-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n\n.objects-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 20px;\n  color: var(--theme-text-primary);\n}\n\n.objects-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  max-width: 420px;\n}\n\n.objects-state--empty[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--theme-primary);\n}\n\n.objects-state__btn[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  border: none;\n  border-radius: 9px;\n  padding: 8px 11px;\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--theme-primary-contrast);\n  background: linear-gradient(120deg, var(--theme-primary), var(--theme-accent-end));\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.objects-grid[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  display: grid;\n  gap: 12px;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n}\n\n.object-card[_ngcontent-%COMP%] {\n  border-radius: 14px;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 60%, white);\n  background: var(--theme-bg-surface);\n  padding: 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.object-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 10px;\n}\n\n.object-card__title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--theme-text-primary);\n}\n\n.object-card__key[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  font-size: 11px;\n  color: var(--theme-text-muted);\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;\n}\n\n.object-card__status[_ngcontent-%COMP%] {\n  border-radius: 999px;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 63%, white);\n  background: var(--theme-bg-surface);\n  color: var(--theme-text-secondary);\n  font-size: 10px;\n  font-weight: 700;\n  padding: 4px 8px;\n}\n\n.object-card__status--active[_ngcontent-%COMP%] {\n  border-color: color-mix(in srgb, var(--theme-success) 45%, white);\n  background: color-mix(in srgb, var(--theme-success) 11%, white);\n  color: var(--theme-success);\n}\n\n.object-card__description[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12px;\n  line-height: 1.5;\n  color: var(--theme-text-secondary);\n  min-height: 38px;\n}\n\n.object-card__meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 7px;\n}\n\n.object-card__meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  color: var(--theme-text-muted);\n  border: 1px solid color-mix(in srgb, var(--theme-border) 65%, white);\n  border-radius: 999px;\n  padding: 3px 8px;\n}\n\n.object-card__actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n\n.object-card__open[_ngcontent-%COMP%], \n.object-card__add[_ngcontent-%COMP%], \n.object-card__delete[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  padding: 6px 9px;\n  font-size: 11px;\n  font-weight: 700;\n  text-decoration: none;\n}\n\n.object-card__open[_ngcontent-%COMP%] {\n  border: 1px solid color-mix(in srgb, var(--theme-primary) 42%, white);\n  color: var(--theme-primary);\n  background: color-mix(in srgb, var(--theme-primary) 8%, white);\n}\n\n.object-card__add[_ngcontent-%COMP%] {\n  border: 1px solid color-mix(in srgb, var(--theme-success) 45%, white);\n  color: var(--theme-success);\n  background: color-mix(in srgb, var(--theme-success) 10%, white);\n}\n\n.object-card__delete[_ngcontent-%COMP%] {\n  border: 1px solid color-mix(in srgb, var(--theme-danger) 45%, white);\n  color: var(--theme-danger);\n  background: color-mix(in srgb, var(--theme-danger) 8%, white);\n  cursor: pointer;\n}\n\n.object-card__delete[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n\n.objects-table-shell[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 58%, white);\n  border-radius: 11px;\n  overflow: auto;\n  background: var(--theme-bg-surface);\n}\n\n.objects-table[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 860px;\n  border-collapse: collapse;\n}\n\n.objects-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.objects-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom: 1px solid color-mix(in srgb, var(--theme-border) 55%, white);\n  padding: 10px;\n  text-align: left;\n  font-size: 12px;\n  color: var(--theme-text-secondary);\n  vertical-align: top;\n}\n\n.objects-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  font-weight: 700;\n  color: var(--theme-text-muted);\n  background: color-mix(in srgb, var(--theme-bg-surface-soft) 90%, white);\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\n.objects-table[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  color: var(--theme-text-primary);\n  font-size: 11px;\n}\n\n.objects-table__name[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  color: var(--theme-text-primary);\n  font-weight: 700;\n}\n\n.objects-table__desc[_ngcontent-%COMP%] {\n  margin: 5px 0 0;\n  font-size: 11px;\n  color: var(--theme-text-muted);\n}\n\n.objects-table__actions[_ngcontent-%COMP%] {\n  display: inline-flex;\n  gap: 8px;\n  align-items: center;\n}\n\n.objects-table__actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], \n.objects-table__actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 62%, white);\n  background: var(--theme-bg-surface);\n  color: var(--theme-text-secondary);\n  font-size: 11px;\n  font-weight: 700;\n  min-height: 30px;\n  padding: 0 8px;\n  display: inline-flex;\n  align-items: center;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.objects-table__actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, \n.objects-table__actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  border-color: color-mix(in srgb, var(--theme-primary) 45%, white);\n  color: var(--theme-primary);\n}\n\n.objects-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: color-mix(in srgb, var(--theme-primary) 6%, white);\n}\n\n@media (max-width: 1120px) {\n  .objects-toolbar[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n\n  .objects-metrics[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n\n@media (max-width: 820px) {\n  .objects-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .objects-header__title[_ngcontent-%COMP%] {\n    font-size: 25px;\n  }\n\n  .objects-toolbar[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .objects-view-toggle[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .objects-view-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n\n  .objects-panel__header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n\n@media (max-width: 620px) {\n  .objects-page[_ngcontent-%COMP%] {\n    padding: 10px 6px 18px;\n  }\n\n  .objects-shell[_ngcontent-%COMP%] {\n    border-radius: 16px;\n    padding: 12px;\n  }\n\n  .objects-metrics[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .objects-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DashboardPage, [{
        type: Component,
        args: [{ selector: 'app-dashboard-page', imports: [CommonModule, RouterLink], template: "<section class=\"objects-page\">\n  <div class=\"objects-shell\">\n    <header class=\"objects-header\">\n      <div>\n        <p class=\"objects-header__kicker\">CRM Objects</p>\n        <h1 class=\"objects-header__title\">{{ workspaceLabel() }}</h1>\n        <p class=\"objects-header__subtitle\">\n          Professional object management for schema, records, and business mapping.\n        </p>\n      </div>\n\n      <div class=\"objects-header__actions\">\n        <a routerLink=\"/settings\" [queryParams]=\"{ tab: 'Objects' }\" class=\"objects-create-link\">\n          <i class=\"fa-solid fa-gear\"></i>\n          Manage Objects\n        </a>\n      </div>\n    </header>\n\n    <div class=\"objects-metrics\">\n      <article class=\"metric-card\">\n        <p class=\"metric-card__label\">Scope</p>\n        <p class=\"metric-card__value metric-card__value--text\">{{ workspaceScopeLabel() }}</p>\n      </article>\n      <article class=\"metric-card\">\n        <p class=\"metric-card__label\">Total Objects</p>\n        <p class=\"metric-card__value\">{{ totalCount() }}</p>\n      </article>\n      <article class=\"metric-card\">\n        <p class=\"metric-card__label\">Active</p>\n        <p class=\"metric-card__value\">{{ activeObjects() }}</p>\n      </article>\n      <article class=\"metric-card\">\n        <p class=\"metric-card__label\">Business Links</p>\n        <p class=\"metric-card__value\">{{ totalBusinessLinks() }}</p>\n      </article>\n    </div>\n\n    @if (actionErrorMessage()) {\n    <p class=\"objects-banner objects-banner--error\">{{ actionErrorMessage() }}</p>\n    }\n\n    <section class=\"objects-toolbar\" aria-label=\"Object controls\">\n      <label class=\"objects-control objects-control--search\">\n        <span>Search</span>\n        <div>\n          <i class=\"fa-solid fa-magnifying-glass\"></i>\n          <input type=\"text\" [value]=\"searchTerm()\" (input)=\"onSearchInput(($any($event.target).value))\"\n            placeholder=\"Search by name, key, description\" />\n        </div>\n      </label>\n\n      <label class=\"objects-control\">\n        <span>Status</span>\n        <select [value]=\"statusFilter()\" (change)=\"onStatusFilterChange(($any($event.target).value))\">\n          @for (option of statusFilterOptions; track option.value) {\n          <option [value]=\"option.value\">{{ option.label }}</option>\n          }\n        </select>\n      </label>\n\n      <label class=\"objects-control\">\n        <span>Sort</span>\n        <select [value]=\"sortMode()\" (change)=\"onSortModeChange(($any($event.target).value))\">\n          @for (option of sortOptions; track option.value) {\n          <option [value]=\"option.value\">{{ option.label }}</option>\n          }\n        </select>\n      </label>\n\n      <div class=\"objects-view-toggle\" role=\"group\" aria-label=\"View mode\">\n        <button type=\"button\" [class.objects-view-toggle__btn--active]=\"viewMode() === 'cards'\"\n          (click)=\"setViewMode('cards')\">\n          <i class=\"fa-solid fa-grip\"></i>\n          Cards\n        </button>\n        <button type=\"button\" [class.objects-view-toggle__btn--active]=\"viewMode() === 'table'\"\n          (click)=\"setViewMode('table')\">\n          <i class=\"fa-solid fa-table\"></i>\n          Table\n        </button>\n      </div>\n\n      <button type=\"button\" class=\"objects-clear-btn\" [disabled]=\"!hasActiveFilters()\" (click)=\"clearFilters()\">\n        <i class=\"fa-solid fa-rotate-left\"></i>\n        Reset\n      </button>\n    </section>\n\n    <section class=\"objects-panel\">\n      <header class=\"objects-panel__header\">\n        <div>\n          <h2 class=\"objects-panel__title\">Object Library</h2>\n          <p class=\"objects-panel__subtitle\">\n            Showing {{ filteredCount() }} of {{ totalCount() }} objects\n          </p>\n        </div>\n\n        <div class=\"objects-panel__badges\">\n          <span class=\"objects-badge\">Active: {{ activeObjects() }}</span>\n          <span class=\"objects-badge objects-badge--muted\">Inactive: {{ inactiveObjects() }}</span>\n        </div>\n      </header>\n\n      @if (isLoading()) {\n      <div class=\"objects-state\">\n        <i class=\"fa-solid fa-spinner fa-spin\"></i>\n        <p>Loading objects...</p>\n      </div>\n      } @else if (!objects().length) {\n      <div class=\"objects-state objects-state--empty\">\n        <i class=\"fa-regular fa-square-plus\"></i>\n        <h3>No Objects Yet</h3>\n        <p>Create your first object in settings to start building your CRM structure.</p>\n        <a routerLink=\"/settings\" [queryParams]=\"{ tab: 'Objects' }\" class=\"objects-state__btn\">Create In Settings</a>\n      </div>\n      } @else if (!filteredObjects().length) {\n      <div class=\"objects-state objects-state--empty\">\n        <i class=\"fa-solid fa-filter-circle-xmark\"></i>\n        <h3>No Matching Objects</h3>\n        <p>Try broadening filters or reset controls to view your full object library.</p>\n        <button type=\"button\" class=\"objects-state__btn\" (click)=\"clearFilters()\">Reset Filters</button>\n      </div>\n      } @else if (viewMode() === 'cards') {\n      <div class=\"objects-grid\">\n        @for (objectRecord of filteredObjects(); track objectRecord.id) {\n        <article class=\"object-card\">\n          <header class=\"object-card__header\">\n            <div>\n              <h3 class=\"object-card__title\">{{ objectRecord.name }}</h3>\n              <p class=\"object-card__key\">{{ objectRecord.key }}</p>\n            </div>\n\n            <span class=\"object-card__status\" [class.object-card__status--active]=\"objectRecord.status === 1\">\n              {{ statusLabel(objectRecord.status) }}\n            </span>\n          </header>\n\n          <p class=\"object-card__description\">\n            {{ objectRecord.description || 'No description added for this object yet.' }}\n          </p>\n\n          <div class=\"object-card__meta\">\n            <span>Mapped: {{ objectRecord.mapped_business_count }} businesses</span>\n            <span>Created {{ formatDate(objectRecord.created_at) }}</span>\n          </div>\n\n          <footer class=\"object-card__actions\">\n            <a [routerLink]=\"openObjectRoute(objectRecord)\" class=\"object-card__open\">Open</a>\n            <a [routerLink]=\"addRecordRoute(objectRecord)\" class=\"object-card__add\">Add Record</a>\n            <button type=\"button\" class=\"object-card__delete\" [disabled]=\"deletingObjectId() === objectRecord.id\"\n              (click)=\"deleteObject(objectRecord)\">\n              @if (deletingObjectId() === objectRecord.id) {\n              Deleting...\n              } @else {\n              Delete\n              }\n            </button>\n          </footer>\n        </article>\n        }\n      </div>\n      } @else {\n      <div class=\"objects-table-shell\">\n        <table class=\"objects-table\">\n          <thead>\n            <tr>\n              <th>Object</th>\n              <th>Key</th>\n              <th>Status</th>\n              <th>Mapped Businesses</th>\n              <th>Created</th>\n              <th>Actions</th>\n            </tr>\n          </thead>\n          <tbody>\n            @for (objectRecord of filteredObjects(); track objectRecord.id) {\n            <tr>\n              <td>\n                <p class=\"objects-table__name\">{{ objectRecord.name }}</p>\n                <p class=\"objects-table__desc\">{{ objectRecord.description || 'No description' }}</p>\n              </td>\n              <td><code>{{ objectRecord.key }}</code></td>\n              <td>\n                <span class=\"object-card__status\" [class.object-card__status--active]=\"objectRecord.status === 1\">\n                  {{ statusLabel(objectRecord.status) }}\n                </span>\n              </td>\n              <td>{{ objectRecord.mapped_business_count }}</td>\n              <td>{{ formatDate(objectRecord.created_at) }}</td>\n              <td>\n                <div class=\"objects-table__actions\">\n                  <a [routerLink]=\"openObjectRoute(objectRecord)\">Open</a>\n                  <a [routerLink]=\"addRecordRoute(objectRecord)\">Add</a>\n                  <button type=\"button\" [disabled]=\"deletingObjectId() === objectRecord.id\"\n                    (click)=\"deleteObject(objectRecord)\">\n                    Delete\n                  </button>\n                </div>\n              </td>\n            </tr>\n            }\n          </tbody>\n        </table>\n      </div>\n      }\n    </section>\n  </div>\n</section>\n", styles: [":host {\n  display: block;\n}\n\n.objects-page {\n  min-height: calc(100vh - 86px);\n  padding: 14px 10px 24px;\n}\n\n.objects-shell {\n  max-width: 1260px;\n  margin: 0 auto;\n  border-radius: 24px;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 58%, white);\n  background:\n    radial-gradient(circle at top right, color-mix(in srgb, var(--theme-primary) 12%, transparent), transparent 42%),\n    color-mix(in srgb, var(--theme-bg-surface) 96%, transparent);\n  box-shadow: 0 24px 70px rgba(15, 23, 42, 0.11);\n  padding: 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n\n.objects-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 14px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid color-mix(in srgb, var(--theme-border) 50%, white);\n}\n\n.objects-header__kicker {\n  margin: 0;\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: 0.12em;\n  font-weight: 700;\n  color: var(--theme-text-muted);\n}\n\n.objects-header__title {\n  margin: 5px 0 0;\n  font-size: 30px;\n  line-height: 1.1;\n  letter-spacing: -0.02em;\n  color: var(--theme-text-primary);\n}\n\n.objects-header__subtitle {\n  margin: 7px 0 0;\n  font-size: 13px;\n  color: var(--theme-text-muted);\n}\n\n.objects-header__actions {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n\n.objects-create-link {\n  border: none;\n  border-radius: 11px;\n  padding: 11px 14px;\n  min-height: 42px;\n  font-size: 12px;\n  font-weight: 700;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  color: var(--theme-primary-contrast);\n  background: linear-gradient(120deg, var(--theme-primary), var(--theme-accent-end));\n  text-decoration: none;\n}\n\n.objects-metrics {\n  display: grid;\n  gap: 10px;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n}\n\n.metric-card {\n  border-radius: 14px;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 58%, white);\n  background: var(--theme-bg-surface);\n  padding: 11px 12px;\n}\n\n.metric-card__label {\n  margin: 0;\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--theme-text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\n\n.metric-card__value {\n  margin: 7px 0 0;\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--theme-text-primary);\n}\n\n.metric-card__value--text {\n  font-size: 13px;\n  font-weight: 600;\n  line-height: 1.45;\n}\n\n.objects-banner {\n  margin: 0;\n  padding: 10px 12px;\n  border-radius: 10px;\n  font-size: 13px;\n  font-weight: 600;\n}\n\n.objects-banner--error {\n  color: var(--theme-danger);\n  background: color-mix(in srgb, var(--theme-danger) 12%, white);\n}\n\n.objects-toolbar {\n  display: grid;\n  gap: 10px;\n  grid-template-columns: minmax(260px, 1.5fr) minmax(140px, 0.7fr) minmax(170px, 0.8fr) auto auto;\n  align-items: end;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 55%, white);\n  background: color-mix(in srgb, var(--theme-bg-surface) 98%, transparent);\n  border-radius: 14px;\n  padding: 10px;\n}\n\n.objects-control {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n\n.objects-control > span {\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  color: var(--theme-text-muted);\n}\n\n.objects-control input,\n.objects-control select {\n  border-radius: 9px;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 62%, white);\n  background: var(--theme-bg-surface);\n  color: var(--theme-text-primary);\n  min-height: 36px;\n  padding: 0 10px;\n  font-size: 12px;\n}\n\n.objects-control input:focus-visible,\n.objects-control select:focus-visible {\n  outline: none;\n  border-color: color-mix(in srgb, var(--theme-primary) 48%, white);\n  box-shadow: 0 0 0 3px color-mix(in srgb, var(--theme-primary) 16%, transparent);\n}\n\n.objects-control--search div {\n  border-radius: 9px;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 62%, white);\n  background: var(--theme-bg-surface);\n  min-height: 36px;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 0 10px;\n}\n\n.objects-control--search i {\n  font-size: 11px;\n  color: var(--theme-text-muted);\n}\n\n.objects-control--search input {\n  border: none;\n  background: transparent;\n  min-height: 0;\n  padding: 0;\n  width: 100%;\n}\n\n.objects-control--search input:focus-visible {\n  box-shadow: none;\n}\n\n.objects-view-toggle {\n  display: inline-flex;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 60%, white);\n  border-radius: 10px;\n  overflow: hidden;\n  min-height: 36px;\n}\n\n.objects-view-toggle button {\n  border: none;\n  background: var(--theme-bg-surface);\n  color: var(--theme-text-secondary);\n  font-size: 12px;\n  font-weight: 700;\n  min-width: 88px;\n  padding: 0 12px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  cursor: pointer;\n}\n\n.objects-view-toggle button + button {\n  border-left: 1px solid color-mix(in srgb, var(--theme-border) 60%, white);\n}\n\n.objects-view-toggle__btn--active {\n  color: var(--theme-primary);\n  background: color-mix(in srgb, var(--theme-primary) 11%, white) !important;\n}\n\n.objects-clear-btn {\n  border: 1px solid color-mix(in srgb, var(--theme-border) 60%, white);\n  border-radius: 10px;\n  background: var(--theme-bg-surface);\n  color: var(--theme-text-secondary);\n  min-height: 36px;\n  padding: 0 12px;\n  font-size: 12px;\n  font-weight: 700;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n}\n\n.objects-clear-btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n.objects-panel {\n  border-radius: 18px;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 55%, white);\n  background: color-mix(in srgb, var(--theme-bg-surface) 98%, transparent);\n  padding: 14px;\n  min-height: 380px;\n}\n\n.objects-panel__header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 10px;\n  padding-bottom: 12px;\n  border-bottom: 1px solid color-mix(in srgb, var(--theme-border) 50%, white);\n}\n\n.objects-panel__title {\n  margin: 0;\n  font-size: 17px;\n  color: var(--theme-text-primary);\n}\n\n.objects-panel__subtitle {\n  margin: 4px 0 0;\n  font-size: 12px;\n  color: var(--theme-text-muted);\n}\n\n.objects-panel__badges {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  flex-wrap: wrap;\n}\n\n.objects-badge {\n  border-radius: 999px;\n  border: 1px solid color-mix(in srgb, var(--theme-success) 45%, white);\n  background: color-mix(in srgb, var(--theme-success) 11%, white);\n  color: var(--theme-success);\n  font-size: 10px;\n  font-weight: 700;\n  padding: 4px 8px;\n}\n\n.objects-badge--muted {\n  border-color: color-mix(in srgb, var(--theme-border) 64%, white);\n  background: var(--theme-bg-surface);\n  color: var(--theme-text-secondary);\n}\n\n.objects-state {\n  min-height: 260px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  gap: 9px;\n  color: var(--theme-text-secondary);\n}\n\n.objects-state i {\n  font-size: 22px;\n}\n\n.objects-state h3 {\n  margin: 0;\n  font-size: 20px;\n  color: var(--theme-text-primary);\n}\n\n.objects-state p {\n  margin: 0;\n  font-size: 13px;\n  max-width: 420px;\n}\n\n.objects-state--empty i {\n  color: var(--theme-primary);\n}\n\n.objects-state__btn {\n  margin-top: 6px;\n  border: none;\n  border-radius: 9px;\n  padding: 8px 11px;\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--theme-primary-contrast);\n  background: linear-gradient(120deg, var(--theme-primary), var(--theme-accent-end));\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.objects-grid {\n  margin-top: 12px;\n  display: grid;\n  gap: 12px;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n}\n\n.object-card {\n  border-radius: 14px;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 60%, white);\n  background: var(--theme-bg-surface);\n  padding: 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.object-card__header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 10px;\n}\n\n.object-card__title {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--theme-text-primary);\n}\n\n.object-card__key {\n  margin: 4px 0 0;\n  font-size: 11px;\n  color: var(--theme-text-muted);\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;\n}\n\n.object-card__status {\n  border-radius: 999px;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 63%, white);\n  background: var(--theme-bg-surface);\n  color: var(--theme-text-secondary);\n  font-size: 10px;\n  font-weight: 700;\n  padding: 4px 8px;\n}\n\n.object-card__status--active {\n  border-color: color-mix(in srgb, var(--theme-success) 45%, white);\n  background: color-mix(in srgb, var(--theme-success) 11%, white);\n  color: var(--theme-success);\n}\n\n.object-card__description {\n  margin: 0;\n  font-size: 12px;\n  line-height: 1.5;\n  color: var(--theme-text-secondary);\n  min-height: 38px;\n}\n\n.object-card__meta {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 7px;\n}\n\n.object-card__meta span {\n  font-size: 10px;\n  font-weight: 600;\n  color: var(--theme-text-muted);\n  border: 1px solid color-mix(in srgb, var(--theme-border) 65%, white);\n  border-radius: 999px;\n  padding: 3px 8px;\n}\n\n.object-card__actions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n\n.object-card__open,\n.object-card__add,\n.object-card__delete {\n  border-radius: 8px;\n  padding: 6px 9px;\n  font-size: 11px;\n  font-weight: 700;\n  text-decoration: none;\n}\n\n.object-card__open {\n  border: 1px solid color-mix(in srgb, var(--theme-primary) 42%, white);\n  color: var(--theme-primary);\n  background: color-mix(in srgb, var(--theme-primary) 8%, white);\n}\n\n.object-card__add {\n  border: 1px solid color-mix(in srgb, var(--theme-success) 45%, white);\n  color: var(--theme-success);\n  background: color-mix(in srgb, var(--theme-success) 10%, white);\n}\n\n.object-card__delete {\n  border: 1px solid color-mix(in srgb, var(--theme-danger) 45%, white);\n  color: var(--theme-danger);\n  background: color-mix(in srgb, var(--theme-danger) 8%, white);\n  cursor: pointer;\n}\n\n.object-card__delete:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n\n.objects-table-shell {\n  margin-top: 12px;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 58%, white);\n  border-radius: 11px;\n  overflow: auto;\n  background: var(--theme-bg-surface);\n}\n\n.objects-table {\n  width: 100%;\n  min-width: 860px;\n  border-collapse: collapse;\n}\n\n.objects-table th,\n.objects-table td {\n  border-bottom: 1px solid color-mix(in srgb, var(--theme-border) 55%, white);\n  padding: 10px;\n  text-align: left;\n  font-size: 12px;\n  color: var(--theme-text-secondary);\n  vertical-align: top;\n}\n\n.objects-table th {\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  font-weight: 700;\n  color: var(--theme-text-muted);\n  background: color-mix(in srgb, var(--theme-bg-surface-soft) 90%, white);\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\n.objects-table code {\n  color: var(--theme-text-primary);\n  font-size: 11px;\n}\n\n.objects-table__name {\n  margin: 0;\n  font-size: 13px;\n  color: var(--theme-text-primary);\n  font-weight: 700;\n}\n\n.objects-table__desc {\n  margin: 5px 0 0;\n  font-size: 11px;\n  color: var(--theme-text-muted);\n}\n\n.objects-table__actions {\n  display: inline-flex;\n  gap: 8px;\n  align-items: center;\n}\n\n.objects-table__actions a,\n.objects-table__actions button {\n  border-radius: 8px;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 62%, white);\n  background: var(--theme-bg-surface);\n  color: var(--theme-text-secondary);\n  font-size: 11px;\n  font-weight: 700;\n  min-height: 30px;\n  padding: 0 8px;\n  display: inline-flex;\n  align-items: center;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.objects-table__actions a:hover,\n.objects-table__actions button:hover {\n  border-color: color-mix(in srgb, var(--theme-primary) 45%, white);\n  color: var(--theme-primary);\n}\n\n.objects-table tbody tr:hover {\n  background: color-mix(in srgb, var(--theme-primary) 6%, white);\n}\n\n@media (max-width: 1120px) {\n  .objects-toolbar {\n    grid-template-columns: 1fr 1fr;\n  }\n\n  .objects-metrics {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n\n@media (max-width: 820px) {\n  .objects-header {\n    flex-direction: column;\n  }\n\n  .objects-header__title {\n    font-size: 25px;\n  }\n\n  .objects-toolbar {\n    grid-template-columns: 1fr;\n  }\n\n  .objects-view-toggle {\n    width: 100%;\n  }\n\n  .objects-view-toggle button {\n    flex: 1;\n  }\n\n  .objects-panel__header {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n\n@media (max-width: 620px) {\n  .objects-page {\n    padding: 10px 6px 18px;\n  }\n\n  .objects-shell {\n    border-radius: 16px;\n    padding: 12px;\n  }\n\n  .objects-metrics {\n    grid-template-columns: 1fr;\n  }\n\n  .objects-grid {\n    grid-template-columns: 1fr;\n  }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DashboardPage, { className: "DashboardPage", filePath: "avyra-crm/src/app/shared/pages/loggedin/dashboard-page/dashboard-page.ts", lineNumber: 17 }); })();
