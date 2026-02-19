import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar-component/navbar-component';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar-component/sidebar-component';
import * as i0 from "@angular/core";
export class AuthLayoutComponent {
    static ɵfac = function AuthLayoutComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AuthLayoutComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AuthLayoutComponent, selectors: [["app-auth-layout-component"]], decls: 6, vars: 0, consts: [[1, "theme-bg-app"], [1, "ml-18"], [1, "m-2"]], template: function AuthLayoutComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelement(1, "app-navbar-component")(2, "app-sidebar-component");
            i0.ɵɵelementStart(3, "div", 1)(4, "div", 2);
            i0.ɵɵelement(5, "router-outlet");
            i0.ɵɵelementEnd()()();
        } }, dependencies: [RouterOutlet,
            NavbarComponent,
            SidebarComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthLayoutComponent, [{
        type: Component,
        args: [{ selector: 'app-auth-layout-component', imports: [
                    RouterOutlet,
                    NavbarComponent,
                    SidebarComponent
                ], template: "<div class=\"theme-bg-app\">\n  <app-navbar-component></app-navbar-component>\n  <app-sidebar-component></app-sidebar-component>\n  <div class=\"ml-18\">\n    <div class=\"m-2\">\n      <router-outlet />\n    </div>\n  </div>\n</div>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AuthLayoutComponent, { className: "AuthLayoutComponent", filePath: "avyra-crm/src/app/shared/components/layouts/auth-layout-component/auth-layout-component.ts", lineNumber: 16 }); })();
