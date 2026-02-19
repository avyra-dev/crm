import { CommonModule } from '@angular/common';
import { Component, computed, effect, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ThemeService } from '../../../../services/theme.service';
import { BusinessService } from '../../../../services/business.service';
import { ObjectCreateComponent } from '../../../components/objects/object-create-component/object-create-component';
import { FieldLibraryComponent } from '../../../components/fields/field-library-component/field-library-component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
const _forTrack0 = ($index, $item) => $item.id;
const _forTrack1 = ($index, $item) => $item.key;
function SettingsPage_For_17_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 18);
    i0.ɵɵlistener("click", function SettingsPage_For_17_Template_button_click_0_listener() { const tab_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.setActiveTab(tab_r2)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tab_r2 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("settings-tab--active", ctx_r2.activeTab === tab_r2);
    i0.ɵɵattribute("aria-selected", ctx_r2.activeTab === tab_r2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", tab_r2, " ");
} }
function SettingsPage_Conditional_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 12)(1, "header", 19)(2, "span", 20);
    i0.ɵɵtext(3, "Preview");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "h2", 21);
    i0.ɵɵtext(5, "Live Theme Snapshot");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 22);
    i0.ɵɵelement(7, "div", 23);
    i0.ɵɵelementStart(8, "div", 24)(9, "p", 25);
    i0.ɵɵtext(10, "Dashboard heading");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "p", 26);
    i0.ɵɵtext(12, "Muted helper text for forms and hints.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "div", 27)(14, "span", 28);
    i0.ɵɵtext(15, "Primary");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "span", 29);
    i0.ɵɵtext(17, "Surface");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "span", 30);
    i0.ɵɵtext(19, "Danger");
    i0.ɵɵelementEnd()()()();
} }
function SettingsPage_Conditional_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 13)(1, "header", 19)(2, "span", 20);
    i0.ɵɵtext(3, "Objects");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "h2", 21);
    i0.ɵɵtext(5, "Reuse Across Businesses");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 31)(7, "p", 25);
    i0.ɵɵtext(8, "How object assignment works");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "p", 26);
    i0.ɵɵtext(10, " 1. Create user-owned objects. ");
    i0.ɵɵelement(11, "br");
    i0.ɵɵtext(12, " 2. Clone and edit when adding into a business. ");
    i0.ɵɵelement(13, "br");
    i0.ɵɵtext(14, " 3. Keep one reusable library for all workspaces. ");
    i0.ɵɵelementEnd()()();
} }
function SettingsPage_Conditional_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 14)(1, "header", 19)(2, "span", 20);
    i0.ɵɵtext(3, "Fields");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "h2", 21);
    i0.ɵɵtext(5, "Schema + Mapping");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 31)(7, "p", 25);
    i0.ɵɵtext(8, "Recommended field workflow");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "p", 26);
    i0.ɵɵtext(10, " 1. Create fields in default workspace. ");
    i0.ɵɵelement(11, "br");
    i0.ɵɵtext(12, " 2. In business workspace, create and map directly to business objects. ");
    i0.ɵɵelement(13, "br");
    i0.ɵɵtext(14, " 3. Use default workspace for cross-business reusable mappings. ");
    i0.ɵɵelementEnd()()();
} }
function SettingsPage_Conditional_22_For_8_For_8_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 45)(1, "span", 46)(2, "span", 47);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 48);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "code", 49);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "span", 50)(9, "input", 51);
    i0.ɵɵlistener("ngModelChange", function SettingsPage_Conditional_22_For_8_For_8_Template_input_ngModelChange_9_listener($event) { const field_r6 = i0.ɵɵrestoreView(_r5).$implicit; const ctx_r2 = i0.ɵɵnextContext(3); ctx_r2.onTokenInput(field_r6.key, $event); return i0.ɵɵresetView(ctx_r2.applyToken(field_r6.key, $event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "input", 52);
    i0.ɵɵlistener("ngModelChange", function SettingsPage_Conditional_22_For_8_For_8_Template_input_ngModelChange_10_listener($event) { const field_r6 = i0.ɵɵrestoreView(_r5).$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.onTokenInput(field_r6.key, $event)); })("blur", function SettingsPage_Conditional_22_For_8_For_8_Template_input_blur_10_listener() { const field_r6 = i0.ɵɵrestoreView(_r5).$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.applyToken(field_r6.key, ctx_r2.themeDraft[field_r6.key])); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const field_r6 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(field_r6.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(field_r6.hint);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(field_r6.key);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", ctx_r2.themeDraft[field_r6.key])("name", "color-" + field_r6.key);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngModel", ctx_r2.themeDraft[field_r6.key])("name", "text-" + field_r6.key);
} }
function SettingsPage_Conditional_22_For_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 37)(1, "header", 41)(2, "h3", 42);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p", 43);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 44);
    i0.ɵɵrepeaterCreate(7, SettingsPage_Conditional_22_For_8_For_8_Template, 11, 7, "label", 45, _forTrack1);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const section_r7 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(section_r7.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(section_r7.description);
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(section_r7.fields);
} }
function SettingsPage_Conditional_22_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 32);
    i0.ɵɵlistener("ngSubmit", function SettingsPage_Conditional_22_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.applyAll()); });
    i0.ɵɵelementStart(1, "header", 33)(2, "h2", 34);
    i0.ɵɵtext(3, "Theme Tokens");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p", 35);
    i0.ɵɵtext(5, "Edit values and apply instantly across your dashboard UI.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 36);
    i0.ɵɵrepeaterCreate(7, SettingsPage_Conditional_22_For_8_Template, 9, 2, "section", 37, _forTrack0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 38)(10, "button", 39);
    i0.ɵɵtext(11, "Apply All");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "button", 40);
    i0.ɵɵlistener("click", function SettingsPage_Conditional_22_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.resetTheme()); });
    i0.ɵɵtext(13, "Reset Default");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵrepeater(ctx_r2.themeSections);
} }
function SettingsPage_Conditional_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-object-create-component");
} }
function SettingsPage_Conditional_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-field-library-component");
} }
function SettingsPage_Conditional_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 17)(1, "h2", 34);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 35);
    i0.ɵɵtext(4, " This module is reserved for your next implementation phase. ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.activeTab);
} }
export class SettingsPage {
    themeService = inject(ThemeService);
    businessService = inject(BusinessService);
    route = inject(ActivatedRoute);
    tabs = ['Theme', 'Objects', 'Fields', 'Integrations', 'Account', 'Billing'];
    activeTab = 'Theme';
    activeThemeScopeLabel = computed(() => this.businessService.selectedBusiness()?.name ?? 'Default', ...(ngDevMode ? [{ debugName: "activeThemeScopeLabel" }] : []));
    headerSubtitle = computed(() => this.activeTab === 'Theme'
        ? 'Professional controls for your dashboard theme system.'
        : this.activeTab === 'Objects'
            ? 'Create and reuse CRM objects that can be assigned per business.'
            : this.activeTab === 'Fields'
                ? 'Manage reusable user-owned fields and object mappings.'
                : 'Configuration surface for upcoming workspace modules.', ...(ngDevMode ? [{ debugName: "headerSubtitle" }] : []));
    headerNote = computed(() => this.activeTab === 'Theme'
        ? `Apply All saves theme for ${this.activeThemeScopeLabel()} workspace`
        : this.activeTab === 'Objects'
            ? this.businessService.selectedBusiness()
                ? `Objects created here are assigned to ${this.activeThemeScopeLabel()} workspace`
                : 'Objects created here are saved to your reusable user library'
            : this.activeTab === 'Fields'
                ? this.businessService.selectedBusiness()
                    ? `Fields created here are mapped to objects in ${this.activeThemeScopeLabel()}`
                    : 'Field schema created here is reusable and can be mapped to any object/business'
                : `Coming soon for ${this.activeTab}`, ...(ngDevMode ? [{ debugName: "headerNote" }] : []));
    themeDraft = this.themeService.getDefaultTheme();
    themeSections = [
        {
            id: 'Brand',
            title: 'Brand',
            description: 'Primary identity and gradient accents.',
            fields: [
                { key: 'primary', label: 'Primary', hint: 'Main action color' },
                { key: 'primaryHover', label: 'Primary Hover', hint: 'Primary button hover state' },
                { key: 'primaryContrast', label: 'Primary Contrast', hint: 'Text on primary surfaces' },
                { key: 'accentStart', label: 'Accent Start', hint: 'Gradient start color' },
                { key: 'accentEnd', label: 'Accent End', hint: 'Gradient end color' },
            ],
        },
        {
            id: 'Typography',
            title: 'Typography',
            description: 'Hierarchy for heading, body, and muted copy.',
            fields: [
                { key: 'textPrimary', label: 'Text Primary', hint: 'Main text color' },
                { key: 'textSecondary', label: 'Text Secondary', hint: 'Supportive text color' },
                { key: 'textMuted', label: 'Text Muted', hint: 'Muted labels and placeholders' },
            ],
        },
        {
            id: 'Surfaces',
            title: 'Surfaces',
            description: 'Background layers and border tone.',
            fields: [
                { key: 'bgApp', label: 'App Background', hint: 'Main app background' },
                { key: 'bgSurface', label: 'Surface Background', hint: 'Cards and panels' },
                { key: 'bgSurfaceSoft', label: 'Soft Surface', hint: 'Inputs and muted blocks' },
                { key: 'border', label: 'Border', hint: 'Default border color' },
            ],
        },
        {
            id: 'Status',
            title: 'Status',
            description: 'Feedback and destructive states.',
            fields: [
                { key: 'success', label: 'Success', hint: 'Success states' },
                { key: 'danger', label: 'Danger', hint: 'Error and destructive states' },
                { key: 'dangerHover', label: 'Danger Hover', hint: 'Danger hover state' },
            ],
        },
    ];
    constructor() {
        const requestedTab = this.resolveSettingsTab(this.route.snapshot.queryParamMap.get('tab'));
        if (requestedTab) {
            this.activeTab = requestedTab;
        }
        effect(() => {
            this.themeDraft = { ...this.themeService.theme() };
        });
    }
    setActiveTab(tab) {
        this.activeTab = tab;
    }
    onTokenInput(key, value) {
        this.themeDraft = {
            ...this.themeDraft,
            [key]: value,
        };
    }
    applyToken(key, value) {
        const updatedTheme = this.themeService.updateTheme({
            [key]: value.trim(),
        });
        this.themeDraft = { ...updatedTheme };
    }
    applyAll() {
        const updatedTheme = this.themeService.updateTheme(this.themeDraft);
        this.themeService.saveTheme(updatedTheme, this.businessService.selectedBusinessId());
        this.themeDraft = { ...updatedTheme };
    }
    resetTheme() {
        const defaultTheme = this.themeService.resetTheme();
        this.themeDraft = { ...defaultTheme };
    }
    resolveSettingsTab(value) {
        if (!value) {
            return null;
        }
        const normalized = value.trim().toLowerCase();
        return this.tabs.find((tab) => tab.toLowerCase() === normalized) ?? null;
    }
    static ɵfac = function SettingsPage_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SettingsPage)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SettingsPage, selectors: [["app-settings-page"]], decls: 26, vars: 5, consts: [[1, "settings-page"], [1, "settings-shell"], [1, "settings-header"], [1, "settings-header__brand"], ["aria-hidden", "true", 1, "settings-header__badge"], [1, "settings-title"], [1, "settings-subtitle"], [1, "settings-note"], [1, "settings-layout"], [1, "settings-aside"], ["role", "tablist", "aria-label", "Settings tabs", 1, "settings-tabs"], ["type", "button", "role", "tab", 1, "settings-tab", 3, "settings-tab--active"], ["aria-label", "Theme Preview", 1, "preview-card"], ["aria-label", "Objects Guidance", 1, "preview-card"], ["aria-label", "Fields Guidance", 1, "preview-card"], [1, "settings-content"], [1, "settings-form"], [1, "settings-placeholder"], ["type", "button", "role", "tab", 1, "settings-tab", 3, "click"], [1, "preview-card__header"], [1, "preview-card__chip"], [1, "preview-card__title"], [1, "preview-card__surface"], [1, "preview-card__topbar"], [1, "preview-card__text"], [1, "preview-card__headline"], [1, "preview-card__muted"], [1, "preview-card__actions"], [1, "preview-btn", "preview-btn--primary"], [1, "preview-btn", "preview-btn--surface"], [1, "preview-btn", "preview-btn--danger"], [1, "preview-card__surface", "objects-preview"], [1, "settings-form", 3, "ngSubmit"], [1, "editor-header"], [1, "editor-title"], [1, "editor-subtitle"], [1, "token-sections"], [1, "token-section"], [1, "settings-actions"], ["type", "submit", 1, "settings-apply-btn", "theme-primary-btn"], ["type", "button", 1, "settings-reset-btn", 3, "click"], [1, "token-section__header"], [1, "token-section__title"], [1, "token-section__description"], [1, "token-grid"], [1, "theme-field"], [1, "theme-field__meta"], [1, "theme-field__label"], [1, "theme-field__hint"], [1, "theme-field__key"], [1, "theme-field__controls"], ["type", "color", 1, "theme-field__color", 3, "ngModelChange", "ngModel", "name"], ["type", "text", "autocomplete", "off", "spellcheck", "false", 1, "theme-field__text", 3, "ngModelChange", "blur", "ngModel", "name"]], template: function SettingsPage_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0)(1, "div", 1)(2, "header", 2)(3, "div", 3)(4, "span", 4);
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "div")(7, "h1", 5);
            i0.ɵɵtext(8, "Workspace Settings");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "p", 6);
            i0.ɵɵtext(10);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(11, "p", 7);
            i0.ɵɵtext(12);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(13, "div", 8)(14, "aside", 9)(15, "div", 10);
            i0.ɵɵrepeaterCreate(16, SettingsPage_For_17_Template, 2, 4, "button", 11, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(18, SettingsPage_Conditional_18_Template, 20, 0, "section", 12)(19, SettingsPage_Conditional_19_Template, 15, 0, "section", 13)(20, SettingsPage_Conditional_20_Template, 15, 0, "section", 14);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "main", 15);
            i0.ɵɵconditionalCreate(22, SettingsPage_Conditional_22_Template, 14, 0, "form", 16)(23, SettingsPage_Conditional_23_Template, 1, 0, "app-object-create-component")(24, SettingsPage_Conditional_24_Template, 1, 0, "app-field-library-component")(25, SettingsPage_Conditional_25_Template, 5, 1, "section", 17);
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.activeTab.charAt(0));
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.headerSubtitle());
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.headerNote());
            i0.ɵɵadvance(4);
            i0.ɵɵrepeater(ctx.tabs);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.activeTab === "Theme" ? 18 : ctx.activeTab === "Objects" ? 19 : ctx.activeTab === "Fields" ? 20 : -1);
            i0.ɵɵadvance(4);
            i0.ɵɵconditional(ctx.activeTab === "Theme" ? 22 : ctx.activeTab === "Objects" ? 23 : ctx.activeTab === "Fields" ? 24 : 25);
        } }, dependencies: [CommonModule, FormsModule, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.NgModel, i1.NgForm, ObjectCreateComponent, FieldLibraryComponent], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.settings-page[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 86px);\n  padding: 14px 10px 24px;\n}\n\n.settings-shell[_ngcontent-%COMP%] {\n  max-width: 1240px;\n  margin: 0 auto;\n  border-radius: 24px;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 60%, white);\n  background: color-mix(in srgb, var(--theme-bg-surface) 94%, transparent);\n  box-shadow: 0 22px 60px rgba(15, 23, 42, 0.1);\n  position: relative;\n  overflow: hidden;\n}\n\n.settings-shell[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  inset: 0 0 auto;\n  height: 140px;\n  \n\n\n\n\n\n\n  pointer-events: none;\n}\n\n.settings-header[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  padding: 22px 24px 18px;\n  border-bottom: 1px solid color-mix(in srgb, var(--theme-border) 45%, white);\n  background: color-mix(in srgb, var(--theme-bg-surface) 96%, transparent);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 14px;\n}\n\n.settings-header__brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n\n.settings-header__badge[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 12px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--theme-primary-contrast);\n  background: linear-gradient(135deg, var(--theme-accent-start), var(--theme-accent-end));\n  box-shadow: 0 10px 20px color-mix(in srgb, var(--theme-primary) 28%, transparent);\n}\n\n.settings-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 25px;\n  line-height: 1.2;\n  letter-spacing: -0.02em;\n  color: var(--theme-text-primary);\n}\n\n.settings-subtitle[_ngcontent-%COMP%] {\n  margin: 6px 0 0;\n  font-size: 14px;\n  line-height: 1.45;\n  color: var(--theme-text-muted);\n}\n\n.settings-note[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 8px 12px;\n  border-radius: 999px;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 62%, white);\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--theme-text-secondary);\n  background: color-mix(in srgb, var(--theme-bg-surface-soft) 72%, white);\n}\n\n.settings-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 290px minmax(0, 1fr);\n  min-height: 620px;\n}\n\n.settings-aside[_ngcontent-%COMP%] {\n  padding: 18px 14px;\n  border-right: 1px solid color-mix(in srgb, var(--theme-border) 45%, white);\n  background: color-mix(in srgb, var(--theme-bg-surface) 90%, transparent);\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n\n.settings-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.settings-tab[_ngcontent-%COMP%] {\n  border: 1px solid color-mix(in srgb, var(--theme-border) 62%, white);\n  background: var(--theme-bg-surface);\n  color: var(--theme-text-secondary);\n  border-radius: 12px;\n  font-size: 13px;\n  font-weight: 700;\n  padding: 10px 12px;\n  text-align: left;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n\n.settings-tab[_ngcontent-%COMP%]:hover {\n  color: var(--theme-text-primary);\n  border-color: color-mix(in srgb, var(--theme-primary) 45%, white);\n}\n\n.settings-tab--active[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--theme-primary) 15%, white);\n  border-color: color-mix(in srgb, var(--theme-primary) 45%, white);\n  color: var(--theme-text-primary);\n}\n\n.preview-card[_ngcontent-%COMP%] {\n  border: 1px solid color-mix(in srgb, var(--theme-border) 60%, white);\n  border-radius: 16px;\n  padding: 14px;\n  background: var(--theme-bg-surface);\n  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.07);\n}\n\n.preview-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n  margin-bottom: 12px;\n}\n\n.preview-card__chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: fit-content;\n  border-radius: 999px;\n  padding: 4px 9px;\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--theme-primary);\n  background: color-mix(in srgb, var(--theme-primary) 14%, white);\n}\n\n.preview-card__title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--theme-text-primary);\n}\n\n.preview-card__surface[_ngcontent-%COMP%] {\n  border: 1px solid color-mix(in srgb, var(--theme-border) 65%, white);\n  border-radius: 14px;\n  overflow: hidden;\n  background: var(--theme-bg-surface);\n}\n\n.objects-preview[_ngcontent-%COMP%] {\n  padding: 12px;\n}\n\n.preview-card__topbar[_ngcontent-%COMP%] {\n  height: 6px;\n  background: linear-gradient(90deg, var(--theme-accent-start), var(--theme-accent-end));\n}\n\n.preview-card__text[_ngcontent-%COMP%] {\n  padding: 12px 12px 8px;\n}\n\n.preview-card__headline[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--theme-text-primary);\n}\n\n.preview-card__muted[_ngcontent-%COMP%] {\n  margin: 5px 0 0;\n  font-size: 12px;\n  line-height: 1.35;\n  color: var(--theme-text-muted);\n}\n\n.preview-card__actions[_ngcontent-%COMP%] {\n  padding: 0 12px 12px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n\n.preview-btn[_ngcontent-%COMP%] {\n  height: 28px;\n  border-radius: 999px;\n  padding: 0 11px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 700;\n}\n\n.preview-btn--primary[_ngcontent-%COMP%] {\n  background: var(--theme-primary);\n  color: var(--theme-primary-contrast);\n}\n\n.preview-btn--surface[_ngcontent-%COMP%] {\n  background: var(--theme-bg-surface-soft);\n  color: var(--theme-text-secondary);\n  border: 1px solid color-mix(in srgb, var(--theme-border) 62%, white);\n}\n\n.preview-btn--danger[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--theme-danger) 14%, white);\n  color: var(--theme-danger);\n}\n\n.settings-content[_ngcontent-%COMP%] {\n  padding: 18px 18px 20px;\n}\n\n.settings-placeholder[_ngcontent-%COMP%] {\n  border: 1px solid color-mix(in srgb, var(--theme-border) 58%, white);\n  border-radius: 16px;\n  background: color-mix(in srgb, var(--theme-bg-surface) 98%, transparent);\n  padding: 18px;\n}\n\n.settings-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n}\n\n.editor-header[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n\n.editor-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 20px;\n  line-height: 1.2;\n  color: var(--theme-text-primary);\n}\n\n.editor-subtitle[_ngcontent-%COMP%] {\n  margin: 6px 0 0;\n  font-size: 13px;\n  color: var(--theme-text-muted);\n}\n\n.token-sections[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n\n.token-section[_ngcontent-%COMP%] {\n  border: 1px solid color-mix(in srgb, var(--theme-border) 58%, white);\n  border-radius: 16px;\n  background: color-mix(in srgb, var(--theme-bg-surface) 98%, transparent);\n  padding: 13px;\n}\n\n.token-section__header[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.token-section__title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--theme-text-primary);\n}\n\n.token-section__description[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  font-size: 12px;\n  color: var(--theme-text-muted);\n}\n\n.token-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 10px;\n}\n\n.theme-field[_ngcontent-%COMP%] {\n  border: 1px solid color-mix(in srgb, var(--theme-border) 58%, white);\n  border-radius: 12px;\n  padding: 10px;\n  background: var(--theme-bg-surface);\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\n}\n\n.theme-field[_ngcontent-%COMP%]:hover {\n  border-color: color-mix(in srgb, var(--theme-primary) 36%, white);\n  box-shadow: 0 6px 18px rgba(15, 23, 42, 0.06);\n}\n\n.theme-field__meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n\n.theme-field__label[_ngcontent-%COMP%] {\n  color: var(--theme-text-primary);\n  font-size: 12px;\n  font-weight: 700;\n  line-height: 1.2;\n}\n\n.theme-field__hint[_ngcontent-%COMP%] {\n  color: var(--theme-text-muted);\n  font-size: 11px;\n  line-height: 1.3;\n}\n\n.theme-field__key[_ngcontent-%COMP%] {\n  margin-top: 2px;\n  color: color-mix(in srgb, var(--theme-text-muted) 88%, white);\n  font-size: 10px;\n  width: fit-content;\n  padding: 2px 6px;\n  border-radius: 999px;\n  background: color-mix(in srgb, var(--theme-bg-surface-soft) 72%, white);\n  border: 1px solid color-mix(in srgb, var(--theme-border) 58%, white);\n}\n\n.theme-field__controls[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 48px 1fr;\n  align-items: center;\n  gap: 8px;\n}\n\n.theme-field__color[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 38px;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 65%, white);\n  border-radius: 9px;\n  background: transparent;\n  padding: 3px;\n  cursor: pointer;\n}\n\n.theme-field__text[_ngcontent-%COMP%] {\n  height: 38px;\n  border-radius: 9px;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 65%, white);\n  background: var(--theme-bg-surface-soft);\n  color: var(--theme-text-primary);\n  padding: 0 10px;\n  font-size: 13px;\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n\n.theme-field__text[_ngcontent-%COMP%]:focus-visible {\n  outline: none;\n  border-color: color-mix(in srgb, var(--theme-primary) 46%, white);\n  box-shadow: 0 0 0 3px color-mix(in srgb, var(--theme-primary) 20%, transparent);\n}\n\n.settings-actions[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  flex-wrap: wrap;\n  padding-top: 14px;\n  border-top: 1px solid color-mix(in srgb, var(--theme-border) 45%, white);\n  position: sticky;\n  bottom: -1px;\n  background: color-mix(in srgb, var(--theme-bg-surface) 88%, transparent);\n  backdrop-filter: blur(8px);\n}\n\n.settings-apply-btn[_ngcontent-%COMP%], \n.settings-reset-btn[_ngcontent-%COMP%] {\n  height: 40px;\n  border-radius: 10px;\n  padding: 0 18px;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 65%, white);\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n}\n\n.settings-apply-btn[_ngcontent-%COMP%] {\n  border-color: color-mix(in srgb, var(--theme-primary) 45%, white);\n}\n\n.settings-reset-btn[_ngcontent-%COMP%] {\n  background: var(--theme-bg-surface);\n  color: var(--theme-text-secondary);\n  border-color: color-mix(in srgb, var(--theme-border) 65%, white);\n}\n\n.settings-reset-btn[_ngcontent-%COMP%]:hover {\n  color: var(--theme-text-primary);\n  background: var(--theme-bg-surface-soft);\n}\n\n@media (max-width: 1080px) {\n  .settings-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .settings-aside[_ngcontent-%COMP%] {\n    border-right: 0;\n    border-bottom: 1px solid color-mix(in srgb, var(--theme-border) 45%, white);\n  }\n\n  .settings-tabs[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n\n  .settings-tab[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n\n@media (max-width: 640px) {\n  .settings-page[_ngcontent-%COMP%] {\n    padding: 8px 2px 16px;\n  }\n\n  .settings-header[_ngcontent-%COMP%] {\n    padding: 16px;\n    flex-direction: column;\n    align-items: flex-start;\n  }\n\n  .settings-note[_ngcontent-%COMP%] {\n    align-self: flex-start;\n  }\n\n  .settings-content[_ngcontent-%COMP%] {\n    padding: 14px;\n  }\n\n  .token-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .settings-actions[_ngcontent-%COMP%] {\n    justify-content: flex-start;\n  }\n\n  .settings-apply-btn[_ngcontent-%COMP%], \n   .settings-reset-btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SettingsPage, [{
        type: Component,
        args: [{ selector: 'app-settings-page', imports: [CommonModule, FormsModule, ObjectCreateComponent, FieldLibraryComponent], template: "<section class=\"settings-page\">\n  <div class=\"settings-shell\">\n    <header class=\"settings-header\">\n      <div class=\"settings-header__brand\">\n        <span class=\"settings-header__badge\" aria-hidden=\"true\">{{ activeTab.charAt(0) }}</span>\n        <div>\n          <h1 class=\"settings-title\">Workspace Settings</h1>\n          <p class=\"settings-subtitle\">{{ headerSubtitle() }}</p>\n        </div>\n      </div>\n      <p class=\"settings-note\">{{ headerNote() }}</p>\n    </header>\n\n    <div class=\"settings-layout\">\n      <aside class=\"settings-aside\">\n        <div class=\"settings-tabs\" role=\"tablist\" aria-label=\"Settings tabs\">\n          @for (tab of tabs; track tab) {\n          <button type=\"button\" role=\"tab\" class=\"settings-tab\" [class.settings-tab--active]=\"activeTab === tab\"\n            [attr.aria-selected]=\"activeTab === tab\" (click)=\"setActiveTab(tab)\">\n            {{ tab }}\n          </button>\n          }\n        </div>\n\n        @if (activeTab === 'Theme') {\n        <section class=\"preview-card\" aria-label=\"Theme Preview\">\n          <header class=\"preview-card__header\">\n            <span class=\"preview-card__chip\">Preview</span>\n            <h2 class=\"preview-card__title\">Live Theme Snapshot</h2>\n          </header>\n\n          <div class=\"preview-card__surface\">\n            <div class=\"preview-card__topbar\"></div>\n            <div class=\"preview-card__text\">\n              <p class=\"preview-card__headline\">Dashboard heading</p>\n              <p class=\"preview-card__muted\">Muted helper text for forms and hints.</p>\n            </div>\n            <div class=\"preview-card__actions\">\n              <span class=\"preview-btn preview-btn--primary\">Primary</span>\n              <span class=\"preview-btn preview-btn--surface\">Surface</span>\n              <span class=\"preview-btn preview-btn--danger\">Danger</span>\n            </div>\n          </div>\n        </section>\n        } @else if (activeTab === 'Objects') {\n        <section class=\"preview-card\" aria-label=\"Objects Guidance\">\n          <header class=\"preview-card__header\">\n            <span class=\"preview-card__chip\">Objects</span>\n            <h2 class=\"preview-card__title\">Reuse Across Businesses</h2>\n          </header>\n\n          <div class=\"preview-card__surface objects-preview\">\n            <p class=\"preview-card__headline\">How object assignment works</p>\n            <p class=\"preview-card__muted\">\n              1. Create user-owned objects.\n              <br />\n              2. Clone and edit when adding into a business.\n              <br />\n              3. Keep one reusable library for all workspaces.\n            </p>\n          </div>\n        </section>\n        } @else if (activeTab === 'Fields') {\n        <section class=\"preview-card\" aria-label=\"Fields Guidance\">\n          <header class=\"preview-card__header\">\n            <span class=\"preview-card__chip\">Fields</span>\n            <h2 class=\"preview-card__title\">Schema + Mapping</h2>\n          </header>\n\n          <div class=\"preview-card__surface objects-preview\">\n            <p class=\"preview-card__headline\">Recommended field workflow</p>\n            <p class=\"preview-card__muted\">\n              1. Create fields in default workspace.\n              <br />\n              2. In business workspace, create and map directly to business objects.\n              <br />\n              3. Use default workspace for cross-business reusable mappings.\n            </p>\n          </div>\n        </section>\n        }\n      </aside>\n\n      <main class=\"settings-content\">\n        @if (activeTab === 'Theme') {\n        <form class=\"settings-form\" (ngSubmit)=\"applyAll()\">\n          <header class=\"editor-header\">\n            <h2 class=\"editor-title\">Theme Tokens</h2>\n            <p class=\"editor-subtitle\">Edit values and apply instantly across your dashboard UI.</p>\n          </header>\n\n          <div class=\"token-sections\">\n            @for (section of themeSections; track section.id) {\n            <section class=\"token-section\">\n              <header class=\"token-section__header\">\n                <h3 class=\"token-section__title\">{{ section.title }}</h3>\n                <p class=\"token-section__description\">{{ section.description }}</p>\n              </header>\n\n              <div class=\"token-grid\">\n                @for (field of section.fields; track field.key) {\n                <label class=\"theme-field\">\n                  <span class=\"theme-field__meta\">\n                    <span class=\"theme-field__label\">{{ field.label }}</span>\n                    <span class=\"theme-field__hint\">{{ field.hint }}</span>\n                    <code class=\"theme-field__key\">{{ field.key }}</code>\n                  </span>\n\n                  <span class=\"theme-field__controls\">\n                    <input type=\"color\" class=\"theme-field__color\" [ngModel]=\"themeDraft[field.key]\"\n                      (ngModelChange)=\"onTokenInput(field.key, $event); applyToken(field.key, $event)\"\n                      [name]=\"'color-' + field.key\" />\n                    <input type=\"text\" class=\"theme-field__text\" [ngModel]=\"themeDraft[field.key]\"\n                      (ngModelChange)=\"onTokenInput(field.key, $event)\"\n                      (blur)=\"applyToken(field.key, themeDraft[field.key])\" [name]=\"'text-' + field.key\"\n                      autocomplete=\"off\" spellcheck=\"false\" />\n                  </span>\n                </label>\n                }\n              </div>\n            </section>\n            }\n          </div>\n\n          <div class=\"settings-actions\">\n            <button type=\"submit\" class=\"settings-apply-btn theme-primary-btn\">Apply All</button>\n            <button type=\"button\" class=\"settings-reset-btn\" (click)=\"resetTheme()\">Reset Default</button>\n          </div>\n        </form>\n        } @else if (activeTab === 'Objects') {\n        <app-object-create-component></app-object-create-component>\n        } @else if (activeTab === 'Fields') {\n        <app-field-library-component></app-field-library-component>\n        } @else {\n        <section class=\"settings-placeholder\">\n          <h2 class=\"editor-title\">{{ activeTab }}</h2>\n          <p class=\"editor-subtitle\">\n            This module is reserved for your next implementation phase.\n          </p>\n        </section>\n        }\n      </main>\n    </div>\n  </div>\n</section>\n", styles: [":host {\n  display: block;\n}\n\n.settings-page {\n  min-height: calc(100vh - 86px);\n  padding: 14px 10px 24px;\n}\n\n.settings-shell {\n  max-width: 1240px;\n  margin: 0 auto;\n  border-radius: 24px;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 60%, white);\n  background: color-mix(in srgb, var(--theme-bg-surface) 94%, transparent);\n  box-shadow: 0 22px 60px rgba(15, 23, 42, 0.1);\n  position: relative;\n  overflow: hidden;\n}\n\n.settings-shell::before {\n  content: \"\";\n  position: absolute;\n  inset: 0 0 auto;\n  height: 140px;\n  /* background: linear-gradient(\n    130deg,\n    color-mix(in srgb, var(--theme-primary) 16%, transparent),\n    color-mix(in srgb, var(--theme-accent-end) 14%, transparent) 44%,\n    transparent 78%\n  ); */\n  pointer-events: none;\n}\n\n.settings-header {\n  position: relative;\n  z-index: 1;\n  padding: 22px 24px 18px;\n  border-bottom: 1px solid color-mix(in srgb, var(--theme-border) 45%, white);\n  background: color-mix(in srgb, var(--theme-bg-surface) 96%, transparent);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 14px;\n}\n\n.settings-header__brand {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n\n.settings-header__badge {\n  width: 40px;\n  height: 40px;\n  border-radius: 12px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--theme-primary-contrast);\n  background: linear-gradient(135deg, var(--theme-accent-start), var(--theme-accent-end));\n  box-shadow: 0 10px 20px color-mix(in srgb, var(--theme-primary) 28%, transparent);\n}\n\n.settings-title {\n  margin: 0;\n  font-size: 25px;\n  line-height: 1.2;\n  letter-spacing: -0.02em;\n  color: var(--theme-text-primary);\n}\n\n.settings-subtitle {\n  margin: 6px 0 0;\n  font-size: 14px;\n  line-height: 1.45;\n  color: var(--theme-text-muted);\n}\n\n.settings-note {\n  margin: 0;\n  padding: 8px 12px;\n  border-radius: 999px;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 62%, white);\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--theme-text-secondary);\n  background: color-mix(in srgb, var(--theme-bg-surface-soft) 72%, white);\n}\n\n.settings-layout {\n  display: grid;\n  grid-template-columns: 290px minmax(0, 1fr);\n  min-height: 620px;\n}\n\n.settings-aside {\n  padding: 18px 14px;\n  border-right: 1px solid color-mix(in srgb, var(--theme-border) 45%, white);\n  background: color-mix(in srgb, var(--theme-bg-surface) 90%, transparent);\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n\n.settings-tabs {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.settings-tab {\n  border: 1px solid color-mix(in srgb, var(--theme-border) 62%, white);\n  background: var(--theme-bg-surface);\n  color: var(--theme-text-secondary);\n  border-radius: 12px;\n  font-size: 13px;\n  font-weight: 700;\n  padding: 10px 12px;\n  text-align: left;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n\n.settings-tab:hover {\n  color: var(--theme-text-primary);\n  border-color: color-mix(in srgb, var(--theme-primary) 45%, white);\n}\n\n.settings-tab--active {\n  background: color-mix(in srgb, var(--theme-primary) 15%, white);\n  border-color: color-mix(in srgb, var(--theme-primary) 45%, white);\n  color: var(--theme-text-primary);\n}\n\n.preview-card {\n  border: 1px solid color-mix(in srgb, var(--theme-border) 60%, white);\n  border-radius: 16px;\n  padding: 14px;\n  background: var(--theme-bg-surface);\n  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.07);\n}\n\n.preview-card__header {\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n  margin-bottom: 12px;\n}\n\n.preview-card__chip {\n  display: inline-flex;\n  width: fit-content;\n  border-radius: 999px;\n  padding: 4px 9px;\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--theme-primary);\n  background: color-mix(in srgb, var(--theme-primary) 14%, white);\n}\n\n.preview-card__title {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--theme-text-primary);\n}\n\n.preview-card__surface {\n  border: 1px solid color-mix(in srgb, var(--theme-border) 65%, white);\n  border-radius: 14px;\n  overflow: hidden;\n  background: var(--theme-bg-surface);\n}\n\n.objects-preview {\n  padding: 12px;\n}\n\n.preview-card__topbar {\n  height: 6px;\n  background: linear-gradient(90deg, var(--theme-accent-start), var(--theme-accent-end));\n}\n\n.preview-card__text {\n  padding: 12px 12px 8px;\n}\n\n.preview-card__headline {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--theme-text-primary);\n}\n\n.preview-card__muted {\n  margin: 5px 0 0;\n  font-size: 12px;\n  line-height: 1.35;\n  color: var(--theme-text-muted);\n}\n\n.preview-card__actions {\n  padding: 0 12px 12px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n\n.preview-btn {\n  height: 28px;\n  border-radius: 999px;\n  padding: 0 11px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 700;\n}\n\n.preview-btn--primary {\n  background: var(--theme-primary);\n  color: var(--theme-primary-contrast);\n}\n\n.preview-btn--surface {\n  background: var(--theme-bg-surface-soft);\n  color: var(--theme-text-secondary);\n  border: 1px solid color-mix(in srgb, var(--theme-border) 62%, white);\n}\n\n.preview-btn--danger {\n  background: color-mix(in srgb, var(--theme-danger) 14%, white);\n  color: var(--theme-danger);\n}\n\n.settings-content {\n  padding: 18px 18px 20px;\n}\n\n.settings-placeholder {\n  border: 1px solid color-mix(in srgb, var(--theme-border) 58%, white);\n  border-radius: 16px;\n  background: color-mix(in srgb, var(--theme-bg-surface) 98%, transparent);\n  padding: 18px;\n}\n\n.settings-form {\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n}\n\n.editor-header {\n  margin-bottom: 16px;\n}\n\n.editor-title {\n  margin: 0;\n  font-size: 20px;\n  line-height: 1.2;\n  color: var(--theme-text-primary);\n}\n\n.editor-subtitle {\n  margin: 6px 0 0;\n  font-size: 13px;\n  color: var(--theme-text-muted);\n}\n\n.token-sections {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n\n.token-section {\n  border: 1px solid color-mix(in srgb, var(--theme-border) 58%, white);\n  border-radius: 16px;\n  background: color-mix(in srgb, var(--theme-bg-surface) 98%, transparent);\n  padding: 13px;\n}\n\n.token-section__header {\n  margin-bottom: 10px;\n}\n\n.token-section__title {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--theme-text-primary);\n}\n\n.token-section__description {\n  margin: 4px 0 0;\n  font-size: 12px;\n  color: var(--theme-text-muted);\n}\n\n.token-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 10px;\n}\n\n.theme-field {\n  border: 1px solid color-mix(in srgb, var(--theme-border) 58%, white);\n  border-radius: 12px;\n  padding: 10px;\n  background: var(--theme-bg-surface);\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\n}\n\n.theme-field:hover {\n  border-color: color-mix(in srgb, var(--theme-primary) 36%, white);\n  box-shadow: 0 6px 18px rgba(15, 23, 42, 0.06);\n}\n\n.theme-field__meta {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n\n.theme-field__label {\n  color: var(--theme-text-primary);\n  font-size: 12px;\n  font-weight: 700;\n  line-height: 1.2;\n}\n\n.theme-field__hint {\n  color: var(--theme-text-muted);\n  font-size: 11px;\n  line-height: 1.3;\n}\n\n.theme-field__key {\n  margin-top: 2px;\n  color: color-mix(in srgb, var(--theme-text-muted) 88%, white);\n  font-size: 10px;\n  width: fit-content;\n  padding: 2px 6px;\n  border-radius: 999px;\n  background: color-mix(in srgb, var(--theme-bg-surface-soft) 72%, white);\n  border: 1px solid color-mix(in srgb, var(--theme-border) 58%, white);\n}\n\n.theme-field__controls {\n  display: grid;\n  grid-template-columns: 48px 1fr;\n  align-items: center;\n  gap: 8px;\n}\n\n.theme-field__color {\n  width: 48px;\n  height: 38px;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 65%, white);\n  border-radius: 9px;\n  background: transparent;\n  padding: 3px;\n  cursor: pointer;\n}\n\n.theme-field__text {\n  height: 38px;\n  border-radius: 9px;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 65%, white);\n  background: var(--theme-bg-surface-soft);\n  color: var(--theme-text-primary);\n  padding: 0 10px;\n  font-size: 13px;\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n\n.theme-field__text:focus-visible {\n  outline: none;\n  border-color: color-mix(in srgb, var(--theme-primary) 46%, white);\n  box-shadow: 0 0 0 3px color-mix(in srgb, var(--theme-primary) 20%, transparent);\n}\n\n.settings-actions {\n  margin-top: 16px;\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  flex-wrap: wrap;\n  padding-top: 14px;\n  border-top: 1px solid color-mix(in srgb, var(--theme-border) 45%, white);\n  position: sticky;\n  bottom: -1px;\n  background: color-mix(in srgb, var(--theme-bg-surface) 88%, transparent);\n  backdrop-filter: blur(8px);\n}\n\n.settings-apply-btn,\n.settings-reset-btn {\n  height: 40px;\n  border-radius: 10px;\n  padding: 0 18px;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 65%, white);\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n}\n\n.settings-apply-btn {\n  border-color: color-mix(in srgb, var(--theme-primary) 45%, white);\n}\n\n.settings-reset-btn {\n  background: var(--theme-bg-surface);\n  color: var(--theme-text-secondary);\n  border-color: color-mix(in srgb, var(--theme-border) 65%, white);\n}\n\n.settings-reset-btn:hover {\n  color: var(--theme-text-primary);\n  background: var(--theme-bg-surface-soft);\n}\n\n@media (max-width: 1080px) {\n  .settings-layout {\n    grid-template-columns: 1fr;\n  }\n\n  .settings-aside {\n    border-right: 0;\n    border-bottom: 1px solid color-mix(in srgb, var(--theme-border) 45%, white);\n  }\n\n  .settings-tabs {\n    flex-direction: row;\n  }\n\n  .settings-tab {\n    text-align: center;\n  }\n}\n\n@media (max-width: 640px) {\n  .settings-page {\n    padding: 8px 2px 16px;\n  }\n\n  .settings-header {\n    padding: 16px;\n    flex-direction: column;\n    align-items: flex-start;\n  }\n\n  .settings-note {\n    align-self: flex-start;\n  }\n\n  .settings-content {\n    padding: 14px;\n  }\n\n  .token-grid {\n    grid-template-columns: 1fr;\n  }\n\n  .settings-actions {\n    justify-content: flex-start;\n  }\n\n  .settings-apply-btn,\n  .settings-reset-btn {\n    width: 100%;\n  }\n}\n"] }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SettingsPage, { className: "SettingsPage", filePath: "avyra-crm/src/app/shared/pages/loggedin/settings-page/settings-page.ts", lineNumber: 32 }); })();
