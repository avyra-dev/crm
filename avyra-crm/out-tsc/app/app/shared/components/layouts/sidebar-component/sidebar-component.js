import { Component, effect, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';
import { BusinessService } from '../../../../services/business.service';
import { ObjectService } from '../../../../services/object.service';
import * as i0 from "@angular/core";
const _c0 = () => ({ exact: true });
const _forTrack0 = ($index, $item) => $item.id;
function SidebarComponent_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 10);
    i0.ɵɵtext(1, "Loading...");
    i0.ɵɵelementEnd();
} }
function SidebarComponent_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 10);
    i0.ɵɵtext(1, "No objects yet");
    i0.ɵɵelementEnd();
} }
function SidebarComponent_Conditional_18_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 15)(1, "div", 16);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 17);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const objectRecord_r1 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("routerLink", ctx_r1.buildObjectRoute(objectRecord_r1))("routerLinkActiveOptions", i0.ɵɵpureFunction0(4, _c0));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.objectInitial(objectRecord_r1.name), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(objectRecord_r1.name);
} }
function SidebarComponent_Conditional_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵrepeaterCreate(1, SidebarComponent_Conditional_18_For_2_Template, 5, 5, "a", 15, _forTrack0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.objects());
} }
export class SidebarComponent {
    authService = inject(AuthService);
    businessService = inject(BusinessService);
    objectService = inject(ObjectService);
    objects = this.objectService.objects;
    isObjectsLoading = this.objectService.isLoading;
    selectedBusinessId = this.businessService.selectedBusinessId;
    constructor() {
        effect(() => {
            const user = this.authService.currentUser();
            const businessId = this.selectedBusinessId();
            if (!user) {
                this.objectService.clearState();
                return;
            }
            this.objectService.loadObjects(businessId);
        });
    }
    buildObjectRoute(objectRecord) {
        const routeName = this.toRouteSegment(objectRecord.name || objectRecord.key || 'object');
        return ['/objects', objectRecord.id, routeName];
    }
    objectInitial(name) {
        const trimmed = String(name || '').trim();
        return trimmed ? trimmed.charAt(0).toUpperCase() : 'O';
    }
    logout() {
        this.authService.logout();
    }
    toRouteSegment(value) {
        const trimmed = String(value || '').trim();
        if (!trimmed) {
            return 'object';
        }
        return trimmed.replace(/\//g, '-');
    }
    static ɵfac = function SidebarComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SidebarComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SidebarComponent, selectors: [["app-sidebar-component"]], decls: 30, vars: 3, consts: [[1, "fixed", "top-0", "left-0", "z-50", "h-screen", "w-16", "hover:w-48", "theme-sidebar", "backdrop-blur-xl", "border-r", "transition-[width]", "duration-300", "ease-[cubic-bezier(0.25,0.1,0.25,1)]", "overflow-hidden", "group", "flex", "flex-col"], [1, "h-16", "flex", "items-center", "shrink-0", "border-b", "theme-sidebar-header", "backdrop-blur", "sticky", "top-0", "z-10"], [1, "flex", "items-center", "gap-3", "px-3.5", "w-full"], [1, "h-9", "w-9", "rounded-xl", "theme-brand-gradient", "text-white", "font-bold", "text-lg", "flex", "items-center", "justify-center", "shrink-0", "shadow-sm"], [1, "text-xl", "font-semibold", "theme-text-primary", "tracking-tight", "whitespace-nowrap", "max-w-0", "opacity-0", "group-hover:max-w-[160px]", "group-hover:opacity-100", "transition-all", "duration-300", "delay-75"], [1, "mt-4", "px-2", "flex", "flex-col", "flex-1", "min-h-0"], [1, "flex-1", "min-h-0", "overflow-y-auto", "space-y-1.5", "pr-1", "pb-3"], ["routerLink", "/dashboard", "routerLinkActive", "theme-sidebar-link-active", 1, "flex", "items-center", "gap-3", "h-10", "px-2", "py-3", "my-2", "rounded-lg", "text-md", "font-medium", "theme-sidebar-link", "transition-all", "duration-200", 3, "routerLinkActiveOptions"], [1, "h-7", "w-7", "rounded-md", "theme-brand-gradient", "text-white", "text-lg", "flex", "items-center", "justify-center", "shrink-0"], [1, "px-2", "pt-2", "text-[10px]", "uppercase", "tracking-[0.12em]", "theme-text-muted", "whitespace-nowrap"], [1, "px-2", "py-1", "text-[11px]", "theme-text-muted", "whitespace-nowrap"], [1, "space-y-1"], [1, "border-t", "theme-sidebar-footer", "pt-3", "pb-4", "backdrop-blur"], ["routerLink", "/settings", "routerLinkActive", "theme-sidebar-link-active", 1, "mb-2", "flex", "items-center", "gap-3", "h-10", "px-4", "rounded-lg", "text-[13px]", "font-medium", "theme-sidebar-link", "transition-all", "duration-200"], ["type", "button", 1, "flex", "w-full", "items-center", "gap-3", "h-10", "px-4", "rounded-lg", "text-[13px]", "font-medium", "theme-danger-btn", "transition-all", "cursor-pointer", 3, "click"], ["routerLinkActive", "theme-sidebar-link-active", 1, "flex", "items-center", "gap-3", "h-9", "px-2", "rounded-lg", "text-[12px]", "font-medium", "theme-sidebar-link", "transition-all", "duration-200", 3, "routerLink", "routerLinkActiveOptions"], [1, "h-6", "w-6", "rounded-md", "theme-brand-gradient", "text-white", "text-[11px]", "flex", "items-center", "justify-center", "shrink-0"], [1, "truncate"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "aside", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
            i0.ɵɵtext(4, " H ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "span", 4);
            i0.ɵɵtext(6, " CRM ");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(7, "nav", 5)(8, "div", 6)(9, "a", 7)(10, "div", 8);
            i0.ɵɵtext(11, " D ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "span");
            i0.ɵɵtext(13, "Dashboard");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(14, "p", 9);
            i0.ɵɵtext(15, " Objects ");
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(16, SidebarComponent_Conditional_16_Template, 2, 0, "p", 10)(17, SidebarComponent_Conditional_17_Template, 2, 0, "p", 10)(18, SidebarComponent_Conditional_18_Template, 3, 0, "div", 11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "div", 12)(20, "a", 13)(21, "div", 8);
            i0.ɵɵtext(22, " S ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "span");
            i0.ɵɵtext(24, "Settings");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(25, "button", 14);
            i0.ɵɵlistener("click", function SidebarComponent_Template_button_click_25_listener() { return ctx.logout(); });
            i0.ɵɵelementStart(26, "div", 8);
            i0.ɵɵtext(27, " SO ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "span");
            i0.ɵɵtext(29, "Sign Out");
            i0.ɵɵelementEnd()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(9);
            i0.ɵɵproperty("routerLinkActiveOptions", i0.ɵɵpureFunction0(2, _c0));
            i0.ɵɵadvance(7);
            i0.ɵɵconditional(ctx.isObjectsLoading() ? 16 : !ctx.objects().length ? 17 : 18);
        } }, dependencies: [RouterLinkActive, RouterLink], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SidebarComponent, [{
        type: Component,
        args: [{ selector: 'app-sidebar-component', imports: [RouterLinkActive, RouterLink], template: "<aside class=\"fixed top-0 left-0 z-50 h-screen\n          w-16 hover:w-48\n          theme-sidebar backdrop-blur-xl border-r\n          transition-[width] duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]\n          overflow-hidden group\n          flex flex-col\">\n\n  <div class=\"h-16 flex items-center shrink-0 border-b theme-sidebar-header backdrop-blur sticky top-0 z-10\">\n    <div class=\"flex items-center gap-3 px-3.5 w-full\">\n      <div class=\"h-9 w-9 rounded-xl theme-brand-gradient text-white\n               font-bold text-lg flex items-center justify-center shrink-0 shadow-sm\">\n        H\n      </div>\n\n      <span class=\"text-xl font-semibold theme-text-primary tracking-tight whitespace-nowrap\n               max-w-0 opacity-0\n               group-hover:max-w-[160px] group-hover:opacity-100\n               transition-all duration-300 delay-75\">\n        CRM\n      </span>\n    </div>\n  </div>\n\n  <!-- Menu Wrapper -->\n<nav class=\"mt-4 px-2 flex flex-col flex-1 min-h-0\">\n\n  <!-- Scrollable Menu Area -->\n  <div class=\"flex-1 min-h-0 overflow-y-auto space-y-1.5 pr-1 pb-3\">\n\n    <!-- Dashboard links here -->\n    <a routerLink=\"/dashboard\"\n       routerLinkActive=\"theme-sidebar-link-active\"\n       [routerLinkActiveOptions]=\"{ exact: true }\"\n       class=\"flex items-center gap-3 h-10 px-2 py-3 my-2 rounded-lg text-md font-medium\n              theme-sidebar-link transition-all duration-200\">\n\n      <div class=\"h-7 w-7 rounded-md theme-brand-gradient\n                  text-white text-lg flex items-center justify-center shrink-0\">\n        D\n      </div>\n\n      <span>Dashboard</span>\n    </a>\n\n    <p class=\"px-2 pt-2 text-[10px] uppercase tracking-[0.12em] theme-text-muted whitespace-nowrap\">\n      Objects\n    </p>\n\n    @if (isObjectsLoading()) {\n    <p class=\"px-2 py-1 text-[11px] theme-text-muted whitespace-nowrap\">Loading...</p>\n    } @else if (!objects().length) {\n    <p class=\"px-2 py-1 text-[11px] theme-text-muted whitespace-nowrap\">No objects yet</p>\n    } @else {\n    <div class=\"space-y-1\">\n      @for (objectRecord of objects(); track objectRecord.id) {\n      <a [routerLink]=\"buildObjectRoute(objectRecord)\"\n         routerLinkActive=\"theme-sidebar-link-active\"\n         [routerLinkActiveOptions]=\"{ exact: true }\"\n         class=\"flex items-center gap-3 h-9 px-2 rounded-lg text-[12px] font-medium theme-sidebar-link transition-all duration-200\">\n\n        <div class=\"h-6 w-6 rounded-md theme-brand-gradient\n                    text-white text-[11px] flex items-center justify-center shrink-0\">\n          {{ objectInitial(objectRecord.name) }}\n        </div>\n\n        <span class=\"truncate\">{{ objectRecord.name }}</span>\n      </a>\n      }\n    </div>\n    }\n\n  </div>\n\n  <!-- Sticky Bottom Sign Out -->\n  <div class=\"border-t theme-sidebar-footer pt-3 pb-4 backdrop-blur\">\n    <a routerLink=\"/settings\"\n       routerLinkActive=\"theme-sidebar-link-active\"\n       class=\"mb-2 flex items-center gap-3 h-10 px-4 rounded-lg text-[13px] font-medium\n              theme-sidebar-link transition-all duration-200\">\n\n      <div class=\"h-7 w-7 rounded-md theme-brand-gradient\n                  text-white text-lg flex items-center justify-center shrink-0\">\n        S\n      </div>\n\n      <span>Settings</span>\n    </a>\n\n    <button type=\"button\" (click)=\"logout()\"\n       class=\"flex w-full items-center gap-3 h-10 px-4 rounded-lg text-[13px] font-medium\n              theme-danger-btn transition-all cursor-pointer\">\n\n      <div class=\"h-7 w-7 rounded-md theme-brand-gradient\n                  text-white text-lg flex items-center justify-center shrink-0\">\n        SO\n      </div>\n\n\n      <span>Sign Out</span>\n    </button>\n  </div>\n\n</nav>\n\n</aside>\n" }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SidebarComponent, { className: "SidebarComponent", filePath: "avyra-crm/src/app/shared/components/layouts/sidebar-component/sidebar-component.ts", lineNumber: 13 }); })();
