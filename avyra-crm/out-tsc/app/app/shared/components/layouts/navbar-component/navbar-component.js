import { Component, HostListener, computed, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';
import { BusinessService } from '../../../../services/business.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ThemeService } from '../../../../services/theme.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
const _forTrack0 = ($index, $item) => $item.id;
function NavbarComponent_Conditional_9_Conditional_9_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 56);
} }
function NavbarComponent_Conditional_9_Conditional_9_For_11_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 62);
} if (rf & 2) {
    const business_r6 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("src", business_r6.logo_path, i0.ɵɵsanitizeUrl)("alt", business_r6.name);
} }
function NavbarComponent_Conditional_9_Conditional_9_For_11_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 63);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const business_r6 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r2.businessInitial(business_r6.name));
} }
function NavbarComponent_Conditional_9_Conditional_9_For_11_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 56);
} }
function NavbarComponent_Conditional_9_Conditional_9_For_11_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 50);
    i0.ɵɵlistener("click", function NavbarComponent_Conditional_9_Conditional_9_For_11_Template_button_click_0_listener($event) { const business_r6 = i0.ɵɵrestoreView(_r5).$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.selectBusiness(business_r6.id, $event)); });
    i0.ɵɵelementStart(1, "span", 61);
    i0.ɵɵconditionalCreate(2, NavbarComponent_Conditional_9_Conditional_9_For_11_Conditional_2_Template, 1, 2, "img", 62)(3, NavbarComponent_Conditional_9_Conditional_9_For_11_Conditional_3_Template, 2, 1, "span", 63);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 53)(5, "span", 54);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "span", 55);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(9, NavbarComponent_Conditional_9_Conditional_9_For_11_Conditional_9_Template, 1, 0, "i", 56);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const business_r6 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵclassProp("business-option--active", ctx_r2.selectedBusinessId() === business_r6.id);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(business_r6.logo_path ? 2 : 3);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(business_r6.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(business_r6.type);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r2.selectedBusinessId() === business_r6.id ? 9 : -1);
} }
function NavbarComponent_Conditional_9_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 46)(1, "button", 50);
    i0.ɵɵlistener("click", function NavbarComponent_Conditional_9_Conditional_9_Template_button_click_1_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.selectBusiness("default", $event)); });
    i0.ɵɵelementStart(2, "span", 51);
    i0.ɵɵelement(3, "i", 52);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 53)(5, "span", 54);
    i0.ɵɵtext(6, "Default");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "span", 55);
    i0.ɵɵtext(8, "No business selected");
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(9, NavbarComponent_Conditional_9_Conditional_9_Conditional_9_Template, 1, 0, "i", 56);
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(10, NavbarComponent_Conditional_9_Conditional_9_For_11_Template, 10, 6, "button", 57, _forTrack0);
    i0.ɵɵelement(12, "div", 58);
    i0.ɵɵelementStart(13, "button", 59);
    i0.ɵɵlistener("click", function NavbarComponent_Conditional_9_Conditional_9_Template_button_click_13_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.openAddBusinessDrawer($event)); });
    i0.ɵɵelement(14, "i", 60);
    i0.ɵɵtext(15, " Add Business ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("business-option--active", ctx_r2.selectedBusinessId() === "default");
    i0.ɵɵadvance(8);
    i0.ɵɵconditional(ctx_r2.selectedBusinessId() === "default" ? 9 : -1);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r2.businesses());
} }
function NavbarComponent_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10)(1, "div", 40);
    i0.ɵɵlistener("click", function NavbarComponent_Conditional_9_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.preventMenuClose($event)); });
    i0.ɵɵelementStart(2, "button", 41);
    i0.ɵɵlistener("click", function NavbarComponent_Conditional_9_Template_button_click_2_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.toggleBusinessMenu($event)); });
    i0.ɵɵelementStart(3, "span", 42)(4, "span", 43);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span", 44);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(8, "i", 45);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(9, NavbarComponent_Conditional_9_Conditional_9_Template, 16, 3, "div", 46);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "button", 47)(11, "div", 48);
    i0.ɵɵelement(12, "img", 49);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    let tmp_5_0;
    let tmp_6_0;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r2.selectedBusinessLabel());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.selectedBusinessType());
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r2.isBusinessMenuOpen() ? 9 : -1);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("src", ((tmp_5_0 = ctx_r2.currentUser()) == null ? null : tmp_5_0.avatar) || "assets/default-avatar.png", i0.ɵɵsanitizeUrl)("alt", (tmp_6_0 = ctx_r2.currentUser()) == null ? null : tmp_6_0.name);
} }
function NavbarComponent_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11)(1, "button", 64);
    i0.ɵɵtext(2, " Get started ");
    i0.ɵɵelementEnd()();
} }
function NavbarComponent_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 17)(1, "div", 65)(2, "div")(3, "p", 66);
    i0.ɵɵtext(4, "Current Workspace");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 67);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "button", 68);
    i0.ɵɵlistener("click", function NavbarComponent_Conditional_17_Template_button_click_7_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.openAddBusinessDrawer($event)); });
    i0.ɵɵtext(8, " Add ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 69)(10, "div", 70);
    i0.ɵɵelement(11, "img", 71);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    let tmp_3_0;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r2.selectedBusinessLabel());
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("src", ((tmp_3_0 = ctx_r2.currentUser()) == null ? null : tmp_3_0.avatar) || "assets/default-avatar.png", i0.ɵɵsanitizeUrl);
} }
function NavbarComponent_Conditional_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18)(1, "button", 72);
    i0.ɵɵtext(2, " Get started ");
    i0.ɵɵelementEnd()();
} }
function NavbarComponent_For_40_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 31);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const type_r8 = ctx.$implicit;
    i0.ɵɵproperty("value", type_r8);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(type_r8);
} }
function NavbarComponent_Conditional_55_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelement(0, "img", 73);
    i0.ɵɵelementStart(1, "button", 74);
    i0.ɵɵlistener("click", function NavbarComponent_Conditional_55_Template_button_click_1_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.removeLogo($event)); });
    i0.ɵɵtext(2, " Remove ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("src", ctx_r2.logoPreview(), i0.ɵɵsanitizeUrl);
} }
function NavbarComponent_Conditional_56_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 35);
    i0.ɵɵelement(1, "i", 75);
    i0.ɵɵelementStart(2, "p");
    i0.ɵɵtext(3, "Drop logo here or click to browse");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5, "PNG, JPG, WEBP up to 5MB");
    i0.ɵɵelementEnd()();
} }
function NavbarComponent_Conditional_57_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 36);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r2.businessErrorMessage());
} }
function NavbarComponent_Conditional_62_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Saving... ");
} }
function NavbarComponent_Conditional_63_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Save Business ");
} }
export class NavbarComponent {
    authService = inject(AuthService);
    businessService = inject(BusinessService);
    themeService = inject(ThemeService);
    fb = inject(FormBuilder);
    currentUser = this.authService.currentUser;
    businesses = this.businessService.businesses;
    selectedBusinessId = this.businessService.selectedBusinessId;
    selectedBusiness = computed(() => this.businessService.selectedBusiness(), ...(ngDevMode ? [{ debugName: "selectedBusiness" }] : []));
    selectedBusinessLabel = computed(() => this.selectedBusiness()?.name ?? 'Default', ...(ngDevMode ? [{ debugName: "selectedBusinessLabel" }] : []));
    selectedBusinessType = computed(() => this.selectedBusiness()?.type ?? 'No business selected', ...(ngDevMode ? [{ debugName: "selectedBusinessType" }] : []));
    isBusinessMenuOpen = signal(false, ...(ngDevMode ? [{ debugName: "isBusinessMenuOpen" }] : []));
    isAddBusinessDrawerOpen = signal(false, ...(ngDevMode ? [{ debugName: "isAddBusinessDrawerOpen" }] : []));
    isSubmittingBusiness = signal(false, ...(ngDevMode ? [{ debugName: "isSubmittingBusiness" }] : []));
    businessErrorMessage = signal('', ...(ngDevMode ? [{ debugName: "businessErrorMessage" }] : []));
    isLogoDragOver = signal(false, ...(ngDevMode ? [{ debugName: "isLogoDragOver" }] : []));
    logoFile = signal(null, ...(ngDevMode ? [{ debugName: "logoFile" }] : []));
    logoPreview = signal(null, ...(ngDevMode ? [{ debugName: "logoPreview" }] : []));
    businessTypes = ['IT', 'Real Estate', 'Finance', 'Healthcare', 'Education', 'E-commerce', 'Other'];
    addBusinessForm = this.fb.group({
        name: ['', [Validators.required, Validators.maxLength(120)]],
        type: ['IT', [Validators.required]],
        status: [1, [Validators.required]],
    });
    userEffect = effect(() => {
        const user = this.currentUser();
        if (!user) {
            this.businessService.clearState();
            return;
        }
        this.businessService.loadBusinesses();
    }, ...(ngDevMode ? [{ debugName: "userEffect" }] : []));
    businessThemeEffect = effect(() => {
        const user = this.currentUser();
        if (!user) {
            return;
        }
        const selectedBusinessId = this.selectedBusinessId();
        this.themeService.syncThemeFromBackend(selectedBusinessId);
    }, ...(ngDevMode ? [{ debugName: "businessThemeEffect" }] : []));
    closeBusinessMenuOnOutsideClick() {
        this.isBusinessMenuOpen.set(false);
    }
    logout() {
        this.authService.logout();
    }
    trackByBusinessId(_, business) {
        return business.id;
    }
    toggleBusinessMenu(event) {
        event.stopPropagation();
        this.isBusinessMenuOpen.update((open) => !open);
    }
    preventMenuClose(event) {
        event.stopPropagation();
    }
    selectBusiness(businessId, event) {
        event?.stopPropagation();
        this.businessService.setSelectedBusiness(businessId);
        this.isBusinessMenuOpen.set(false);
    }
    openAddBusinessDrawer(event) {
        event?.stopPropagation();
        this.isBusinessMenuOpen.set(false);
        this.isAddBusinessDrawerOpen.set(true);
    }
    closeAddBusinessDrawer() {
        this.isAddBusinessDrawerOpen.set(false);
        this.businessErrorMessage.set('');
        this.resetAddBusinessForm();
    }
    onLogoInputChange(event) {
        const input = event.target;
        const file = input.files?.[0] ?? null;
        if (file) {
            this.applyLogoFile(file);
        }
        input.value = '';
    }
    onLogoDragOver(event) {
        event.preventDefault();
        this.isLogoDragOver.set(true);
    }
    onLogoDragLeave(event) {
        event.preventDefault();
        this.isLogoDragOver.set(false);
    }
    onLogoDrop(event) {
        event.preventDefault();
        this.isLogoDragOver.set(false);
        const file = event.dataTransfer?.files?.[0] ?? null;
        if (file) {
            this.applyLogoFile(file);
        }
    }
    removeLogo(event) {
        event?.preventDefault();
        event?.stopPropagation();
        this.revokeLogoPreview();
        this.logoFile.set(null);
    }
    submitAddBusiness() {
        if (this.addBusinessForm.invalid || this.isSubmittingBusiness()) {
            this.addBusinessForm.markAllAsTouched();
            return;
        }
        this.businessErrorMessage.set('');
        this.isSubmittingBusiness.set(true);
        const payload = {
            name: String(this.addBusinessForm.value.name ?? ''),
            type: String(this.addBusinessForm.value.type ?? ''),
            status: Number(this.addBusinessForm.value.status ?? 1),
            logo: this.logoFile(),
        };
        this.businessService.createBusiness(payload).subscribe({
            next: (response) => {
                this.isSubmittingBusiness.set(false);
                if (!response.status) {
                    this.businessErrorMessage.set(response.message || 'Unable to create business.');
                    return;
                }
                this.closeAddBusinessDrawer();
            },
            error: (error) => {
                this.isSubmittingBusiness.set(false);
                this.businessErrorMessage.set(error?.error?.message || 'Unable to create business.');
            },
        });
    }
    businessInitial(name) {
        const trimmed = (name || '').trim();
        return trimmed ? trimmed.charAt(0).toUpperCase() : 'B';
    }
    applyLogoFile(file) {
        if (!file.type.startsWith('image/')) {
            this.businessErrorMessage.set('Please choose an image file for logo.');
            return;
        }
        const maxSize = 5 * 1024 * 1024;
        if (file.size > maxSize) {
            this.businessErrorMessage.set('Logo file size should be under 5MB.');
            return;
        }
        this.businessErrorMessage.set('');
        this.revokeLogoPreview();
        this.logoFile.set(file);
        this.logoPreview.set(URL.createObjectURL(file));
    }
    resetAddBusinessForm() {
        this.addBusinessForm.reset({ name: '', type: 'IT', status: 1 });
        this.removeLogo();
    }
    revokeLogoPreview() {
        const preview = this.logoPreview();
        if (preview) {
            URL.revokeObjectURL(preview);
            this.logoPreview.set(null);
        }
    }
    ngOnDestroy() {
        this.revokeLogoPreview();
    }
    static ɵfac = function NavbarComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || NavbarComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NavbarComponent, selectors: [["app-navbar-component"]], hostBindings: function NavbarComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function NavbarComponent_click_HostBindingHandler() { return ctx.closeBusinessMenuOnOutsideClick(); }, i0.ɵɵresolveDocument);
        } }, decls: 64, vars: 13, consts: [["logoInput", ""], [1, "sticky", "top-0", "z-50", "theme-navbar", "backdrop-blur-xl", "border-b"], [1, "max-w-full", "mx-auto", "px-4", "sm:px-6", "lg:px-4"], [1, "flex", "h-16", "items-center", "justify-between"], [1, "flex-1", "flex", "max-w-2xl", "ml-12", "lg:ml-48"], [1, "relative", "w-full", "max-w-md", "group"], [1, "absolute", "inset-y-0", "left-0", "pl-3", "flex", "items-center", "pointer-events-none"], [1, "fa-solid", "fa-magnifying-glass", "theme-search-icon", "text-sm", "transition-colors", "duration-200"], ["type", "text", "placeholder", "Search...", 1, "block", "w-full", "pl-10", "pr-3", "py-2", "border-none", "rounded-xl", "leading-5", "theme-search-input", "transition-all", "duration-200", "ease-in-out", "sm:text-sm"], [1, "flex", "items-center", "gap-6"], [1, "hidden", "md:flex", "items-center", "gap-3", "pl-2"], [1, "hidden", "md:flex", "items-center", "gap-3"], ["type", "button", "onclick", "document.getElementById('mobile-menu').classList.toggle('hidden')", 1, "md:hidden", "inline-flex", "items-center", "justify-center", "p-2", "rounded-md", "theme-mobile-trigger", "focus:ring-2", "focus:ring-inset"], [1, "sr-only"], [1, "fa-solid", "fa-bars", "text-xl"], ["id", "mobile-menu", 1, "hidden", "md:hidden", "border-t", "theme-mobile-menu", "backdrop-blur-xl"], [1, "pt-4", "pb-4", "px-4", "space-y-4"], [1, "space-y-3"], [1, "space-y-2"], [1, "business-drawer-shell"], [1, "business-drawer-backdrop", 3, "click"], [1, "business-drawer", 3, "click"], [1, "business-drawer-header"], [1, "business-drawer-kicker"], [1, "business-drawer-title"], ["type", "button", 1, "business-drawer-close", 3, "click"], [1, "fa-solid", "fa-xmark"], [1, "business-form", 3, "ngSubmit", "formGroup"], [1, "business-form-field"], ["type", "text", "formControlName", "name", "placeholder", "Enter business name"], ["formControlName", "type"], [3, "value"], ["formControlName", "status"], ["type", "file", "accept", "image/*", 1, "hidden", 3, "change"], [1, "business-logo-dropzone", 3, "click", "dragover", "dragleave", "drop"], [1, "business-logo-empty"], [1, "business-form-error"], [1, "business-form-actions"], ["type", "button", 1, "business-cancel-btn", 3, "click"], ["type", "submit", 1, "business-submit-btn", 3, "disabled"], [1, "relative", 3, "click"], ["type", "button", 1, "business-selector-btn", 3, "click"], [1, "business-selector-copy"], [1, "business-selector-title"], [1, "business-selector-subtitle"], [1, "fa-solid", "fa-chevron-down", "text-[11px]", "text-slate-500"], [1, "business-menu-panel"], [1, "relative", "group", "cursor-pointer", "focus:outline-none"], [1, "relative", "h-10", "w-10", "rounded-full", "overflow-hidden", "ring-2", "ring-transparent", "theme-avatar-ring", "transition-all", "duration-200"], [1, "h-full", "w-full", "object-cover", 3, "src", "alt"], ["type", "button", 1, "business-option", 3, "click"], [1, "business-option-avatar", "business-option-avatar--default"], [1, "fa-regular", "fa-building", "text-[12px]"], [1, "business-option-copy"], [1, "business-option-title"], [1, "business-option-subtitle"], [1, "fa-solid", "fa-check", "text-xs", "text-sky-500"], ["type", "button", 1, "business-option", 3, "business-option--active"], [1, "business-menu-divider"], ["type", "button", 1, "business-add-btn", 3, "click"], [1, "fa-solid", "fa-plus"], [1, "business-option-avatar"], [1, "business-option-logo", 3, "src", "alt"], [1, "business-option-initial"], ["routerLink", "/login", 1, "px-5", "py-2", "text-sm", "font-medium", "rounded-full", "theme-primary-btn", "shadow-sm", "transition-all", "transform", "active:scale-95"], [1, "flex", "items-center", "justify-between", "rounded-xl", "border", "border-slate-200/70", "bg-white/80", "px-3", "py-2"], [1, "text-[11px]", "font-semibold", "uppercase", "tracking-[0.12em]", "text-slate-500"], [1, "text-sm", "font-semibold", "text-slate-800"], ["type", "button", 1, "text-xs", "font-semibold", "text-sky-600", 3, "click"], [1, "flex", "items-center", "px-2"], [1, "flex-shrink-0"], ["alt", "", 1, "h-10", "w-10", "rounded-full", 3, "src"], ["routerLink", "/login", 1, "w-full", "py-2.5", "text-sm", "font-medium", "rounded-lg", "theme-primary-btn"], ["alt", "Logo preview", 1, "business-logo-preview", 3, "src"], ["type", "button", 1, "business-logo-remove", 3, "click"], [1, "fa-regular", "fa-image"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "nav", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "div", 6);
            i0.ɵɵelement(6, "i", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(7, "input", 8);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(8, "div", 9);
            i0.ɵɵconditionalCreate(9, NavbarComponent_Conditional_9_Template, 13, 5, "div", 10)(10, NavbarComponent_Conditional_10_Template, 3, 0, "div", 11);
            i0.ɵɵelementStart(11, "button", 12)(12, "span", 13);
            i0.ɵɵtext(13, "Open main menu");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(14, "i", 14);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(15, "div", 15)(16, "div", 16);
            i0.ɵɵconditionalCreate(17, NavbarComponent_Conditional_17_Template, 12, 2, "div", 17)(18, NavbarComponent_Conditional_18_Template, 3, 0, "div", 18);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(19, "div", 19)(20, "div", 20);
            i0.ɵɵlistener("click", function NavbarComponent_Template_div_click_20_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.closeAddBusinessDrawer()); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "aside", 21);
            i0.ɵɵlistener("click", function NavbarComponent_Template_aside_click_21_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.preventMenuClose($event)); });
            i0.ɵɵelementStart(22, "div", 22)(23, "div")(24, "p", 23);
            i0.ɵɵtext(25, "Workspace Setup");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(26, "h3", 24);
            i0.ɵɵtext(27, "Add Business");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(28, "button", 25);
            i0.ɵɵlistener("click", function NavbarComponent_Template_button_click_28_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.closeAddBusinessDrawer()); });
            i0.ɵɵelement(29, "i", 26);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(30, "form", 27);
            i0.ɵɵlistener("ngSubmit", function NavbarComponent_Template_form_ngSubmit_30_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.submitAddBusiness()); });
            i0.ɵɵelementStart(31, "label", 28)(32, "span");
            i0.ɵɵtext(33, "Business Name");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(34, "input", 29);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(35, "label", 28)(36, "span");
            i0.ɵɵtext(37, "Business Type");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(38, "select", 30);
            i0.ɵɵrepeaterCreate(39, NavbarComponent_For_40_Template, 2, 2, "option", 31, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(41, "label", 28)(42, "span");
            i0.ɵɵtext(43, "Status");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(44, "select", 32)(45, "option", 31);
            i0.ɵɵtext(46, "Active");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(47, "option", 31);
            i0.ɵɵtext(48, "Inactive");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(49, "div", 28)(50, "span");
            i0.ɵɵtext(51, "Logo");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(52, "input", 33, 0);
            i0.ɵɵlistener("change", function NavbarComponent_Template_input_change_52_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onLogoInputChange($event)); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(54, "div", 34);
            i0.ɵɵlistener("click", function NavbarComponent_Template_div_click_54_listener() { i0.ɵɵrestoreView(_r1); const logoInput_r9 = i0.ɵɵreference(53); return i0.ɵɵresetView(logoInput_r9.click()); })("dragover", function NavbarComponent_Template_div_dragover_54_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onLogoDragOver($event)); })("dragleave", function NavbarComponent_Template_div_dragleave_54_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onLogoDragLeave($event)); })("drop", function NavbarComponent_Template_div_drop_54_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onLogoDrop($event)); });
            i0.ɵɵconditionalCreate(55, NavbarComponent_Conditional_55_Template, 3, 1)(56, NavbarComponent_Conditional_56_Template, 6, 0, "div", 35);
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(57, NavbarComponent_Conditional_57_Template, 2, 1, "p", 36);
            i0.ɵɵelementStart(58, "div", 37)(59, "button", 38);
            i0.ɵɵlistener("click", function NavbarComponent_Template_button_click_59_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.closeAddBusinessDrawer()); });
            i0.ɵɵtext(60, "Cancel");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(61, "button", 39);
            i0.ɵɵconditionalCreate(62, NavbarComponent_Conditional_62_Template, 1, 0)(63, NavbarComponent_Conditional_63_Template, 1, 0);
            i0.ɵɵelementEnd()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(9);
            i0.ɵɵconditional(ctx.currentUser() ? 9 : 10);
            i0.ɵɵadvance(8);
            i0.ɵɵconditional(ctx.currentUser() ? 17 : 18);
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("business-drawer-shell--open", ctx.isAddBusinessDrawerOpen());
            i0.ɵɵadvance(11);
            i0.ɵɵproperty("formGroup", ctx.addBusinessForm);
            i0.ɵɵadvance(9);
            i0.ɵɵrepeater(ctx.businessTypes);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("value", 1);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("value", 0);
            i0.ɵɵadvance(7);
            i0.ɵɵclassProp("business-logo-dropzone--dragover", ctx.isLogoDragOver());
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.logoPreview() ? 55 : 56);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.businessErrorMessage() ? 57 : -1);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("disabled", ctx.addBusinessForm.invalid || ctx.isSubmittingBusiness());
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.isSubmittingBusiness() ? 62 : 63);
        } }, dependencies: [CommonModule, RouterLink, ReactiveFormsModule, i1.ɵNgNoValidate, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.DefaultValueAccessor, i1.SelectControlValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.business-selector-btn[_ngcontent-%COMP%] {\n  min-width: 250px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.75rem;\n  padding: 0.55rem 0.75rem;\n  border-radius: 0.9rem;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 68%, white);\n  background: color-mix(in srgb, var(--theme-bg-surface) 92%, white);\n  box-shadow: 0 8px 18px color-mix(in srgb, var(--theme-primary) 10%, transparent);\n  transition: all 0.2s ease;\n}\n\n.business-selector-btn[_ngcontent-%COMP%]:hover {\n  border-color: color-mix(in srgb, var(--theme-primary) 45%, white);\n  box-shadow: 0 10px 24px color-mix(in srgb, var(--theme-primary) 18%, transparent);\n}\n\n.business-selector-copy[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n}\n\n.business-selector-title[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 700;\n  color: var(--theme-text-primary);\n  line-height: 1.2;\n}\n\n.business-selector-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: var(--theme-text-muted);\n  line-height: 1.2;\n  margin-top: 0.1rem;\n}\n\n.business-menu-panel[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 0.65rem);\n  right: 0;\n  width: 320px;\n  border-radius: 1rem;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 65%, white);\n  background: color-mix(in srgb, var(--theme-bg-surface) 95%, white);\n  box-shadow: 0 22px 45px color-mix(in srgb, black 16%, transparent);\n  padding: 0.5rem;\n  z-index: 80;\n}\n\n.business-option[_ngcontent-%COMP%] {\n  width: 100%;\n  border: none;\n  display: flex;\n  align-items: center;\n  gap: 0.7rem;\n  border-radius: 0.75rem;\n  padding: 0.55rem 0.55rem;\n  background: transparent;\n  cursor: pointer;\n}\n\n.business-option[_ngcontent-%COMP%]:hover {\n  background: color-mix(in srgb, var(--theme-primary) 11%, white);\n}\n\n.business-option--active[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--theme-primary) 15%, white);\n}\n\n.business-option-avatar[_ngcontent-%COMP%] {\n  width: 2.1rem;\n  height: 2.1rem;\n  border-radius: 9999px;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 60%, white);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: color-mix(in srgb, var(--theme-bg-surface-soft) 80%, white);\n  overflow: hidden;\n  color: var(--theme-text-secondary);\n}\n\n.business-option-avatar--default[_ngcontent-%COMP%] {\n  color: var(--theme-primary);\n}\n\n.business-option-logo[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.business-option-initial[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 700;\n  color: var(--theme-text-primary);\n}\n\n.business-option-copy[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  flex: 1;\n}\n\n.business-option-title[_ngcontent-%COMP%] {\n  font-size: 0.79rem;\n  font-weight: 700;\n  color: var(--theme-text-primary);\n}\n\n.business-option-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: var(--theme-text-muted);\n}\n\n.business-menu-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  margin: 0.4rem 0.25rem 0.5rem;\n  background: color-mix(in srgb, var(--theme-border) 55%, white);\n}\n\n.business-add-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  border: none;\n  border-radius: 0.75rem;\n  padding: 0.63rem 0.7rem;\n  font-size: 0.79rem;\n  font-weight: 700;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  cursor: pointer;\n  color: var(--theme-primary-contrast);\n  background: linear-gradient(120deg, var(--theme-primary), var(--theme-accent-end));\n}\n\n.business-drawer-shell[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 120;\n  pointer-events: none;\n}\n\n.business-drawer-shell--open[_ngcontent-%COMP%] {\n  pointer-events: auto;\n}\n\n.business-drawer-backdrop[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(6, 9, 18, 0.45);\n  opacity: 0;\n  transition: opacity 0.25s ease;\n}\n\n.business-drawer-shell--open[_ngcontent-%COMP%]   .business-drawer-backdrop[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.business-drawer[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 0;\n  height: 100%;\n  width: min(430px, 100vw);\n  background: color-mix(in srgb, var(--theme-bg-surface) 95%, white);\n  border-left: 1px solid color-mix(in srgb, var(--theme-border) 58%, white);\n  box-shadow: -20px 0 45px color-mix(in srgb, black 22%, transparent);\n  transform: translateX(100%);\n  transition: transform 0.25s ease;\n  display: flex;\n  flex-direction: column;\n}\n\n.business-drawer-shell--open[_ngcontent-%COMP%]   .business-drawer[_ngcontent-%COMP%] {\n  transform: translateX(0);\n}\n\n.business-drawer-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1.2rem 1.2rem 1rem;\n  border-bottom: 1px solid color-mix(in srgb, var(--theme-border) 55%, white);\n}\n\n.business-drawer-kicker[_ngcontent-%COMP%] {\n  font-size: 0.67rem;\n  font-weight: 700;\n  letter-spacing: 0.09em;\n  text-transform: uppercase;\n  color: var(--theme-text-muted);\n}\n\n.business-drawer-title[_ngcontent-%COMP%] {\n  margin-top: 0.22rem;\n  font-size: 1.08rem;\n  font-weight: 800;\n  color: var(--theme-text-primary);\n}\n\n.business-drawer-close[_ngcontent-%COMP%] {\n  border: none;\n  width: 2rem;\n  height: 2rem;\n  border-radius: 999px;\n  background: color-mix(in srgb, var(--theme-bg-surface-soft) 82%, white);\n  color: var(--theme-text-secondary);\n  cursor: pointer;\n}\n\n.business-form[_ngcontent-%COMP%] {\n  padding: 1rem 1.2rem 1.3rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.95rem;\n  overflow: auto;\n}\n\n.business-form-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.45rem;\n}\n\n.business-form-field[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font-size: 0.74rem;\n  font-weight: 700;\n  color: var(--theme-text-secondary);\n  letter-spacing: 0.02em;\n}\n\n.business-form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.business-form-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  border-radius: 0.7rem;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 63%, white);\n  background: color-mix(in srgb, var(--theme-bg-surface) 92%, white);\n  color: var(--theme-text-primary);\n  padding: 0.68rem 0.72rem;\n  font-size: 0.83rem;\n}\n\n.business-form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus-visible, \n.business-form-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid color-mix(in srgb, var(--theme-primary) 45%, white);\n  outline-offset: 1px;\n}\n\n.business-logo-dropzone[_ngcontent-%COMP%] {\n  border-radius: 0.9rem;\n  border: 1.5px dashed color-mix(in srgb, var(--theme-border) 62%, white);\n  background: color-mix(in srgb, var(--theme-bg-surface-soft) 72%, white);\n  min-height: 155px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  cursor: pointer;\n  padding: 0.8rem;\n}\n\n.business-logo-dropzone--dragover[_ngcontent-%COMP%] {\n  border-color: color-mix(in srgb, var(--theme-primary) 55%, white);\n  background: color-mix(in srgb, var(--theme-primary) 12%, white);\n}\n\n.business-logo-empty[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.business-logo-empty[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  color: var(--theme-primary);\n}\n\n.business-logo-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 0.4rem;\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: var(--theme-text-primary);\n}\n\n.business-logo-empty[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-top: 0.2rem;\n  display: block;\n  font-size: 0.7rem;\n  color: var(--theme-text-muted);\n}\n\n.business-logo-preview[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 190px;\n  object-fit: contain;\n  border-radius: 0.7rem;\n}\n\n.business-logo-remove[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0.55rem;\n  top: 0.55rem;\n  border: none;\n  border-radius: 999px;\n  background: rgba(17, 24, 39, 0.86);\n  color: white;\n  padding: 0.3rem 0.65rem;\n  font-size: 0.68rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n\n.business-form-error[_ngcontent-%COMP%] {\n  border-radius: 0.65rem;\n  padding: 0.56rem 0.7rem;\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: var(--theme-danger);\n  background: color-mix(in srgb, var(--theme-danger) 11%, white);\n}\n\n.business-form-actions[_ngcontent-%COMP%] {\n  margin-top: 0.2rem;\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.6rem;\n}\n\n.business-cancel-btn[_ngcontent-%COMP%], \n.business-submit-btn[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 0.7rem;\n  padding: 0.62rem 0.88rem;\n  font-size: 0.78rem;\n  font-weight: 700;\n  cursor: pointer;\n}\n\n.business-cancel-btn[_ngcontent-%COMP%] {\n  color: var(--theme-text-secondary);\n  background: color-mix(in srgb, var(--theme-bg-surface-soft) 78%, white);\n}\n\n.business-submit-btn[_ngcontent-%COMP%] {\n  color: var(--theme-primary-contrast);\n  background: linear-gradient(120deg, var(--theme-primary), var(--theme-accent-end));\n}\n\n.business-submit-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n@media (max-width: 768px) {\n  .business-drawer[_ngcontent-%COMP%] {\n    width: 100vw;\n  }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NavbarComponent, [{
        type: Component,
        args: [{ selector: 'app-navbar-component', imports: [CommonModule, RouterLink, ReactiveFormsModule], template: "<nav\n  class=\"sticky top-0 z-50 theme-navbar backdrop-blur-xl border-b\">\n  <div class=\"max-w-full mx-auto px-4 sm:px-6 lg:px-4\">\n    <div class=\"flex h-16 items-center justify-between\">\n\n      <!-- Search Bar -->\n      <div class=\"flex-1 flex max-w-2xl ml-12 lg:ml-48\">\n        <div class=\"relative w-full max-w-md group\">\n          <div class=\"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none\">\n            <i\n              class=\"fa-solid fa-magnifying-glass theme-search-icon text-sm transition-colors duration-200\"></i>\n          </div>\n          <input type=\"text\" class=\"block w-full pl-10 pr-3 py-2 border-none rounded-xl leading-5 theme-search-input\n                   transition-all duration-200 ease-in-out sm:text-sm\" placeholder=\"Search...\" />\n        </div>\n      </div>\n\n      <!-- Right Side Actions -->\n      <div class=\"flex items-center gap-6\">\n\n        <!-- User Profile -->\n        @if (currentUser()) {\n        <div class=\"hidden md:flex items-center gap-3 pl-2\">\n          <div class=\"relative\" (click)=\"preventMenuClose($event)\">\n            <button type=\"button\" class=\"business-selector-btn\" (click)=\"toggleBusinessMenu($event)\">\n              <span class=\"business-selector-copy\">\n                <span class=\"business-selector-title\">{{ selectedBusinessLabel() }}</span>\n                <span class=\"business-selector-subtitle\">{{ selectedBusinessType() }}</span>\n              </span>\n              <i class=\"fa-solid fa-chevron-down text-[11px] text-slate-500\"></i>\n            </button>\n\n            @if (isBusinessMenuOpen()) {\n            <div class=\"business-menu-panel\">\n              <button type=\"button\" class=\"business-option\" [class.business-option--active]=\"selectedBusinessId() === 'default'\"\n                (click)=\"selectBusiness('default', $event)\">\n                <span class=\"business-option-avatar business-option-avatar--default\">\n                  <i class=\"fa-regular fa-building text-[12px]\"></i>\n                </span>\n                <span class=\"business-option-copy\">\n                  <span class=\"business-option-title\">Default</span>\n                  <span class=\"business-option-subtitle\">No business selected</span>\n                </span>\n                @if (selectedBusinessId() === 'default') {\n                <i class=\"fa-solid fa-check text-xs text-sky-500\"></i>\n                }\n              </button>\n\n              @for (business of businesses(); track business.id) {\n              <button type=\"button\" class=\"business-option\" [class.business-option--active]=\"selectedBusinessId() === business.id\"\n                (click)=\"selectBusiness(business.id, $event)\">\n                <span class=\"business-option-avatar\">\n                  @if (business.logo_path) {\n                  <img [src]=\"business.logo_path\" [alt]=\"business.name\" class=\"business-option-logo\" />\n                  } @else {\n                  <span class=\"business-option-initial\">{{ businessInitial(business.name) }}</span>\n                  }\n                </span>\n                <span class=\"business-option-copy\">\n                  <span class=\"business-option-title\">{{ business.name }}</span>\n                  <span class=\"business-option-subtitle\">{{ business.type }}</span>\n                </span>\n                @if (selectedBusinessId() === business.id) {\n                <i class=\"fa-solid fa-check text-xs text-sky-500\"></i>\n                }\n              </button>\n              }\n\n              <div class=\"business-menu-divider\"></div>\n\n              <button type=\"button\" class=\"business-add-btn\" (click)=\"openAddBusinessDrawer($event)\">\n                <i class=\"fa-solid fa-plus\"></i>\n                Add Business\n              </button>\n            </div>\n            }\n          </div>\n\n          <button class=\"relative group cursor-pointer focus:outline-none\">\n            <div\n              class=\"relative h-10 w-10 rounded-full overflow-hidden ring-2 ring-transparent theme-avatar-ring transition-all duration-200\">\n              <img [src]=\"currentUser()?.avatar || 'assets/default-avatar.png'\" [alt]=\"currentUser()?.name\"\n                class=\"h-full w-full object-cover\" />\n            </div>\n          </button>\n        </div>\n        } @else {\n        <div class=\"hidden md:flex items-center gap-3\">\n          <button routerLink=\"/login\"\n            class=\"px-5 py-2 text-sm font-medium rounded-full theme-primary-btn shadow-sm transition-all transform active:scale-95\">\n            Get started\n          </button>\n        </div>\n        }\n\n        <!-- Mobile Menu Button -->\n        <button type=\"button\"\n          class=\"md:hidden inline-flex items-center justify-center p-2 rounded-md theme-mobile-trigger focus:ring-2 focus:ring-inset\"\n          onclick=\"document.getElementById('mobile-menu').classList.toggle('hidden')\">\n          <span class=\"sr-only\">Open main menu</span>\n          <i class=\"fa-solid fa-bars text-xl\"></i>\n        </button>\n      </div>\n    </div>\n  </div>\n\n  <!-- Mobile Menu -->\n  <div id=\"mobile-menu\" class=\"hidden md:hidden border-t theme-mobile-menu backdrop-blur-xl\">\n    <div class=\"pt-4 pb-4 px-4 space-y-4\">\n      @if (currentUser()) {\n      <div class=\"space-y-3\">\n        <div class=\"flex items-center justify-between rounded-xl border border-slate-200/70 bg-white/80 px-3 py-2\">\n          <div>\n            <p class=\"text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500\">Current Workspace</p>\n            <p class=\"text-sm font-semibold text-slate-800\">{{ selectedBusinessLabel() }}</p>\n          </div>\n          <button type=\"button\" class=\"text-xs font-semibold text-sky-600\" (click)=\"openAddBusinessDrawer($event)\">\n            Add\n          </button>\n        </div>\n        <div class=\"flex items-center px-2\">\n          <div class=\"flex-shrink-0\">\n          <img [src]=\"currentUser()?.avatar || 'assets/default-avatar.png'\" class=\"h-10 w-10 rounded-full\" alt=\"\" />\n          </div>\n        </div>\n      </div>\n      } @else {\n      <div class=\"space-y-2\">\n        <button routerLink=\"/login\"\n          class=\"w-full py-2.5 text-sm font-medium rounded-lg theme-primary-btn\">\n          Get started\n        </button>\n      </div>\n      }\n    </div>\n  </div>\n</nav>\n\n<div class=\"business-drawer-shell\" [class.business-drawer-shell--open]=\"isAddBusinessDrawerOpen()\">\n  <div class=\"business-drawer-backdrop\" (click)=\"closeAddBusinessDrawer()\"></div>\n  <aside class=\"business-drawer\" (click)=\"preventMenuClose($event)\">\n    <div class=\"business-drawer-header\">\n      <div>\n        <p class=\"business-drawer-kicker\">Workspace Setup</p>\n        <h3 class=\"business-drawer-title\">Add Business</h3>\n      </div>\n      <button type=\"button\" class=\"business-drawer-close\" (click)=\"closeAddBusinessDrawer()\">\n        <i class=\"fa-solid fa-xmark\"></i>\n      </button>\n    </div>\n\n    <form [formGroup]=\"addBusinessForm\" (ngSubmit)=\"submitAddBusiness()\" class=\"business-form\">\n      <label class=\"business-form-field\">\n        <span>Business Name</span>\n        <input type=\"text\" formControlName=\"name\" placeholder=\"Enter business name\" />\n      </label>\n\n      <label class=\"business-form-field\">\n        <span>Business Type</span>\n        <select formControlName=\"type\">\n          @for (type of businessTypes; track type) {\n          <option [value]=\"type\">{{ type }}</option>\n          }\n        </select>\n      </label>\n\n      <label class=\"business-form-field\">\n        <span>Status</span>\n        <select formControlName=\"status\">\n          <option [value]=\"1\">Active</option>\n          <option [value]=\"0\">Inactive</option>\n        </select>\n      </label>\n\n      <div class=\"business-form-field\">\n        <span>Logo</span>\n        <input #logoInput type=\"file\" accept=\"image/*\" class=\"hidden\" (change)=\"onLogoInputChange($event)\" />\n        <div class=\"business-logo-dropzone\" [class.business-logo-dropzone--dragover]=\"isLogoDragOver()\"\n          (click)=\"logoInput.click()\" (dragover)=\"onLogoDragOver($event)\" (dragleave)=\"onLogoDragLeave($event)\"\n          (drop)=\"onLogoDrop($event)\">\n          @if (logoPreview()) {\n          <img [src]=\"logoPreview()!\" alt=\"Logo preview\" class=\"business-logo-preview\" />\n          <button type=\"button\" class=\"business-logo-remove\" (click)=\"removeLogo($event)\">\n            Remove\n          </button>\n          } @else {\n          <div class=\"business-logo-empty\">\n            <i class=\"fa-regular fa-image\"></i>\n            <p>Drop logo here or click to browse</p>\n            <span>PNG, JPG, WEBP up to 5MB</span>\n          </div>\n          }\n        </div>\n      </div>\n\n      @if (businessErrorMessage()) {\n      <p class=\"business-form-error\">{{ businessErrorMessage() }}</p>\n      }\n\n      <div class=\"business-form-actions\">\n        <button type=\"button\" class=\"business-cancel-btn\" (click)=\"closeAddBusinessDrawer()\">Cancel</button>\n        <button type=\"submit\" [disabled]=\"addBusinessForm.invalid || isSubmittingBusiness()\" class=\"business-submit-btn\">\n          @if (isSubmittingBusiness()) {\n          Saving...\n          } @else {\n          Save Business\n          }\n        </button>\n      </div>\n    </form>\n  </aside>\n</div>\n", styles: [":host {\n  display: block;\n}\n\n.business-selector-btn {\n  min-width: 250px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.75rem;\n  padding: 0.55rem 0.75rem;\n  border-radius: 0.9rem;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 68%, white);\n  background: color-mix(in srgb, var(--theme-bg-surface) 92%, white);\n  box-shadow: 0 8px 18px color-mix(in srgb, var(--theme-primary) 10%, transparent);\n  transition: all 0.2s ease;\n}\n\n.business-selector-btn:hover {\n  border-color: color-mix(in srgb, var(--theme-primary) 45%, white);\n  box-shadow: 0 10px 24px color-mix(in srgb, var(--theme-primary) 18%, transparent);\n}\n\n.business-selector-copy {\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n}\n\n.business-selector-title {\n  font-size: 0.82rem;\n  font-weight: 700;\n  color: var(--theme-text-primary);\n  line-height: 1.2;\n}\n\n.business-selector-subtitle {\n  font-size: 0.72rem;\n  color: var(--theme-text-muted);\n  line-height: 1.2;\n  margin-top: 0.1rem;\n}\n\n.business-menu-panel {\n  position: absolute;\n  top: calc(100% + 0.65rem);\n  right: 0;\n  width: 320px;\n  border-radius: 1rem;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 65%, white);\n  background: color-mix(in srgb, var(--theme-bg-surface) 95%, white);\n  box-shadow: 0 22px 45px color-mix(in srgb, black 16%, transparent);\n  padding: 0.5rem;\n  z-index: 80;\n}\n\n.business-option {\n  width: 100%;\n  border: none;\n  display: flex;\n  align-items: center;\n  gap: 0.7rem;\n  border-radius: 0.75rem;\n  padding: 0.55rem 0.55rem;\n  background: transparent;\n  cursor: pointer;\n}\n\n.business-option:hover {\n  background: color-mix(in srgb, var(--theme-primary) 11%, white);\n}\n\n.business-option--active {\n  background: color-mix(in srgb, var(--theme-primary) 15%, white);\n}\n\n.business-option-avatar {\n  width: 2.1rem;\n  height: 2.1rem;\n  border-radius: 9999px;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 60%, white);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: color-mix(in srgb, var(--theme-bg-surface-soft) 80%, white);\n  overflow: hidden;\n  color: var(--theme-text-secondary);\n}\n\n.business-option-avatar--default {\n  color: var(--theme-primary);\n}\n\n.business-option-logo {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.business-option-initial {\n  font-size: 0.82rem;\n  font-weight: 700;\n  color: var(--theme-text-primary);\n}\n\n.business-option-copy {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  flex: 1;\n}\n\n.business-option-title {\n  font-size: 0.79rem;\n  font-weight: 700;\n  color: var(--theme-text-primary);\n}\n\n.business-option-subtitle {\n  font-size: 0.7rem;\n  color: var(--theme-text-muted);\n}\n\n.business-menu-divider {\n  height: 1px;\n  margin: 0.4rem 0.25rem 0.5rem;\n  background: color-mix(in srgb, var(--theme-border) 55%, white);\n}\n\n.business-add-btn {\n  width: 100%;\n  border: none;\n  border-radius: 0.75rem;\n  padding: 0.63rem 0.7rem;\n  font-size: 0.79rem;\n  font-weight: 700;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  cursor: pointer;\n  color: var(--theme-primary-contrast);\n  background: linear-gradient(120deg, var(--theme-primary), var(--theme-accent-end));\n}\n\n.business-drawer-shell {\n  position: fixed;\n  inset: 0;\n  z-index: 120;\n  pointer-events: none;\n}\n\n.business-drawer-shell--open {\n  pointer-events: auto;\n}\n\n.business-drawer-backdrop {\n  position: absolute;\n  inset: 0;\n  background: rgba(6, 9, 18, 0.45);\n  opacity: 0;\n  transition: opacity 0.25s ease;\n}\n\n.business-drawer-shell--open .business-drawer-backdrop {\n  opacity: 1;\n}\n\n.business-drawer {\n  position: absolute;\n  right: 0;\n  top: 0;\n  height: 100%;\n  width: min(430px, 100vw);\n  background: color-mix(in srgb, var(--theme-bg-surface) 95%, white);\n  border-left: 1px solid color-mix(in srgb, var(--theme-border) 58%, white);\n  box-shadow: -20px 0 45px color-mix(in srgb, black 22%, transparent);\n  transform: translateX(100%);\n  transition: transform 0.25s ease;\n  display: flex;\n  flex-direction: column;\n}\n\n.business-drawer-shell--open .business-drawer {\n  transform: translateX(0);\n}\n\n.business-drawer-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1.2rem 1.2rem 1rem;\n  border-bottom: 1px solid color-mix(in srgb, var(--theme-border) 55%, white);\n}\n\n.business-drawer-kicker {\n  font-size: 0.67rem;\n  font-weight: 700;\n  letter-spacing: 0.09em;\n  text-transform: uppercase;\n  color: var(--theme-text-muted);\n}\n\n.business-drawer-title {\n  margin-top: 0.22rem;\n  font-size: 1.08rem;\n  font-weight: 800;\n  color: var(--theme-text-primary);\n}\n\n.business-drawer-close {\n  border: none;\n  width: 2rem;\n  height: 2rem;\n  border-radius: 999px;\n  background: color-mix(in srgb, var(--theme-bg-surface-soft) 82%, white);\n  color: var(--theme-text-secondary);\n  cursor: pointer;\n}\n\n.business-form {\n  padding: 1rem 1.2rem 1.3rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.95rem;\n  overflow: auto;\n}\n\n.business-form-field {\n  display: flex;\n  flex-direction: column;\n  gap: 0.45rem;\n}\n\n.business-form-field > span {\n  font-size: 0.74rem;\n  font-weight: 700;\n  color: var(--theme-text-secondary);\n  letter-spacing: 0.02em;\n}\n\n.business-form-field input,\n.business-form-field select {\n  border-radius: 0.7rem;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 63%, white);\n  background: color-mix(in srgb, var(--theme-bg-surface) 92%, white);\n  color: var(--theme-text-primary);\n  padding: 0.68rem 0.72rem;\n  font-size: 0.83rem;\n}\n\n.business-form-field input:focus-visible,\n.business-form-field select:focus-visible {\n  outline: 2px solid color-mix(in srgb, var(--theme-primary) 45%, white);\n  outline-offset: 1px;\n}\n\n.business-logo-dropzone {\n  border-radius: 0.9rem;\n  border: 1.5px dashed color-mix(in srgb, var(--theme-border) 62%, white);\n  background: color-mix(in srgb, var(--theme-bg-surface-soft) 72%, white);\n  min-height: 155px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  cursor: pointer;\n  padding: 0.8rem;\n}\n\n.business-logo-dropzone--dragover {\n  border-color: color-mix(in srgb, var(--theme-primary) 55%, white);\n  background: color-mix(in srgb, var(--theme-primary) 12%, white);\n}\n\n.business-logo-empty {\n  text-align: center;\n}\n\n.business-logo-empty i {\n  font-size: 1.25rem;\n  color: var(--theme-primary);\n}\n\n.business-logo-empty p {\n  margin-top: 0.4rem;\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: var(--theme-text-primary);\n}\n\n.business-logo-empty span {\n  margin-top: 0.2rem;\n  display: block;\n  font-size: 0.7rem;\n  color: var(--theme-text-muted);\n}\n\n.business-logo-preview {\n  width: 100%;\n  max-height: 190px;\n  object-fit: contain;\n  border-radius: 0.7rem;\n}\n\n.business-logo-remove {\n  position: absolute;\n  right: 0.55rem;\n  top: 0.55rem;\n  border: none;\n  border-radius: 999px;\n  background: rgba(17, 24, 39, 0.86);\n  color: white;\n  padding: 0.3rem 0.65rem;\n  font-size: 0.68rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n\n.business-form-error {\n  border-radius: 0.65rem;\n  padding: 0.56rem 0.7rem;\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: var(--theme-danger);\n  background: color-mix(in srgb, var(--theme-danger) 11%, white);\n}\n\n.business-form-actions {\n  margin-top: 0.2rem;\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.6rem;\n}\n\n.business-cancel-btn,\n.business-submit-btn {\n  border: none;\n  border-radius: 0.7rem;\n  padding: 0.62rem 0.88rem;\n  font-size: 0.78rem;\n  font-weight: 700;\n  cursor: pointer;\n}\n\n.business-cancel-btn {\n  color: var(--theme-text-secondary);\n  background: color-mix(in srgb, var(--theme-bg-surface-soft) 78%, white);\n}\n\n.business-submit-btn {\n  color: var(--theme-primary-contrast);\n  background: linear-gradient(120deg, var(--theme-primary), var(--theme-accent-end));\n}\n\n.business-submit-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n@media (max-width: 768px) {\n  .business-drawer {\n    width: 100vw;\n  }\n}\n"] }]
    }], null, { closeBusinessMenuOnOutsideClick: [{
            type: HostListener,
            args: ['document:click']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(NavbarComponent, { className: "NavbarComponent", filePath: "avyra-crm/src/app/shared/components/layouts/navbar-component/navbar-component.ts", lineNumber: 15 }); })();
