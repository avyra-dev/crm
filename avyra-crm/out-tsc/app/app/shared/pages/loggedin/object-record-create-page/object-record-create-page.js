import { CommonModule } from '@angular/common';
import { Component, computed, effect, inject, signal, untracked } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { BusinessService } from '../../../../services/business.service';
import { FieldService } from '../../../../services/field.service';
import { ObjectService } from '../../../../services/object.service';
import { ObjectRecordService } from '../../../../services/object-record.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
const _forTrack0 = ($index, $item) => $item.id;
function ObjectRecordCreatePage_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", ctx_r0.fields().length, " Fields");
} }
function ObjectRecordCreatePage_Conditional_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 14);
    i0.ɵɵelement(1, "i", 16);
    i0.ɵɵelementStart(2, "p");
    i0.ɵɵtext(3, "Loading field schema...");
    i0.ɵɵelementEnd()();
} }
function ObjectRecordCreatePage_Conditional_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 14);
    i0.ɵɵelement(1, "i", 17);
    i0.ɵɵelementStart(2, "h2");
    i0.ɵɵtext(3, "No Fields Available");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5, "Add at least one field to this object before creating records.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "a", 18);
    i0.ɵɵtext(7, " Go To Object Workspace ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("routerLink", ctx_r0.buildObjectRoute());
} }
function ObjectRecordCreatePage_Conditional_30_For_10_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "strong");
    i0.ɵɵtext(1, "*");
    i0.ɵɵelementEnd();
} }
function ObjectRecordCreatePage_Conditional_30_For_10_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "textarea", 31);
} if (rf & 2) {
    const fieldRecord_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("formControlName", fieldRecord_r3.id)("placeholder", fieldRecord_r3.description || "");
} }
function ObjectRecordCreatePage_Conditional_30_For_10_Conditional_5_For_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 36);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r4 = ctx.$implicit;
    i0.ɵɵproperty("value", option_r4);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(option_r4);
} }
function ObjectRecordCreatePage_Conditional_30_For_10_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "select", 32)(1, "option", 35);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(3, ObjectRecordCreatePage_Conditional_30_For_10_Conditional_5_For_4_Template, 2, 2, "option", 36, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const fieldRecord_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("formControlName", fieldRecord_r3.id);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Select ", fieldRecord_r3.name);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(fieldRecord_r3.options);
} }
function ObjectRecordCreatePage_Conditional_30_For_10_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "select", 32)(1, "option", 35);
    i0.ɵɵtext(2, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "option", 37);
    i0.ɵɵtext(4, "Yes");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "option", 38);
    i0.ɵɵtext(6, "No");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const fieldRecord_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("formControlName", fieldRecord_r3.id);
} }
function ObjectRecordCreatePage_Conditional_30_For_10_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 33);
} if (rf & 2) {
    const fieldRecord_r3 = i0.ɵɵnextContext().$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("type", ctx_r0.fieldInputType(fieldRecord_r3.type))("formControlName", fieldRecord_r3.id)("placeholder", fieldRecord_r3.description || "");
} }
function ObjectRecordCreatePage_Conditional_30_For_10_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 34);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const fieldRecord_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", fieldRecord_r3.name, " is required.");
} }
function ObjectRecordCreatePage_Conditional_30_For_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 22)(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵconditionalCreate(3, ObjectRecordCreatePage_Conditional_30_For_10_Conditional_3_Template, 2, 0, "strong");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(4, ObjectRecordCreatePage_Conditional_30_For_10_Conditional_4_Template, 1, 2, "textarea", 31)(5, ObjectRecordCreatePage_Conditional_30_For_10_Conditional_5_Template, 5, 2, "select", 32)(6, ObjectRecordCreatePage_Conditional_30_For_10_Conditional_6_Template, 7, 1, "select", 32)(7, ObjectRecordCreatePage_Conditional_30_For_10_Conditional_7_Template, 1, 3, "input", 33);
    i0.ɵɵconditionalCreate(8, ObjectRecordCreatePage_Conditional_30_For_10_Conditional_8_Template, 2, 1, "small", 34);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_14_0;
    const fieldRecord_r3 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", fieldRecord_r3.name, " ");
    i0.ɵɵadvance();
    i0.ɵɵconditional(fieldRecord_r3.is_required ? 3 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.isTextAreaField(fieldRecord_r3.type) ? 4 : ctx_r0.isSelectField(fieldRecord_r3.type) ? 5 : ctx_r0.isBooleanField(fieldRecord_r3.type) ? 6 : 7);
    i0.ɵɵadvance(4);
    i0.ɵɵconditional(((tmp_14_0 = ctx_r0.recordForm.get(fieldRecord_r3.id)) == null ? null : tmp_14_0.invalid) && ((tmp_14_0 = ctx_r0.recordForm.get(fieldRecord_r3.id)) == null ? null : tmp_14_0.touched) ? 8 : -1);
} }
function ObjectRecordCreatePage_Conditional_30_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.formErrorMessage());
} }
function ObjectRecordCreatePage_Conditional_30_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Saving... ");
} }
function ObjectRecordCreatePage_Conditional_30_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵtextInterpolate1(" Save ", ctx_r0.objectHeading(), " ");
} }
function ObjectRecordCreatePage_Conditional_30_For_38_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 29)(1, "strong");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const fieldRecord_r5 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(fieldRecord_r5.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", fieldRecord_r5.is_required ? "Required" : "Optional", " \u00B7 ", fieldRecord_r5.type);
} }
function ObjectRecordCreatePage_Conditional_30_Conditional_39_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 30);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("+", ctx_r0.remainingFieldCount(), " more fields");
} }
function ObjectRecordCreatePage_Conditional_30_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 15)(1, "section", 19)(2, "header")(3, "h2");
    i0.ɵɵtext(4, "Record Form");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6, "Required fields are marked with an asterisk.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "form", 20);
    i0.ɵɵlistener("ngSubmit", function ObjectRecordCreatePage_Conditional_30_Template_form_ngSubmit_7_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.submitRecord()); });
    i0.ɵɵelementStart(8, "div", 21);
    i0.ɵɵrepeaterCreate(9, ObjectRecordCreatePage_Conditional_30_For_10_Template, 9, 4, "label", 22, _forTrack0);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(11, ObjectRecordCreatePage_Conditional_30_Conditional_11_Template, 2, 1, "p", 23);
    i0.ɵɵelementStart(12, "footer", 24)(13, "a", 12);
    i0.ɵɵtext(14, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "button", 25);
    i0.ɵɵconditionalCreate(16, ObjectRecordCreatePage_Conditional_30_Conditional_16_Template, 1, 0)(17, ObjectRecordCreatePage_Conditional_30_Conditional_17_Template, 1, 1);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(18, "aside", 26)(19, "article", 27)(20, "h3");
    i0.ɵɵtext(21, "Form Guidance");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "p");
    i0.ɵɵtext(23, "Keep values clean and consistent to improve search, reporting, and automations in this object.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "ul")(25, "li");
    i0.ɵɵtext(26, "Complete all required fields before submitting.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "li");
    i0.ɵɵtext(28, "Use standardized values for select and boolean fields.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "li");
    i0.ɵɵtext(30, "Capture enough detail for downstream workflows.");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(31, "article", 27)(32, "h3");
    i0.ɵɵtext(33, "Mapped Field Schema");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "p");
    i0.ɵɵtext(35);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "div", 28);
    i0.ɵɵrepeaterCreate(37, ObjectRecordCreatePage_Conditional_30_For_38_Template, 5, 3, "div", 29, _forTrack0);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(39, ObjectRecordCreatePage_Conditional_30_Conditional_39_Template, 2, 1, "p", 30);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("formGroup", ctx_r0.recordForm);
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r0.fields());
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r0.formErrorMessage() ? 11 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("routerLink", ctx_r0.buildObjectRoute());
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r0.recordForm.invalid || ctx_r0.isSubmitting());
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.isSubmitting() ? 16 : 17);
    i0.ɵɵadvance(19);
    i0.ɵɵtextInterpolate1("Fields configured for ", ctx_r0.objectHeading(), ":");
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r0.fieldPreview());
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r0.remainingFieldCount() ? 39 : -1);
} }
export class ObjectRecordCreatePage {
    route = inject(ActivatedRoute);
    router = inject(Router);
    businessService = inject(BusinessService);
    objectService = inject(ObjectService);
    fieldService = inject(FieldService);
    objectRecordService = inject(ObjectRecordService);
    fb = inject(FormBuilder);
    objects = this.objectService.objects;
    fields = this.fieldService.fields;
    isLoadingFields = this.fieldService.isLoading;
    selectedBusinessId = this.businessService.selectedBusinessId;
    objectIdParam = toSignal(this.route.paramMap.pipe(map((params) => params.get('objectId'))), {
        initialValue: null,
    });
    objectNameParam = toSignal(this.route.paramMap.pipe(map((params) => params.get('objectName'))), {
        initialValue: null,
    });
    selectedObject = computed(() => {
        const objectId = this.objectIdParam();
        if (!objectId) {
            return null;
        }
        return this.objects().find((objectRecord) => objectRecord.id === objectId) ?? null;
    }, ...(ngDevMode ? [{ debugName: "selectedObject" }] : []));
    objectHeading = computed(() => {
        return this.selectedObject()?.name ?? this.formatRouteName(this.objectNameParam());
    }, ...(ngDevMode ? [{ debugName: "objectHeading" }] : []));
    workspaceLabel = computed(() => this.businessService.selectedBusiness()?.name ?? 'Default Workspace', ...(ngDevMode ? [{ debugName: "workspaceLabel" }] : []));
    hasFields = computed(() => this.fields().length > 0, ...(ngDevMode ? [{ debugName: "hasFields" }] : []));
    fieldPreview = computed(() => this.fields().slice(0, 8), ...(ngDevMode ? [{ debugName: "fieldPreview" }] : []));
    remainingFieldCount = computed(() => Math.max(0, this.fields().length - this.fieldPreview().length), ...(ngDevMode ? [{ debugName: "remainingFieldCount" }] : []));
    recordForm = this.fb.group({});
    isSubmitting = signal(false, ...(ngDevMode ? [{ debugName: "isSubmitting" }] : []));
    formErrorMessage = signal('', ...(ngDevMode ? [{ debugName: "formErrorMessage" }] : []));
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
        const values = {};
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
    buildObjectRoute() {
        const objectId = this.objectIdParam();
        if (!objectId) {
            return ['/dashboard'];
        }
        const objectRecord = this.selectedObject();
        const routeName = this.toRouteSegment(objectRecord?.name || objectRecord?.key || this.objectNameParam() || 'object');
        return ['/objects', objectId, routeName];
    }
    fieldInputType(fieldType) {
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
    isTextAreaField(fieldType) {
        return String(fieldType || '').trim().toLowerCase() === 'textarea';
    }
    isSelectField(fieldType) {
        return String(fieldType || '').trim().toLowerCase() === 'select';
    }
    isBooleanField(fieldType) {
        return String(fieldType || '').trim().toLowerCase() === 'boolean';
    }
    buildForm(fields) {
        const controls = {};
        fields.forEach((fieldRecord) => {
            const validators = [];
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
    normalizeInputValue(fieldType, rawValue) {
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
    navigateToObjectDetails(objectId) {
        const objectRecord = this.selectedObject();
        const routeName = this.toRouteSegment(objectRecord?.name || objectRecord?.key || this.objectNameParam() || 'object');
        this.router.navigate(['/objects', objectId, routeName]);
    }
    formatRouteName(value) {
        const normalized = String(value || '')
            .replace(/[-_]+/g, ' ')
            .trim();
        return normalized || 'Object';
    }
    toRouteSegment(value) {
        const trimmed = String(value || '').trim();
        if (!trimmed) {
            return 'object';
        }
        return trimmed.replace(/\//g, '-');
    }
    static ɵfac = function ObjectRecordCreatePage_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ObjectRecordCreatePage)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ObjectRecordCreatePage, selectors: [["app-object-record-create-page"]], decls: 31, vars: 10, consts: [[1, "record-create-page"], [1, "record-create-shell"], [1, "record-create-overview"], [1, "record-create-overview__top"], ["aria-label", "Breadcrumb", 1, "record-create-breadcrumbs"], ["routerLink", "/dashboard"], ["aria-hidden", "true", 1, "fa-solid", "fa-angle-right"], [3, "routerLink"], [1, "record-create-overview__badges"], [1, "record-create-badge"], [1, "record-create-header"], [1, "record-create-kicker"], [1, "record-create-btn", "record-create-btn--ghost", 3, "routerLink"], [1, "fa-solid", "fa-arrow-left"], [1, "record-create-state"], [1, "record-create-layout"], [1, "fa-solid", "fa-spinner", "fa-spin"], [1, "fa-regular", "fa-square-plus"], [1, "record-create-btn", "record-create-btn--primary", 3, "routerLink"], [1, "record-create-form-shell"], [1, "record-create-form", 3, "ngSubmit", "formGroup"], [1, "record-create-grid"], [1, "record-form-field"], [1, "record-create-error"], [1, "record-create-actions"], ["type", "submit", 1, "record-create-btn", "record-create-btn--primary", 3, "disabled"], [1, "record-create-context"], [1, "record-context-card"], [1, "record-context-fields"], [1, "record-context-field"], [1, "record-context-more"], ["rows", "4", 3, "formControlName", "placeholder"], [3, "formControlName"], [3, "type", "formControlName", "placeholder"], [1, "record-form-field__error"], ["value", ""], [3, "value"], ["value", "true"], ["value", "false"]], template: function ObjectRecordCreatePage_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0)(1, "div", 1)(2, "header", 2)(3, "div", 3)(4, "nav", 4)(5, "a", 5);
            i0.ɵɵtext(6, "Dashboard");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(7, "i", 6);
            i0.ɵɵelementStart(8, "a", 7);
            i0.ɵɵtext(9);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(10, "i", 6);
            i0.ɵɵelementStart(11, "span");
            i0.ɵɵtext(12);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(13, "div", 8)(14, "span", 9);
            i0.ɵɵtext(15);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(16, ObjectRecordCreatePage_Conditional_16_Template, 2, 1, "span", 9);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(17, "div", 10)(18, "div")(19, "p", 11);
            i0.ɵɵtext(20);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "h1");
            i0.ɵɵtext(22);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "p");
            i0.ɵɵtext(24, "Create a new record using the mapped field schema for this object.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(25, "a", 12);
            i0.ɵɵelement(26, "i", 13);
            i0.ɵɵtext(27);
            i0.ɵɵelementEnd()()();
            i0.ɵɵconditionalCreate(28, ObjectRecordCreatePage_Conditional_28_Template, 4, 0, "section", 14)(29, ObjectRecordCreatePage_Conditional_29_Template, 8, 1, "section", 14)(30, ObjectRecordCreatePage_Conditional_30_Template, 40, 7, "div", 15);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("routerLink", ctx.buildObjectRoute());
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate(ctx.objectHeading());
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1("Add ", ctx.objectHeading());
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.workspaceLabel());
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.hasFields() ? 16 : -1);
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx.workspaceLabel());
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1("Add ", ctx.objectHeading());
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("routerLink", ctx.buildObjectRoute());
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" Back To ", ctx.objectHeading(), " ");
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.isLoadingFields() ? 28 : !ctx.hasFields() ? 29 : 30);
        } }, dependencies: [CommonModule, RouterLink, ReactiveFormsModule, i1.ɵNgNoValidate, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.DefaultValueAccessor, i1.SelectControlValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.record-create-page[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 86px);\n  padding: 14px 10px 24px;\n}\n\n.record-create-shell[_ngcontent-%COMP%] {\n  max-width: 1260px;\n  margin: 0 auto;\n  border-radius: 24px;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 58%, white);\n  background:\n    radial-gradient(circle at top right, color-mix(in srgb, var(--theme-primary) 12%, transparent), transparent 44%),\n    color-mix(in srgb, var(--theme-bg-surface) 95%, transparent);\n  box-shadow: 0 24px 70px rgba(15, 23, 42, 0.11);\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n\n.record-create-overview[_ngcontent-%COMP%] {\n  border: 1px solid color-mix(in srgb, var(--theme-border) 56%, white);\n  border-radius: 18px;\n  background: color-mix(in srgb, var(--theme-bg-surface) 97%, transparent);\n  padding: 13px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.record-create-overview__top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n\n.record-create-overview__badges[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  flex-wrap: wrap;\n}\n\n.record-create-badge[_ngcontent-%COMP%] {\n  border-radius: 999px;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 62%, white);\n  background: var(--theme-bg-surface);\n  color: var(--theme-text-secondary);\n  font-size: 10px;\n  font-weight: 700;\n  padding: 4px 8px;\n}\n\n.record-create-breadcrumbs[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 12px;\n  color: var(--theme-text-muted);\n}\n\n.record-create-breadcrumbs[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--theme-text-secondary);\n  font-weight: 700;\n  text-decoration: none;\n}\n\n.record-create-breadcrumbs[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--theme-primary);\n}\n\n.record-create-breadcrumbs[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  opacity: 0.7;\n}\n\n.record-create-header[_ngcontent-%COMP%] {\n  border: 1px solid color-mix(in srgb, var(--theme-border) 58%, white);\n  border-radius: 16px;\n  background:\n    radial-gradient(circle at top right, color-mix(in srgb, var(--theme-primary) 10%, transparent), transparent 50%),\n    var(--theme-bg-surface);\n  padding: 18px;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 14px;\n}\n\n.record-create-kicker[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: var(--theme-text-muted);\n}\n\n.record-create-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 7px 0 0;\n  font-size: 32px;\n  line-height: 1.08;\n  color: var(--theme-text-primary);\n}\n\n.record-create-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 8px 0 0;\n  font-size: 14px;\n  color: var(--theme-text-secondary);\n}\n\n.record-create-btn[_ngcontent-%COMP%] {\n  border: 1px solid transparent;\n  border-radius: 10px;\n  min-height: 38px;\n  padding: 8px 12px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  font-size: 12px;\n  font-weight: 700;\n  text-decoration: none;\n  cursor: pointer;\n  transition: border-color 0.2s ease, color 0.2s ease, background-color 0.2s ease;\n}\n\n.record-create-btn--primary[_ngcontent-%COMP%] {\n  border: none;\n  color: var(--theme-primary-contrast);\n  background: linear-gradient(120deg, var(--theme-primary), var(--theme-accent-end));\n}\n\n.record-create-btn--ghost[_ngcontent-%COMP%] {\n  color: var(--theme-text-secondary);\n  border-color: color-mix(in srgb, var(--theme-border) 62%, white);\n  background: color-mix(in srgb, var(--theme-bg-surface) 96%, white);\n}\n\n.record-create-btn--ghost[_ngcontent-%COMP%]:hover {\n  color: var(--theme-text-primary);\n  border-color: color-mix(in srgb, var(--theme-primary) 44%, white);\n}\n\n.record-create-state[_ngcontent-%COMP%] {\n  border: 1px solid color-mix(in srgb, var(--theme-border) 58%, white);\n  border-radius: 18px;\n  background: color-mix(in srgb, var(--theme-bg-surface) 98%, transparent);\n  min-height: 260px;\n  padding: 18px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  gap: 9px;\n  color: var(--theme-text-secondary);\n}\n\n.record-create-state[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 21px;\n  color: var(--theme-text-primary);\n}\n\n.record-create-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n}\n\n.record-create-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1.65fr) minmax(280px, 1fr);\n  gap: 12px;\n}\n\n.record-create-form-shell[_ngcontent-%COMP%] {\n  border: 1px solid color-mix(in srgb, var(--theme-border) 58%, white);\n  border-radius: 18px;\n  background: color-mix(in srgb, var(--theme-bg-surface) 98%, transparent);\n  padding: 14px;\n}\n\n.record-create-form-shell[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%] {\n  padding-bottom: 10px;\n  border-bottom: 1px solid color-mix(in srgb, var(--theme-border) 52%, white);\n}\n\n.record-create-form-shell[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 17px;\n  color: var(--theme-text-primary);\n}\n\n.record-create-form-shell[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 6px 0 0;\n  font-size: 12px;\n  color: var(--theme-text-muted);\n}\n\n.record-create-form[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.record-create-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: 10px;\n}\n\n.record-form-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 62%, white);\n  border-radius: 11px;\n  background: var(--theme-bg-surface);\n  padding: 10px;\n}\n\n.record-form-field[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.07em;\n  text-transform: uppercase;\n  color: var(--theme-text-muted);\n}\n\n.record-form-field[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--theme-danger);\n}\n\n.record-form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.record-form-field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], \n.record-form-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 9px;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 62%, white);\n  background: color-mix(in srgb, var(--theme-bg-surface) 95%, white);\n  color: var(--theme-text-primary);\n  font-size: 13px;\n  padding: 9px 10px;\n}\n\n.record-form-field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n\n.record-form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus-visible, \n.record-form-field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus-visible, \n.record-form-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus-visible {\n  outline: none;\n  border-color: color-mix(in srgb, var(--theme-primary) 48%, white);\n  box-shadow: 0 0 0 3px color-mix(in srgb, var(--theme-primary) 16%, transparent);\n}\n\n.record-form-field__error[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--theme-danger);\n}\n\n.record-create-error[_ngcontent-%COMP%] {\n  margin: 0;\n  border-radius: 10px;\n  background: color-mix(in srgb, var(--theme-danger) 12%, white);\n  color: var(--theme-danger);\n  padding: 8px 10px;\n  font-size: 12px;\n  font-weight: 600;\n}\n\n.record-create-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n}\n\n.record-create-context[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.record-context-card[_ngcontent-%COMP%] {\n  border: 1px solid color-mix(in srgb, var(--theme-border) 58%, white);\n  border-radius: 14px;\n  background: color-mix(in srgb, var(--theme-bg-surface) 98%, transparent);\n  padding: 11px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.record-context-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  color: var(--theme-text-primary);\n}\n\n.record-context-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12px;\n  color: var(--theme-text-secondary);\n  line-height: 1.5;\n}\n\n.record-context-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-left: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  font-size: 12px;\n  color: var(--theme-text-secondary);\n}\n\n.record-context-fields[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n}\n\n.record-context-field[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 60%, white);\n  background: var(--theme-bg-surface);\n  padding: 7px 9px;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n\n.record-context-field[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--theme-text-primary);\n}\n\n.record-context-field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--theme-text-muted);\n  text-transform: capitalize;\n}\n\n.record-context-more[_ngcontent-%COMP%] {\n  margin-top: 3px;\n  color: var(--theme-text-muted) !important;\n  font-size: 11px !important;\n  font-weight: 600;\n}\n\n@media (max-width: 1120px) {\n  .record-create-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n@media (max-width: 860px) {\n  .record-create-shell[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n\n  .record-create-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .record-create-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 27px;\n  }\n\n  .record-create-actions[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n}\n\n@media (max-width: 640px) {\n  .record-create-breadcrumbs[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n\n  .record-create-overview__top[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n\n  .record-create-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ObjectRecordCreatePage, [{
        type: Component,
        args: [{ selector: 'app-object-record-create-page', imports: [CommonModule, RouterLink, ReactiveFormsModule], template: "<section class=\"record-create-page\">\n  <div class=\"record-create-shell\">\n    <header class=\"record-create-overview\">\n      <div class=\"record-create-overview__top\">\n        <nav class=\"record-create-breadcrumbs\" aria-label=\"Breadcrumb\">\n          <a routerLink=\"/dashboard\">Dashboard</a>\n          <i class=\"fa-solid fa-angle-right\" aria-hidden=\"true\"></i>\n          <a [routerLink]=\"buildObjectRoute()\">{{ objectHeading() }}</a>\n          <i class=\"fa-solid fa-angle-right\" aria-hidden=\"true\"></i>\n          <span>Add {{ objectHeading() }}</span>\n        </nav>\n\n        <div class=\"record-create-overview__badges\">\n          <span class=\"record-create-badge\">{{ workspaceLabel() }}</span>\n          @if (hasFields()) {\n          <span class=\"record-create-badge\">{{ fields().length }} Fields</span>\n          }\n        </div>\n      </div>\n\n      <div class=\"record-create-header\">\n        <div>\n          <p class=\"record-create-kicker\">{{ workspaceLabel() }}</p>\n          <h1>Add {{ objectHeading() }}</h1>\n          <p>Create a new record using the mapped field schema for this object.</p>\n        </div>\n\n        <a [routerLink]=\"buildObjectRoute()\" class=\"record-create-btn record-create-btn--ghost\">\n          <i class=\"fa-solid fa-arrow-left\"></i>\n          Back To {{ objectHeading() }}\n        </a>\n      </div>\n    </header>\n\n    @if (isLoadingFields()) {\n    <section class=\"record-create-state\">\n      <i class=\"fa-solid fa-spinner fa-spin\"></i>\n      <p>Loading field schema...</p>\n    </section>\n    } @else if (!hasFields()) {\n    <section class=\"record-create-state\">\n      <i class=\"fa-regular fa-square-plus\"></i>\n      <h2>No Fields Available</h2>\n      <p>Add at least one field to this object before creating records.</p>\n      <a [routerLink]=\"buildObjectRoute()\" class=\"record-create-btn record-create-btn--primary\">\n        Go To Object Workspace\n      </a>\n    </section>\n    } @else {\n    <div class=\"record-create-layout\">\n      <section class=\"record-create-form-shell\">\n        <header>\n          <h2>Record Form</h2>\n          <p>Required fields are marked with an asterisk.</p>\n        </header>\n\n        <form [formGroup]=\"recordForm\" (ngSubmit)=\"submitRecord()\" class=\"record-create-form\">\n          <div class=\"record-create-grid\">\n            @for (fieldRecord of fields(); track fieldRecord.id) {\n            <label class=\"record-form-field\">\n              <span>\n                {{ fieldRecord.name }}\n                @if (fieldRecord.is_required) {\n                <strong>*</strong>\n                }\n              </span>\n\n              @if (isTextAreaField(fieldRecord.type)) {\n              <textarea rows=\"4\" [formControlName]=\"fieldRecord.id\"\n                [placeholder]=\"fieldRecord.description || ''\"></textarea>\n              } @else if (isSelectField(fieldRecord.type)) {\n              <select [formControlName]=\"fieldRecord.id\">\n                <option value=\"\">Select {{ fieldRecord.name }}</option>\n                @for (option of fieldRecord.options; track option) {\n                <option [value]=\"option\">{{ option }}</option>\n                }\n              </select>\n              } @else if (isBooleanField(fieldRecord.type)) {\n              <select [formControlName]=\"fieldRecord.id\">\n                <option value=\"\">Select</option>\n                <option value=\"true\">Yes</option>\n                <option value=\"false\">No</option>\n              </select>\n              } @else {\n              <input [type]=\"fieldInputType(fieldRecord.type)\" [formControlName]=\"fieldRecord.id\"\n                [placeholder]=\"fieldRecord.description || ''\" />\n              }\n\n              @if (recordForm.get(fieldRecord.id)?.invalid && recordForm.get(fieldRecord.id)?.touched) {\n              <small class=\"record-form-field__error\">{{ fieldRecord.name }} is required.</small>\n              }\n            </label>\n            }\n          </div>\n\n          @if (formErrorMessage()) {\n          <p class=\"record-create-error\">{{ formErrorMessage() }}</p>\n          }\n\n          <footer class=\"record-create-actions\">\n            <a [routerLink]=\"buildObjectRoute()\" class=\"record-create-btn record-create-btn--ghost\">Cancel</a>\n            <button type=\"submit\" class=\"record-create-btn record-create-btn--primary\"\n              [disabled]=\"recordForm.invalid || isSubmitting()\">\n              @if (isSubmitting()) {\n              Saving...\n              } @else {\n              Save {{ objectHeading() }}\n              }\n            </button>\n          </footer>\n        </form>\n      </section>\n\n      <aside class=\"record-create-context\">\n        <article class=\"record-context-card\">\n          <h3>Form Guidance</h3>\n          <p>Keep values clean and consistent to improve search, reporting, and automations in this object.</p>\n          <ul>\n            <li>Complete all required fields before submitting.</li>\n            <li>Use standardized values for select and boolean fields.</li>\n            <li>Capture enough detail for downstream workflows.</li>\n          </ul>\n        </article>\n\n        <article class=\"record-context-card\">\n          <h3>Mapped Field Schema</h3>\n          <p>Fields configured for {{ objectHeading() }}:</p>\n          <div class=\"record-context-fields\">\n            @for (fieldRecord of fieldPreview(); track fieldRecord.id) {\n            <div class=\"record-context-field\">\n              <strong>{{ fieldRecord.name }}</strong>\n              <span>{{ fieldRecord.is_required ? 'Required' : 'Optional' }} \u00B7 {{ fieldRecord.type }}</span>\n            </div>\n            }\n          </div>\n          @if (remainingFieldCount()) {\n          <p class=\"record-context-more\">+{{ remainingFieldCount() }} more fields</p>\n          }\n        </article>\n      </aside>\n    </div>\n    }\n  </div>\n</section>\n", styles: [":host {\n  display: block;\n}\n\n.record-create-page {\n  min-height: calc(100vh - 86px);\n  padding: 14px 10px 24px;\n}\n\n.record-create-shell {\n  max-width: 1260px;\n  margin: 0 auto;\n  border-radius: 24px;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 58%, white);\n  background:\n    radial-gradient(circle at top right, color-mix(in srgb, var(--theme-primary) 12%, transparent), transparent 44%),\n    color-mix(in srgb, var(--theme-bg-surface) 95%, transparent);\n  box-shadow: 0 24px 70px rgba(15, 23, 42, 0.11);\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n\n.record-create-overview {\n  border: 1px solid color-mix(in srgb, var(--theme-border) 56%, white);\n  border-radius: 18px;\n  background: color-mix(in srgb, var(--theme-bg-surface) 97%, transparent);\n  padding: 13px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.record-create-overview__top {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n\n.record-create-overview__badges {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  flex-wrap: wrap;\n}\n\n.record-create-badge {\n  border-radius: 999px;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 62%, white);\n  background: var(--theme-bg-surface);\n  color: var(--theme-text-secondary);\n  font-size: 10px;\n  font-weight: 700;\n  padding: 4px 8px;\n}\n\n.record-create-breadcrumbs {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 12px;\n  color: var(--theme-text-muted);\n}\n\n.record-create-breadcrumbs a {\n  color: var(--theme-text-secondary);\n  font-weight: 700;\n  text-decoration: none;\n}\n\n.record-create-breadcrumbs a:hover {\n  color: var(--theme-primary);\n}\n\n.record-create-breadcrumbs i {\n  font-size: 11px;\n  opacity: 0.7;\n}\n\n.record-create-header {\n  border: 1px solid color-mix(in srgb, var(--theme-border) 58%, white);\n  border-radius: 16px;\n  background:\n    radial-gradient(circle at top right, color-mix(in srgb, var(--theme-primary) 10%, transparent), transparent 50%),\n    var(--theme-bg-surface);\n  padding: 18px;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 14px;\n}\n\n.record-create-kicker {\n  margin: 0;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: var(--theme-text-muted);\n}\n\n.record-create-header h1 {\n  margin: 7px 0 0;\n  font-size: 32px;\n  line-height: 1.08;\n  color: var(--theme-text-primary);\n}\n\n.record-create-header p {\n  margin: 8px 0 0;\n  font-size: 14px;\n  color: var(--theme-text-secondary);\n}\n\n.record-create-btn {\n  border: 1px solid transparent;\n  border-radius: 10px;\n  min-height: 38px;\n  padding: 8px 12px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  font-size: 12px;\n  font-weight: 700;\n  text-decoration: none;\n  cursor: pointer;\n  transition: border-color 0.2s ease, color 0.2s ease, background-color 0.2s ease;\n}\n\n.record-create-btn--primary {\n  border: none;\n  color: var(--theme-primary-contrast);\n  background: linear-gradient(120deg, var(--theme-primary), var(--theme-accent-end));\n}\n\n.record-create-btn--ghost {\n  color: var(--theme-text-secondary);\n  border-color: color-mix(in srgb, var(--theme-border) 62%, white);\n  background: color-mix(in srgb, var(--theme-bg-surface) 96%, white);\n}\n\n.record-create-btn--ghost:hover {\n  color: var(--theme-text-primary);\n  border-color: color-mix(in srgb, var(--theme-primary) 44%, white);\n}\n\n.record-create-state {\n  border: 1px solid color-mix(in srgb, var(--theme-border) 58%, white);\n  border-radius: 18px;\n  background: color-mix(in srgb, var(--theme-bg-surface) 98%, transparent);\n  min-height: 260px;\n  padding: 18px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  gap: 9px;\n  color: var(--theme-text-secondary);\n}\n\n.record-create-state h2 {\n  margin: 0;\n  font-size: 21px;\n  color: var(--theme-text-primary);\n}\n\n.record-create-state p {\n  margin: 0;\n  font-size: 13px;\n}\n\n.record-create-layout {\n  display: grid;\n  grid-template-columns: minmax(0, 1.65fr) minmax(280px, 1fr);\n  gap: 12px;\n}\n\n.record-create-form-shell {\n  border: 1px solid color-mix(in srgb, var(--theme-border) 58%, white);\n  border-radius: 18px;\n  background: color-mix(in srgb, var(--theme-bg-surface) 98%, transparent);\n  padding: 14px;\n}\n\n.record-create-form-shell > header {\n  padding-bottom: 10px;\n  border-bottom: 1px solid color-mix(in srgb, var(--theme-border) 52%, white);\n}\n\n.record-create-form-shell h2 {\n  margin: 0;\n  font-size: 17px;\n  color: var(--theme-text-primary);\n}\n\n.record-create-form-shell > header p {\n  margin: 6px 0 0;\n  font-size: 12px;\n  color: var(--theme-text-muted);\n}\n\n.record-create-form {\n  margin-top: 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.record-create-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: 10px;\n}\n\n.record-form-field {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 62%, white);\n  border-radius: 11px;\n  background: var(--theme-bg-surface);\n  padding: 10px;\n}\n\n.record-form-field > span {\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.07em;\n  text-transform: uppercase;\n  color: var(--theme-text-muted);\n}\n\n.record-form-field strong {\n  color: var(--theme-danger);\n}\n\n.record-form-field input,\n.record-form-field textarea,\n.record-form-field select {\n  width: 100%;\n  border-radius: 9px;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 62%, white);\n  background: color-mix(in srgb, var(--theme-bg-surface) 95%, white);\n  color: var(--theme-text-primary);\n  font-size: 13px;\n  padding: 9px 10px;\n}\n\n.record-form-field textarea {\n  resize: vertical;\n}\n\n.record-form-field input:focus-visible,\n.record-form-field textarea:focus-visible,\n.record-form-field select:focus-visible {\n  outline: none;\n  border-color: color-mix(in srgb, var(--theme-primary) 48%, white);\n  box-shadow: 0 0 0 3px color-mix(in srgb, var(--theme-primary) 16%, transparent);\n}\n\n.record-form-field__error {\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--theme-danger);\n}\n\n.record-create-error {\n  margin: 0;\n  border-radius: 10px;\n  background: color-mix(in srgb, var(--theme-danger) 12%, white);\n  color: var(--theme-danger);\n  padding: 8px 10px;\n  font-size: 12px;\n  font-weight: 600;\n}\n\n.record-create-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n}\n\n.record-create-context {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.record-context-card {\n  border: 1px solid color-mix(in srgb, var(--theme-border) 58%, white);\n  border-radius: 14px;\n  background: color-mix(in srgb, var(--theme-bg-surface) 98%, transparent);\n  padding: 11px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.record-context-card h3 {\n  margin: 0;\n  font-size: 14px;\n  color: var(--theme-text-primary);\n}\n\n.record-context-card p {\n  margin: 0;\n  font-size: 12px;\n  color: var(--theme-text-secondary);\n  line-height: 1.5;\n}\n\n.record-context-card ul {\n  margin: 0;\n  padding-left: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  font-size: 12px;\n  color: var(--theme-text-secondary);\n}\n\n.record-context-fields {\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n}\n\n.record-context-field {\n  border-radius: 10px;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 60%, white);\n  background: var(--theme-bg-surface);\n  padding: 7px 9px;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n\n.record-context-field strong {\n  font-size: 12px;\n  color: var(--theme-text-primary);\n}\n\n.record-context-field span {\n  font-size: 11px;\n  color: var(--theme-text-muted);\n  text-transform: capitalize;\n}\n\n.record-context-more {\n  margin-top: 3px;\n  color: var(--theme-text-muted) !important;\n  font-size: 11px !important;\n  font-weight: 600;\n}\n\n@media (max-width: 1120px) {\n  .record-create-layout {\n    grid-template-columns: 1fr;\n  }\n}\n\n@media (max-width: 860px) {\n  .record-create-shell {\n    padding: 12px;\n  }\n\n  .record-create-header {\n    flex-direction: column;\n  }\n\n  .record-create-header h1 {\n    font-size: 27px;\n  }\n\n  .record-create-actions {\n    flex-wrap: wrap;\n  }\n}\n\n@media (max-width: 640px) {\n  .record-create-breadcrumbs {\n    flex-wrap: wrap;\n  }\n\n  .record-create-overview__top {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n\n  .record-create-grid {\n    grid-template-columns: 1fr;\n  }\n}\n"] }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ObjectRecordCreatePage, { className: "ObjectRecordCreatePage", filePath: "avyra-crm/src/app/shared/pages/loggedin/object-record-create-page/object-record-create-page.ts", lineNumber: 18 }); })();
