import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
export class RegisterComponent {
    fb = inject(FormBuilder);
    router = inject(Router);
    registerForm = this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
    });
    onSubmit() {
        if (this.registerForm.valid) {
            // Logic remains identical to your functionality
            alert('Registration successful! Please login.');
            this.router.navigate(['/login']);
        }
    }
    static ɵfac = function RegisterComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RegisterComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RegisterComponent, selectors: [["app-register"]], decls: 41, vars: 2, consts: [[1, "min-h-screen", "theme-auth-page", "flex", "items-center", "justify-center", "py-12", "px-4", "sm:px-6", "lg:px-8", "font-sans", "antialiased"], [1, "max-w-md", "w-full", "space-y-8", "theme-auth-card", "backdrop-blur-xl", "p-10", "rounded-[32px]", "shadow-[0_20px_50px_rgba(0,0,0,0.05)]", "border"], [1, "text-center"], [1, "mx-auto", "h-14", "w-14", "theme-brand-gradient", "rounded-2xl", "mb-6", "flex", "items-center", "justify-center", "shadow-lg"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-7", "w-7", "text-white"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2.5", "d", "M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"], [1, "text-3xl", "font-bold", "tracking-tight", "theme-text-primary"], [1, "mt-3", "text-sm", "font-medium", "theme-text-muted"], ["routerLink", "/login", 1, "theme-link-primary", "hover:underline", "transition-all"], [1, "mt-8", "space-y-8", 3, "ngSubmit", "formGroup"], [1, "theme-auth-input-shell", "rounded-2xl", "overflow-hidden", "border"], [1, "relative"], ["for", "name", 1, "sr-only"], ["formControlName", "name", "id", "name", "type", "text", "placeholder", "Full Name", 1, "block", "w-full", "px-5", "py-4", "bg-transparent", "border-none", "theme-auth-input", "focus:ring-0", "sm:text-sm"], [1, "h-[1px]", "theme-auth-divider", "mx-4"], ["for", "email-address", 1, "sr-only"], ["formControlName", "email", "id", "email-address", "type", "email", "placeholder", "Email address", 1, "block", "w-full", "px-5", "py-4", "bg-transparent", "border-none", "theme-auth-input", "focus:ring-0", "sm:text-sm"], ["for", "password", 1, "sr-only"], ["formControlName", "password", "id", "password", "type", "password", "placeholder", "Password (min. 6 characters)", 1, "block", "w-full", "px-5", "py-4", "bg-transparent", "border-none", "theme-auth-input", "focus:ring-0", "sm:text-sm"], [1, "space-y-4"], ["type", "submit", 1, "w-full", "py-4", "theme-primary-btn", "text-sm", "font-bold", "rounded-2xl", "active:scale-[0.98]", "transition-all", "disabled:opacity-30", "shadow-md", 3, "disabled"], [1, "text-[11px]", "text-center", "theme-text-muted", "leading-relaxed", "px-4"], [1, "theme-legal-emphasis", "font-semibold"], [1, "fixed", "bottom-8", "text-[12px]", "theme-text-muted", "font-medium"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(4, "svg", 4);
            i0.ɵɵelement(5, "path", 5);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(6, "h2", 6);
            i0.ɵɵtext(7, " Create Account ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "p", 7);
            i0.ɵɵtext(9, " Already have an ID? ");
            i0.ɵɵelementStart(10, "a", 8);
            i0.ɵɵtext(11, " Sign in ");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(12, "form", 9);
            i0.ɵɵlistener("ngSubmit", function RegisterComponent_Template_form_ngSubmit_12_listener() { return ctx.onSubmit(); });
            i0.ɵɵelementStart(13, "div", 10)(14, "div", 11)(15, "label", 12);
            i0.ɵɵtext(16, "Full Name");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(17, "input", 13);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(18, "div", 14);
            i0.ɵɵelementStart(19, "div", 11)(20, "label", 15);
            i0.ɵɵtext(21, "Email address");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(22, "input", 16);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(23, "div", 14);
            i0.ɵɵelementStart(24, "div", 11)(25, "label", 17);
            i0.ɵɵtext(26, "Password");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(27, "input", 18);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(28, "div", 19)(29, "button", 20);
            i0.ɵɵtext(30, " Register ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(31, "p", 21);
            i0.ɵɵtext(32, " By registering, you agree to our ");
            i0.ɵɵelementStart(33, "span", 22);
            i0.ɵɵtext(34, "Terms of Service");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(35, " and ");
            i0.ɵɵelementStart(36, "span", 22);
            i0.ɵɵtext(37, "Privacy Policy");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(38, ". ");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(39, "div", 23);
            i0.ɵɵtext(40, " Property Management Portals \u00A9 2026 ");
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(12);
            i0.ɵɵproperty("formGroup", ctx.registerForm);
            i0.ɵɵadvance(17);
            i0.ɵɵproperty("disabled", ctx.registerForm.invalid);
        } }, dependencies: [CommonModule, ReactiveFormsModule, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName, RouterLink], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RegisterComponent, [{
        type: Component,
        args: [{ selector: 'app-register', standalone: true, imports: [CommonModule, ReactiveFormsModule, RouterLink], template: "<div\n    class=\"min-h-screen theme-auth-page flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-sans antialiased\">\n\n    <div\n        class=\"max-w-md w-full space-y-8 theme-auth-card backdrop-blur-xl p-10 rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border\">\n\n        <div class=\"text-center\">\n            <div\n                class=\"mx-auto h-14 w-14 theme-brand-gradient rounded-2xl mb-6 flex items-center justify-center shadow-lg\">\n                <svg class=\"h-7 w-7 text-white\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">\n                    <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2.5\"\n                        d=\"M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z\" />\n                </svg>\n            </div>\n            <h2 class=\"text-3xl font-bold tracking-tight theme-text-primary\">\n                Create Account\n            </h2>\n            <p class=\"mt-3 text-sm font-medium theme-text-muted\">\n                Already have an ID?\n                <a routerLink=\"/login\" class=\"theme-link-primary hover:underline transition-all\">\n                    Sign in\n                </a>\n            </p>\n        </div>\n\n        <form class=\"mt-8 space-y-8\" [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n\n            <div class=\"theme-auth-input-shell rounded-2xl overflow-hidden border\">\n                <div class=\"relative\">\n                    <label for=\"name\" class=\"sr-only\">Full Name</label>\n                    <input formControlName=\"name\" id=\"name\" type=\"text\"\n                        class=\"block w-full px-5 py-4 bg-transparent border-none theme-auth-input focus:ring-0 sm:text-sm\"\n                        placeholder=\"Full Name\">\n                </div>\n\n                <div class=\"h-[1px] theme-auth-divider mx-4\"></div>\n\n                <div class=\"relative\">\n                    <label for=\"email-address\" class=\"sr-only\">Email address</label>\n                    <input formControlName=\"email\" id=\"email-address\" type=\"email\"\n                        class=\"block w-full px-5 py-4 bg-transparent border-none theme-auth-input focus:ring-0 sm:text-sm\"\n                        placeholder=\"Email address\">\n                </div>\n\n                <div class=\"h-[1px] theme-auth-divider mx-4\"></div>\n\n                <div class=\"relative\">\n                    <label for=\"password\" class=\"sr-only\">Password</label>\n                    <input formControlName=\"password\" id=\"password\" type=\"password\"\n                        class=\"block w-full px-5 py-4 bg-transparent border-none theme-auth-input focus:ring-0 sm:text-sm\"\n                        placeholder=\"Password (min. 6 characters)\">\n                </div>\n            </div>\n\n            <div class=\"space-y-4\">\n                <button type=\"submit\" [disabled]=\"registerForm.invalid\"\n                    class=\"w-full py-4 theme-primary-btn text-sm font-bold rounded-2xl active:scale-[0.98] transition-all disabled:opacity-30 shadow-md\">\n                    Register\n                </button>\n\n                <p class=\"text-[11px] text-center theme-text-muted leading-relaxed px-4\">\n                    By registering, you agree to our\n                    <span class=\"theme-legal-emphasis font-semibold\">Terms of Service</span> and\n                    <span class=\"theme-legal-emphasis font-semibold\">Privacy Policy</span>.\n                </p>\n            </div>\n        </form>\n    </div>\n\n    <div class=\"fixed bottom-8 text-[12px] theme-text-muted font-medium\">\n        Property Management Portals &copy; 2026\n    </div>\n</div>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(RegisterComponent, { className: "RegisterComponent", filePath: "avyra-crm/src/app/shared/pages/auth/register/register.component.ts", lineNumber: 12 }); })();
