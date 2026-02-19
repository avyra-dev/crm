import { Component, signal, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../../services/auth.service';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
function LoginComponent_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 19);
    i0.ɵɵelementStart(1, "div", 10)(2, "label", 20);
    i0.ɵɵtext(3, "OTP");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "input", 21);
    i0.ɵɵelementEnd();
} }
function LoginComponent_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.helperMessage(), " ");
} }
function LoginComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 22);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.errorMessage(), " ");
} }
function LoginComponent_Conditional_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Send OTP ");
} }
function LoginComponent_Conditional_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Verify OTP ");
} }
function LoginComponent_button_23_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 23);
    i0.ɵɵlistener("click", function LoginComponent_button_23_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.requestOtp()); });
    i0.ɵɵtext(1, " Resend OTP ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", ctx_r0.isLoading());
} }
export class LoginComponent {
    // Using inject() pattern for cleaner constructor
    fb = inject(FormBuilder);
    authService = inject(AuthService);
    loginForm = this.fb.group({
        phone_number: ['', [Validators.required, Validators.pattern(/^\d{10,15}$/)]],
        otp: ['']
    });
    errorMessage = signal('', ...(ngDevMode ? [{ debugName: "errorMessage" }] : []));
    helperMessage = signal('', ...(ngDevMode ? [{ debugName: "helperMessage" }] : []));
    step = signal('phone', ...(ngDevMode ? [{ debugName: "step" }] : []));
    isLoading = signal(false, ...(ngDevMode ? [{ debugName: "isLoading" }] : []));
    otpExpiresAt = signal(null, ...(ngDevMode ? [{ debugName: "otpExpiresAt" }] : []));
    onSubmit() {
        if (!this.loginForm.valid)
            return;
        this.errorMessage.set('');
        this.helperMessage.set('');
        if (this.step() === 'phone') {
            this.requestOtp();
        }
        else {
            this.verifyOtp();
        }
    }
    requestOtp() {
        const { phone_number } = this.loginForm.value;
        this.isLoading.set(true);
        this.authService.requestOtp(phone_number).subscribe({
            next: (response) => {
                this.isLoading.set(false);
                if (response.status) {
                    this.step.set('otp');
                    this.otpExpiresAt.set(response.data?.expires_at ?? null);
                    this.loginForm.get('otp')?.reset();
                    this.loginForm.get('otp')?.setValidators([Validators.required, Validators.minLength(6)]);
                    this.loginForm.get('otp')?.updateValueAndValidity();
                    this.loginForm.get('otp')?.setValue(response.data?.otp ?? '');
                    this.helperMessage.set(response.data?.is_new_user
                        ? 'Account created. OTP sent to your phone. Enter the 6-digit code.'
                        : 'OTP sent to your phone. Enter the 6-digit code.');
                }
                else {
                    this.errorMessage.set(response.message || 'Unable to send OTP.');
                }
            },
            error: (err) => {
                this.isLoading.set(false);
                this.errorMessage.set(err?.error?.message || 'Unable to send OTP.');
            }
        });
    }
    verifyOtp() {
        const { phone_number, otp } = this.loginForm.value;
        this.isLoading.set(true);
        this.authService.verifyOtp(phone_number, otp).subscribe({
            next: (response) => {
                this.isLoading.set(false);
                if (!response.status) {
                    this.errorMessage.set(response.message || 'Invalid OTP.');
                }
            },
            error: (err) => {
                this.isLoading.set(false);
                this.errorMessage.set(err?.error?.message || 'Invalid OTP.');
            }
        });
    }
    static ɵfac = function LoginComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || LoginComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LoginComponent, selectors: [["app-login"]], decls: 26, vars: 8, consts: [[1, "min-h-screen", "theme-auth-page", "flex", "items-center", "justify-center", "py-12", "px-4", "sm:px-6", "lg:px-8", "font-sans", "antialiased"], [1, "max-w-md", "w-full", "space-y-8", "theme-auth-card", "backdrop-blur-xl", "p-10", "rounded-[32px]", "shadow-[0_20px_50px_rgba(0,0,0,0.05)]", "border"], [1, "text-center"], [1, "mx-auto", "h-12", "w-12", "theme-primary-btn", "rounded-xl", "mb-4", "flex", "items-center", "justify-center", "shadow-inner"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-6", "w-6", "text-white"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2.5", "d", "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 00-2 2zm10-10V7a4 4 0 00-8 0v4h8z"], [1, "text-3xl", "font-bold", "tracking-tight", "theme-text-primary"], [1, "mt-3", "text-sm", "font-medium", "theme-text-muted"], [1, "mt-8", "space-y-6", 3, "ngSubmit", "formGroup"], [1, "theme-auth-input-shell", "rounded-2xl", "p-1", "space-y-px", "overflow-hidden", "border"], [1, "relative"], ["for", "phone-number", 1, "sr-only"], ["formControlName", "phone_number", "id", "phone-number", "type", "tel", "autocomplete", "tel", "required", "", "placeholder", "Phone number", 1, "block", "w-full", "px-5", "py-4", "bg-transparent", "border-none", "theme-auth-input", "focus:ring-0", "sm:text-sm", 3, "readonly"], [1, "theme-helper-primary", "text-[13px]", "font-semibold", "text-center"], ["class", "theme-error text-[13px] font-semibold text-center animate-pulse", 4, "ngIf"], [1, "space-y-4"], ["type", "submit", 1, "w-full", "flex", "justify-center", "py-3.5", "px-4", "theme-primary-btn", "text-sm", "font-bold", "rounded-2xl", "active:scale-[0.98]", "transition-all", "disabled:opacity-30", "shadow-md", 3, "disabled"], ["type", "button", "class", "w-full py-2 text-sm font-semibold theme-muted-action transition-colors disabled:opacity-50", 3, "disabled", "click", 4, "ngIf"], [1, "fixed", "bottom-8", "text-[12px]", "theme-text-muted", "font-medium"], [1, "h-[1px]", "theme-auth-divider", "mx-4"], ["for", "otp", 1, "sr-only"], ["formControlName", "otp", "id", "otp", "type", "text", "inputmode", "numeric", "autocomplete", "one-time-code", "placeholder", "Enter OTP", 1, "block", "w-full", "px-5", "py-4", "bg-transparent", "border-none", "theme-auth-input", "focus:ring-0", "sm:text-sm", "tracking-[0.35em]"], [1, "theme-error", "text-[13px]", "font-semibold", "text-center", "animate-pulse"], ["type", "button", 1, "w-full", "py-2", "text-sm", "font-semibold", "theme-muted-action", "transition-colors", "disabled:opacity-50", 3, "click", "disabled"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(4, "svg", 4);
            i0.ɵɵelement(5, "path", 5);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(6, "h2", 6);
            i0.ɵɵtext(7, " Sign in / Sign up ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "p", 7);
            i0.ɵɵtext(9, " Continue with your phone number. New users are created automatically. ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(10, "form", 8);
            i0.ɵɵlistener("ngSubmit", function LoginComponent_Template_form_ngSubmit_10_listener() { return ctx.onSubmit(); });
            i0.ɵɵelementStart(11, "div", 9)(12, "div", 10)(13, "label", 11);
            i0.ɵɵtext(14, "Phone number");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(15, "input", 12);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(16, LoginComponent_Conditional_16_Template, 5, 0);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(17, LoginComponent_Conditional_17_Template, 2, 1, "div", 13);
            i0.ɵɵtemplate(18, LoginComponent_div_18_Template, 2, 1, "div", 14);
            i0.ɵɵelementStart(19, "div", 15)(20, "button", 16);
            i0.ɵɵconditionalCreate(21, LoginComponent_Conditional_21_Template, 1, 0)(22, LoginComponent_Conditional_22_Template, 1, 0);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(23, LoginComponent_button_23_Template, 2, 1, "button", 17);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(24, "div", 18);
            i0.ɵɵtext(25, " Copyright \u00A9 2026 Apple Inc. All rights reserved. ");
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(10);
            i0.ɵɵproperty("formGroup", ctx.loginForm);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("readonly", ctx.step() === "otp");
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.step() === "otp" ? 16 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.helperMessage() ? 17 : -1);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.errorMessage());
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", ctx.loginForm.invalid || ctx.isLoading());
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.step() === "phone" ? 21 : 22);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.step() === "otp");
        } }, dependencies: [CommonModule, i1.NgIf, ReactiveFormsModule, i2.ɵNgNoValidate, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.RequiredValidator, i2.FormGroupDirective, i2.FormControlName], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoginComponent, [{
        type: Component,
        args: [{ selector: 'app-login', standalone: true, imports: [CommonModule, ReactiveFormsModule], template: "<div\n    class=\"min-h-screen theme-auth-page flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-sans antialiased\">\n\n    <div\n        class=\"max-w-md w-full space-y-8 theme-auth-card backdrop-blur-xl p-10 rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border\">\n\n        <div class=\"text-center\">\n            <div class=\"mx-auto h-12 w-12 theme-primary-btn rounded-xl mb-4 flex items-center justify-center shadow-inner\">\n                <svg class=\"h-6 w-6 text-white\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">\n                    <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2.5\"\n                        d=\"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 00-2 2zm10-10V7a4 4 0 00-8 0v4h8z\" />\n                </svg>\n            </div>\n            <h2 class=\"text-3xl font-bold tracking-tight theme-text-primary\">\n                Sign in / Sign up\n            </h2>\n            <p class=\"mt-3 text-sm font-medium theme-text-muted\">\n                Continue with your phone number. New users are created automatically.\n            </p>\n        </div>\n\n        <form class=\"mt-8 space-y-6\" [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n\n            <div class=\"theme-auth-input-shell rounded-2xl p-1 space-y-px overflow-hidden border\">\n                <div class=\"relative\">\n                    <label for=\"phone-number\" class=\"sr-only\">Phone number</label>\n                    <input formControlName=\"phone_number\" id=\"phone-number\" type=\"tel\" autocomplete=\"tel\" required\n                        [readonly]=\"step() === 'otp'\"\n                        class=\"block w-full px-5 py-4 bg-transparent border-none theme-auth-input focus:ring-0 sm:text-sm\"\n                        placeholder=\"Phone number\">\n                </div>\n\n                @if (step() === 'otp') {\n                <div class=\"h-[1px] theme-auth-divider mx-4\"></div>\n                <div class=\"relative\">\n                    <label for=\"otp\" class=\"sr-only\">OTP</label>\n                    <input formControlName=\"otp\" id=\"otp\" type=\"text\" inputmode=\"numeric\" autocomplete=\"one-time-code\"\n                        class=\"block w-full px-5 py-4 bg-transparent border-none theme-auth-input focus:ring-0 sm:text-sm tracking-[0.35em]\"\n                        placeholder=\"Enter OTP\">\n                </div>\n                }\n            </div>\n\n            @if (helperMessage()) {\n            <div class=\"theme-helper-primary text-[13px] font-semibold text-center\">\n                {{ helperMessage() }}\n            </div>\n            }\n\n            <div *ngIf=\"errorMessage()\" class=\"theme-error text-[13px] font-semibold text-center animate-pulse\">\n                {{ errorMessage() }}\n            </div>\n\n            <div class=\"space-y-4\">\n                <button type=\"submit\" [disabled]=\"loginForm.invalid || isLoading()\"\n                    class=\"w-full flex justify-center py-3.5 px-4 theme-primary-btn text-sm font-bold rounded-2xl active:scale-[0.98] transition-all disabled:opacity-30 shadow-md\">\n                    @if (step() === 'phone') {\n                    Send OTP\n                    } @else {\n                    Verify OTP\n                    }\n                </button>\n\n                <button type=\"button\" [disabled]=\"isLoading()\" (click)=\"requestOtp()\" *ngIf=\"step() === 'otp'\"\n                    class=\"w-full py-2 text-sm font-semibold theme-muted-action transition-colors disabled:opacity-50\">\n                    Resend OTP\n                </button>\n            </div>\n        </form>\n    </div>\n\n    <div class=\"fixed bottom-8 text-[12px] theme-text-muted font-medium\">\n        Copyright \u00A9 2026 Apple Inc. All rights reserved.\n    </div>\n</div>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "avyra-crm/src/app/shared/pages/auth/login/login.component.ts", lineNumber: 14 }); })();
