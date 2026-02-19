import { CommonModule } from '@angular/common';
import { Component, computed, effect, inject, signal, untracked } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { BusinessService } from '../../../../services/business.service';
import { ObjectService } from '../../../../services/object.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
const _forTrack0 = ($index, $item) => $item.id;
function ObjectCreateComponent_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", ctx_r0.cloneOptionCount(), " Reusable Templates");
} }
function ObjectCreateComponent_Conditional_15_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 30);
    i0.ɵɵtext(1, "Loading reusable object templates...");
    i0.ɵɵelementEnd();
} }
function ObjectCreateComponent_Conditional_15_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 30);
    i0.ɵɵtext(1, "No reusable templates found in your user library yet.");
    i0.ɵɵelementEnd();
} }
function ObjectCreateComponent_Conditional_15_Conditional_13_For_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sourceObject_r5 = ctx.$implicit;
    i0.ɵɵproperty("value", sourceObject_r5.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", sourceObject_r5.name, " (", sourceObject_r5.key, ")");
} }
function ObjectCreateComponent_Conditional_15_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 12)(1, "span");
    i0.ɵɵtext(2, "Select Template Object");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "select", 32, 0);
    i0.ɵɵlistener("change", function ObjectCreateComponent_Conditional_15_Conditional_13_Template_select_change_3_listener() { i0.ɵɵrestoreView(_r3); const cloneSourceSelect_r4 = i0.ɵɵreference(4); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.onCloneSourceSelect(cloneSourceSelect_r4.value)); });
    i0.ɵɵelementStart(5, "option", 33);
    i0.ɵɵtext(6, "Choose object");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(7, ObjectCreateComponent_Conditional_15_Conditional_13_For_8_Template, 2, 3, "option", 18, _forTrack0);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("value", ctx_r0.cloneSourceId());
    i0.ɵɵadvance(4);
    i0.ɵɵrepeater(ctx_r0.userObjectOptions());
} }
function ObjectCreateComponent_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 9)(1, "header", 26)(2, "h4");
    i0.ɵɵtext(3, "Creation Mode");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5, "Select how this business object should be initialized.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 27)(7, "button", 28);
    i0.ɵɵlistener("click", function ObjectCreateComponent_Conditional_15_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.setCreationMode("new")); });
    i0.ɵɵtext(8, " New Object ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "button", 29);
    i0.ɵɵlistener("click", function ObjectCreateComponent_Conditional_15_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.setCreationMode("clone")); });
    i0.ɵɵtext(10, " Clone Existing ");
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(11, ObjectCreateComponent_Conditional_15_Conditional_11_Template, 2, 0, "p", 30)(12, ObjectCreateComponent_Conditional_15_Conditional_12_Template, 2, 0, "p", 30)(13, ObjectCreateComponent_Conditional_15_Conditional_13_Template, 9, 1, "label", 12);
    i0.ɵɵelementStart(14, "p", 31);
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵclassProp("object-mode__btn--active", ctx_r0.creationMode() === "new");
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("object-mode__btn--active", ctx_r0.creationMode() === "clone");
    i0.ɵɵproperty("disabled", ctx_r0.isLoadingCloneOptions() || !ctx_r0.userObjectOptions().length);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r0.isLoadingCloneOptions() ? 11 : !ctx_r0.userObjectOptions().length ? 12 : ctx_r0.creationMode() === "clone" ? 13 : -1);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r0.modeHelpText());
} }
function ObjectCreateComponent_Conditional_49_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.formErrorMessage());
} }
function ObjectCreateComponent_Conditional_50_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 20);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.formSuccessMessage());
} }
function ObjectCreateComponent_Conditional_53_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Saving... ");
} }
function ObjectCreateComponent_Conditional_54_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Save Object ");
} }
export class ObjectCreateComponent {
    objectService = inject(ObjectService);
    businessService = inject(BusinessService);
    fb = inject(FormBuilder);
    selectedBusinessId = this.businessService.selectedBusinessId;
    workspaceLabel = computed(() => this.businessService.selectedBusiness()?.name ?? 'Default', ...(ngDevMode ? [{ debugName: "workspaceLabel" }] : []));
    isBusinessWorkspace = computed(() => this.selectedBusinessId() !== 'default', ...(ngDevMode ? [{ debugName: "isBusinessWorkspace" }] : []));
    workspaceModeLabel = computed(() => this.isBusinessWorkspace() ? 'Business Workspace' : 'Default Object Library', ...(ngDevMode ? [{ debugName: "workspaceModeLabel" }] : []));
    creationMode = signal('new', ...(ngDevMode ? [{ debugName: "creationMode" }] : []));
    cloneSourceId = signal('', ...(ngDevMode ? [{ debugName: "cloneSourceId" }] : []));
    isLoadingCloneOptions = signal(false, ...(ngDevMode ? [{ debugName: "isLoadingCloneOptions" }] : []));
    userObjectOptions = signal([], ...(ngDevMode ? [{ debugName: "userObjectOptions" }] : []));
    isSubmitting = signal(false, ...(ngDevMode ? [{ debugName: "isSubmitting" }] : []));
    formErrorMessage = signal('', ...(ngDevMode ? [{ debugName: "formErrorMessage" }] : []));
    formSuccessMessage = signal('', ...(ngDevMode ? [{ debugName: "formSuccessMessage" }] : []));
    cloneOptionCount = computed(() => this.userObjectOptions().length, ...(ngDevMode ? [{ debugName: "cloneOptionCount" }] : []));
    modeHelpText = computed(() => {
        if (!this.isBusinessWorkspace()) {
            return 'Objects created here become reusable templates for all businesses.';
        }
        return this.creationMode() === 'clone'
            ? 'Clone pulls from your user object library and pre-fills this form for faster setup.'
            : 'Create a business-specific object from scratch with your own schema definition.';
    }, ...(ngDevMode ? [{ debugName: "modeHelpText" }] : []));
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
    setCreationMode(mode) {
        this.creationMode.set(mode);
        this.cloneSourceId.set('');
        this.formErrorMessage.set('');
        this.formSuccessMessage.set('');
        this.resetForm();
        if (mode === 'clone') {
            this.loadCloneOptions();
        }
    }
    onCloneSourceSelect(sourceObjectId) {
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
        const payload = {
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
                this.formSuccessMessage.set(this.creationMode() === 'clone'
                    ? 'Object cloned and assigned successfully.'
                    : 'Object created successfully.');
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
    loadCloneOptions() {
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
    buildCloneDraft(sourceObject) {
        const existingNames = new Set(this.userObjectOptions()
            .map((item) => (item.name || '').trim().toLowerCase())
            .filter((name) => name.length > 0));
        const existingKeys = new Set(this.userObjectOptions()
            .map((item) => this.normalizeKey(item.key || item.name))
            .filter((key) => key.length > 0));
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
    ensureUniqueName(baseName, existingNames) {
        let candidate = baseName || 'Object Copy';
        let counter = 2;
        while (existingNames.has(candidate.toLowerCase())) {
            candidate = `${baseName} ${counter}`;
            counter += 1;
        }
        return candidate;
    }
    ensureUniqueKey(baseKey, existingKeys) {
        let candidate = this.normalizeKey(baseKey) || 'object_copy';
        let counter = 2;
        while (existingKeys.has(candidate)) {
            candidate = this.normalizeKey(`${baseKey}_${counter}`);
            counter += 1;
        }
        return candidate || 'object_copy';
    }
    normalizeKey(value) {
        return String(value || '')
            .trim()
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '_')
            .replace(/^_+|_+$/g, '')
            .slice(0, 64);
    }
    resetForm() {
        this.createObjectForm.reset({
            name: '',
            key: '',
            description: '',
            status: 1,
        });
    }
    static ɵfac = function ObjectCreateComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ObjectCreateComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ObjectCreateComponent, selectors: [["app-object-create-component"]], decls: 74, vars: 11, consts: [["cloneSourceSelect", ""], [1, "object-create-shell"], [1, "object-create-header"], [1, "object-create-kicker"], [1, "object-create-title"], [1, "object-create-subtitle"], [1, "object-create-badges"], [1, "object-create-layout"], [1, "object-create-form", 3, "ngSubmit", "formGroup"], [1, "object-mode"], [1, "object-form-section"], [1, "object-form-grid"], [1, "object-form__field"], ["type", "text", "formControlName", "name", "placeholder", "Example: Properties"], ["type", "text", "formControlName", "key", "placeholder", "properties"], ["formControlName", "description", "rows", "4", "placeholder", "What this object represents in your CRM"], [1, "object-form__field", "object-form__field--status"], ["formControlName", "status"], [3, "value"], [1, "object-form__error"], [1, "object-form__success"], [1, "object-form__actions"], ["type", "submit", 1, "object-submit-btn", 3, "disabled"], [1, "object-create-aside"], [1, "object-aside-card"], [1, "object-aside-card", "object-aside-card--note"], [1, "object-mode__header"], [1, "object-mode__toggle"], ["type", "button", 1, "object-mode__btn", 3, "click"], ["type", "button", 1, "object-mode__btn", 3, "click", "disabled"], [1, "object-mode__hint"], [1, "object-mode__note"], [3, "change", "value"], ["value", ""]], template: function ObjectCreateComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 1)(1, "header", 2)(2, "div")(3, "p", 3);
            i0.ɵɵtext(4, "Objects");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "h2", 4);
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "p", 5);
            i0.ɵɵtext(8, " Structured CRM object setup with reusable schema strategy. ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "div", 6)(10, "span");
            i0.ɵɵtext(11);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(12, ObjectCreateComponent_Conditional_12_Template, 2, 1, "span");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(13, "div", 7)(14, "form", 8);
            i0.ɵɵlistener("ngSubmit", function ObjectCreateComponent_Template_form_ngSubmit_14_listener() { return ctx.submitCreateObject(); });
            i0.ɵɵconditionalCreate(15, ObjectCreateComponent_Conditional_15_Template, 16, 7, "section", 9);
            i0.ɵɵelementStart(16, "section", 10)(17, "header")(18, "h4");
            i0.ɵɵtext(19, "Identity");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "p");
            i0.ɵɵtext(21, "Core naming and key used in routes, pivots, and integrations.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(22, "div", 11)(23, "label", 12)(24, "span");
            i0.ɵɵtext(25, "Object Name");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(26, "input", 13);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "label", 12)(28, "span");
            i0.ɵɵtext(29, "Object Key (optional)");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(30, "input", 14);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(31, "section", 10)(32, "header")(33, "h4");
            i0.ɵɵtext(34, "Behavior");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(35, "p");
            i0.ɵɵtext(36, "Describe use case and activation state for this object.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(37, "label", 12)(38, "span");
            i0.ɵɵtext(39, "Description");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(40, "textarea", 15);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(41, "label", 16)(42, "span");
            i0.ɵɵtext(43, "Status");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(44, "select", 17)(45, "option", 18);
            i0.ɵɵtext(46, "Active");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(47, "option", 18);
            i0.ɵɵtext(48, "Inactive");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵconditionalCreate(49, ObjectCreateComponent_Conditional_49_Template, 2, 1, "p", 19);
            i0.ɵɵconditionalCreate(50, ObjectCreateComponent_Conditional_50_Template, 2, 1, "p", 20);
            i0.ɵɵelementStart(51, "footer", 21)(52, "button", 22);
            i0.ɵɵconditionalCreate(53, ObjectCreateComponent_Conditional_53_Template, 1, 0)(54, ObjectCreateComponent_Conditional_54_Template, 1, 0);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(55, "aside", 23)(56, "article", 24)(57, "h4");
            i0.ɵɵtext(58, "Recommended Workflow");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(59, "ol")(60, "li");
            i0.ɵɵtext(61, "Create stable object key with clear naming.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(62, "li");
            i0.ɵɵtext(63, "Configure fields from Settings > Fields.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(64, "li");
            i0.ɵɵtext(65, "Use object page to start adding live records.");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(66, "article", 25)(67, "h4");
            i0.ɵɵtext(68, "Key Standard");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(69, "p");
            i0.ɵɵtext(70, " Keep keys lowercase with underscores (for example: ");
            i0.ɵɵelementStart(71, "code");
            i0.ɵɵtext(72, "sales_deal");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(73, ") to maintain clean API, route, and analytics compatibility. ");
            i0.ɵɵelementEnd()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate1("Create Object for ", ctx.workspaceLabel());
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.workspaceModeLabel());
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.isBusinessWorkspace() ? 12 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("formGroup", ctx.createObjectForm);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.isBusinessWorkspace() ? 15 : -1);
            i0.ɵɵadvance(30);
            i0.ɵɵproperty("value", 1);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("value", 0);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.formErrorMessage() ? 49 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.formSuccessMessage() ? 50 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", ctx.createObjectForm.invalid || ctx.isSubmitting());
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.isSubmitting() ? 53 : 54);
        } }, dependencies: [CommonModule, ReactiveFormsModule, i1.ɵNgNoValidate, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.DefaultValueAccessor, i1.SelectControlValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.object-create-shell[_ngcontent-%COMP%] {\n  border: 1px solid color-mix(in srgb, var(--theme-border) 58%, white);\n  border-radius: 18px;\n  background:\n    radial-gradient(circle at top right, color-mix(in srgb, var(--theme-primary) 12%, transparent), transparent 45%),\n    color-mix(in srgb, var(--theme-bg-surface) 98%, transparent);\n  padding: 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.object-create-header[_ngcontent-%COMP%] {\n  padding-bottom: 11px;\n  border-bottom: 1px solid color-mix(in srgb, var(--theme-border) 52%, white);\n  display: flex;\n  justify-content: space-between;\n  gap: 12px;\n}\n\n.object-create-kicker[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 10px;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  font-weight: 700;\n  color: var(--theme-text-muted);\n}\n\n.object-create-title[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  font-size: 21px;\n  color: var(--theme-text-primary);\n}\n\n.object-create-subtitle[_ngcontent-%COMP%] {\n  margin: 6px 0 0;\n  font-size: 12px;\n  color: var(--theme-text-muted);\n}\n\n.object-create-badges[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: flex-start;\n  flex-wrap: wrap;\n}\n\n.object-create-badges[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  border-radius: 999px;\n  border: 1px solid color-mix(in srgb, var(--theme-primary) 42%, white);\n  background: color-mix(in srgb, var(--theme-primary) 10%, white);\n  color: var(--theme-primary);\n  font-size: 10px;\n  font-weight: 700;\n  padding: 4px 8px;\n}\n\n.object-create-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1.6fr) minmax(230px, 1fr);\n  gap: 12px;\n}\n\n.object-create-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.object-mode[_ngcontent-%COMP%], \n.object-form-section[_ngcontent-%COMP%], \n.object-aside-card[_ngcontent-%COMP%] {\n  border: 1px solid color-mix(in srgb, var(--theme-border) 58%, white);\n  border-radius: 12px;\n  background: color-mix(in srgb, var(--theme-bg-surface) 96%, white);\n  padding: 10px;\n}\n\n.object-mode[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.object-mode__header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], \n.object-form-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], \n.object-aside-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  color: var(--theme-text-primary);\n}\n\n.object-mode__header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.object-form-section[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.object-aside-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  font-size: 11px;\n  color: var(--theme-text-muted);\n  line-height: 1.5;\n}\n\n.object-mode__toggle[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 8px;\n}\n\n.object-mode__btn[_ngcontent-%COMP%] {\n  border: 1px solid color-mix(in srgb, var(--theme-border) 62%, white);\n  border-radius: 9px;\n  background: var(--theme-bg-surface);\n  color: var(--theme-text-secondary);\n  min-height: 34px;\n  font-size: 12px;\n  font-weight: 700;\n  cursor: pointer;\n}\n\n.object-mode__btn--active[_ngcontent-%COMP%] {\n  color: var(--theme-text-primary);\n  border-color: color-mix(in srgb, var(--theme-primary) 45%, white);\n  background: color-mix(in srgb, var(--theme-primary) 13%, white);\n}\n\n.object-mode__btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.object-mode__hint[_ngcontent-%COMP%], \n.object-mode__note[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 11px;\n  color: var(--theme-text-muted);\n}\n\n.object-mode__note[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  border: 1px solid color-mix(in srgb, var(--theme-primary) 36%, white);\n  background: color-mix(in srgb, var(--theme-primary) 8%, white);\n  color: var(--theme-text-secondary);\n  padding: 6px 8px;\n}\n\n.object-form-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.object-form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 8px;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n\n.object-form__field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n\n.object-form__field--status[_ngcontent-%COMP%] {\n  max-width: 220px;\n}\n\n.object-form__field[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--theme-text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n}\n\n.object-form__field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.object-form__field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], \n.object-form__field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  border-radius: 9px;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 62%, white);\n  background: color-mix(in srgb, var(--theme-bg-surface) 94%, white);\n  color: var(--theme-text-primary);\n  padding: 9px 10px;\n  font-size: 13px;\n}\n\n.object-form__field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n\n.object-form__field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus-visible, \n.object-form__field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus-visible, \n.object-form__field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus-visible {\n  outline: none;\n  border-color: color-mix(in srgb, var(--theme-primary) 48%, white);\n  box-shadow: 0 0 0 3px color-mix(in srgb, var(--theme-primary) 16%, transparent);\n}\n\n.object-form__error[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 9px 10px;\n  border-radius: 9px;\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--theme-danger);\n  background: color-mix(in srgb, var(--theme-danger) 11%, white);\n}\n\n.object-form__success[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 9px 10px;\n  border-radius: 9px;\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--theme-success);\n  background: color-mix(in srgb, var(--theme-success) 11%, white);\n}\n\n.object-form__actions[_ngcontent-%COMP%] {\n  margin-top: 2px;\n  display: flex;\n  justify-content: flex-end;\n}\n\n.object-submit-btn[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 9px;\n  padding: 9px 13px;\n  font-size: 12px;\n  font-weight: 700;\n  cursor: pointer;\n  color: var(--theme-primary-contrast);\n  background: linear-gradient(120deg, var(--theme-primary), var(--theme-accent-end));\n}\n\n.object-submit-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n\n.object-create-aside[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.object-aside-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n\n.object-aside-card[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  margin: 2px 0 0;\n  padding-left: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  color: var(--theme-text-secondary);\n  font-size: 12px;\n}\n\n.object-aside-card[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--theme-primary);\n}\n\n.object-aside-card--note[_ngcontent-%COMP%] {\n  border-color: color-mix(in srgb, var(--theme-primary) 36%, white);\n  background: color-mix(in srgb, var(--theme-primary) 7%, white);\n}\n\n@media (max-width: 1020px) {\n  .object-create-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n@media (max-width: 700px) {\n  .object-create-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .object-form-grid[_ngcontent-%COMP%], \n   .object-mode__toggle[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .object-form__field--status[_ngcontent-%COMP%] {\n    max-width: none;\n  }\n}\n\n@media (max-width: 620px) {\n  .object-create-shell[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ObjectCreateComponent, [{
        type: Component,
        args: [{ selector: 'app-object-create-component', imports: [CommonModule, ReactiveFormsModule], template: "<section class=\"object-create-shell\">\n  <header class=\"object-create-header\">\n    <div>\n      <p class=\"object-create-kicker\">Objects</p>\n      <h2 class=\"object-create-title\">Create Object for {{ workspaceLabel() }}</h2>\n      <p class=\"object-create-subtitle\">\n        Structured CRM object setup with reusable schema strategy.\n      </p>\n    </div>\n\n    <div class=\"object-create-badges\">\n      <span>{{ workspaceModeLabel() }}</span>\n      @if (isBusinessWorkspace()) {\n      <span>{{ cloneOptionCount() }} Reusable Templates</span>\n      }\n    </div>\n  </header>\n\n  <div class=\"object-create-layout\">\n    <form [formGroup]=\"createObjectForm\" (ngSubmit)=\"submitCreateObject()\" class=\"object-create-form\">\n      @if (isBusinessWorkspace()) {\n      <section class=\"object-mode\">\n        <header class=\"object-mode__header\">\n          <h4>Creation Mode</h4>\n          <p>Select how this business object should be initialized.</p>\n        </header>\n\n        <div class=\"object-mode__toggle\">\n          <button type=\"button\" class=\"object-mode__btn\" [class.object-mode__btn--active]=\"creationMode() === 'new'\"\n            (click)=\"setCreationMode('new')\">\n            New Object\n          </button>\n          <button type=\"button\" class=\"object-mode__btn\" [class.object-mode__btn--active]=\"creationMode() === 'clone'\"\n            [disabled]=\"isLoadingCloneOptions() || !userObjectOptions().length\" (click)=\"setCreationMode('clone')\">\n            Clone Existing\n          </button>\n        </div>\n\n        @if (isLoadingCloneOptions()) {\n        <p class=\"object-mode__hint\">Loading reusable object templates...</p>\n        } @else if (!userObjectOptions().length) {\n        <p class=\"object-mode__hint\">No reusable templates found in your user library yet.</p>\n        } @else if (creationMode() === 'clone') {\n        <label class=\"object-form__field\">\n          <span>Select Template Object</span>\n          <select #cloneSourceSelect [value]=\"cloneSourceId()\" (change)=\"onCloneSourceSelect(cloneSourceSelect.value)\">\n            <option value=\"\">Choose object</option>\n            @for (sourceObject of userObjectOptions(); track sourceObject.id) {\n            <option [value]=\"sourceObject.id\">{{ sourceObject.name }} ({{ sourceObject.key }})</option>\n            }\n          </select>\n        </label>\n        }\n\n        <p class=\"object-mode__note\">{{ modeHelpText() }}</p>\n      </section>\n      }\n\n      <section class=\"object-form-section\">\n        <header>\n          <h4>Identity</h4>\n          <p>Core naming and key used in routes, pivots, and integrations.</p>\n        </header>\n\n        <div class=\"object-form-grid\">\n          <label class=\"object-form__field\">\n            <span>Object Name</span>\n            <input type=\"text\" formControlName=\"name\" placeholder=\"Example: Properties\" />\n          </label>\n\n          <label class=\"object-form__field\">\n            <span>Object Key (optional)</span>\n            <input type=\"text\" formControlName=\"key\" placeholder=\"properties\" />\n          </label>\n        </div>\n      </section>\n\n      <section class=\"object-form-section\">\n        <header>\n          <h4>Behavior</h4>\n          <p>Describe use case and activation state for this object.</p>\n        </header>\n\n        <label class=\"object-form__field\">\n          <span>Description</span>\n          <textarea formControlName=\"description\" rows=\"4\"\n            placeholder=\"What this object represents in your CRM\"></textarea>\n        </label>\n\n        <label class=\"object-form__field object-form__field--status\">\n          <span>Status</span>\n          <select formControlName=\"status\">\n            <option [value]=\"1\">Active</option>\n            <option [value]=\"0\">Inactive</option>\n          </select>\n        </label>\n      </section>\n\n      @if (formErrorMessage()) {\n      <p class=\"object-form__error\">{{ formErrorMessage() }}</p>\n      }\n\n      @if (formSuccessMessage()) {\n      <p class=\"object-form__success\">{{ formSuccessMessage() }}</p>\n      }\n\n      <footer class=\"object-form__actions\">\n        <button type=\"submit\" [disabled]=\"createObjectForm.invalid || isSubmitting()\" class=\"object-submit-btn\">\n          @if (isSubmitting()) {\n          Saving...\n          } @else {\n          Save Object\n          }\n        </button>\n      </footer>\n    </form>\n\n    <aside class=\"object-create-aside\">\n      <article class=\"object-aside-card\">\n        <h4>Recommended Workflow</h4>\n        <ol>\n          <li>Create stable object key with clear naming.</li>\n          <li>Configure fields from Settings &gt; Fields.</li>\n          <li>Use object page to start adding live records.</li>\n        </ol>\n      </article>\n\n      <article class=\"object-aside-card object-aside-card--note\">\n        <h4>Key Standard</h4>\n        <p>\n          Keep keys lowercase with underscores (for example: <code>sales_deal</code>)\n          to maintain clean API, route, and analytics compatibility.\n        </p>\n      </article>\n    </aside>\n  </div>\n</section>\n", styles: [":host {\n  display: block;\n}\n\n.object-create-shell {\n  border: 1px solid color-mix(in srgb, var(--theme-border) 58%, white);\n  border-radius: 18px;\n  background:\n    radial-gradient(circle at top right, color-mix(in srgb, var(--theme-primary) 12%, transparent), transparent 45%),\n    color-mix(in srgb, var(--theme-bg-surface) 98%, transparent);\n  padding: 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.object-create-header {\n  padding-bottom: 11px;\n  border-bottom: 1px solid color-mix(in srgb, var(--theme-border) 52%, white);\n  display: flex;\n  justify-content: space-between;\n  gap: 12px;\n}\n\n.object-create-kicker {\n  margin: 0;\n  font-size: 10px;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  font-weight: 700;\n  color: var(--theme-text-muted);\n}\n\n.object-create-title {\n  margin: 4px 0 0;\n  font-size: 21px;\n  color: var(--theme-text-primary);\n}\n\n.object-create-subtitle {\n  margin: 6px 0 0;\n  font-size: 12px;\n  color: var(--theme-text-muted);\n}\n\n.object-create-badges {\n  display: flex;\n  gap: 8px;\n  align-items: flex-start;\n  flex-wrap: wrap;\n}\n\n.object-create-badges span {\n  border-radius: 999px;\n  border: 1px solid color-mix(in srgb, var(--theme-primary) 42%, white);\n  background: color-mix(in srgb, var(--theme-primary) 10%, white);\n  color: var(--theme-primary);\n  font-size: 10px;\n  font-weight: 700;\n  padding: 4px 8px;\n}\n\n.object-create-layout {\n  display: grid;\n  grid-template-columns: minmax(0, 1.6fr) minmax(230px, 1fr);\n  gap: 12px;\n}\n\n.object-create-form {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.object-mode,\n.object-form-section,\n.object-aside-card {\n  border: 1px solid color-mix(in srgb, var(--theme-border) 58%, white);\n  border-radius: 12px;\n  background: color-mix(in srgb, var(--theme-bg-surface) 96%, white);\n  padding: 10px;\n}\n\n.object-mode {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.object-mode__header h4,\n.object-form-section h4,\n.object-aside-card h4 {\n  margin: 0;\n  font-size: 13px;\n  color: var(--theme-text-primary);\n}\n\n.object-mode__header p,\n.object-form-section header p,\n.object-aside-card p {\n  margin: 4px 0 0;\n  font-size: 11px;\n  color: var(--theme-text-muted);\n  line-height: 1.5;\n}\n\n.object-mode__toggle {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 8px;\n}\n\n.object-mode__btn {\n  border: 1px solid color-mix(in srgb, var(--theme-border) 62%, white);\n  border-radius: 9px;\n  background: var(--theme-bg-surface);\n  color: var(--theme-text-secondary);\n  min-height: 34px;\n  font-size: 12px;\n  font-weight: 700;\n  cursor: pointer;\n}\n\n.object-mode__btn--active {\n  color: var(--theme-text-primary);\n  border-color: color-mix(in srgb, var(--theme-primary) 45%, white);\n  background: color-mix(in srgb, var(--theme-primary) 13%, white);\n}\n\n.object-mode__btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.object-mode__hint,\n.object-mode__note {\n  margin: 0;\n  font-size: 11px;\n  color: var(--theme-text-muted);\n}\n\n.object-mode__note {\n  border-radius: 8px;\n  border: 1px solid color-mix(in srgb, var(--theme-primary) 36%, white);\n  background: color-mix(in srgb, var(--theme-primary) 8%, white);\n  color: var(--theme-text-secondary);\n  padding: 6px 8px;\n}\n\n.object-form-section {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.object-form-grid {\n  display: grid;\n  gap: 8px;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n\n.object-form__field {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n\n.object-form__field--status {\n  max-width: 220px;\n}\n\n.object-form__field > span {\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--theme-text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n}\n\n.object-form__field input,\n.object-form__field textarea,\n.object-form__field select {\n  border-radius: 9px;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 62%, white);\n  background: color-mix(in srgb, var(--theme-bg-surface) 94%, white);\n  color: var(--theme-text-primary);\n  padding: 9px 10px;\n  font-size: 13px;\n}\n\n.object-form__field textarea {\n  resize: vertical;\n}\n\n.object-form__field input:focus-visible,\n.object-form__field textarea:focus-visible,\n.object-form__field select:focus-visible {\n  outline: none;\n  border-color: color-mix(in srgb, var(--theme-primary) 48%, white);\n  box-shadow: 0 0 0 3px color-mix(in srgb, var(--theme-primary) 16%, transparent);\n}\n\n.object-form__error {\n  margin: 0;\n  padding: 9px 10px;\n  border-radius: 9px;\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--theme-danger);\n  background: color-mix(in srgb, var(--theme-danger) 11%, white);\n}\n\n.object-form__success {\n  margin: 0;\n  padding: 9px 10px;\n  border-radius: 9px;\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--theme-success);\n  background: color-mix(in srgb, var(--theme-success) 11%, white);\n}\n\n.object-form__actions {\n  margin-top: 2px;\n  display: flex;\n  justify-content: flex-end;\n}\n\n.object-submit-btn {\n  border: none;\n  border-radius: 9px;\n  padding: 9px 13px;\n  font-size: 12px;\n  font-weight: 700;\n  cursor: pointer;\n  color: var(--theme-primary-contrast);\n  background: linear-gradient(120deg, var(--theme-primary), var(--theme-accent-end));\n}\n\n.object-submit-btn:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n\n.object-create-aside {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.object-aside-card {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n\n.object-aside-card ol {\n  margin: 2px 0 0;\n  padding-left: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  color: var(--theme-text-secondary);\n  font-size: 12px;\n}\n\n.object-aside-card code {\n  font-size: 11px;\n  color: var(--theme-primary);\n}\n\n.object-aside-card--note {\n  border-color: color-mix(in srgb, var(--theme-primary) 36%, white);\n  background: color-mix(in srgb, var(--theme-primary) 7%, white);\n}\n\n@media (max-width: 1020px) {\n  .object-create-layout {\n    grid-template-columns: 1fr;\n  }\n}\n\n@media (max-width: 700px) {\n  .object-create-header {\n    flex-direction: column;\n  }\n\n  .object-form-grid,\n  .object-mode__toggle {\n    grid-template-columns: 1fr;\n  }\n\n  .object-form__field--status {\n    max-width: none;\n  }\n}\n\n@media (max-width: 620px) {\n  .object-create-shell {\n    padding: 12px;\n  }\n}\n"] }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ObjectCreateComponent, { className: "ObjectCreateComponent", filePath: "avyra-crm/src/app/shared/components/objects/object-create-component/object-create-component.ts", lineNumber: 15 }); })();
