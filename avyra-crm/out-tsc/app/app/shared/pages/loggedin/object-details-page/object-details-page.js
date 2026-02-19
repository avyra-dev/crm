import { CommonModule } from '@angular/common';
import { Component, HostListener, ViewChild, computed, effect, inject, signal, untracked } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map, startWith } from 'rxjs';
import { BusinessService } from '../../../../services/business.service';
import { FieldService } from '../../../../services/field.service';
import { ObjectRecordService, } from '../../../../services/object-record.service';
import { ObjectService } from '../../../../services/object.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
const _c0 = ["recordsTableShell"];
const _c1 = () => ({ tab: "Fields" });
const _forTrack0 = ($index, $item) => $item.value;
const _forTrack1 = ($index, $item) => $item.id;
function ObjectDetailsPage_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9)(1, "span", 13);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 13);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const objectRecord_r1 = ctx;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.workspaceLabel());
    i0.ɵɵadvance();
    i0.ɵɵclassProp("overview-badge--active", objectRecord_r1.status === 1);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.statusLabel(objectRecord_r1.status), " ");
} }
function ObjectDetailsPage_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 10);
    i0.ɵɵelement(1, "i", 14);
    i0.ɵɵelementStart(2, "p");
    i0.ɵɵtext(3, "Loading object workspace...");
    i0.ɵɵelementEnd()();
} }
function ObjectDetailsPage_Conditional_15_Conditional_55_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 29);
    i0.ɵɵelement(1, "i", 37);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const objectRecord_r4 = i0.ɵɵnextContext();
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("routerLink", ctx_r1.buildAddRecordRoute(objectRecord_r4));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" Add ", objectRecord_r4.name, " ");
} }
function ObjectDetailsPage_Conditional_15_Conditional_65_Conditional_46_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Create new fields directly inside this object. This writes to field schema and object mapping pivot. ");
} }
function ObjectDetailsPage_Conditional_15_Conditional_65_Conditional_47_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Field creation is managed from ");
    i0.ɵɵelementStart(1, "strong");
    i0.ɵɵtext(2, "Settings > Fields");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, " once this object has mapped fields. ");
} }
function ObjectDetailsPage_Conditional_15_Conditional_65_Conditional_48_For_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 64);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const fieldType_r7 = ctx.$implicit;
    i0.ɵɵproperty("value", fieldType_r7.value);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(fieldType_r7.label);
} }
function ObjectDetailsPage_Conditional_15_Conditional_65_Conditional_48_Conditional_16_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 70);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.fieldOptionErrorMessage());
} }
function ObjectDetailsPage_Conditional_15_Conditional_65_Conditional_48_Conditional_16_Conditional_11_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 81);
    i0.ɵɵlistener("click", function ObjectDetailsPage_Conditional_15_Conditional_65_Conditional_48_Conditional_16_Conditional_11_For_2_Template_button_click_0_listener() { const option_r10 = i0.ɵɵrestoreView(_r9).$implicit; const ctx_r1 = i0.ɵɵnextContext(6); return i0.ɵɵresetView(ctx_r1.removeFieldOption(option_r10)); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "i", 82);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r10 = ctx.$implicit;
    i0.ɵɵattribute("aria-label", "Remove option " + option_r10);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(option_r10);
} }
function ObjectDetailsPage_Conditional_15_Conditional_65_Conditional_48_Conditional_16_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 79);
    i0.ɵɵrepeaterCreate(1, ObjectDetailsPage_Conditional_15_Conditional_65_Conditional_48_Conditional_16_Conditional_11_For_2_Template, 4, 2, "button", 80, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.createFieldOptionsPreview());
} }
function ObjectDetailsPage_Conditional_15_Conditional_65_Conditional_48_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 65)(1, "span");
    i0.ɵɵtext(2, "Select Options");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 74)(4, "input", 75);
    i0.ɵɵlistener("input", function ObjectDetailsPage_Conditional_15_Conditional_65_Conditional_48_Conditional_16_Template_input_input_4_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.onFieldOptionDraftInput($event.target.value)); })("keydown.enter", function ObjectDetailsPage_Conditional_15_Conditional_65_Conditional_48_Conditional_16_Template_input_keydown_enter_4_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.addFieldOption($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 76);
    i0.ɵɵlistener("click", function ObjectDetailsPage_Conditional_15_Conditional_65_Conditional_48_Conditional_16_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.addFieldOption()); });
    i0.ɵɵtext(6, " Add ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "p", 77);
    i0.ɵɵtext(8, " Add options quickly with Enter. You can also paste comma or new-line values. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(9, "textarea", 78);
    i0.ɵɵconditionalCreate(10, ObjectDetailsPage_Conditional_15_Conditional_65_Conditional_48_Conditional_16_Conditional_10_Template, 2, 1, "p", 70);
    i0.ɵɵconditionalCreate(11, ObjectDetailsPage_Conditional_15_Conditional_65_Conditional_48_Conditional_16_Conditional_11_Template, 3, 0, "div", 79);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("value", ctx_r1.fieldOptionDraft());
    i0.ɵɵadvance(6);
    i0.ɵɵconditional(ctx_r1.fieldOptionErrorMessage() ? 10 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.createFieldOptionsPreview().length ? 11 : -1);
} }
function ObjectDetailsPage_Conditional_15_Conditional_65_Conditional_48_Conditional_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 70);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.fieldErrorMessage());
} }
function ObjectDetailsPage_Conditional_15_Conditional_65_Conditional_48_Conditional_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 71);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.fieldSuccessMessage());
} }
function ObjectDetailsPage_Conditional_15_Conditional_65_Conditional_48_Conditional_38_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Saving... ");
} }
function ObjectDetailsPage_Conditional_15_Conditional_65_Conditional_48_Conditional_39_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Add Field ");
} }
function ObjectDetailsPage_Conditional_15_Conditional_65_Conditional_48_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 58);
    i0.ɵɵlistener("ngSubmit", function ObjectDetailsPage_Conditional_15_Conditional_65_Conditional_48_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.submitCreateField()); });
    i0.ɵɵelementStart(1, "label", 59)(2, "span");
    i0.ɵɵtext(3, "Field Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "input", 60);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 61)(6, "label", 59)(7, "span");
    i0.ɵɵtext(8, "Field Key (optional)");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(9, "input", 62);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "label", 59)(11, "span");
    i0.ɵɵtext(12, "Type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "select", 63);
    i0.ɵɵrepeaterCreate(14, ObjectDetailsPage_Conditional_15_Conditional_65_Conditional_48_For_15_Template, 2, 2, "option", 64, _forTrack0);
    i0.ɵɵelementEnd()()();
    i0.ɵɵconditionalCreate(16, ObjectDetailsPage_Conditional_15_Conditional_65_Conditional_48_Conditional_16_Template, 12, 3, "div", 65);
    i0.ɵɵelementStart(17, "label", 59)(18, "span");
    i0.ɵɵtext(19, "Description");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(20, "textarea", 66);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "div", 61)(22, "label", 67);
    i0.ɵɵelement(23, "input", 68);
    i0.ɵɵelementStart(24, "span");
    i0.ɵɵtext(25, "Required Field");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(26, "label", 59)(27, "span");
    i0.ɵɵtext(28, "Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "select", 69)(30, "option", 64);
    i0.ɵɵtext(31, "Active");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "option", 64);
    i0.ɵɵtext(33, "Inactive");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵconditionalCreate(34, ObjectDetailsPage_Conditional_15_Conditional_65_Conditional_48_Conditional_34_Template, 2, 1, "p", 70);
    i0.ɵɵconditionalCreate(35, ObjectDetailsPage_Conditional_15_Conditional_65_Conditional_48_Conditional_35_Template, 2, 1, "p", 71);
    i0.ɵɵelementStart(36, "div", 72)(37, "button", 73);
    i0.ɵɵconditionalCreate(38, ObjectDetailsPage_Conditional_15_Conditional_65_Conditional_48_Conditional_38_Template, 1, 0)(39, ObjectDetailsPage_Conditional_15_Conditional_65_Conditional_48_Conditional_39_Template, 1, 0);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("formGroup", ctx_r1.createFieldForm);
    i0.ɵɵadvance(14);
    i0.ɵɵrepeater(ctx_r1.fieldTypeOptions);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.showFieldOptionsInput() ? 16 : -1);
    i0.ɵɵadvance(14);
    i0.ɵɵproperty("value", 1);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("value", 0);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.fieldErrorMessage() ? 34 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.fieldSuccessMessage() ? 35 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r1.createFieldForm.invalid || ctx_r1.isCreatingField());
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.isCreatingField() ? 38 : 39);
} }
function ObjectDetailsPage_Conditional_15_Conditional_65_Conditional_49_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 54);
    i0.ɵɵtext(1, "Use ");
    i0.ɵɵelementStart(2, "strong");
    i0.ɵɵtext(3, "Settings > Fields");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " to add new fields once this object already has mapped fields.");
    i0.ɵɵelementEnd();
} }
function ObjectDetailsPage_Conditional_15_Conditional_65_Conditional_53_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 56);
    i0.ɵɵelement(1, "i", 14);
    i0.ɵɵelementStart(2, "p");
    i0.ɵɵtext(3, "Loading fields...");
    i0.ɵɵelementEnd()();
} }
function ObjectDetailsPage_Conditional_15_Conditional_65_Conditional_54_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 56);
    i0.ɵɵelement(1, "i", 83);
    i0.ɵɵelementStart(2, "p");
    i0.ɵɵtext(3, "No fields mapped for this object yet.");
    i0.ɵɵelementEnd()();
} }
function ObjectDetailsPage_Conditional_15_Conditional_65_Conditional_55_For_2_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Removing... ");
} }
function ObjectDetailsPage_Conditional_15_Conditional_65_Conditional_55_For_2_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Remove ");
} }
function ObjectDetailsPage_Conditional_15_Conditional_65_Conditional_55_For_2_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 89);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const fieldRecord_r12 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(fieldRecord_r12.description);
} }
function ObjectDetailsPage_Conditional_15_Conditional_65_Conditional_55_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article", 84)(1, "header", 85)(2, "div")(3, "h5");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 86)(8, "span", 87);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "button", 88);
    i0.ɵɵlistener("click", function ObjectDetailsPage_Conditional_15_Conditional_65_Conditional_55_For_2_Template_button_click_10_listener() { const fieldRecord_r12 = i0.ɵɵrestoreView(_r11).$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.unmapField(fieldRecord_r12)); });
    i0.ɵɵconditionalCreate(11, ObjectDetailsPage_Conditional_15_Conditional_65_Conditional_55_For_2_Conditional_11_Template, 1, 0)(12, ObjectDetailsPage_Conditional_15_Conditional_65_Conditional_55_For_2_Conditional_12_Template, 1, 0);
    i0.ɵɵelementEnd()()();
    i0.ɵɵconditionalCreate(13, ObjectDetailsPage_Conditional_15_Conditional_65_Conditional_55_For_2_Conditional_13_Template, 2, 1, "p", 89);
    i0.ɵɵelementStart(14, "div", 90)(15, "span");
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "span");
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "span");
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const fieldRecord_r12 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(fieldRecord_r12.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(fieldRecord_r12.key);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.fieldTypeLabel(fieldRecord_r12.type));
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r1.removingFieldId() === fieldRecord_r12.id);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.removingFieldId() === fieldRecord_r12.id ? 11 : 12);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(fieldRecord_r12.description ? 13 : -1);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(fieldRecord_r12.is_required ? "Required" : "Optional");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Status: ", fieldRecord_r12.status === 1 ? "Active" : "Inactive");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Created ", ctx_r1.formatDate(fieldRecord_r12.created_at));
} }
function ObjectDetailsPage_Conditional_15_Conditional_65_Conditional_55_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 57);
    i0.ɵɵrepeaterCreate(1, ObjectDetailsPage_Conditional_15_Conditional_65_Conditional_55_For_2_Template, 21, 9, "article", 84, _forTrack1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.fields());
} }
function ObjectDetailsPage_Conditional_15_Conditional_65_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 38);
    i0.ɵɵlistener("click", function ObjectDetailsPage_Conditional_15_Conditional_65_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.closeInfoPopup()); });
    i0.ɵɵelementStart(1, "section", 39);
    i0.ɵɵlistener("click", function ObjectDetailsPage_Conditional_15_Conditional_65_Template_section_click_1_listener($event) { i0.ɵɵrestoreView(_r5); return i0.ɵɵresetView($event.stopPropagation()); });
    i0.ɵɵelementStart(2, "header", 40)(3, "div")(4, "p", 41);
    i0.ɵɵtext(5, "Object Info");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "h2");
    i0.ɵɵtext(7, "Structure & Field Options");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "p");
    i0.ɵɵtext(9, "Manage lifecycle workflow and field mapping from one panel.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "button", 42);
    i0.ɵɵlistener("click", function ObjectDetailsPage_Conditional_15_Conditional_65_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.closeInfoPopup()); });
    i0.ɵɵelement(11, "i", 43);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "div", 44)(13, "section", 45)(14, "header", 46)(15, "h2", 47);
    i0.ɵɵtext(16, "Structure & Workflow");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "p", 48);
    i0.ɵɵtext(18, "Standard CRM controls for managing this object lifecycle.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(19, "div", 49)(20, "article", 50)(21, "h3");
    i0.ɵɵtext(22, "Record Layout");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "p");
    i0.ɵɵtext(24);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(25, "article", 50)(26, "h3");
    i0.ɵɵtext(27, "Pipeline Stages");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "p");
    i0.ɵɵtext(29, "Attach deal/task progress stages and enforce movement rules for cleaner forecasting.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(30, "article", 50)(31, "h3");
    i0.ɵɵtext(32, "Automations");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "p");
    i0.ɵɵtext(34, "Configure assignment, reminders, and follow-up workflows when records are created or updated.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(35, "article", 50)(36, "h3");
    i0.ɵɵtext(37, "Permissions");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(38, "p");
    i0.ɵɵtext(39, "Restrict edit/delete access per role so only authorized teams can update this object.");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(40, "section", 45)(41, "section", 51)(42, "header", 52)(43, "h3");
    i0.ɵɵtext(44, "Field Options");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(45, "p");
    i0.ɵɵconditionalCreate(46, ObjectDetailsPage_Conditional_15_Conditional_65_Conditional_46_Template, 1, 0)(47, ObjectDetailsPage_Conditional_15_Conditional_65_Conditional_47_Template, 4, 0);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(48, ObjectDetailsPage_Conditional_15_Conditional_65_Conditional_48_Template, 40, 8, "form", 53)(49, ObjectDetailsPage_Conditional_15_Conditional_65_Conditional_49_Template, 5, 0, "p", 54);
    i0.ɵɵelementStart(50, "div", 55)(51, "h4");
    i0.ɵɵtext(52, "Mapped Fields");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(53, ObjectDetailsPage_Conditional_15_Conditional_65_Conditional_53_Template, 4, 0, "div", 56)(54, ObjectDetailsPage_Conditional_15_Conditional_65_Conditional_54_Template, 4, 0, "div", 56)(55, ObjectDetailsPage_Conditional_15_Conditional_65_Conditional_55_Template, 3, 0, "div", 57);
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const objectRecord_r4 = i0.ɵɵnextContext();
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(24);
    i0.ɵɵtextInterpolate1("Define core fields, required constraints, and data formatting for records in ", objectRecord_r4.name, ".");
    i0.ɵɵadvance(22);
    i0.ɵɵconditional(ctx_r1.showInlineFieldCreation() ? 46 : 47);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.showInlineFieldCreation() ? 48 : !ctx_r1.isFieldsLoading() ? 49 : -1);
    i0.ɵɵadvance(5);
    i0.ɵɵconditional(ctx_r1.isFieldsLoading() ? 53 : !ctx_r1.fields().length ? 54 : 55);
} }
function ObjectDetailsPage_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 15)(1, "div", 16)(2, "div", 17);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div")(5, "p", 18);
    i0.ɵɵtext(6, "Object Workspace");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 19)(8, "h1", 20);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "p", 21);
    i0.ɵɵtext(11, "Hover to view meta details");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "section", 22)(13, "p", 23);
    i0.ɵɵtext(14, "Object Meta Details");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "dl", 24)(16, "div")(17, "dt");
    i0.ɵɵtext(18, "Object Key");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "dd", 25);
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "div")(22, "dt");
    i0.ɵɵtext(23, "Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "dd")(25, "span", 26);
    i0.ɵɵtext(26);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(27, "div")(28, "dt");
    i0.ɵɵtext(29, "Mapped Businesses");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "dd");
    i0.ɵɵtext(31);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(32, "div")(33, "dt");
    i0.ɵɵtext(34, "Created");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "dd");
    i0.ɵɵtext(36);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(37, "div")(38, "dt");
    i0.ɵɵtext(39, "Workspace");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "dd");
    i0.ɵɵtext(41);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(42, "div")(43, "dt");
    i0.ɵɵtext(44, "Object ID");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(45, "dd", 25);
    i0.ɵɵtext(46);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(47, "div")(48, "dt");
    i0.ɵɵtext(49, "Updated");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(50, "dd");
    i0.ɵɵtext(51);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(52, "p", 27);
    i0.ɵɵtext(53);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(54, "div", 28);
    i0.ɵɵconditionalCreate(55, ObjectDetailsPage_Conditional_15_Conditional_55_Template, 3, 2, "a", 29);
    i0.ɵɵelementStart(56, "button", 30);
    i0.ɵɵlistener("click", function ObjectDetailsPage_Conditional_15_Template_button_click_56_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.toggleInfoPopup()); });
    i0.ɵɵelement(57, "i", 31);
    i0.ɵɵtext(58, " Object Info ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(59, "a", 32);
    i0.ɵɵelement(60, "i", 33);
    i0.ɵɵtext(61, " Manage In Settings ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(62, "a", 34);
    i0.ɵɵelement(63, "i", 35);
    i0.ɵɵtext(64, " All Objects ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵconditionalCreate(65, ObjectDetailsPage_Conditional_15_Conditional_65_Template, 56, 4, "div", 36);
} if (rf & 2) {
    const objectRecord_r4 = ctx;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.objectInitial(objectRecord_r4.name));
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(objectRecord_r4.name);
    i0.ɵɵadvance(11);
    i0.ɵɵtextInterpolate(objectRecord_r4.key);
    i0.ɵɵadvance(5);
    i0.ɵɵclassProp("status-pill--active", objectRecord_r4.status === 1);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.statusLabel(objectRecord_r4.status), " ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(objectRecord_r4.mapped_business_count);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.formatDate(objectRecord_r4.created_at));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.workspaceLabel());
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(objectRecord_r4.id);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.formatDate(objectRecord_r4.updated_at));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.description());
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.canAddRecord() ? 55 : -1);
    i0.ɵɵadvance();
    i0.ɵɵattribute("aria-expanded", ctx_r1.isInfoPopupOpen());
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("queryParams", i0.ɵɵpureFunction0(16, _c1));
    i0.ɵɵadvance(6);
    i0.ɵɵconditional(ctx_r1.isInfoPopupOpen() ? 65 : -1);
} }
function ObjectDetailsPage_Conditional_16_Conditional_2_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 105);
    i0.ɵɵtext(1, "Loading views...");
    i0.ɵɵelementEnd();
} }
function ObjectDetailsPage_Conditional_16_Conditional_2_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 105);
    i0.ɵɵtext(1, "No views available");
    i0.ɵɵelementEnd();
} }
function ObjectDetailsPage_Conditional_16_Conditional_2_For_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 64);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const viewRecord_r14 = ctx.$implicit;
    i0.ɵɵproperty("value", viewRecord_r14.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(viewRecord_r14.name);
} }
function ObjectDetailsPage_Conditional_16_Conditional_2_Conditional_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 109);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", ctx_r1.hiddenFieldColumnCount(), " hidden");
} }
function ObjectDetailsPage_Conditional_16_Conditional_2_Conditional_28_For_8_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 117)(1, "input", 122);
    i0.ɵɵlistener("change", function ObjectDetailsPage_Conditional_16_Conditional_2_Conditional_28_For_8_Template_input_change_1_listener($event) { const fieldRecord_r17 = i0.ɵɵrestoreView(_r16).$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.toggleFieldColumn(fieldRecord_r17.id, $event.target.checked)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "div")(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "small");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const fieldRecord_r17 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("checked", ctx_r1.isFieldColumnVisible(fieldRecord_r17.id))("disabled", ctx_r1.isSavingListView());
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(fieldRecord_r17.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.fieldTypeLabel(fieldRecord_r17.type));
} }
function ObjectDetailsPage_Conditional_16_Conditional_2_Conditional_28_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 118);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.columnPreferenceMessage());
} }
function ObjectDetailsPage_Conditional_16_Conditional_2_Conditional_28_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 110)(1, "header", 115)(2, "h4");
    i0.ɵɵtext(3, "Visible Columns");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5, "Select which field columns appear in the table.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 116);
    i0.ɵɵrepeaterCreate(7, ObjectDetailsPage_Conditional_16_Conditional_2_Conditional_28_For_8_Template, 7, 4, "label", 117, _forTrack1);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(9, ObjectDetailsPage_Conditional_16_Conditional_2_Conditional_28_Conditional_9_Template, 2, 1, "p", 118);
    i0.ɵɵelementStart(10, "footer", 119)(11, "button", 120);
    i0.ɵɵlistener("click", function ObjectDetailsPage_Conditional_16_Conditional_2_Conditional_28_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r15); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.showRequiredFieldColumns()); });
    i0.ɵɵtext(12, "Required Only");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "button", 120);
    i0.ɵɵlistener("click", function ObjectDetailsPage_Conditional_16_Conditional_2_Conditional_28_Template_button_click_13_listener() { i0.ɵɵrestoreView(_r15); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.showAllFieldColumns()); });
    i0.ɵɵtext(14, "Show All");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "button", 121);
    i0.ɵɵlistener("click", function ObjectDetailsPage_Conditional_16_Conditional_2_Conditional_28_Template_button_click_15_listener() { i0.ɵɵrestoreView(_r15); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.closeColumnPicker()); });
    i0.ɵɵtext(16, "Done");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(7);
    i0.ɵɵrepeater(ctx_r1.tableFields());
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.columnPreferenceMessage() ? 9 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r1.isSavingListView());
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r1.isSavingListView());
} }
function ObjectDetailsPage_Conditional_16_Conditional_2_Conditional_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Exporting... ");
} }
function ObjectDetailsPage_Conditional_16_Conditional_2_Conditional_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Export CSV ");
} }
function ObjectDetailsPage_Conditional_16_Conditional_2_Conditional_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 112);
    i0.ɵɵtext(1, "Saving list view preferences...");
    i0.ɵɵelementEnd();
} }
function ObjectDetailsPage_Conditional_16_Conditional_2_Conditional_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 113);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.listViewErrorMessage());
} }
function ObjectDetailsPage_Conditional_16_Conditional_2_Conditional_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 114);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.listViewSuccessMessage());
} }
function ObjectDetailsPage_Conditional_16_Conditional_2_Conditional_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 113);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.recordErrorMessage());
} }
function ObjectDetailsPage_Conditional_16_Conditional_2_Conditional_37_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 93);
    i0.ɵɵelement(1, "i", 14);
    i0.ɵɵelementStart(2, "p");
    i0.ɵɵtext(3, "Loading data records...");
    i0.ɵɵelementEnd()();
} }
function ObjectDetailsPage_Conditional_16_Conditional_2_Conditional_38_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 123)(1, "span");
    i0.ɵɵelement(2, "i", 128);
    i0.ɵɵtext(3, " Horizontal scroll");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div")(5, "button", 120);
    i0.ɵɵlistener("click", function ObjectDetailsPage_Conditional_16_Conditional_2_Conditional_38_Conditional_0_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r19); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.scrollRecordsTable("left")); });
    i0.ɵɵelement(6, "i", 129);
    i0.ɵɵtext(7, " Left ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "button", 120);
    i0.ɵɵlistener("click", function ObjectDetailsPage_Conditional_16_Conditional_2_Conditional_38_Conditional_0_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r19); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.scrollRecordsTable("right")); });
    i0.ɵɵtext(9, " Right ");
    i0.ɵɵelement(10, "i", 130);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("disabled", !ctx_r1.canScrollTableLeft());
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", !ctx_r1.canScrollTableRight());
} }
function ObjectDetailsPage_Conditional_16_Conditional_2_Conditional_38_For_11_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "th")(1, "button", 121);
    i0.ɵɵlistener("click", function ObjectDetailsPage_Conditional_16_Conditional_2_Conditional_38_For_11_Template_button_click_1_listener() { const fieldRecord_r21 = i0.ɵɵrestoreView(_r20).$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.onRecordSort(fieldRecord_r21.id)); });
    i0.ɵɵtext(2);
    i0.ɵɵelement(3, "i");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const fieldRecord_r21 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", fieldRecord_r21.name, " ");
    i0.ɵɵadvance();
    i0.ɵɵclassMap(ctx_r1.sortIndicator(fieldRecord_r21.id));
} }
function ObjectDetailsPage_Conditional_16_Conditional_2_Conditional_38_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 131);
    i0.ɵɵtext(2, " No data present. ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵattribute("colspan", ctx_r1.recordColumnCount());
} }
function ObjectDetailsPage_Conditional_16_Conditional_2_Conditional_38_Conditional_16_For_1_For_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const fieldRecord_r22 = ctx.$implicit;
    const recordItem_r23 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.recordCellValue(recordItem_r23, fieldRecord_r22));
} }
function ObjectDetailsPage_Conditional_16_Conditional_2_Conditional_38_Conditional_16_For_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(3, ObjectDetailsPage_Conditional_16_Conditional_2_Conditional_38_Conditional_16_For_1_For_4_Template, 2, 1, "td", null, _forTrack1);
    i0.ɵɵelementStart(5, "td");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const recordItem_r23 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.formatDate(recordItem_r23.created_at));
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.visibleTableFields());
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.formatDate(recordItem_r23.updated_at));
} }
function ObjectDetailsPage_Conditional_16_Conditional_2_Conditional_38_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, ObjectDetailsPage_Conditional_16_Conditional_2_Conditional_38_Conditional_16_For_1_Template, 7, 2, "tr", null, _forTrack1);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵrepeater(ctx_r1.records());
} }
function ObjectDetailsPage_Conditional_16_Conditional_2_Conditional_38_Conditional_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵtextInterpolate3(" Showing ", ctx_r1.recordRangeStart(), "-", ctx_r1.recordRangeEnd(), " of ", ctx_r1.recordTotal(), " ");
} }
function ObjectDetailsPage_Conditional_16_Conditional_2_Conditional_38_Conditional_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " No records available ");
} }
function ObjectDetailsPage_Conditional_16_Conditional_2_Conditional_38_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵconditionalCreate(0, ObjectDetailsPage_Conditional_16_Conditional_2_Conditional_38_Conditional_0_Template, 11, 2, "div", 123);
    i0.ɵɵelementStart(1, "div", 124, 0);
    i0.ɵɵlistener("scroll", function ObjectDetailsPage_Conditional_16_Conditional_2_Conditional_38_Template_div_scroll_1_listener() { i0.ɵɵrestoreView(_r18); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.onRecordsTableScroll()); });
    i0.ɵɵelementStart(3, "table", 125)(4, "thead")(5, "tr")(6, "th")(7, "button", 121);
    i0.ɵɵlistener("click", function ObjectDetailsPage_Conditional_16_Conditional_2_Conditional_38_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r18); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.onRecordSort("created_at")); });
    i0.ɵɵtext(8, " Created ");
    i0.ɵɵelement(9, "i");
    i0.ɵɵelementEnd()();
    i0.ɵɵrepeaterCreate(10, ObjectDetailsPage_Conditional_16_Conditional_2_Conditional_38_For_11_Template, 4, 3, "th", null, _forTrack1);
    i0.ɵɵelementStart(12, "th");
    i0.ɵɵtext(13, "Updated");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(14, "tbody");
    i0.ɵɵconditionalCreate(15, ObjectDetailsPage_Conditional_16_Conditional_2_Conditional_38_Conditional_15_Template, 3, 1, "tr")(16, ObjectDetailsPage_Conditional_16_Conditional_2_Conditional_38_Conditional_16_Template, 2, 0);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(17, "footer", 126)(18, "p");
    i0.ɵɵconditionalCreate(19, ObjectDetailsPage_Conditional_16_Conditional_2_Conditional_38_Conditional_19_Template, 1, 3)(20, ObjectDetailsPage_Conditional_16_Conditional_2_Conditional_38_Conditional_20_Template, 1, 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "div", 127)(22, "button", 120);
    i0.ɵɵlistener("click", function ObjectDetailsPage_Conditional_16_Conditional_2_Conditional_38_Template_button_click_22_listener() { i0.ɵɵrestoreView(_r18); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.goToPreviousPage()); });
    i0.ɵɵtext(23, " Previous ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "span");
    i0.ɵɵtext(25);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "button", 120);
    i0.ɵɵlistener("click", function ObjectDetailsPage_Conditional_16_Conditional_2_Conditional_38_Template_button_click_26_listener() { i0.ɵɵrestoreView(_r18); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.goToNextPage()); });
    i0.ɵɵtext(27, " Next ");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵconditional(ctx_r1.hasHorizontalOverflow() ? 0 : -1);
    i0.ɵɵadvance(9);
    i0.ɵɵclassMap(ctx_r1.sortIndicator("created_at"));
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.visibleTableFields());
    i0.ɵɵadvance(5);
    i0.ɵɵconditional(!ctx_r1.records().length ? 15 : 16);
    i0.ɵɵadvance(4);
    i0.ɵɵconditional(ctx_r1.recordTotal() ? 19 : 20);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", ctx_r1.recordCurrentPage() <= 1 || ctx_r1.isLoadingRecords());
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2("Page ", ctx_r1.recordCurrentPage(), " of ", ctx_r1.recordTotalPages());
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r1.recordCurrentPage() >= ctx_r1.recordTotalPages() || ctx_r1.isLoadingRecords());
} }
function ObjectDetailsPage_Conditional_16_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 92)(1, "header", 96)(2, "div")(3, "h3");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6, "Search, sort, export, and manage object records in a CRM-style grid.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 97)(8, "label", 98);
    i0.ɵɵelement(9, "i", 99);
    i0.ɵɵelementStart(10, "input", 100);
    i0.ɵɵlistener("input", function ObjectDetailsPage_Conditional_16_Conditional_2_Template_input_input_10_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.onRecordSearch($event.target.value)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "section", 101)(12, "label", 102);
    i0.ɵɵtext(13, "List View");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "div", 103)(15, "select", 104);
    i0.ɵɵlistener("change", function ObjectDetailsPage_Conditional_16_Conditional_2_Template_select_change_15_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.onListViewSelect($event.target.value)); });
    i0.ɵɵconditionalCreate(16, ObjectDetailsPage_Conditional_16_Conditional_2_Conditional_16_Template, 2, 0, "option", 105)(17, ObjectDetailsPage_Conditional_16_Conditional_2_Conditional_17_Template, 2, 0, "option", 105);
    i0.ɵɵrepeaterCreate(18, ObjectDetailsPage_Conditional_16_Conditional_2_For_19_Template, 2, 2, "option", 64, _forTrack1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "button", 106);
    i0.ɵɵlistener("click", function ObjectDetailsPage_Conditional_16_Conditional_2_Template_button_click_20_listener() { i0.ɵɵrestoreView(_r13); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.createListView()); });
    i0.ɵɵelement(21, "i", 37);
    i0.ɵɵtext(22, " New View ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(23, "div", 107)(24, "button", 106);
    i0.ɵɵlistener("click", function ObjectDetailsPage_Conditional_16_Conditional_2_Template_button_click_24_listener() { i0.ɵɵrestoreView(_r13); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.toggleColumnPicker()); });
    i0.ɵɵelement(25, "i", 108);
    i0.ɵɵtext(26, " Columns ");
    i0.ɵɵconditionalCreate(27, ObjectDetailsPage_Conditional_16_Conditional_2_Conditional_27_Template, 2, 1, "span", 109);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(28, ObjectDetailsPage_Conditional_16_Conditional_2_Conditional_28_Template, 17, 3, "section", 110);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "button", 106);
    i0.ɵɵlistener("click", function ObjectDetailsPage_Conditional_16_Conditional_2_Template_button_click_29_listener() { i0.ɵɵrestoreView(_r13); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.exportRecords()); });
    i0.ɵɵelement(30, "i", 111);
    i0.ɵɵconditionalCreate(31, ObjectDetailsPage_Conditional_16_Conditional_2_Conditional_31_Template, 1, 0)(32, ObjectDetailsPage_Conditional_16_Conditional_2_Conditional_32_Template, 1, 0);
    i0.ɵɵelementEnd()()();
    i0.ɵɵconditionalCreate(33, ObjectDetailsPage_Conditional_16_Conditional_2_Conditional_33_Template, 2, 0, "p", 112);
    i0.ɵɵconditionalCreate(34, ObjectDetailsPage_Conditional_16_Conditional_2_Conditional_34_Template, 2, 1, "p", 113);
    i0.ɵɵconditionalCreate(35, ObjectDetailsPage_Conditional_16_Conditional_2_Conditional_35_Template, 2, 1, "p", 114);
    i0.ɵɵconditionalCreate(36, ObjectDetailsPage_Conditional_16_Conditional_2_Conditional_36_Template, 2, 1, "p", 113);
    i0.ɵɵconditionalCreate(37, ObjectDetailsPage_Conditional_16_Conditional_2_Conditional_37_Template, 4, 0, "div", 93)(38, ObjectDetailsPage_Conditional_16_Conditional_2_Conditional_38_Template, 28, 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const objectRecord_r24 = i0.ɵɵnextContext();
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("", objectRecord_r24.name, " Data");
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("value", ctx_r1.recordSearchTerm());
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("value", ctx_r1.selectedListViewId() ?? "")("disabled", ctx_r1.isLoadingListViews() || ctx_r1.isSavingListView() || !ctx_r1.listViews().length);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.isLoadingListViews() ? 16 : !ctx_r1.listViews().length ? 17 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r1.listViews());
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r1.isLoadingListViews() || ctx_r1.isSavingListView() || !ctx_r1.tableFields().length);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("disabled", ctx_r1.isLoadingListViews() || ctx_r1.isSavingListView() || !ctx_r1.selectedListViewId());
    i0.ɵɵattribute("aria-expanded", ctx_r1.isColumnPickerOpen());
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(ctx_r1.hiddenFieldColumnCount() ? 27 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.isColumnPickerOpen() ? 28 : -1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r1.isExportingRecords());
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.isExportingRecords() ? 31 : 32);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.isSavingListView() ? 33 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.listViewErrorMessage() ? 34 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.listViewSuccessMessage() ? 35 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.recordErrorMessage() ? 36 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.isLoadingRecords() ? 37 : 38);
} }
function ObjectDetailsPage_Conditional_16_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 93);
    i0.ɵɵelement(1, "i", 14);
    i0.ɵɵelementStart(2, "p");
    i0.ɵɵtext(3, "Loading field schema...");
    i0.ɵɵelementEnd()();
} }
function ObjectDetailsPage_Conditional_16_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 94);
    i0.ɵɵelement(1, "i", 83);
    i0.ɵɵelementStart(2, "h3");
    i0.ɵɵtext(3, "No Fields Configured");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5, "Open Object Info to configure structure and add fields before creating records.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "button", 132);
    i0.ɵɵlistener("click", function ObjectDetailsPage_Conditional_16_Conditional_4_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r25); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.openInfoPopup()); });
    i0.ɵɵelement(7, "i", 31);
    i0.ɵɵtext(8, " Open Object Info ");
    i0.ɵɵelementEnd()();
} }
function ObjectDetailsPage_Conditional_16_Conditional_5_For_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 135);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const related_r26 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("routerLink", ctx_r1.buildObjectRoute(related_r26));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", related_r26.name, " ");
} }
function ObjectDetailsPage_Conditional_16_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 95)(1, "header", 46)(2, "h2", 47);
    i0.ɵɵtext(3, "Switch Object");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p", 48);
    i0.ɵɵtext(5, "Quick navigation across related mapped objects.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 133)(7, "div", 134);
    i0.ɵɵrepeaterCreate(8, ObjectDetailsPage_Conditional_16_Conditional_5_For_9_Template, 2, 2, "a", 135, _forTrack1);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(8);
    i0.ɵɵrepeater(ctx_r1.relatedObjects());
} }
function ObjectDetailsPage_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11)(1, "section", 91);
    i0.ɵɵconditionalCreate(2, ObjectDetailsPage_Conditional_16_Conditional_2_Template, 39, 17, "section", 92)(3, ObjectDetailsPage_Conditional_16_Conditional_3_Template, 4, 0, "div", 93)(4, ObjectDetailsPage_Conditional_16_Conditional_4_Template, 9, 0, "section", 94);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(5, ObjectDetailsPage_Conditional_16_Conditional_5_Template, 10, 0, "section", 95);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.hasMappedFields() ? 2 : ctx_r1.isFieldsLoading() ? 3 : 4);
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(ctx_r1.relatedObjects().length ? 5 : -1);
} }
function ObjectDetailsPage_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 12);
    i0.ɵɵelement(1, "i", 136);
    i0.ɵɵelementStart(2, "h2");
    i0.ɵɵtext(3, "Object Not Found");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5, "The object ");
    i0.ɵɵelementStart(6, "strong");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(8, " is not available in the current workspace.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "a", 137);
    i0.ɵɵelement(10, "i", 138);
    i0.ɵɵtext(11, " Back To Object Library ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r1.objectHeading());
} }
export class ObjectDetailsPage {
    recordsTableShellRef;
    route = inject(ActivatedRoute);
    businessService = inject(BusinessService);
    objectService = inject(ObjectService);
    fieldService = inject(FieldService);
    objectRecordService = inject(ObjectRecordService);
    fb = inject(FormBuilder);
    objects = this.objectService.objects;
    isLoading = this.objectService.isLoading;
    fields = this.fieldService.fields;
    isFieldsLoading = this.fieldService.isLoading;
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
        const objectRecord = this.selectedObject();
        return objectRecord?.name || this.formatRouteName(this.objectNameParam());
    }, ...(ngDevMode ? [{ debugName: "objectHeading" }] : []));
    workspaceLabel = computed(() => this.businessService.selectedBusiness()?.name ?? 'Default Workspace', ...(ngDevMode ? [{ debugName: "workspaceLabel" }] : []));
    description = computed(() => {
        const objectDescription = this.selectedObject()?.description?.trim();
        if (objectDescription) {
            return objectDescription;
        }
        return 'Configure record lifecycle, field structure, and team workflows for this CRM object.';
    }, ...(ngDevMode ? [{ debugName: "description" }] : []));
    relatedObjects = computed(() => {
        const activeObjectId = this.objectIdParam();
        return this.objects()
            .filter((objectRecord) => objectRecord.id !== activeObjectId)
            .slice(0, 5);
    }, ...(ngDevMode ? [{ debugName: "relatedObjects" }] : []));
    fieldTypeOptions = [
        { value: 'text', label: 'Text' },
        { value: 'textarea', label: 'Long Text' },
        { value: 'number', label: 'Number' },
        { value: 'date', label: 'Date' },
        { value: 'datetime', label: 'Date Time' },
        { value: 'boolean', label: 'Yes / No' },
        { value: 'email', label: 'Email' },
        { value: 'phone', label: 'Phone' },
        { value: 'select', label: 'Select' },
    ];
    showInlineFieldCreation = computed(() => !this.isFieldsLoading() && this.fields().length === 0, ...(ngDevMode ? [{ debugName: "showInlineFieldCreation" }] : []));
    hasMappedFields = computed(() => !this.isFieldsLoading() && this.fields().length > 0, ...(ngDevMode ? [{ debugName: "hasMappedFields" }] : []));
    canAddRecord = computed(() => this.hasMappedFields() && Boolean(this.selectedObject()), ...(ngDevMode ? [{ debugName: "canAddRecord" }] : []));
    isInfoPopupOpen = signal(false, ...(ngDevMode ? [{ debugName: "isInfoPopupOpen" }] : []));
    isColumnPickerOpen = signal(false, ...(ngDevMode ? [{ debugName: "isColumnPickerOpen" }] : []));
    fieldOptionDraft = signal('', ...(ngDevMode ? [{ debugName: "fieldOptionDraft" }] : []));
    fieldOptionErrorMessage = signal('', ...(ngDevMode ? [{ debugName: "fieldOptionErrorMessage" }] : []));
    columnPreferenceMessage = signal('', ...(ngDevMode ? [{ debugName: "columnPreferenceMessage" }] : []));
    records = signal([], ...(ngDevMode ? [{ debugName: "records" }] : []));
    recordFields = signal([], ...(ngDevMode ? [{ debugName: "recordFields" }] : []));
    isLoadingRecords = signal(false, ...(ngDevMode ? [{ debugName: "isLoadingRecords" }] : []));
    isExportingRecords = signal(false, ...(ngDevMode ? [{ debugName: "isExportingRecords" }] : []));
    recordErrorMessage = signal('', ...(ngDevMode ? [{ debugName: "recordErrorMessage" }] : []));
    recordSearchTerm = signal('', ...(ngDevMode ? [{ debugName: "recordSearchTerm" }] : []));
    recordCurrentPage = signal(1, ...(ngDevMode ? [{ debugName: "recordCurrentPage" }] : []));
    recordPageSize = signal(10, ...(ngDevMode ? [{ debugName: "recordPageSize" }] : []));
    recordTotal = signal(0, ...(ngDevMode ? [{ debugName: "recordTotal" }] : []));
    recordTotalPages = signal(1, ...(ngDevMode ? [{ debugName: "recordTotalPages" }] : []));
    recordSortField = signal('created_at', ...(ngDevMode ? [{ debugName: "recordSortField" }] : []));
    recordSortDirection = signal('desc', ...(ngDevMode ? [{ debugName: "recordSortDirection" }] : []));
    visibleFieldColumnIds = signal([], ...(ngDevMode ? [{ debugName: "visibleFieldColumnIds" }] : []));
    listViews = signal([], ...(ngDevMode ? [{ debugName: "listViews" }] : []));
    selectedListViewId = signal(null, ...(ngDevMode ? [{ debugName: "selectedListViewId" }] : []));
    isLoadingListViews = signal(false, ...(ngDevMode ? [{ debugName: "isLoadingListViews" }] : []));
    isSavingListView = signal(false, ...(ngDevMode ? [{ debugName: "isSavingListView" }] : []));
    listViewErrorMessage = signal('', ...(ngDevMode ? [{ debugName: "listViewErrorMessage" }] : []));
    listViewSuccessMessage = signal('', ...(ngDevMode ? [{ debugName: "listViewSuccessMessage" }] : []));
    hasHorizontalOverflow = signal(false, ...(ngDevMode ? [{ debugName: "hasHorizontalOverflow" }] : []));
    canScrollTableLeft = signal(false, ...(ngDevMode ? [{ debugName: "canScrollTableLeft" }] : []));
    canScrollTableRight = signal(false, ...(ngDevMode ? [{ debugName: "canScrollTableRight" }] : []));
    tableFields = computed(() => {
        const backendFields = this.recordFields();
        if (backendFields.length) {
            return backendFields;
        }
        return this.fields().map((fieldRecord) => ({
            id: fieldRecord.id,
            name: fieldRecord.name,
            key: fieldRecord.key,
            type: fieldRecord.type,
            is_required: fieldRecord.is_required,
            options: Array.isArray(fieldRecord.options) ? fieldRecord.options : [],
            status: Number(fieldRecord.status),
        }));
    }, ...(ngDevMode ? [{ debugName: "tableFields" }] : []));
    visibleTableFields = computed(() => {
        const allFields = this.tableFields();
        if (!allFields.length) {
            return [];
        }
        const visibleIds = this.visibleFieldColumnIds();
        if (!visibleIds.length) {
            return allFields;
        }
        const visibleSet = new Set(visibleIds);
        return allFields.filter((fieldRecord) => visibleSet.has(fieldRecord.id));
    }, ...(ngDevMode ? [{ debugName: "visibleTableFields" }] : []));
    hiddenFieldColumnCount = computed(() => Math.max(this.tableFields().length - this.visibleTableFields().length, 0), ...(ngDevMode ? [{ debugName: "hiddenFieldColumnCount" }] : []));
    selectedListView = computed(() => {
        const selectedId = this.selectedListViewId();
        const views = this.listViews();
        if (!views.length) {
            return null;
        }
        if (selectedId) {
            const matched = views.find((view) => view.id === selectedId);
            if (matched) {
                return matched;
            }
        }
        return views.find((view) => view.is_default) ?? views[0] ?? null;
    }, ...(ngDevMode ? [{ debugName: "selectedListView" }] : []));
    recordColumnCount = computed(() => this.visibleTableFields().length + 2, ...(ngDevMode ? [{ debugName: "recordColumnCount" }] : []));
    recordRangeStart = computed(() => {
        if (!this.recordTotal()) {
            return 0;
        }
        return (this.recordCurrentPage() - 1) * this.recordPageSize() + 1;
    }, ...(ngDevMode ? [{ debugName: "recordRangeStart" }] : []));
    recordRangeEnd = computed(() => {
        if (!this.recordTotal()) {
            return 0;
        }
        return Math.min(this.recordCurrentPage() * this.recordPageSize(), this.recordTotal());
    }, ...(ngDevMode ? [{ debugName: "recordRangeEnd" }] : []));
    isCreatingField = signal(false, ...(ngDevMode ? [{ debugName: "isCreatingField" }] : []));
    removingFieldId = signal(null, ...(ngDevMode ? [{ debugName: "removingFieldId" }] : []));
    fieldErrorMessage = signal('', ...(ngDevMode ? [{ debugName: "fieldErrorMessage" }] : []));
    fieldSuccessMessage = signal('', ...(ngDevMode ? [{ debugName: "fieldSuccessMessage" }] : []));
    createFieldForm = this.fb.group({
        name: ['', [Validators.required, Validators.maxLength(120)]],
        key: ['', [Validators.maxLength(64)]],
        type: ['text', [Validators.required]],
        description: ['', [Validators.maxLength(400)]],
        is_required: [false, [Validators.required]],
        options: ['', [Validators.maxLength(1200)]],
        status: [1, [Validators.required]],
    });
    createFieldType = toSignal(this.createFieldForm.controls.type.valueChanges.pipe(startWith(this.createFieldForm.controls.type.value ?? 'text')), { initialValue: this.createFieldForm.controls.type.value ?? 'text' });
    showFieldOptionsInput = computed(() => String(this.createFieldType() || '').trim().toLowerCase() === 'select', ...(ngDevMode ? [{ debugName: "showFieldOptionsInput" }] : []));
    createFieldOptionsPreview = computed(() => this.parseOptions(this.createFieldForm.controls.options.value), ...(ngDevMode ? [{ debugName: "createFieldOptionsPreview" }] : []));
    constructor() {
        effect(() => {
            const objectId = this.objectIdParam();
            const businessId = this.selectedBusinessId();
            if (!objectId) {
                this.fieldService.clearState();
                return;
            }
            untracked(() => {
                this.fieldService.loadFields(businessId, objectId);
            });
        });
        effect(() => {
            this.objectIdParam();
            this.selectedBusinessId();
            this.isInfoPopupOpen.set(false);
            this.isColumnPickerOpen.set(false);
            this.columnPreferenceMessage.set('');
            this.recordSearchTerm.set('');
            this.recordCurrentPage.set(1);
            this.recordSortField.set('created_at');
            this.recordSortDirection.set('desc');
            this.visibleFieldColumnIds.set([]);
            this.listViews.set([]);
            this.selectedListViewId.set(null);
            this.isLoadingListViews.set(false);
            this.isSavingListView.set(false);
            this.listViewErrorMessage.set('');
            this.listViewSuccessMessage.set('');
            this.recordErrorMessage.set('');
            this.records.set([]);
            this.recordFields.set([]);
            this.recordTotal.set(0);
            this.recordTotalPages.set(1);
            this.resetTableScrollState();
        });
        effect(() => {
            const objectId = this.objectIdParam();
            const businessId = this.selectedBusinessId();
            const hasFields = this.hasMappedFields();
            const page = this.recordCurrentPage();
            const limit = this.recordPageSize();
            const search = this.recordSearchTerm();
            const sortField = this.recordSortField();
            const sortDirection = this.recordSortDirection();
            if (!objectId || !hasFields) {
                this.records.set([]);
                this.recordFields.set([]);
                this.recordTotal.set(0);
                this.recordTotalPages.set(1);
                this.isLoadingRecords.set(false);
                return;
            }
            untracked(() => {
                this.loadRecords({
                    objectId,
                    businessId,
                    page,
                    limit,
                    search,
                    sortField,
                    sortDirection,
                });
            });
        });
        effect(() => {
            const objectId = this.objectIdParam();
            const businessId = this.selectedBusinessId();
            const hasFields = this.hasMappedFields();
            if (!objectId || !hasFields) {
                this.listViews.set([]);
                this.selectedListViewId.set(null);
                this.isLoadingListViews.set(false);
                return;
            }
            untracked(() => {
                this.loadListViews(objectId, businessId);
            });
        });
        effect(() => {
            const views = this.listViews();
            const selectedViewId = this.selectedListViewId();
            if (!views.length) {
                if (selectedViewId !== null) {
                    this.selectedListViewId.set(null);
                }
                return;
            }
            if (selectedViewId && views.some((view) => view.id === selectedViewId)) {
                return;
            }
            const fallbackViewId = views.find((view) => view.is_default)?.id ?? views[0].id;
            if (fallbackViewId !== selectedViewId) {
                this.selectedListViewId.set(fallbackViewId);
            }
        });
        effect(() => {
            const showOptions = this.showFieldOptionsInput();
            if (!showOptions) {
                this.fieldOptionDraft.set('');
                this.fieldOptionErrorMessage.set('');
                this.createFieldForm.controls.options.setValue('', { emitEvent: false });
            }
        });
        effect(() => {
            const availableFields = this.tableFields();
            const selectedView = this.selectedListView();
            if (!availableFields.length) {
                this.visibleFieldColumnIds.set([]);
                return;
            }
            const availableIds = availableFields.map((fieldRecord) => fieldRecord.id);
            const configuredIds = selectedView?.visible_field_ids ?? [];
            const nextVisible = configuredIds.length
                ? availableIds.filter((fieldId) => configuredIds.includes(fieldId))
                : availableIds;
            const normalizedVisible = nextVisible.length ? nextVisible : availableIds.slice(0, 1);
            if (!this.areArraysEqual(normalizedVisible, this.visibleFieldColumnIds())) {
                this.visibleFieldColumnIds.set(normalizedVisible);
                this.syncSortWithVisibleColumns(normalizedVisible);
            }
            this.deferRefreshTableScrollState();
        });
        effect(() => {
            this.visibleTableFields();
            this.deferRefreshTableScrollState();
        });
    }
    ngAfterViewInit() {
        this.deferRefreshTableScrollState();
    }
    onWindowResize() {
        this.deferRefreshTableScrollState();
    }
    buildObjectRoute(objectRecord) {
        const routeName = this.toRouteSegment(objectRecord.name || objectRecord.key || 'object');
        return ['/objects', objectRecord.id, routeName];
    }
    buildAddRecordRoute(objectRecord) {
        const routeName = this.toRouteSegment(objectRecord.name || objectRecord.key || 'object');
        return ['/objects', objectRecord.id, routeName, 'new'];
    }
    objectInitial(name) {
        const trimmed = String(name || '').trim();
        return trimmed ? trimmed.charAt(0).toUpperCase() : 'O';
    }
    statusLabel(status) {
        return Number(status) === 1 ? 'Active' : 'Inactive';
    }
    fieldTypeLabel(type) {
        return this.fieldTypeOptions.find((option) => option.value === type)?.label ?? type;
    }
    openInfoPopup() {
        this.isInfoPopupOpen.set(true);
    }
    closeInfoPopup() {
        this.isInfoPopupOpen.set(false);
    }
    toggleInfoPopup() {
        this.isInfoPopupOpen.update((value) => !value);
    }
    toggleColumnPicker() {
        this.isColumnPickerOpen.update((value) => !value);
        this.columnPreferenceMessage.set('');
    }
    closeColumnPicker() {
        this.isColumnPickerOpen.set(false);
        this.columnPreferenceMessage.set('');
    }
    onListViewSelect(viewId) {
        const normalizedViewId = String(viewId || '').trim();
        if (!normalizedViewId || normalizedViewId === this.selectedListViewId()) {
            return;
        }
        this.selectedListViewId.set(normalizedViewId);
        this.listViewSuccessMessage.set('');
        this.listViewErrorMessage.set('');
        this.setListViewAsDefault(normalizedViewId);
    }
    createListView() {
        const objectId = this.objectIdParam();
        if (!objectId || this.isSavingListView() || this.isLoadingListViews()) {
            return;
        }
        const tableFieldIds = this.tableFields().map((fieldRecord) => fieldRecord.id);
        if (!tableFieldIds.length) {
            this.listViewErrorMessage.set('Add at least one field before creating list views.');
            return;
        }
        const visibleColumns = this.visibleFieldColumnIds();
        const payloadColumns = visibleColumns.length ? visibleColumns : tableFieldIds;
        this.isSavingListView.set(true);
        this.listViewErrorMessage.set('');
        this.listViewSuccessMessage.set('');
        this.objectRecordService
            .createListView(objectId, {
            businessId: this.selectedBusinessId(),
            visibleFieldIds: payloadColumns,
        })
            .subscribe({
            next: (response) => {
                this.isSavingListView.set(false);
                if (!response.status || !response.data?.view) {
                    this.listViewErrorMessage.set(response.message || 'Unable to create list view.');
                    return;
                }
                this.upsertListView(response.data.view);
                this.selectedListViewId.set(response.data.view.id);
                this.listViewSuccessMessage.set(`${response.data.view.name} created.`);
                this.setListViewAsDefault(response.data.view.id);
                this.columnPreferenceMessage.set('');
            },
            error: (error) => {
                this.isSavingListView.set(false);
                this.listViewErrorMessage.set(error?.error?.message || 'Unable to create list view.');
            },
        });
    }
    showAllFieldColumns() {
        const allFieldIds = this.tableFields().map((fieldRecord) => fieldRecord.id);
        if (!allFieldIds.length) {
            return;
        }
        this.visibleFieldColumnIds.set(allFieldIds);
        this.persistVisibleColumnsToSelectedView(allFieldIds, 'Showing all columns.');
        this.deferRefreshTableScrollState();
    }
    showRequiredFieldColumns() {
        const allFields = this.tableFields();
        if (!allFields.length) {
            return;
        }
        const requiredColumns = allFields.filter((fieldRecord) => fieldRecord.is_required).map((fieldRecord) => fieldRecord.id);
        const nextColumns = requiredColumns.length ? requiredColumns : [allFields[0].id];
        this.visibleFieldColumnIds.set(nextColumns);
        this.syncSortWithVisibleColumns(nextColumns);
        this.persistVisibleColumnsToSelectedView(nextColumns, requiredColumns.length ? 'Showing required columns only.' : 'No required fields, showing first column.');
        this.deferRefreshTableScrollState();
    }
    toggleFieldColumn(fieldId, checked) {
        const availableIds = this.tableFields().map((fieldRecord) => fieldRecord.id);
        if (!availableIds.includes(fieldId)) {
            return;
        }
        const current = this.visibleFieldColumnIds();
        const currentSet = new Set(current.length ? current : availableIds);
        if (checked) {
            currentSet.add(fieldId);
        }
        else {
            currentSet.delete(fieldId);
            if (!currentSet.size) {
                this.columnPreferenceMessage.set('At least one column must remain visible.');
                return;
            }
        }
        const nextVisible = availableIds.filter((id) => currentSet.has(id));
        this.visibleFieldColumnIds.set(nextVisible);
        this.syncSortWithVisibleColumns(nextVisible);
        this.persistVisibleColumnsToSelectedView(nextVisible);
        this.deferRefreshTableScrollState();
    }
    isFieldColumnVisible(fieldId) {
        return this.visibleTableFields().some((fieldRecord) => fieldRecord.id === fieldId);
    }
    onRecordsTableScroll() {
        this.refreshTableScrollState();
    }
    scrollRecordsTable(direction) {
        const shell = this.recordsTableShellRef?.nativeElement;
        if (!shell) {
            return;
        }
        const delta = direction === 'left' ? -320 : 320;
        shell.scrollBy({ left: delta, behavior: 'smooth' });
        if (typeof window !== 'undefined') {
            window.setTimeout(() => this.refreshTableScrollState(), 220);
        }
        else {
            this.refreshTableScrollState();
        }
    }
    onFieldOptionDraftInput(value) {
        this.fieldOptionDraft.set(String(value || ''));
        if (this.fieldOptionErrorMessage()) {
            this.fieldOptionErrorMessage.set('');
        }
    }
    addFieldOption(event) {
        event?.preventDefault();
        const draft = String(this.fieldOptionDraft() || '').trim();
        if (!draft) {
            return;
        }
        const normalizedDraft = draft.slice(0, 120);
        const existing = this.createFieldOptionsPreview();
        if (existing.some((option) => option.toLowerCase() === normalizedDraft.toLowerCase())) {
            this.fieldOptionErrorMessage.set(`"${normalizedDraft}" is already added.`);
            return;
        }
        this.setCreateFieldOptions([...existing, normalizedDraft]);
        this.fieldOptionDraft.set('');
        this.fieldOptionErrorMessage.set('');
    }
    removeFieldOption(optionToRemove) {
        const remaining = this.createFieldOptionsPreview().filter((option) => option !== optionToRemove);
        this.setCreateFieldOptions(remaining);
    }
    submitCreateField() {
        const objectRecord = this.selectedObject();
        const objectId = objectRecord?.id;
        if (!objectId) {
            this.fieldErrorMessage.set('Object context is unavailable.');
            return;
        }
        if (this.createFieldForm.invalid || this.isCreatingField()) {
            this.createFieldForm.markAllAsTouched();
            return;
        }
        const fieldType = String(this.createFieldForm.value.type || 'text');
        const options = this.parseOptions(this.createFieldForm.value.options);
        if (fieldType === 'select' && !options.length) {
            this.fieldOptionErrorMessage.set('Select fields require at least one option.');
            this.fieldErrorMessage.set('Select fields require at least one option.');
            return;
        }
        this.fieldOptionErrorMessage.set('');
        this.fieldErrorMessage.set('');
        this.fieldSuccessMessage.set('');
        this.isCreatingField.set(true);
        const businessId = this.selectedBusinessId();
        const payload = {
            name: String(this.createFieldForm.value.name || '').trim(),
            key: String(this.createFieldForm.value.key || '').trim() || undefined,
            type: fieldType,
            description: String(this.createFieldForm.value.description || '').trim() || null,
            is_required: Boolean(this.createFieldForm.value.is_required),
            options: fieldType === 'select' ? options : [],
            status: Number(this.createFieldForm.value.status ?? 1),
        };
        this.fieldService
            .createField(payload, businessId, objectId, { businessId, objectId })
            .subscribe({
            next: (response) => {
                this.isCreatingField.set(false);
                if (!response.status) {
                    this.fieldErrorMessage.set(response.message || 'Unable to create field.');
                    return;
                }
                this.fieldSuccessMessage.set(`Field added to ${objectRecord.name}.`);
                this.resetFieldForm();
            },
            error: (error) => {
                this.isCreatingField.set(false);
                this.fieldErrorMessage.set(error?.error?.message || 'Unable to create field.');
            },
        });
    }
    unmapField(fieldRecord) {
        const objectRecord = this.selectedObject();
        const objectId = objectRecord?.id;
        if (!objectId || this.removingFieldId()) {
            return;
        }
        if (typeof window !== 'undefined') {
            const confirmed = window.confirm(`Remove field "${fieldRecord.name}" from this object?`);
            if (!confirmed) {
                return;
            }
        }
        const businessId = this.selectedBusinessId();
        const mappingBusinessId = this.resolveFieldUnmapBusinessId(fieldRecord, objectId, businessId);
        this.fieldErrorMessage.set('');
        this.fieldSuccessMessage.set('');
        this.removingFieldId.set(fieldRecord.id);
        this.fieldService
            .unmapFieldFromObject(fieldRecord.id, objectId, mappingBusinessId, { businessId, objectId })
            .subscribe({
            next: (response) => {
                this.removingFieldId.set(null);
                if (!response.status) {
                    this.fieldErrorMessage.set(response.message || 'Unable to unmap field.');
                    return;
                }
                this.fieldSuccessMessage.set(`Field "${fieldRecord.name}" removed from object.`);
            },
            error: (error) => {
                this.removingFieldId.set(null);
                this.fieldErrorMessage.set(error?.error?.message || 'Unable to unmap field.');
            },
        });
    }
    onRecordSearch(value) {
        this.recordSearchTerm.set(String(value || '').trim());
        this.recordCurrentPage.set(1);
    }
    onRecordSort(field) {
        const activeField = this.recordSortField();
        if (activeField === field) {
            this.recordSortDirection.set(this.recordSortDirection() === 'asc' ? 'desc' : 'asc');
        }
        else {
            this.recordSortField.set(field);
            this.recordSortDirection.set(field === 'created_at' ? 'desc' : 'asc');
        }
        this.recordCurrentPage.set(1);
    }
    sortIndicator(field) {
        if (this.recordSortField() !== field) {
            return 'fa-solid fa-sort';
        }
        return this.recordSortDirection() === 'asc'
            ? 'fa-solid fa-sort-up'
            : 'fa-solid fa-sort-down';
    }
    goToPreviousPage() {
        if (this.recordCurrentPage() <= 1 || this.isLoadingRecords()) {
            return;
        }
        this.recordCurrentPage.update((value) => value - 1);
    }
    goToNextPage() {
        if (this.recordCurrentPage() >= this.recordTotalPages() || this.isLoadingRecords()) {
            return;
        }
        this.recordCurrentPage.update((value) => value + 1);
    }
    exportRecords() {
        const objectId = this.objectIdParam();
        if (!objectId || this.isExportingRecords()) {
            return;
        }
        this.recordErrorMessage.set('');
        this.isExportingRecords.set(true);
        this.objectRecordService
            .exportRecords(objectId, {
            businessId: this.selectedBusinessId(),
            search: this.recordSearchTerm(),
            sortField: this.recordSortField(),
            sortDirection: this.recordSortDirection(),
        })
            .subscribe({
            next: (response) => {
                this.isExportingRecords.set(false);
                if (!response.status || !response.data) {
                    this.recordErrorMessage.set(response.message || 'Unable to export records.');
                    return;
                }
                if (typeof window === 'undefined') {
                    return;
                }
                const blob = new Blob([response.data.content || ''], {
                    type: response.data.mime_type || 'text/csv;charset=utf-8',
                });
                const url = window.URL.createObjectURL(blob);
                const anchor = window.document.createElement('a');
                anchor.href = url;
                anchor.download = response.data.file_name || `${this.objectHeading().toLowerCase()}_records.csv`;
                window.document.body.appendChild(anchor);
                anchor.click();
                anchor.remove();
                window.URL.revokeObjectURL(url);
            },
            error: (error) => {
                this.isExportingRecords.set(false);
                this.recordErrorMessage.set(error?.error?.message || 'Unable to export records.');
            },
        });
    }
    recordCellValue(record, field) {
        const rawValue = record.values[field.id];
        if (rawValue === undefined || rawValue === null || String(rawValue).trim() === '') {
            return '—';
        }
        const fieldType = String(field.type || '').trim().toLowerCase();
        if (fieldType === 'boolean') {
            return this.parseBoolean(rawValue) ? 'Yes' : 'No';
        }
        if (fieldType === 'number') {
            const parsed = typeof rawValue === 'number' ? rawValue : Number(String(rawValue));
            if (Number.isFinite(parsed)) {
                return new Intl.NumberFormat('en-US', {
                    maximumFractionDigits: 2,
                }).format(parsed);
            }
        }
        if (fieldType === 'date') {
            const formatted = this.formatDateOnly(rawValue);
            return formatted || '—';
        }
        if (fieldType === 'datetime') {
            return this.formatDate(String(rawValue));
        }
        return String(rawValue);
    }
    formatDate(value) {
        if (!value) {
            return 'N/A';
        }
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
    loadRecords(options) {
        this.isLoadingRecords.set(true);
        this.recordErrorMessage.set('');
        this.objectRecordService
            .listRecords(options.objectId, {
            businessId: options.businessId,
            page: options.page,
            limit: options.limit,
            search: options.search,
            sortField: options.sortField,
            sortDirection: options.sortDirection,
        })
            .subscribe({
            next: (response) => {
                this.isLoadingRecords.set(false);
                if (!response.status || !response.data) {
                    this.records.set([]);
                    this.recordFields.set([]);
                    this.recordTotal.set(0);
                    this.recordTotalPages.set(1);
                    this.recordErrorMessage.set(response.message || 'Unable to load records.');
                    this.deferRefreshTableScrollState();
                    return;
                }
                this.recordFields.set(Array.isArray(response.data.fields) ? response.data.fields : []);
                this.records.set(Array.isArray(response.data.items) ? response.data.items : []);
                this.recordTotal.set(Number(response.data.pagination?.total ?? 0));
                this.recordTotalPages.set(Math.max(1, Number(response.data.pagination?.total_pages ?? 1)));
                const currentPage = Number(response.data.pagination?.page ?? options.page);
                if (currentPage !== this.recordCurrentPage()) {
                    this.recordCurrentPage.set(currentPage);
                }
                this.deferRefreshTableScrollState();
            },
            error: (error) => {
                this.isLoadingRecords.set(false);
                this.records.set([]);
                this.recordFields.set([]);
                this.recordTotal.set(0);
                this.recordTotalPages.set(1);
                this.recordErrorMessage.set(error?.error?.message || 'Unable to load records.');
                this.deferRefreshTableScrollState();
            },
        });
    }
    loadListViews(objectId, businessId) {
        this.isLoadingListViews.set(true);
        this.listViewErrorMessage.set('');
        this.objectRecordService
            .listViews(objectId, { businessId })
            .subscribe({
            next: (response) => {
                this.isLoadingListViews.set(false);
                if (!response.status || !response.data) {
                    this.listViews.set([]);
                    this.selectedListViewId.set(null);
                    this.listViewErrorMessage.set(response.message || 'Unable to load list views.');
                    return;
                }
                const viewItems = Array.isArray(response.data.items) ? response.data.items : [];
                this.listViews.set(viewItems);
                const currentSelected = this.selectedListViewId();
                const hasCurrentSelected = Boolean(currentSelected) && viewItems.some((viewRecord) => viewRecord.id === currentSelected);
                const fallbackDefaultId = response.data.default_view_id ||
                    viewItems.find((viewRecord) => viewRecord.is_default)?.id ||
                    viewItems[0]?.id ||
                    null;
                this.selectedListViewId.set(hasCurrentSelected ? currentSelected : fallbackDefaultId);
                this.listViewErrorMessage.set('');
            },
            error: (error) => {
                this.isLoadingListViews.set(false);
                this.listViews.set([]);
                this.selectedListViewId.set(null);
                this.listViewErrorMessage.set(error?.error?.message || 'Unable to load list views.');
            },
        });
    }
    parseBoolean(value) {
        if (value === true || value === false) {
            return value;
        }
        const normalized = String(value || '')
            .trim()
            .toLowerCase();
        return ['1', 'true', 'yes', 'y'].includes(normalized);
    }
    formatDateOnly(value) {
        const parsed = new Date(String(value || ''));
        if (Number.isNaN(parsed.getTime())) {
            return '';
        }
        return new Intl.DateTimeFormat('en-US', {
            month: 'short',
            day: '2-digit',
            year: 'numeric',
        }).format(parsed);
    }
    formatRouteName(value) {
        const normalized = String(value || '')
            .replace(/[-_]+/g, ' ')
            .trim();
        return normalized || 'Object Workspace';
    }
    toRouteSegment(value) {
        const trimmed = String(value || '').trim();
        if (!trimmed) {
            return 'object';
        }
        return trimmed.replace(/\//g, '-');
    }
    parseOptions(value) {
        const normalized = String(value || '')
            .split(/[\n,]/g)
            .map((option) => option.trim())
            .filter((option) => option.length > 0)
            .map((option) => option.slice(0, 120));
        return Array.from(new Set(normalized)).slice(0, 50);
    }
    setCreateFieldOptions(options) {
        const normalized = this.parseOptions(options.join('\n'));
        this.createFieldForm.controls.options.setValue(normalized.join('\n'));
        this.createFieldForm.controls.options.markAsDirty();
        this.createFieldForm.controls.options.markAsTouched();
    }
    syncSortWithVisibleColumns(visibleColumns) {
        const activeSortField = this.recordSortField();
        if (activeSortField === 'created_at' || activeSortField === 'updated_at') {
            return;
        }
        if (!visibleColumns.includes(activeSortField)) {
            this.recordSortField.set('created_at');
            this.recordSortDirection.set('desc');
            this.recordCurrentPage.set(1);
        }
    }
    setListViewAsDefault(viewId) {
        const objectId = this.objectIdParam();
        if (!objectId) {
            return;
        }
        this.isSavingListView.set(true);
        this.objectRecordService
            .updateListView(objectId, viewId, {
            businessId: this.selectedBusinessId(),
            isDefault: true,
        })
            .subscribe({
            next: (response) => {
                this.isSavingListView.set(false);
                if (!response.status || !response.data?.view) {
                    this.listViewErrorMessage.set(response.message || 'Unable to switch list view.');
                    return;
                }
                this.upsertListView(response.data.view);
                this.selectedListViewId.set(response.data.view.id);
                this.listViewErrorMessage.set('');
            },
            error: (error) => {
                this.isSavingListView.set(false);
                this.listViewErrorMessage.set(error?.error?.message || 'Unable to switch list view.');
            },
        });
    }
    persistVisibleColumnsToSelectedView(visibleFieldIds, preferenceMessage = '') {
        const objectId = this.objectIdParam();
        const selectedViewId = this.selectedListViewId();
        if (!objectId || !selectedViewId) {
            this.columnPreferenceMessage.set('Select a list view before changing columns.');
            return;
        }
        this.columnPreferenceMessage.set(preferenceMessage);
        this.listViewErrorMessage.set('');
        this.listViewSuccessMessage.set('');
        this.isSavingListView.set(true);
        this.objectRecordService
            .updateListView(objectId, selectedViewId, {
            businessId: this.selectedBusinessId(),
            visibleFieldIds,
        })
            .subscribe({
            next: (response) => {
                this.isSavingListView.set(false);
                if (!response.status || !response.data?.view) {
                    this.listViewErrorMessage.set(response.message || 'Unable to save column visibility.');
                    return;
                }
                this.upsertListView(response.data.view);
                this.listViewErrorMessage.set('');
            },
            error: (error) => {
                this.isSavingListView.set(false);
                this.listViewErrorMessage.set(error?.error?.message || 'Unable to save column visibility.');
            },
        });
    }
    upsertListView(view) {
        this.listViews.update((currentViews) => {
            const existingIndex = currentViews.findIndex((viewRecord) => viewRecord.id === view.id);
            const nextViews = existingIndex >= 0
                ? currentViews.map((viewRecord, index) => (index === existingIndex ? view : viewRecord))
                : [...currentViews, view];
            if (!view.is_default) {
                return nextViews;
            }
            return nextViews.map((viewRecord) => viewRecord.id === view.id ? view : { ...viewRecord, is_default: false });
        });
    }
    areArraysEqual(left, right) {
        if (left.length !== right.length) {
            return false;
        }
        return left.every((value, index) => value === right[index]);
    }
    deferRefreshTableScrollState() {
        if (typeof window === 'undefined') {
            this.refreshTableScrollState();
            return;
        }
        window.requestAnimationFrame(() => this.refreshTableScrollState());
    }
    refreshTableScrollState() {
        const shell = this.recordsTableShellRef?.nativeElement;
        if (!shell) {
            this.resetTableScrollState();
            return;
        }
        const overflow = shell.scrollWidth - shell.clientWidth;
        this.hasHorizontalOverflow.set(overflow > 2);
        this.canScrollTableLeft.set(shell.scrollLeft > 2);
        this.canScrollTableRight.set(shell.scrollLeft < overflow - 2);
    }
    resetTableScrollState() {
        this.hasHorizontalOverflow.set(false);
        this.canScrollTableLeft.set(false);
        this.canScrollTableRight.set(false);
    }
    resolveFieldUnmapBusinessId(fieldRecord, objectId, currentBusinessId) {
        const objectMappings = fieldRecord.mapped_objects.filter((mapping) => mapping.object_id === objectId);
        if (!objectMappings.length) {
            return currentBusinessId;
        }
        if (currentBusinessId !== 'default') {
            const businessScoped = objectMappings.find((mapping) => mapping.business_id === currentBusinessId);
            if (businessScoped) {
                return currentBusinessId;
            }
        }
        const globalScoped = objectMappings.find((mapping) => mapping.business_id === null);
        if (globalScoped) {
            return 'default';
        }
        return currentBusinessId;
    }
    resetFieldForm() {
        this.createFieldForm.reset({
            name: '',
            key: '',
            type: 'text',
            description: '',
            is_required: false,
            options: '',
            status: 1,
        });
        this.fieldOptionDraft.set('');
        this.fieldOptionErrorMessage.set('');
    }
    static ɵfac = function ObjectDetailsPage_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ObjectDetailsPage)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ObjectDetailsPage, selectors: [["app-object-details-page"]], viewQuery: function ObjectDetailsPage_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.recordsTableShellRef = _t.first);
        } }, hostBindings: function ObjectDetailsPage_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("resize", function ObjectDetailsPage_resize_HostBindingHandler() { return ctx.onWindowResize(); }, i0.ɵɵresolveWindow);
        } }, decls: 18, vars: 4, consts: [["recordsTableShell", ""], [1, "object-workspace"], [1, "object-workspace__shell"], [1, "object-overview"], [1, "object-overview__top"], ["aria-label", "Breadcrumb", 1, "object-breadcrumbs"], ["routerLink", "/dashboard"], ["aria-hidden", "true", 1, "fa-solid", "fa-angle-right"], [1, "object-breadcrumbs__current"], [1, "object-overview__badges"], [1, "object-state", "object-state--loading"], [1, "object-layout"], [1, "object-state", "object-state--empty"], [1, "overview-badge"], [1, "fa-solid", "fa-spinner", "fa-spin"], [1, "object-hero"], [1, "object-hero__identity"], [1, "object-hero__avatar"], [1, "object-hero__kicker"], ["tabindex", "0", "aria-label", "Object metadata", 1, "object-hero__title-anchor"], [1, "object-hero__title"], [1, "object-hero__meta-hint"], ["aria-live", "polite", 1, "object-meta-popover"], [1, "object-meta-popover__title"], [1, "object-meta-popover__list"], [1, "object-meta-popover__code"], [1, "status-pill"], [1, "object-hero__subtitle"], [1, "object-hero__actions"], [1, "object-btn", "object-btn--primary", 3, "routerLink"], ["type", "button", 1, "object-btn", "object-btn--ghost", 3, "click"], [1, "fa-solid", "fa-circle-info"], ["routerLink", "/settings", 1, "object-btn", "object-btn--ghost", 3, "queryParams"], [1, "fa-solid", "fa-sliders"], ["routerLink", "/dashboard", 1, "object-btn", "object-btn--ghost"], [1, "fa-solid", "fa-table-cells-large"], [1, "object-info-backdrop"], [1, "fa-solid", "fa-plus"], [1, "object-info-backdrop", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-label", "Object information panel", 1, "object-info-dialog", 3, "click"], [1, "object-info-dialog__header"], [1, "object-info-dialog__kicker"], ["type", "button", "aria-label", "Close object info", 1, "object-info-dialog__close", 3, "click"], [1, "fa-solid", "fa-xmark"], [1, "object-info-dialog__content"], [1, "object-panel", "object-panel--info"], [1, "object-panel__header"], [1, "object-panel__title"], [1, "object-panel__subtitle"], [1, "object-checklist"], [1, "check-item"], [1, "object-fields", "object-fields--popup"], [1, "object-fields__header"], [1, "object-fields__form", 3, "formGroup"], [1, "object-fields__hint"], [1, "object-fields__list"], [1, "object-fields__state"], [1, "object-fields__grid"], [1, "object-fields__form", 3, "ngSubmit", "formGroup"], [1, "object-fields__field"], ["type", "text", "formControlName", "name", "placeholder", "Example: Budget Range"], [1, "object-fields__inline"], ["type", "text", "formControlName", "key", "placeholder", "budget_range"], ["formControlName", "type"], [3, "value"], [1, "object-fields__field", "object-fields__field--options"], ["rows", "2", "formControlName", "description", "placeholder", "Used for qualification and reporting"], [1, "object-fields__switch"], ["type", "checkbox", "formControlName", "is_required"], ["formControlName", "status"], [1, "object-fields__error"], [1, "object-fields__success"], [1, "object-fields__actions"], ["type", "submit", 1, "object-btn", "object-btn--primary", 3, "disabled"], [1, "object-fields__option-builder"], ["type", "text", "placeholder", "Type option and press Enter", 3, "input", "keydown.enter", "value"], ["type", "button", 1, "object-fields__option-add-btn", 3, "click"], [1, "object-fields__hint", "object-fields__hint--plain"], ["rows", "3", "formControlName", "options", "placeholder", "Small, Medium, Large"], [1, "object-fields__chips"], ["type", "button", 1, "object-fields__chip"], ["type", "button", 1, "object-fields__chip", 3, "click"], ["aria-hidden", "true", 1, "fa-solid", "fa-xmark"], [1, "fa-regular", "fa-square-plus"], [1, "object-field-card"], [1, "object-field-card__header"], [1, "object-field-card__actions"], [1, "field-type-pill"], ["type", "button", 1, "field-remove-btn", 3, "click", "disabled"], [1, "object-field-card__description"], [1, "object-field-card__meta"], [1, "object-panel", "object-panel--records"], [1, "object-records"], [1, "object-records__state"], [1, "object-state", "object-state--inline"], [1, "object-panel"], [1, "object-records__header"], [1, "object-records__actions"], [1, "object-records__search"], [1, "fa-solid", "fa-magnifying-glass"], ["type", "text", "placeholder", "Search records...", 3, "input", "value"], ["aria-label", "Object table list views", 1, "object-records__views"], ["for", "object-list-view-select"], [1, "object-records__views-controls"], ["id", "object-list-view-select", 3, "change", "value", "disabled"], ["value", ""], ["type", "button", 1, "object-btn", "object-btn--ghost", 3, "click", "disabled"], [1, "object-columns"], [1, "fa-solid", "fa-table-columns"], [1, "object-columns__badge"], ["role", "dialog", "aria-label", "Configure visible columns", 1, "object-columns__panel"], [1, "fa-solid", "fa-file-export"], [1, "object-records__hint"], [1, "object-records__error"], [1, "object-records__success"], [1, "object-columns__panel-header"], [1, "object-columns__panel-list"], [1, "object-columns__item"], [1, "object-columns__message"], [1, "object-columns__panel-actions"], ["type", "button", 3, "click", "disabled"], ["type", "button", 3, "click"], ["type", "checkbox", 3, "change", "checked", "disabled"], [1, "object-records__scroll-tools"], [1, "object-records__table-shell", 3, "scroll"], [1, "object-records__table"], [1, "object-records__footer"], [1, "object-records__pagination"], [1, "fa-solid", "fa-arrows-left-right"], [1, "fa-solid", "fa-angle-left"], [1, "fa-solid", "fa-angle-right"], [1, "object-records__empty"], ["type", "button", 1, "object-btn", "object-btn--primary", 3, "click"], [1, "related-objects", "related-objects--inline"], [1, "related-objects__list"], [1, "related-objects__item", 3, "routerLink"], [1, "fa-regular", "fa-folder-open"], ["routerLink", "/dashboard", 1, "object-btn", "object-btn--primary"], [1, "fa-solid", "fa-arrow-left"]], template: function ObjectDetailsPage_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 1)(1, "div", 2)(2, "header", 3)(3, "div", 4)(4, "nav", 5)(5, "a", 6);
            i0.ɵɵtext(6, "Dashboard");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(7, "i", 7);
            i0.ɵɵelementStart(8, "a", 6);
            i0.ɵɵtext(9, "Objects");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(10, "i", 7);
            i0.ɵɵelementStart(11, "span", 8);
            i0.ɵɵtext(12);
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(13, ObjectDetailsPage_Conditional_13_Template, 5, 4, "div", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(14, ObjectDetailsPage_Conditional_14_Template, 4, 0, "section", 10)(15, ObjectDetailsPage_Conditional_15_Template, 66, 17);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(16, ObjectDetailsPage_Conditional_16_Template, 6, 2, "div", 11)(17, ObjectDetailsPage_Conditional_17_Template, 12, 1, "section", 12);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            let tmp_1_0;
            let tmp_2_0;
            let tmp_3_0;
            i0.ɵɵadvance(12);
            i0.ɵɵtextInterpolate(ctx.objectHeading());
            i0.ɵɵadvance();
            i0.ɵɵconditional((tmp_1_0 = ctx.selectedObject()) ? 13 : -1, tmp_1_0);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.isLoading() && !ctx.selectedObject() ? 14 : (tmp_2_0 = ctx.selectedObject()) ? 15 : -1, tmp_2_0);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional((tmp_3_0 = ctx.selectedObject()) ? 16 : !ctx.isLoading() ? 17 : -1, tmp_3_0);
        } }, dependencies: [CommonModule, RouterLink, ReactiveFormsModule, i1.ɵNgNoValidate, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.DefaultValueAccessor, i1.CheckboxControlValueAccessor, i1.SelectControlValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.object-workspace[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 86px);\n  padding: 14px 10px 24px;\n}\n\n.object-workspace__shell[_ngcontent-%COMP%] {\n  max-width: 1260px;\n  margin: 0 auto;\n  border-radius: 24px;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 58%, white);\n  background:\n    radial-gradient(circle at top right, color-mix(in srgb, var(--theme-primary) 12%, transparent), transparent 44%),\n    color-mix(in srgb, var(--theme-bg-surface) 95%, transparent);\n  box-shadow: 0 24px 70px rgba(15, 23, 42, 0.11);\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n\n.object-overview[_ngcontent-%COMP%] {\n  border-radius: 18px;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 56%, white);\n  background: color-mix(in srgb, var(--theme-bg-surface) 97%, transparent);\n  padding: 13px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.object-overview__top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n\n.object-overview__badges[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  flex-wrap: wrap;\n}\n\n.overview-badge[_ngcontent-%COMP%] {\n  border-radius: 999px;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 62%, white);\n  background: var(--theme-bg-surface);\n  color: var(--theme-text-secondary);\n  font-size: 10px;\n  font-weight: 700;\n  padding: 4px 8px;\n}\n\n.overview-badge--active[_ngcontent-%COMP%] {\n  border-color: color-mix(in srgb, var(--theme-success) 48%, white);\n  background: color-mix(in srgb, var(--theme-success) 12%, white);\n  color: var(--theme-success);\n}\n\n.object-breadcrumbs[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 12px;\n  color: var(--theme-text-muted);\n}\n\n.object-breadcrumbs[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--theme-text-secondary);\n  text-decoration: none;\n  font-weight: 700;\n}\n\n.object-breadcrumbs[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--theme-primary);\n}\n\n.object-breadcrumbs[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  opacity: 0.7;\n}\n\n.object-breadcrumbs__current[_ngcontent-%COMP%] {\n  color: var(--theme-text-primary);\n  font-weight: 700;\n}\n\n.object-hero[_ngcontent-%COMP%] {\n  border-radius: 16px;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 58%, white);\n  background:\n    radial-gradient(circle at top right, color-mix(in srgb, var(--theme-primary) 10%, transparent), transparent 48%),\n    var(--theme-bg-surface);\n  padding: 18px;\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 14px;\n}\n\n.object-hero__identity[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n}\n\n.object-hero__avatar[_ngcontent-%COMP%] {\n  width: 54px;\n  height: 54px;\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 22px;\n  font-weight: 800;\n  color: var(--theme-primary-contrast);\n  background: linear-gradient(120deg, var(--theme-primary), var(--theme-accent-end));\n  box-shadow: 0 12px 24px color-mix(in srgb, var(--theme-primary) 26%, transparent);\n  flex-shrink: 0;\n}\n\n.object-hero__kicker[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.11em;\n  color: var(--theme-text-muted);\n}\n\n.object-hero__title-anchor[_ngcontent-%COMP%] {\n  position: relative;\n  width: fit-content;\n  max-width: 100%;\n  margin-top: 6px;\n  outline: none;\n}\n\n.object-hero__title-anchor[_ngcontent-%COMP%]:focus-visible {\n  border-radius: 10px;\n  box-shadow: 0 0 0 3px color-mix(in srgb, var(--theme-primary) 18%, transparent);\n}\n\n.object-hero__title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 34px;\n  line-height: 1.06;\n  letter-spacing: -0.02em;\n  color: var(--theme-text-primary);\n  cursor: default;\n}\n\n.object-hero__meta-hint[_ngcontent-%COMP%] {\n  margin: 5px 0 0;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--theme-text-muted);\n}\n\n.object-meta-popover[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 10px);\n  left: 0;\n  width: min(360px, 88vw);\n  border: 1px solid color-mix(in srgb, var(--theme-border) 58%, white);\n  border-radius: 14px;\n  background:\n    radial-gradient(circle at top right, color-mix(in srgb, var(--theme-primary) 10%, transparent), transparent 58%),\n    color-mix(in srgb, var(--theme-bg-surface) 98%, white);\n  box-shadow: 0 18px 36px rgba(15, 23, 42, 0.16);\n  padding: 11px;\n  z-index: 20;\n  opacity: 0;\n  visibility: hidden;\n  transform: translateY(8px);\n  pointer-events: none;\n  transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s ease;\n}\n\n.object-meta-popover[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: -6px;\n  left: 18px;\n  width: 12px;\n  height: 12px;\n  border-left: 1px solid color-mix(in srgb, var(--theme-border) 58%, white);\n  border-top: 1px solid color-mix(in srgb, var(--theme-border) 58%, white);\n  background: color-mix(in srgb, var(--theme-bg-surface) 98%, white);\n  transform: rotate(45deg);\n}\n\n.object-hero__title-anchor[_ngcontent-%COMP%]:hover   .object-meta-popover[_ngcontent-%COMP%], \n.object-hero__title-anchor[_ngcontent-%COMP%]:focus-within   .object-meta-popover[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n  transform: translateY(0);\n}\n\n.object-meta-popover__title[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--theme-text-primary);\n}\n\n.object-meta-popover__list[_ngcontent-%COMP%] {\n  margin: 0;\n  display: grid;\n  gap: 7px;\n}\n\n.object-meta-popover__list[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  border: 1px solid color-mix(in srgb, var(--theme-border) 62%, white);\n  border-radius: 9px;\n  background: var(--theme-bg-surface);\n  padding: 7px 8px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n\n.object-meta-popover__list[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--theme-text-muted);\n}\n\n.object-meta-popover__list[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--theme-text-primary);\n  text-align: right;\n}\n\n.object-meta-popover__code[_ngcontent-%COMP%] {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;\n}\n\n.object-hero__subtitle[_ngcontent-%COMP%] {\n  margin: 8px 0 0;\n  max-width: 640px;\n  font-size: 14px;\n  color: var(--theme-text-secondary);\n}\n\n.object-hero__actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n}\n\n.object-btn[_ngcontent-%COMP%] {\n  border: 1px solid transparent;\n  border-radius: 10px;\n  min-height: 38px;\n  padding: 8px 12px;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 12px;\n  font-weight: 700;\n  text-decoration: none;\n  cursor: pointer;\n  transition: border-color 0.2s ease, color 0.2s ease, background-color 0.2s ease;\n}\n\n.object-btn--primary[_ngcontent-%COMP%] {\n  color: var(--theme-primary-contrast);\n  background: linear-gradient(120deg, var(--theme-primary), var(--theme-accent-end));\n}\n\n.object-btn--ghost[_ngcontent-%COMP%] {\n  color: var(--theme-text-secondary);\n  border-color: color-mix(in srgb, var(--theme-border) 64%, white);\n  background: color-mix(in srgb, var(--theme-bg-surface) 96%, white);\n}\n\n.object-btn--ghost[_ngcontent-%COMP%]:hover {\n  color: var(--theme-text-primary);\n  border-color: color-mix(in srgb, var(--theme-primary) 46%, white);\n}\n\n.object-info-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 80;\n  background: rgba(15, 23, 42, 0.45);\n  backdrop-filter: blur(2px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 18px;\n}\n\n.object-info-dialog[_ngcontent-%COMP%] {\n  width: min(1080px, 100%);\n  max-height: calc(100vh - 36px);\n  overflow: auto;\n  border-radius: 18px;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 56%, white);\n  background:\n    radial-gradient(circle at top right, color-mix(in srgb, var(--theme-primary) 11%, transparent), transparent 52%),\n    color-mix(in srgb, var(--theme-bg-surface) 98%, white);\n  box-shadow: 0 24px 50px rgba(15, 23, 42, 0.28);\n  padding: 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.object-info-dialog__header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 12px;\n  border-bottom: 1px solid color-mix(in srgb, var(--theme-border) 52%, white);\n  padding-bottom: 10px;\n}\n\n.object-info-dialog__kicker[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: var(--theme-text-muted);\n}\n\n.object-info-dialog__header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 5px 0 0;\n  font-size: 21px;\n  color: var(--theme-text-primary);\n}\n\n.object-info-dialog__header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 6px 0 0;\n  font-size: 12px;\n  color: var(--theme-text-muted);\n}\n\n.object-info-dialog__close[_ngcontent-%COMP%] {\n  border: 1px solid color-mix(in srgb, var(--theme-border) 60%, white);\n  border-radius: 10px;\n  background: var(--theme-bg-surface);\n  color: var(--theme-text-secondary);\n  min-width: 34px;\n  min-height: 34px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n\n.object-info-dialog__close[_ngcontent-%COMP%]:hover {\n  color: var(--theme-text-primary);\n  border-color: color-mix(in srgb, var(--theme-primary) 44%, white);\n}\n\n.object-info-dialog__content[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 12px;\n  grid-template-columns: 1fr;\n}\n\n.object-panel--info[_ngcontent-%COMP%] {\n  padding: 12px;\n}\n\n.object-fields--popup[_ngcontent-%COMP%] {\n  border-top: none;\n  padding-top: 0;\n}\n\n.status-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  border-radius: 999px;\n  padding: 4px 10px;\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--theme-danger);\n  background: color-mix(in srgb, var(--theme-danger) 12%, white);\n}\n\n.status-pill--active[_ngcontent-%COMP%] {\n  color: var(--theme-success);\n  background: color-mix(in srgb, var(--theme-success) 14%, white);\n}\n\n.object-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 12px;\n}\n\n.object-panel[_ngcontent-%COMP%] {\n  border-radius: 18px;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 58%, white);\n  background: color-mix(in srgb, var(--theme-bg-surface) 98%, transparent);\n  padding: 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.object-panel--records[_ngcontent-%COMP%] {\n  min-height: 230px;\n}\n\n.object-panel__header[_ngcontent-%COMP%] {\n  padding-bottom: 11px;\n  border-bottom: 1px solid color-mix(in srgb, var(--theme-border) 52%, white);\n}\n\n.object-panel__title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 17px;\n  color: var(--theme-text-primary);\n}\n\n.object-panel__subtitle[_ngcontent-%COMP%] {\n  margin: 5px 0 0;\n  font-size: 12px;\n  color: var(--theme-text-muted);\n}\n\n.object-checklist[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 10px;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n\n.check-item[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 58%, white);\n  background: var(--theme-bg-surface);\n  padding: 11px;\n}\n\n.check-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  color: var(--theme-text-primary);\n}\n\n.check-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 7px 0 0;\n  font-size: 12px;\n  line-height: 1.5;\n  color: var(--theme-text-secondary);\n}\n\n.object-fields[_ngcontent-%COMP%] {\n  border-top: 1px solid color-mix(in srgb, var(--theme-border) 52%, white);\n  padding-top: 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.object-fields__header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 15px;\n  color: var(--theme-text-primary);\n}\n\n.object-fields__header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  font-size: 12px;\n  color: var(--theme-text-muted);\n}\n\n.object-fields__form[_ngcontent-%COMP%] {\n  border: 1px solid color-mix(in srgb, var(--theme-border) 58%, white);\n  border-radius: 12px;\n  background: var(--theme-bg-surface);\n  padding: 11px;\n  display: flex;\n  flex-direction: column;\n  gap: 9px;\n}\n\n.object-fields__inline[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 9px;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n\n.object-fields__field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n\n.object-fields__field--options[_ngcontent-%COMP%] {\n  gap: 8px;\n}\n\n.object-fields__field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  color: var(--theme-text-muted);\n}\n\n.object-fields__field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.object-fields__field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], \n.object-fields__field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 8px;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 64%, white);\n  background: var(--theme-bg-surface);\n  color: var(--theme-text-primary);\n  padding: 8px 9px;\n  font-size: 12px;\n}\n\n.object-fields__field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n\n.object-fields__option-builder[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 8px;\n  grid-template-columns: minmax(0, 1fr) auto;\n  align-items: center;\n}\n\n.object-fields__option-add-btn[_ngcontent-%COMP%] {\n  border: 1px solid color-mix(in srgb, var(--theme-border) 62%, white);\n  border-radius: 9px;\n  min-height: 34px;\n  padding: 0 12px;\n  background: var(--theme-bg-surface);\n  color: var(--theme-text-secondary);\n  font-size: 12px;\n  font-weight: 700;\n  cursor: pointer;\n}\n\n.object-fields__option-add-btn[_ngcontent-%COMP%]:hover {\n  color: var(--theme-text-primary);\n  border-color: color-mix(in srgb, var(--theme-primary) 46%, white);\n}\n\n.object-fields__chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 7px;\n}\n\n.object-fields__chip[_ngcontent-%COMP%] {\n  border: 1px solid color-mix(in srgb, var(--theme-primary) 44%, white);\n  border-radius: 999px;\n  background: color-mix(in srgb, var(--theme-primary) 10%, white);\n  color: var(--theme-primary);\n  min-height: 28px;\n  padding: 0 10px;\n  font-size: 11px;\n  font-weight: 700;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  cursor: pointer;\n}\n\n.object-fields__field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus-visible, \n.object-fields__field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus-visible, \n.object-fields__field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus-visible {\n  outline: none;\n  border-color: color-mix(in srgb, var(--theme-primary) 48%, white);\n  box-shadow: 0 0 0 3px color-mix(in srgb, var(--theme-primary) 16%, transparent);\n}\n\n.object-fields__switch[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  font-size: 12px;\n  color: var(--theme-text-secondary);\n  font-weight: 600;\n}\n\n.object-fields__error[_ngcontent-%COMP%], \n.object-fields__success[_ngcontent-%COMP%] {\n  margin: 0;\n  border-radius: 9px;\n  padding: 7px 9px;\n  font-size: 12px;\n  font-weight: 600;\n}\n\n.object-fields__error[_ngcontent-%COMP%] {\n  color: var(--theme-danger);\n  background: color-mix(in srgb, var(--theme-danger) 12%, white);\n}\n\n.object-fields__success[_ngcontent-%COMP%] {\n  color: var(--theme-success);\n  background: color-mix(in srgb, var(--theme-success) 12%, white);\n}\n\n.object-fields__actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.object-fields__hint[_ngcontent-%COMP%] {\n  margin: 0;\n  border-radius: 10px;\n  border: 1px solid color-mix(in srgb, var(--theme-primary) 40%, white);\n  background: color-mix(in srgb, var(--theme-primary) 10%, white);\n  color: var(--theme-text-primary);\n  padding: 8px 10px;\n  font-size: 12px;\n  font-weight: 600;\n}\n\n.object-fields__hint--plain[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 0;\n  background: transparent;\n  color: var(--theme-text-muted);\n  padding: 0;\n  font-weight: 500;\n  font-size: 11px;\n}\n\n.object-fields__list[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  font-size: 14px;\n  color: var(--theme-text-primary);\n}\n\n.object-fields__state[_ngcontent-%COMP%] {\n  border: 1px dashed color-mix(in srgb, var(--theme-border) 62%, white);\n  border-radius: 10px;\n  min-height: 84px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 7px;\n  font-size: 12px;\n  color: var(--theme-text-secondary);\n}\n\n.object-fields__grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 9px;\n  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));\n}\n\n.object-field-card[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 62%, white);\n  background: var(--theme-bg-surface);\n  padding: 9px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.object-field-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 8px;\n  align-items: flex-start;\n}\n\n.object-field-card__header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  color: var(--theme-text-primary);\n}\n\n.object-field-card__header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  font-size: 10px;\n  color: var(--theme-text-muted);\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;\n}\n\n.object-field-card__actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n}\n\n.field-type-pill[_ngcontent-%COMP%] {\n  border-radius: 999px;\n  border: 1px solid color-mix(in srgb, var(--theme-primary) 44%, white);\n  background: color-mix(in srgb, var(--theme-primary) 10%, white);\n  color: var(--theme-primary);\n  font-size: 10px;\n  font-weight: 700;\n  padding: 3px 8px;\n}\n\n.field-remove-btn[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  border: 1px solid color-mix(in srgb, var(--theme-danger) 44%, white);\n  background: color-mix(in srgb, var(--theme-danger) 8%, white);\n  color: var(--theme-danger);\n  font-size: 10px;\n  font-weight: 700;\n  padding: 5px 8px;\n  cursor: pointer;\n}\n\n.field-remove-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n.object-field-card__description[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12px;\n  color: var(--theme-text-secondary);\n}\n\n.object-field-card__meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n\n.object-field-card__meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  border-radius: 999px;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 63%, white);\n  padding: 3px 8px;\n  font-size: 10px;\n  font-weight: 600;\n  color: var(--theme-text-muted);\n}\n\n.object-records[_ngcontent-%COMP%] {\n  border-top: 1px solid color-mix(in srgb, var(--theme-border) 52%, white);\n  padding-top: 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.object-records__header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 10px;\n}\n\n.object-records__header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 15px;\n  color: var(--theme-text-primary);\n}\n\n.object-records__header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  font-size: 12px;\n  color: var(--theme-text-muted);\n}\n\n.object-records__actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  position: relative;\n}\n\n.object-records__views[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  min-width: 240px;\n}\n\n.object-records__views[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--theme-text-muted);\n}\n\n.object-records__views-controls[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n}\n\n.object-records__views-controls[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  border-radius: 9px;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 62%, white);\n  background: var(--theme-bg-surface);\n  color: var(--theme-text-primary);\n  min-height: 36px;\n  padding: 0 10px;\n  font-size: 12px;\n  min-width: 150px;\n}\n\n.object-records__views-controls[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus-visible {\n  outline: none;\n  border-color: color-mix(in srgb, var(--theme-primary) 46%, white);\n  box-shadow: 0 0 0 3px color-mix(in srgb, var(--theme-primary) 16%, transparent);\n}\n\n.object-records__search[_ngcontent-%COMP%] {\n  min-width: 240px;\n  border-radius: 9px;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 62%, white);\n  background: var(--theme-bg-surface);\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 0 10px;\n  min-height: 36px;\n}\n\n.object-records__search[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--theme-text-muted);\n}\n\n.object-records__search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  color: var(--theme-text-primary);\n  font-size: 12px;\n  width: 100%;\n  min-width: 0;\n}\n\n.object-records__search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus-visible {\n  outline: none;\n}\n\n.object-columns[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.object-columns__badge[_ngcontent-%COMP%] {\n  margin-left: 2px;\n  border-radius: 999px;\n  border: 1px solid color-mix(in srgb, var(--theme-primary) 42%, white);\n  background: color-mix(in srgb, var(--theme-primary) 10%, white);\n  color: var(--theme-primary);\n  font-size: 10px;\n  font-weight: 700;\n  padding: 2px 7px;\n}\n\n.object-columns__panel[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 8px);\n  right: 0;\n  width: min(320px, 80vw);\n  border: 1px solid color-mix(in srgb, var(--theme-border) 60%, white);\n  border-radius: 12px;\n  background: color-mix(in srgb, var(--theme-bg-surface) 98%, white);\n  box-shadow: 0 20px 36px rgba(15, 23, 42, 0.16);\n  padding: 11px;\n  z-index: 30;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.object-columns__panel-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  color: var(--theme-text-primary);\n}\n\n.object-columns__panel-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  font-size: 11px;\n  color: var(--theme-text-muted);\n}\n\n.object-columns__panel-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n  max-height: 220px;\n  overflow: auto;\n  padding-right: 3px;\n}\n\n.object-columns__item[_ngcontent-%COMP%] {\n  border: 1px solid color-mix(in srgb, var(--theme-border) 62%, white);\n  border-radius: 10px;\n  background: var(--theme-bg-surface);\n  padding: 7px 8px;\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr);\n  align-items: center;\n  gap: 8px;\n}\n\n.object-columns__item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.object-columns__item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--theme-text-primary);\n}\n\n.object-columns__item[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 2px;\n  font-size: 10px;\n  color: var(--theme-text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n\n.object-columns__message[_ngcontent-%COMP%] {\n  margin: 0;\n  border-radius: 9px;\n  background: color-mix(in srgb, var(--theme-danger) 12%, white);\n  color: var(--theme-danger);\n  padding: 7px 9px;\n  font-size: 11px;\n  font-weight: 600;\n}\n\n.object-columns__panel-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 7px;\n}\n\n.object-columns__panel-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid color-mix(in srgb, var(--theme-border) 62%, white);\n  border-radius: 8px;\n  background: var(--theme-bg-surface);\n  color: var(--theme-text-secondary);\n  font-size: 11px;\n  font-weight: 700;\n  min-height: 30px;\n  padding: 0 10px;\n  cursor: pointer;\n}\n\n.object-columns__panel-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child {\n  border-color: color-mix(in srgb, var(--theme-primary) 42%, white);\n  color: var(--theme-primary);\n}\n\n.object-records__scroll-tools[_ngcontent-%COMP%] {\n  border: 1px solid color-mix(in srgb, var(--theme-border) 62%, white);\n  border-radius: 10px;\n  background: color-mix(in srgb, var(--theme-bg-surface) 96%, white);\n  min-height: 40px;\n  padding: 0 10px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n}\n\n.object-records__scroll-tools[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--theme-text-secondary);\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n}\n\n.object-records__scroll-tools[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n\n.object-records__scroll-tools[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 60%, white);\n  background: var(--theme-bg-surface);\n  color: var(--theme-text-secondary);\n  font-size: 11px;\n  font-weight: 700;\n  min-height: 30px;\n  padding: 0 9px;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  cursor: pointer;\n}\n\n.object-records__scroll-tools[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n.object-records__error[_ngcontent-%COMP%] {\n  margin: 0;\n  border-radius: 9px;\n  background: color-mix(in srgb, var(--theme-danger) 12%, white);\n  color: var(--theme-danger);\n  padding: 8px 10px;\n  font-size: 12px;\n  font-weight: 600;\n}\n\n.object-records__success[_ngcontent-%COMP%], \n.object-records__hint[_ngcontent-%COMP%] {\n  margin: 0;\n  border-radius: 9px;\n  padding: 8px 10px;\n  font-size: 12px;\n  font-weight: 600;\n}\n\n.object-records__success[_ngcontent-%COMP%] {\n  color: var(--theme-success);\n  background: color-mix(in srgb, var(--theme-success) 12%, white);\n}\n\n.object-records__hint[_ngcontent-%COMP%] {\n  color: var(--theme-primary);\n  background: color-mix(in srgb, var(--theme-primary) 10%, white);\n}\n\n.object-records__state[_ngcontent-%COMP%] {\n  border: 1px dashed color-mix(in srgb, var(--theme-border) 62%, white);\n  border-radius: 10px;\n  min-height: 84px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 7px;\n  font-size: 12px;\n  color: var(--theme-text-secondary);\n}\n\n.object-records__table-shell[_ngcontent-%COMP%] {\n  border: 1px solid color-mix(in srgb, var(--theme-border) 58%, white);\n  border-radius: 10px;\n  overflow: auto;\n  background: var(--theme-bg-surface);\n  scrollbar-gutter: stable both-edges;\n}\n\n.object-records__table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  min-width: 680px;\n}\n\n.object-records__table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.object-records__table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom: 1px solid color-mix(in srgb, var(--theme-border) 55%, white);\n  padding: 9px 10px;\n  text-align: left;\n  font-size: 12px;\n  color: var(--theme-text-secondary);\n  white-space: nowrap;\n}\n\n.object-records__table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--theme-bg-surface-soft) 90%, white);\n  color: var(--theme-text-primary);\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\n.object-records__table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  color: inherit;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  cursor: pointer;\n}\n\n.object-records__table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: var(--theme-text-primary);\n}\n\n.object-records__table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: color-mix(in srgb, var(--theme-primary) 6%, white);\n}\n\n.object-records__empty[_ngcontent-%COMP%] {\n  text-align: center !important;\n  font-weight: 600;\n  color: var(--theme-text-muted) !important;\n}\n\n.object-records__footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n}\n\n.object-records__footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12px;\n  color: var(--theme-text-muted);\n}\n\n.object-records__pagination[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.object-records__pagination[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--theme-text-secondary);\n  font-weight: 600;\n}\n\n.object-records__pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 60%, white);\n  background: var(--theme-bg-surface);\n  color: var(--theme-text-secondary);\n  font-size: 12px;\n  font-weight: 700;\n  min-height: 32px;\n  padding: 0 10px;\n  cursor: pointer;\n}\n\n.object-records__pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n.related-objects[_ngcontent-%COMP%] {\n  border-top: 1px solid color-mix(in srgb, var(--theme-border) 50%, white);\n  padding-top: 10px;\n}\n\n.related-objects--inline[_ngcontent-%COMP%] {\n  border-top: none;\n  padding-top: 0;\n}\n\n.related-objects__title[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: var(--theme-text-muted);\n}\n\n.related-objects__list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 7px;\n}\n\n.related-objects__item[_ngcontent-%COMP%] {\n  border-radius: 999px;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 62%, white);\n  padding: 5px 10px;\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--theme-text-secondary);\n  text-decoration: none;\n}\n\n.related-objects__item[_ngcontent-%COMP%]:hover {\n  color: var(--theme-primary);\n  border-color: color-mix(in srgb, var(--theme-primary) 46%, white);\n}\n\n.object-state[_ngcontent-%COMP%] {\n  border-radius: 18px;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 58%, white);\n  background: color-mix(in srgb, var(--theme-bg-surface) 98%, transparent);\n  min-height: 260px;\n  padding: 22px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  gap: 10px;\n}\n\n.object-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: var(--theme-primary);\n}\n\n.object-state[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 20px;\n  color: var(--theme-text-primary);\n}\n\n.object-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n  color: var(--theme-text-primary);\n}\n\n.object-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  color: var(--theme-text-secondary);\n}\n\n.object-state--inline[_ngcontent-%COMP%] {\n  min-height: 210px;\n  border-style: dashed;\n}\n\n@media (max-width: 1160px) {\n  .object-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n@media (max-width: 860px) {\n  .object-workspace__shell[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n\n  .object-info-backdrop[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n\n  .object-info-dialog[_ngcontent-%COMP%] {\n    max-height: calc(100vh - 20px);\n    padding: 12px;\n  }\n\n  .object-hero[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .object-hero__title[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n\n  .object-meta-popover[_ngcontent-%COMP%] {\n    left: 0;\n    right: auto;\n    width: min(320px, 84vw);\n  }\n\n  .object-hero__actions[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: flex-start;\n  }\n\n  .object-checklist[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .object-fields__inline[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .object-records__header[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .object-records__actions[_ngcontent-%COMP%] {\n    width: 100%;\n    flex-wrap: wrap;\n  }\n\n  .object-columns[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .object-columns[_ngcontent-%COMP%]    > .object-btn[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n\n  .object-columns__panel[_ngcontent-%COMP%] {\n    left: 0;\n    right: auto;\n    width: 100%;\n  }\n\n  .object-records__search[_ngcontent-%COMP%] {\n    min-width: 0;\n    width: 100%;\n  }\n\n  .object-records__views[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: 0;\n  }\n\n  .object-records__views-controls[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .object-records__views-controls[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n    flex: 1;\n    min-width: 0;\n  }\n\n  .object-records__scroll-tools[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    justify-content: center;\n    padding: 8px 10px;\n    min-height: 0;\n  }\n\n  .object-records__footer[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n\n@media (max-width: 640px) {\n  .object-breadcrumbs[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n\n  .object-overview__top[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n\n  .object-meta-popover[_ngcontent-%COMP%] {\n    width: min(300px, 88vw);\n  }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ObjectDetailsPage, [{
        type: Component,
        args: [{ selector: 'app-object-details-page', imports: [CommonModule, RouterLink, ReactiveFormsModule], template: "<section class=\"object-workspace\">\n  <div class=\"object-workspace__shell\">\n    <header class=\"object-overview\">\n      <div class=\"object-overview__top\">\n        <nav class=\"object-breadcrumbs\" aria-label=\"Breadcrumb\">\n          <a routerLink=\"/dashboard\">Dashboard</a>\n          <i class=\"fa-solid fa-angle-right\" aria-hidden=\"true\"></i>\n          <a routerLink=\"/dashboard\">Objects</a>\n          <i class=\"fa-solid fa-angle-right\" aria-hidden=\"true\"></i>\n          <span class=\"object-breadcrumbs__current\">{{ objectHeading() }}</span>\n        </nav>\n\n        @if (selectedObject(); as objectRecord) {\n        <div class=\"object-overview__badges\">\n          <span class=\"overview-badge\">{{ workspaceLabel() }}</span>\n          <span class=\"overview-badge\" [class.overview-badge--active]=\"objectRecord.status === 1\">\n            {{ statusLabel(objectRecord.status) }}\n          </span>\n        </div>\n        }\n      </div>\n\n      @if (isLoading() && !selectedObject()) {\n      <section class=\"object-state object-state--loading\">\n        <i class=\"fa-solid fa-spinner fa-spin\"></i>\n        <p>Loading object workspace...</p>\n      </section>\n      } @else if (selectedObject(); as objectRecord) {\n      <section class=\"object-hero\">\n        <div class=\"object-hero__identity\">\n          <div class=\"object-hero__avatar\">{{ objectInitial(objectRecord.name) }}</div>\n          <div>\n            <p class=\"object-hero__kicker\">Object Workspace</p>\n            <div class=\"object-hero__title-anchor\" tabindex=\"0\" aria-label=\"Object metadata\">\n              <h1 class=\"object-hero__title\">{{ objectRecord.name }}</h1>\n              <p class=\"object-hero__meta-hint\">Hover to view meta details</p>\n\n              <section class=\"object-meta-popover\" aria-live=\"polite\">\n                <p class=\"object-meta-popover__title\">Object Meta Details</p>\n                <dl class=\"object-meta-popover__list\">\n                  <div>\n                    <dt>Object Key</dt>\n                    <dd class=\"object-meta-popover__code\">{{ objectRecord.key }}</dd>\n                  </div>\n                  <div>\n                    <dt>Status</dt>\n                    <dd>\n                      <span class=\"status-pill\" [class.status-pill--active]=\"objectRecord.status === 1\">\n                        {{ statusLabel(objectRecord.status) }}\n                      </span>\n                    </dd>\n                  </div>\n                  <div>\n                    <dt>Mapped Businesses</dt>\n                    <dd>{{ objectRecord.mapped_business_count }}</dd>\n                  </div>\n                  <div>\n                    <dt>Created</dt>\n                    <dd>{{ formatDate(objectRecord.created_at) }}</dd>\n                  </div>\n                  <div>\n                    <dt>Workspace</dt>\n                    <dd>{{ workspaceLabel() }}</dd>\n                  </div>\n                  <div>\n                    <dt>Object ID</dt>\n                    <dd class=\"object-meta-popover__code\">{{ objectRecord.id }}</dd>\n                  </div>\n                  <div>\n                    <dt>Updated</dt>\n                    <dd>{{ formatDate(objectRecord.updated_at) }}</dd>\n                  </div>\n                </dl>\n              </section>\n            </div>\n            <p class=\"object-hero__subtitle\">{{ description() }}</p>\n          </div>\n        </div>\n\n        <div class=\"object-hero__actions\">\n          @if (canAddRecord()) {\n          <a [routerLink]=\"buildAddRecordRoute(objectRecord)\" class=\"object-btn object-btn--primary\">\n            <i class=\"fa-solid fa-plus\"></i>\n            Add {{ objectRecord.name }}\n          </a>\n          }\n          <button type=\"button\" class=\"object-btn object-btn--ghost\" [attr.aria-expanded]=\"isInfoPopupOpen()\"\n            (click)=\"toggleInfoPopup()\">\n            <i class=\"fa-solid fa-circle-info\"></i>\n            Object Info\n          </button>\n          <a routerLink=\"/settings\" [queryParams]=\"{ tab: 'Fields' }\" class=\"object-btn object-btn--ghost\">\n            <i class=\"fa-solid fa-sliders\"></i>\n            Manage In Settings\n          </a>\n          <a routerLink=\"/dashboard\" class=\"object-btn object-btn--ghost\">\n            <i class=\"fa-solid fa-table-cells-large\"></i>\n            All Objects\n          </a>\n        </div>\n      </section>\n\n      @if (isInfoPopupOpen()) {\n      <div class=\"object-info-backdrop\" (click)=\"closeInfoPopup()\">\n        <section class=\"object-info-dialog\" role=\"dialog\" aria-modal=\"true\" aria-label=\"Object information panel\"\n          (click)=\"$event.stopPropagation()\">\n          <header class=\"object-info-dialog__header\">\n            <div>\n              <p class=\"object-info-dialog__kicker\">Object Info</p>\n              <h2>Structure & Field Options</h2>\n              <p>Manage lifecycle workflow and field mapping from one panel.</p>\n            </div>\n\n            <button type=\"button\" class=\"object-info-dialog__close\" (click)=\"closeInfoPopup()\"\n              aria-label=\"Close object info\">\n              <i class=\"fa-solid fa-xmark\"></i>\n            </button>\n          </header>\n\n          <div class=\"object-info-dialog__content\">\n            <section class=\"object-panel object-panel--info\">\n              <header class=\"object-panel__header\">\n                <h2 class=\"object-panel__title\">Structure & Workflow</h2>\n                <p class=\"object-panel__subtitle\">Standard CRM controls for managing this object lifecycle.</p>\n              </header>\n\n              <div class=\"object-checklist\">\n                <article class=\"check-item\">\n                  <h3>Record Layout</h3>\n                  <p>Define core fields, required constraints, and data formatting for records in {{ objectRecord.name }}.</p>\n                </article>\n                <article class=\"check-item\">\n                  <h3>Pipeline Stages</h3>\n                  <p>Attach deal/task progress stages and enforce movement rules for cleaner forecasting.</p>\n                </article>\n                <article class=\"check-item\">\n                  <h3>Automations</h3>\n                  <p>Configure assignment, reminders, and follow-up workflows when records are created or updated.</p>\n                </article>\n                <article class=\"check-item\">\n                  <h3>Permissions</h3>\n                  <p>Restrict edit/delete access per role so only authorized teams can update this object.</p>\n                </article>\n              </div>\n            </section>\n\n            <section class=\"object-panel object-panel--info\">\n              <section class=\"object-fields object-fields--popup\">\n                <header class=\"object-fields__header\">\n                  <h3>Field Options</h3>\n                  <p>\n                    @if (showInlineFieldCreation()) {\n                    Create new fields directly inside this object. This writes to field schema and object mapping pivot.\n                    } @else {\n                    Field creation is managed from <strong>Settings &gt; Fields</strong> once this object has mapped fields.\n                    }\n                  </p>\n                </header>\n\n                @if (showInlineFieldCreation()) {\n                <form [formGroup]=\"createFieldForm\" (ngSubmit)=\"submitCreateField()\" class=\"object-fields__form\">\n                  <label class=\"object-fields__field\">\n                    <span>Field Name</span>\n                    <input type=\"text\" formControlName=\"name\" placeholder=\"Example: Budget Range\" />\n                  </label>\n\n                  <div class=\"object-fields__inline\">\n                    <label class=\"object-fields__field\">\n                      <span>Field Key (optional)</span>\n                      <input type=\"text\" formControlName=\"key\" placeholder=\"budget_range\" />\n                    </label>\n                    <label class=\"object-fields__field\">\n                      <span>Type</span>\n                      <select formControlName=\"type\">\n                        @for (fieldType of fieldTypeOptions; track fieldType.value) {\n                        <option [value]=\"fieldType.value\">{{ fieldType.label }}</option>\n                        }\n                      </select>\n                    </label>\n                  </div>\n\n                  @if (showFieldOptionsInput()) {\n                  <div class=\"object-fields__field object-fields__field--options\">\n                    <span>Select Options</span>\n\n                    <div class=\"object-fields__option-builder\">\n                      <input type=\"text\" [value]=\"fieldOptionDraft()\"\n                        (input)=\"onFieldOptionDraftInput(($any($event.target).value))\"\n                        (keydown.enter)=\"addFieldOption($event)\" placeholder=\"Type option and press Enter\" />\n                      <button type=\"button\" class=\"object-fields__option-add-btn\" (click)=\"addFieldOption()\">\n                        Add\n                      </button>\n                    </div>\n\n                    <p class=\"object-fields__hint object-fields__hint--plain\">\n                      Add options quickly with Enter. You can also paste comma or new-line values.\n                    </p>\n                    <textarea rows=\"3\" formControlName=\"options\" placeholder=\"Small, Medium, Large\"></textarea>\n\n                    @if (fieldOptionErrorMessage()) {\n                    <p class=\"object-fields__error\">{{ fieldOptionErrorMessage() }}</p>\n                    }\n\n                    @if (createFieldOptionsPreview().length) {\n                    <div class=\"object-fields__chips\">\n                      @for (option of createFieldOptionsPreview(); track option) {\n                      <button type=\"button\" class=\"object-fields__chip\" (click)=\"removeFieldOption(option)\"\n                        [attr.aria-label]=\"'Remove option ' + option\">\n                        <span>{{ option }}</span>\n                        <i class=\"fa-solid fa-xmark\" aria-hidden=\"true\"></i>\n                      </button>\n                      }\n                    </div>\n                    }\n                  </div>\n                  }\n\n                  <label class=\"object-fields__field\">\n                    <span>Description</span>\n                    <textarea rows=\"2\" formControlName=\"description\"\n                      placeholder=\"Used for qualification and reporting\"></textarea>\n                  </label>\n\n                  <div class=\"object-fields__inline\">\n                    <label class=\"object-fields__switch\">\n                      <input type=\"checkbox\" formControlName=\"is_required\" />\n                      <span>Required Field</span>\n                    </label>\n\n                    <label class=\"object-fields__field\">\n                      <span>Status</span>\n                      <select formControlName=\"status\">\n                        <option [value]=\"1\">Active</option>\n                        <option [value]=\"0\">Inactive</option>\n                      </select>\n                    </label>\n                  </div>\n\n                  @if (fieldErrorMessage()) {\n                  <p class=\"object-fields__error\">{{ fieldErrorMessage() }}</p>\n                  }\n                  @if (fieldSuccessMessage()) {\n                  <p class=\"object-fields__success\">{{ fieldSuccessMessage() }}</p>\n                  }\n\n                  <div class=\"object-fields__actions\">\n                    <button type=\"submit\" class=\"object-btn object-btn--primary\"\n                      [disabled]=\"createFieldForm.invalid || isCreatingField()\">\n                      @if (isCreatingField()) {\n                      Saving...\n                      } @else {\n                      Add Field\n                      }\n                    </button>\n                  </div>\n                </form>\n                } @else if (!isFieldsLoading()) {\n                <p class=\"object-fields__hint\">Use <strong>Settings &gt; Fields</strong> to add new fields once this object already has mapped fields.</p>\n                }\n\n                <div class=\"object-fields__list\">\n                  <h4>Mapped Fields</h4>\n\n                  @if (isFieldsLoading()) {\n                  <div class=\"object-fields__state\">\n                    <i class=\"fa-solid fa-spinner fa-spin\"></i>\n                    <p>Loading fields...</p>\n                  </div>\n                  } @else if (!fields().length) {\n                  <div class=\"object-fields__state\">\n                    <i class=\"fa-regular fa-square-plus\"></i>\n                    <p>No fields mapped for this object yet.</p>\n                  </div>\n                  } @else {\n                  <div class=\"object-fields__grid\">\n                    @for (fieldRecord of fields(); track fieldRecord.id) {\n                    <article class=\"object-field-card\">\n                      <header class=\"object-field-card__header\">\n                        <div>\n                          <h5>{{ fieldRecord.name }}</h5>\n                          <p>{{ fieldRecord.key }}</p>\n                        </div>\n                        <div class=\"object-field-card__actions\">\n                          <span class=\"field-type-pill\">{{ fieldTypeLabel(fieldRecord.type) }}</span>\n                          <button type=\"button\" class=\"field-remove-btn\" [disabled]=\"removingFieldId() === fieldRecord.id\"\n                            (click)=\"unmapField(fieldRecord)\">\n                            @if (removingFieldId() === fieldRecord.id) {\n                            Removing...\n                            } @else {\n                            Remove\n                            }\n                          </button>\n                        </div>\n                      </header>\n\n                      @if (fieldRecord.description) {\n                      <p class=\"object-field-card__description\">{{ fieldRecord.description }}</p>\n                      }\n\n                      <div class=\"object-field-card__meta\">\n                        <span>{{ fieldRecord.is_required ? 'Required' : 'Optional' }}</span>\n                        <span>Status: {{ fieldRecord.status === 1 ? 'Active' : 'Inactive' }}</span>\n                        <span>Created {{ formatDate(fieldRecord.created_at) }}</span>\n                      </div>\n                    </article>\n                    }\n                  </div>\n                  }\n                </div>\n              </section>\n            </section>\n          </div>\n        </section>\n      </div>\n      }\n\n      }\n    </header>\n\n    @if (selectedObject(); as objectRecord) {\n    <div class=\"object-layout\">\n      <section class=\"object-panel object-panel--records\">\n        @if (hasMappedFields()) {\n        <section class=\"object-records\">\n          <header class=\"object-records__header\">\n            <div>\n              <h3>{{ objectRecord.name }} Data</h3>\n              <p>Search, sort, export, and manage object records in a CRM-style grid.</p>\n            </div>\n\n            <div class=\"object-records__actions\">\n              <label class=\"object-records__search\">\n                <i class=\"fa-solid fa-magnifying-glass\"></i>\n                <input type=\"text\" [value]=\"recordSearchTerm()\" (input)=\"onRecordSearch(($any($event.target).value))\"\n                  placeholder=\"Search records...\" />\n              </label>\n\n              <section class=\"object-records__views\" aria-label=\"Object table list views\">\n                <label for=\"object-list-view-select\">List View</label>\n                <div class=\"object-records__views-controls\">\n                  <select id=\"object-list-view-select\" [value]=\"selectedListViewId() ?? ''\"\n                    [disabled]=\"isLoadingListViews() || isSavingListView() || !listViews().length\"\n                    (change)=\"onListViewSelect(($any($event.target).value))\">\n                    @if (isLoadingListViews()) {\n                    <option value=\"\">Loading views...</option>\n                    } @else if (!listViews().length) {\n                    <option value=\"\">No views available</option>\n                    }\n                    @for (viewRecord of listViews(); track viewRecord.id) {\n                    <option [value]=\"viewRecord.id\">{{ viewRecord.name }}</option>\n                    }\n                  </select>\n                  <button type=\"button\" class=\"object-btn object-btn--ghost\"\n                    [disabled]=\"isLoadingListViews() || isSavingListView() || !tableFields().length\"\n                    (click)=\"createListView()\">\n                    <i class=\"fa-solid fa-plus\"></i>\n                    New View\n                  </button>\n                </div>\n              </section>\n\n              <div class=\"object-columns\">\n                <button type=\"button\" class=\"object-btn object-btn--ghost\" [attr.aria-expanded]=\"isColumnPickerOpen()\"\n                  [disabled]=\"isLoadingListViews() || isSavingListView() || !selectedListViewId()\"\n                  (click)=\"toggleColumnPicker()\">\n                  <i class=\"fa-solid fa-table-columns\"></i>\n                  Columns\n                  @if (hiddenFieldColumnCount()) {\n                  <span class=\"object-columns__badge\">{{ hiddenFieldColumnCount() }} hidden</span>\n                  }\n                </button>\n\n                @if (isColumnPickerOpen()) {\n                <section class=\"object-columns__panel\" role=\"dialog\" aria-label=\"Configure visible columns\">\n                  <header class=\"object-columns__panel-header\">\n                    <h4>Visible Columns</h4>\n                    <p>Select which field columns appear in the table.</p>\n                  </header>\n\n                  <div class=\"object-columns__panel-list\">\n                    @for (fieldRecord of tableFields(); track fieldRecord.id) {\n                    <label class=\"object-columns__item\">\n                      <input type=\"checkbox\" [checked]=\"isFieldColumnVisible(fieldRecord.id)\" [disabled]=\"isSavingListView()\"\n                        (change)=\"toggleFieldColumn(fieldRecord.id, $any($event.target).checked)\" />\n                      <div>\n                        <span>{{ fieldRecord.name }}</span>\n                        <small>{{ fieldTypeLabel(fieldRecord.type) }}</small>\n                      </div>\n                    </label>\n                    }\n                  </div>\n\n                  @if (columnPreferenceMessage()) {\n                  <p class=\"object-columns__message\">{{ columnPreferenceMessage() }}</p>\n                  }\n\n                  <footer class=\"object-columns__panel-actions\">\n                    <button type=\"button\" [disabled]=\"isSavingListView()\" (click)=\"showRequiredFieldColumns()\">Required Only</button>\n                    <button type=\"button\" [disabled]=\"isSavingListView()\" (click)=\"showAllFieldColumns()\">Show All</button>\n                    <button type=\"button\" (click)=\"closeColumnPicker()\">Done</button>\n                  </footer>\n                </section>\n                }\n              </div>\n\n              <button type=\"button\" class=\"object-btn object-btn--ghost\" [disabled]=\"isExportingRecords()\"\n                (click)=\"exportRecords()\">\n                <i class=\"fa-solid fa-file-export\"></i>\n                @if (isExportingRecords()) {\n                Exporting...\n                } @else {\n                Export CSV\n                }\n              </button>\n            </div>\n          </header>\n\n          @if (isSavingListView()) {\n          <p class=\"object-records__hint\">Saving list view preferences...</p>\n          }\n\n          @if (listViewErrorMessage()) {\n          <p class=\"object-records__error\">{{ listViewErrorMessage() }}</p>\n          }\n\n          @if (listViewSuccessMessage()) {\n          <p class=\"object-records__success\">{{ listViewSuccessMessage() }}</p>\n          }\n\n          @if (recordErrorMessage()) {\n          <p class=\"object-records__error\">{{ recordErrorMessage() }}</p>\n          }\n\n          @if (isLoadingRecords()) {\n          <div class=\"object-records__state\">\n            <i class=\"fa-solid fa-spinner fa-spin\"></i>\n            <p>Loading data records...</p>\n          </div>\n          } @else {\n          @if (hasHorizontalOverflow()) {\n          <div class=\"object-records__scroll-tools\">\n            <span><i class=\"fa-solid fa-arrows-left-right\"></i> Horizontal scroll</span>\n            <div>\n              <button type=\"button\" [disabled]=\"!canScrollTableLeft()\" (click)=\"scrollRecordsTable('left')\">\n                <i class=\"fa-solid fa-angle-left\"></i>\n                Left\n              </button>\n              <button type=\"button\" [disabled]=\"!canScrollTableRight()\" (click)=\"scrollRecordsTable('right')\">\n                Right\n                <i class=\"fa-solid fa-angle-right\"></i>\n              </button>\n            </div>\n          </div>\n          }\n\n          <div #recordsTableShell class=\"object-records__table-shell\" (scroll)=\"onRecordsTableScroll()\">\n            <table class=\"object-records__table\">\n              <thead>\n                <tr>\n                  <th>\n                    <button type=\"button\" (click)=\"onRecordSort('created_at')\">\n                      Created\n                      <i [class]=\"sortIndicator('created_at')\"></i>\n                    </button>\n                  </th>\n                  @for (fieldRecord of visibleTableFields(); track fieldRecord.id) {\n                  <th>\n                    <button type=\"button\" (click)=\"onRecordSort(fieldRecord.id)\">\n                      {{ fieldRecord.name }}\n                      <i [class]=\"sortIndicator(fieldRecord.id)\"></i>\n                    </button>\n                  </th>\n                  }\n                  <th>Updated</th>\n                </tr>\n              </thead>\n              <tbody>\n                @if (!records().length) {\n                <tr>\n                  <td [attr.colspan]=\"recordColumnCount()\" class=\"object-records__empty\">\n                    No data present.\n                  </td>\n                </tr>\n                } @else {\n                @for (recordItem of records(); track recordItem.id) {\n                <tr>\n                  <td>{{ formatDate(recordItem.created_at) }}</td>\n                  @for (fieldRecord of visibleTableFields(); track fieldRecord.id) {\n                  <td>{{ recordCellValue(recordItem, fieldRecord) }}</td>\n                  }\n                  <td>{{ formatDate(recordItem.updated_at) }}</td>\n                </tr>\n                }\n                }\n              </tbody>\n            </table>\n          </div>\n\n          <footer class=\"object-records__footer\">\n            <p>\n              @if (recordTotal()) {\n              Showing {{ recordRangeStart() }}-{{ recordRangeEnd() }} of {{ recordTotal() }}\n              } @else {\n              No records available\n              }\n            </p>\n            <div class=\"object-records__pagination\">\n              <button type=\"button\" (click)=\"goToPreviousPage()\"\n                [disabled]=\"recordCurrentPage() <= 1 || isLoadingRecords()\">\n                Previous\n              </button>\n              <span>Page {{ recordCurrentPage() }} of {{ recordTotalPages() }}</span>\n              <button type=\"button\" (click)=\"goToNextPage()\"\n                [disabled]=\"recordCurrentPage() >= recordTotalPages() || isLoadingRecords()\">\n                Next\n              </button>\n            </div>\n          </footer>\n          }\n        </section>\n        } @else if (isFieldsLoading()) {\n        <div class=\"object-records__state\">\n          <i class=\"fa-solid fa-spinner fa-spin\"></i>\n          <p>Loading field schema...</p>\n        </div>\n        } @else {\n        <section class=\"object-state object-state--inline\">\n          <i class=\"fa-regular fa-square-plus\"></i>\n          <h3>No Fields Configured</h3>\n          <p>Open Object Info to configure structure and add fields before creating records.</p>\n          <button type=\"button\" class=\"object-btn object-btn--primary\" (click)=\"openInfoPopup()\">\n            <i class=\"fa-solid fa-circle-info\"></i>\n            Open Object Info\n          </button>\n        </section>\n        }\n      </section>\n\n      @if (relatedObjects().length) {\n      <section class=\"object-panel\">\n        <header class=\"object-panel__header\">\n          <h2 class=\"object-panel__title\">Switch Object</h2>\n          <p class=\"object-panel__subtitle\">Quick navigation across related mapped objects.</p>\n        </header>\n\n        <div class=\"related-objects related-objects--inline\">\n          <div class=\"related-objects__list\">\n            @for (related of relatedObjects(); track related.id) {\n            <a [routerLink]=\"buildObjectRoute(related)\" class=\"related-objects__item\">\n              {{ related.name }}\n            </a>\n            }\n          </div>\n        </div>\n      </section>\n      }\n    </div>\n    } @else if (!isLoading()) {\n    <section class=\"object-state object-state--empty\">\n      <i class=\"fa-regular fa-folder-open\"></i>\n      <h2>Object Not Found</h2>\n      <p>The object <strong>{{ objectHeading() }}</strong> is not available in the current workspace.</p>\n      <a routerLink=\"/dashboard\" class=\"object-btn object-btn--primary\">\n        <i class=\"fa-solid fa-arrow-left\"></i>\n        Back To Object Library\n      </a>\n    </section>\n    }\n  </div>\n</section>\n", styles: [":host {\n  display: block;\n}\n\n.object-workspace {\n  min-height: calc(100vh - 86px);\n  padding: 14px 10px 24px;\n}\n\n.object-workspace__shell {\n  max-width: 1260px;\n  margin: 0 auto;\n  border-radius: 24px;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 58%, white);\n  background:\n    radial-gradient(circle at top right, color-mix(in srgb, var(--theme-primary) 12%, transparent), transparent 44%),\n    color-mix(in srgb, var(--theme-bg-surface) 95%, transparent);\n  box-shadow: 0 24px 70px rgba(15, 23, 42, 0.11);\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n\n.object-overview {\n  border-radius: 18px;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 56%, white);\n  background: color-mix(in srgb, var(--theme-bg-surface) 97%, transparent);\n  padding: 13px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.object-overview__top {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n\n.object-overview__badges {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  flex-wrap: wrap;\n}\n\n.overview-badge {\n  border-radius: 999px;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 62%, white);\n  background: var(--theme-bg-surface);\n  color: var(--theme-text-secondary);\n  font-size: 10px;\n  font-weight: 700;\n  padding: 4px 8px;\n}\n\n.overview-badge--active {\n  border-color: color-mix(in srgb, var(--theme-success) 48%, white);\n  background: color-mix(in srgb, var(--theme-success) 12%, white);\n  color: var(--theme-success);\n}\n\n.object-breadcrumbs {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 12px;\n  color: var(--theme-text-muted);\n}\n\n.object-breadcrumbs a {\n  color: var(--theme-text-secondary);\n  text-decoration: none;\n  font-weight: 700;\n}\n\n.object-breadcrumbs a:hover {\n  color: var(--theme-primary);\n}\n\n.object-breadcrumbs i {\n  font-size: 11px;\n  opacity: 0.7;\n}\n\n.object-breadcrumbs__current {\n  color: var(--theme-text-primary);\n  font-weight: 700;\n}\n\n.object-hero {\n  border-radius: 16px;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 58%, white);\n  background:\n    radial-gradient(circle at top right, color-mix(in srgb, var(--theme-primary) 10%, transparent), transparent 48%),\n    var(--theme-bg-surface);\n  padding: 18px;\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 14px;\n}\n\n.object-hero__identity {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n}\n\n.object-hero__avatar {\n  width: 54px;\n  height: 54px;\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 22px;\n  font-weight: 800;\n  color: var(--theme-primary-contrast);\n  background: linear-gradient(120deg, var(--theme-primary), var(--theme-accent-end));\n  box-shadow: 0 12px 24px color-mix(in srgb, var(--theme-primary) 26%, transparent);\n  flex-shrink: 0;\n}\n\n.object-hero__kicker {\n  margin: 0;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.11em;\n  color: var(--theme-text-muted);\n}\n\n.object-hero__title-anchor {\n  position: relative;\n  width: fit-content;\n  max-width: 100%;\n  margin-top: 6px;\n  outline: none;\n}\n\n.object-hero__title-anchor:focus-visible {\n  border-radius: 10px;\n  box-shadow: 0 0 0 3px color-mix(in srgb, var(--theme-primary) 18%, transparent);\n}\n\n.object-hero__title {\n  margin: 0;\n  font-size: 34px;\n  line-height: 1.06;\n  letter-spacing: -0.02em;\n  color: var(--theme-text-primary);\n  cursor: default;\n}\n\n.object-hero__meta-hint {\n  margin: 5px 0 0;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--theme-text-muted);\n}\n\n.object-meta-popover {\n  position: absolute;\n  top: calc(100% + 10px);\n  left: 0;\n  width: min(360px, 88vw);\n  border: 1px solid color-mix(in srgb, var(--theme-border) 58%, white);\n  border-radius: 14px;\n  background:\n    radial-gradient(circle at top right, color-mix(in srgb, var(--theme-primary) 10%, transparent), transparent 58%),\n    color-mix(in srgb, var(--theme-bg-surface) 98%, white);\n  box-shadow: 0 18px 36px rgba(15, 23, 42, 0.16);\n  padding: 11px;\n  z-index: 20;\n  opacity: 0;\n  visibility: hidden;\n  transform: translateY(8px);\n  pointer-events: none;\n  transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s ease;\n}\n\n.object-meta-popover::before {\n  content: \"\";\n  position: absolute;\n  top: -6px;\n  left: 18px;\n  width: 12px;\n  height: 12px;\n  border-left: 1px solid color-mix(in srgb, var(--theme-border) 58%, white);\n  border-top: 1px solid color-mix(in srgb, var(--theme-border) 58%, white);\n  background: color-mix(in srgb, var(--theme-bg-surface) 98%, white);\n  transform: rotate(45deg);\n}\n\n.object-hero__title-anchor:hover .object-meta-popover,\n.object-hero__title-anchor:focus-within .object-meta-popover {\n  opacity: 1;\n  visibility: visible;\n  transform: translateY(0);\n}\n\n.object-meta-popover__title {\n  margin: 0 0 8px;\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--theme-text-primary);\n}\n\n.object-meta-popover__list {\n  margin: 0;\n  display: grid;\n  gap: 7px;\n}\n\n.object-meta-popover__list div {\n  border: 1px solid color-mix(in srgb, var(--theme-border) 62%, white);\n  border-radius: 9px;\n  background: var(--theme-bg-surface);\n  padding: 7px 8px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n\n.object-meta-popover__list dt {\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--theme-text-muted);\n}\n\n.object-meta-popover__list dd {\n  margin: 0;\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--theme-text-primary);\n  text-align: right;\n}\n\n.object-meta-popover__code {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;\n}\n\n.object-hero__subtitle {\n  margin: 8px 0 0;\n  max-width: 640px;\n  font-size: 14px;\n  color: var(--theme-text-secondary);\n}\n\n.object-hero__actions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n}\n\n.object-btn {\n  border: 1px solid transparent;\n  border-radius: 10px;\n  min-height: 38px;\n  padding: 8px 12px;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 12px;\n  font-weight: 700;\n  text-decoration: none;\n  cursor: pointer;\n  transition: border-color 0.2s ease, color 0.2s ease, background-color 0.2s ease;\n}\n\n.object-btn--primary {\n  color: var(--theme-primary-contrast);\n  background: linear-gradient(120deg, var(--theme-primary), var(--theme-accent-end));\n}\n\n.object-btn--ghost {\n  color: var(--theme-text-secondary);\n  border-color: color-mix(in srgb, var(--theme-border) 64%, white);\n  background: color-mix(in srgb, var(--theme-bg-surface) 96%, white);\n}\n\n.object-btn--ghost:hover {\n  color: var(--theme-text-primary);\n  border-color: color-mix(in srgb, var(--theme-primary) 46%, white);\n}\n\n.object-info-backdrop {\n  position: fixed;\n  inset: 0;\n  z-index: 80;\n  background: rgba(15, 23, 42, 0.45);\n  backdrop-filter: blur(2px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 18px;\n}\n\n.object-info-dialog {\n  width: min(1080px, 100%);\n  max-height: calc(100vh - 36px);\n  overflow: auto;\n  border-radius: 18px;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 56%, white);\n  background:\n    radial-gradient(circle at top right, color-mix(in srgb, var(--theme-primary) 11%, transparent), transparent 52%),\n    color-mix(in srgb, var(--theme-bg-surface) 98%, white);\n  box-shadow: 0 24px 50px rgba(15, 23, 42, 0.28);\n  padding: 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.object-info-dialog__header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 12px;\n  border-bottom: 1px solid color-mix(in srgb, var(--theme-border) 52%, white);\n  padding-bottom: 10px;\n}\n\n.object-info-dialog__kicker {\n  margin: 0;\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: var(--theme-text-muted);\n}\n\n.object-info-dialog__header h2 {\n  margin: 5px 0 0;\n  font-size: 21px;\n  color: var(--theme-text-primary);\n}\n\n.object-info-dialog__header p {\n  margin: 6px 0 0;\n  font-size: 12px;\n  color: var(--theme-text-muted);\n}\n\n.object-info-dialog__close {\n  border: 1px solid color-mix(in srgb, var(--theme-border) 60%, white);\n  border-radius: 10px;\n  background: var(--theme-bg-surface);\n  color: var(--theme-text-secondary);\n  min-width: 34px;\n  min-height: 34px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n\n.object-info-dialog__close:hover {\n  color: var(--theme-text-primary);\n  border-color: color-mix(in srgb, var(--theme-primary) 44%, white);\n}\n\n.object-info-dialog__content {\n  display: grid;\n  gap: 12px;\n  grid-template-columns: 1fr;\n}\n\n.object-panel--info {\n  padding: 12px;\n}\n\n.object-fields--popup {\n  border-top: none;\n  padding-top: 0;\n}\n\n.status-pill {\n  display: inline-flex;\n  align-items: center;\n  border-radius: 999px;\n  padding: 4px 10px;\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--theme-danger);\n  background: color-mix(in srgb, var(--theme-danger) 12%, white);\n}\n\n.status-pill--active {\n  color: var(--theme-success);\n  background: color-mix(in srgb, var(--theme-success) 14%, white);\n}\n\n.object-layout {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 12px;\n}\n\n.object-panel {\n  border-radius: 18px;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 58%, white);\n  background: color-mix(in srgb, var(--theme-bg-surface) 98%, transparent);\n  padding: 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.object-panel--records {\n  min-height: 230px;\n}\n\n.object-panel__header {\n  padding-bottom: 11px;\n  border-bottom: 1px solid color-mix(in srgb, var(--theme-border) 52%, white);\n}\n\n.object-panel__title {\n  margin: 0;\n  font-size: 17px;\n  color: var(--theme-text-primary);\n}\n\n.object-panel__subtitle {\n  margin: 5px 0 0;\n  font-size: 12px;\n  color: var(--theme-text-muted);\n}\n\n.object-checklist {\n  display: grid;\n  gap: 10px;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n\n.check-item {\n  border-radius: 12px;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 58%, white);\n  background: var(--theme-bg-surface);\n  padding: 11px;\n}\n\n.check-item h3 {\n  margin: 0;\n  font-size: 14px;\n  color: var(--theme-text-primary);\n}\n\n.check-item p {\n  margin: 7px 0 0;\n  font-size: 12px;\n  line-height: 1.5;\n  color: var(--theme-text-secondary);\n}\n\n.object-fields {\n  border-top: 1px solid color-mix(in srgb, var(--theme-border) 52%, white);\n  padding-top: 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.object-fields__header h3 {\n  margin: 0;\n  font-size: 15px;\n  color: var(--theme-text-primary);\n}\n\n.object-fields__header p {\n  margin: 4px 0 0;\n  font-size: 12px;\n  color: var(--theme-text-muted);\n}\n\n.object-fields__form {\n  border: 1px solid color-mix(in srgb, var(--theme-border) 58%, white);\n  border-radius: 12px;\n  background: var(--theme-bg-surface);\n  padding: 11px;\n  display: flex;\n  flex-direction: column;\n  gap: 9px;\n}\n\n.object-fields__inline {\n  display: grid;\n  gap: 9px;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n\n.object-fields__field {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n\n.object-fields__field--options {\n  gap: 8px;\n}\n\n.object-fields__field span {\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  color: var(--theme-text-muted);\n}\n\n.object-fields__field input,\n.object-fields__field textarea,\n.object-fields__field select {\n  width: 100%;\n  border-radius: 8px;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 64%, white);\n  background: var(--theme-bg-surface);\n  color: var(--theme-text-primary);\n  padding: 8px 9px;\n  font-size: 12px;\n}\n\n.object-fields__field textarea {\n  resize: vertical;\n}\n\n.object-fields__option-builder {\n  display: grid;\n  gap: 8px;\n  grid-template-columns: minmax(0, 1fr) auto;\n  align-items: center;\n}\n\n.object-fields__option-add-btn {\n  border: 1px solid color-mix(in srgb, var(--theme-border) 62%, white);\n  border-radius: 9px;\n  min-height: 34px;\n  padding: 0 12px;\n  background: var(--theme-bg-surface);\n  color: var(--theme-text-secondary);\n  font-size: 12px;\n  font-weight: 700;\n  cursor: pointer;\n}\n\n.object-fields__option-add-btn:hover {\n  color: var(--theme-text-primary);\n  border-color: color-mix(in srgb, var(--theme-primary) 46%, white);\n}\n\n.object-fields__chips {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 7px;\n}\n\n.object-fields__chip {\n  border: 1px solid color-mix(in srgb, var(--theme-primary) 44%, white);\n  border-radius: 999px;\n  background: color-mix(in srgb, var(--theme-primary) 10%, white);\n  color: var(--theme-primary);\n  min-height: 28px;\n  padding: 0 10px;\n  font-size: 11px;\n  font-weight: 700;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  cursor: pointer;\n}\n\n.object-fields__field input:focus-visible,\n.object-fields__field textarea:focus-visible,\n.object-fields__field select:focus-visible {\n  outline: none;\n  border-color: color-mix(in srgb, var(--theme-primary) 48%, white);\n  box-shadow: 0 0 0 3px color-mix(in srgb, var(--theme-primary) 16%, transparent);\n}\n\n.object-fields__switch {\n  margin-top: 20px;\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  font-size: 12px;\n  color: var(--theme-text-secondary);\n  font-weight: 600;\n}\n\n.object-fields__error,\n.object-fields__success {\n  margin: 0;\n  border-radius: 9px;\n  padding: 7px 9px;\n  font-size: 12px;\n  font-weight: 600;\n}\n\n.object-fields__error {\n  color: var(--theme-danger);\n  background: color-mix(in srgb, var(--theme-danger) 12%, white);\n}\n\n.object-fields__success {\n  color: var(--theme-success);\n  background: color-mix(in srgb, var(--theme-success) 12%, white);\n}\n\n.object-fields__actions {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.object-fields__hint {\n  margin: 0;\n  border-radius: 10px;\n  border: 1px solid color-mix(in srgb, var(--theme-primary) 40%, white);\n  background: color-mix(in srgb, var(--theme-primary) 10%, white);\n  color: var(--theme-text-primary);\n  padding: 8px 10px;\n  font-size: 12px;\n  font-weight: 600;\n}\n\n.object-fields__hint--plain {\n  border: none;\n  border-radius: 0;\n  background: transparent;\n  color: var(--theme-text-muted);\n  padding: 0;\n  font-weight: 500;\n  font-size: 11px;\n}\n\n.object-fields__list h4 {\n  margin: 0 0 8px;\n  font-size: 14px;\n  color: var(--theme-text-primary);\n}\n\n.object-fields__state {\n  border: 1px dashed color-mix(in srgb, var(--theme-border) 62%, white);\n  border-radius: 10px;\n  min-height: 84px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 7px;\n  font-size: 12px;\n  color: var(--theme-text-secondary);\n}\n\n.object-fields__grid {\n  display: grid;\n  gap: 9px;\n  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));\n}\n\n.object-field-card {\n  border-radius: 10px;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 62%, white);\n  background: var(--theme-bg-surface);\n  padding: 9px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.object-field-card__header {\n  display: flex;\n  justify-content: space-between;\n  gap: 8px;\n  align-items: flex-start;\n}\n\n.object-field-card__header h5 {\n  margin: 0;\n  font-size: 13px;\n  color: var(--theme-text-primary);\n}\n\n.object-field-card__header p {\n  margin: 4px 0 0;\n  font-size: 10px;\n  color: var(--theme-text-muted);\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;\n}\n\n.object-field-card__actions {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n}\n\n.field-type-pill {\n  border-radius: 999px;\n  border: 1px solid color-mix(in srgb, var(--theme-primary) 44%, white);\n  background: color-mix(in srgb, var(--theme-primary) 10%, white);\n  color: var(--theme-primary);\n  font-size: 10px;\n  font-weight: 700;\n  padding: 3px 8px;\n}\n\n.field-remove-btn {\n  border-radius: 8px;\n  border: 1px solid color-mix(in srgb, var(--theme-danger) 44%, white);\n  background: color-mix(in srgb, var(--theme-danger) 8%, white);\n  color: var(--theme-danger);\n  font-size: 10px;\n  font-weight: 700;\n  padding: 5px 8px;\n  cursor: pointer;\n}\n\n.field-remove-btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n.object-field-card__description {\n  margin: 0;\n  font-size: 12px;\n  color: var(--theme-text-secondary);\n}\n\n.object-field-card__meta {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n\n.object-field-card__meta span {\n  border-radius: 999px;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 63%, white);\n  padding: 3px 8px;\n  font-size: 10px;\n  font-weight: 600;\n  color: var(--theme-text-muted);\n}\n\n.object-records {\n  border-top: 1px solid color-mix(in srgb, var(--theme-border) 52%, white);\n  padding-top: 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.object-records__header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 10px;\n}\n\n.object-records__header h3 {\n  margin: 0;\n  font-size: 15px;\n  color: var(--theme-text-primary);\n}\n\n.object-records__header p {\n  margin: 4px 0 0;\n  font-size: 12px;\n  color: var(--theme-text-muted);\n}\n\n.object-records__actions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  position: relative;\n}\n\n.object-records__views {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  min-width: 240px;\n}\n\n.object-records__views > label {\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--theme-text-muted);\n}\n\n.object-records__views-controls {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n}\n\n.object-records__views-controls select {\n  border-radius: 9px;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 62%, white);\n  background: var(--theme-bg-surface);\n  color: var(--theme-text-primary);\n  min-height: 36px;\n  padding: 0 10px;\n  font-size: 12px;\n  min-width: 150px;\n}\n\n.object-records__views-controls select:focus-visible {\n  outline: none;\n  border-color: color-mix(in srgb, var(--theme-primary) 46%, white);\n  box-shadow: 0 0 0 3px color-mix(in srgb, var(--theme-primary) 16%, transparent);\n}\n\n.object-records__search {\n  min-width: 240px;\n  border-radius: 9px;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 62%, white);\n  background: var(--theme-bg-surface);\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 0 10px;\n  min-height: 36px;\n}\n\n.object-records__search i {\n  font-size: 11px;\n  color: var(--theme-text-muted);\n}\n\n.object-records__search input {\n  border: none;\n  background: transparent;\n  color: var(--theme-text-primary);\n  font-size: 12px;\n  width: 100%;\n  min-width: 0;\n}\n\n.object-records__search input:focus-visible {\n  outline: none;\n}\n\n.object-columns {\n  position: relative;\n}\n\n.object-columns__badge {\n  margin-left: 2px;\n  border-radius: 999px;\n  border: 1px solid color-mix(in srgb, var(--theme-primary) 42%, white);\n  background: color-mix(in srgb, var(--theme-primary) 10%, white);\n  color: var(--theme-primary);\n  font-size: 10px;\n  font-weight: 700;\n  padding: 2px 7px;\n}\n\n.object-columns__panel {\n  position: absolute;\n  top: calc(100% + 8px);\n  right: 0;\n  width: min(320px, 80vw);\n  border: 1px solid color-mix(in srgb, var(--theme-border) 60%, white);\n  border-radius: 12px;\n  background: color-mix(in srgb, var(--theme-bg-surface) 98%, white);\n  box-shadow: 0 20px 36px rgba(15, 23, 42, 0.16);\n  padding: 11px;\n  z-index: 30;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.object-columns__panel-header h4 {\n  margin: 0;\n  font-size: 13px;\n  color: var(--theme-text-primary);\n}\n\n.object-columns__panel-header p {\n  margin: 4px 0 0;\n  font-size: 11px;\n  color: var(--theme-text-muted);\n}\n\n.object-columns__panel-list {\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n  max-height: 220px;\n  overflow: auto;\n  padding-right: 3px;\n}\n\n.object-columns__item {\n  border: 1px solid color-mix(in srgb, var(--theme-border) 62%, white);\n  border-radius: 10px;\n  background: var(--theme-bg-surface);\n  padding: 7px 8px;\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr);\n  align-items: center;\n  gap: 8px;\n}\n\n.object-columns__item input {\n  margin: 0;\n}\n\n.object-columns__item span {\n  display: block;\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--theme-text-primary);\n}\n\n.object-columns__item small {\n  display: block;\n  margin-top: 2px;\n  font-size: 10px;\n  color: var(--theme-text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n\n.object-columns__message {\n  margin: 0;\n  border-radius: 9px;\n  background: color-mix(in srgb, var(--theme-danger) 12%, white);\n  color: var(--theme-danger);\n  padding: 7px 9px;\n  font-size: 11px;\n  font-weight: 600;\n}\n\n.object-columns__panel-actions {\n  display: flex;\n  justify-content: space-between;\n  gap: 7px;\n}\n\n.object-columns__panel-actions button {\n  border: 1px solid color-mix(in srgb, var(--theme-border) 62%, white);\n  border-radius: 8px;\n  background: var(--theme-bg-surface);\n  color: var(--theme-text-secondary);\n  font-size: 11px;\n  font-weight: 700;\n  min-height: 30px;\n  padding: 0 10px;\n  cursor: pointer;\n}\n\n.object-columns__panel-actions button:last-child {\n  border-color: color-mix(in srgb, var(--theme-primary) 42%, white);\n  color: var(--theme-primary);\n}\n\n.object-records__scroll-tools {\n  border: 1px solid color-mix(in srgb, var(--theme-border) 62%, white);\n  border-radius: 10px;\n  background: color-mix(in srgb, var(--theme-bg-surface) 96%, white);\n  min-height: 40px;\n  padding: 0 10px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n}\n\n.object-records__scroll-tools > span {\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--theme-text-secondary);\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n}\n\n.object-records__scroll-tools > div {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n\n.object-records__scroll-tools button {\n  border-radius: 8px;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 60%, white);\n  background: var(--theme-bg-surface);\n  color: var(--theme-text-secondary);\n  font-size: 11px;\n  font-weight: 700;\n  min-height: 30px;\n  padding: 0 9px;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  cursor: pointer;\n}\n\n.object-records__scroll-tools button:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n.object-records__error {\n  margin: 0;\n  border-radius: 9px;\n  background: color-mix(in srgb, var(--theme-danger) 12%, white);\n  color: var(--theme-danger);\n  padding: 8px 10px;\n  font-size: 12px;\n  font-weight: 600;\n}\n\n.object-records__success,\n.object-records__hint {\n  margin: 0;\n  border-radius: 9px;\n  padding: 8px 10px;\n  font-size: 12px;\n  font-weight: 600;\n}\n\n.object-records__success {\n  color: var(--theme-success);\n  background: color-mix(in srgb, var(--theme-success) 12%, white);\n}\n\n.object-records__hint {\n  color: var(--theme-primary);\n  background: color-mix(in srgb, var(--theme-primary) 10%, white);\n}\n\n.object-records__state {\n  border: 1px dashed color-mix(in srgb, var(--theme-border) 62%, white);\n  border-radius: 10px;\n  min-height: 84px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 7px;\n  font-size: 12px;\n  color: var(--theme-text-secondary);\n}\n\n.object-records__table-shell {\n  border: 1px solid color-mix(in srgb, var(--theme-border) 58%, white);\n  border-radius: 10px;\n  overflow: auto;\n  background: var(--theme-bg-surface);\n  scrollbar-gutter: stable both-edges;\n}\n\n.object-records__table {\n  width: 100%;\n  border-collapse: collapse;\n  min-width: 680px;\n}\n\n.object-records__table th,\n.object-records__table td {\n  border-bottom: 1px solid color-mix(in srgb, var(--theme-border) 55%, white);\n  padding: 9px 10px;\n  text-align: left;\n  font-size: 12px;\n  color: var(--theme-text-secondary);\n  white-space: nowrap;\n}\n\n.object-records__table th {\n  background: color-mix(in srgb, var(--theme-bg-surface-soft) 90%, white);\n  color: var(--theme-text-primary);\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\n.object-records__table th button {\n  border: none;\n  background: transparent;\n  color: inherit;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  cursor: pointer;\n}\n\n.object-records__table td {\n  color: var(--theme-text-primary);\n}\n\n.object-records__table tbody tr:hover {\n  background: color-mix(in srgb, var(--theme-primary) 6%, white);\n}\n\n.object-records__empty {\n  text-align: center !important;\n  font-weight: 600;\n  color: var(--theme-text-muted) !important;\n}\n\n.object-records__footer {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n}\n\n.object-records__footer p {\n  margin: 0;\n  font-size: 12px;\n  color: var(--theme-text-muted);\n}\n\n.object-records__pagination {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.object-records__pagination span {\n  font-size: 12px;\n  color: var(--theme-text-secondary);\n  font-weight: 600;\n}\n\n.object-records__pagination button {\n  border-radius: 8px;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 60%, white);\n  background: var(--theme-bg-surface);\n  color: var(--theme-text-secondary);\n  font-size: 12px;\n  font-weight: 700;\n  min-height: 32px;\n  padding: 0 10px;\n  cursor: pointer;\n}\n\n.object-records__pagination button:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n.related-objects {\n  border-top: 1px solid color-mix(in srgb, var(--theme-border) 50%, white);\n  padding-top: 10px;\n}\n\n.related-objects--inline {\n  border-top: none;\n  padding-top: 0;\n}\n\n.related-objects__title {\n  margin: 0 0 8px;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: var(--theme-text-muted);\n}\n\n.related-objects__list {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 7px;\n}\n\n.related-objects__item {\n  border-radius: 999px;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 62%, white);\n  padding: 5px 10px;\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--theme-text-secondary);\n  text-decoration: none;\n}\n\n.related-objects__item:hover {\n  color: var(--theme-primary);\n  border-color: color-mix(in srgb, var(--theme-primary) 46%, white);\n}\n\n.object-state {\n  border-radius: 18px;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 58%, white);\n  background: color-mix(in srgb, var(--theme-bg-surface) 98%, transparent);\n  min-height: 260px;\n  padding: 22px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  gap: 10px;\n}\n\n.object-state i {\n  font-size: 24px;\n  color: var(--theme-primary);\n}\n\n.object-state h2 {\n  margin: 0;\n  font-size: 20px;\n  color: var(--theme-text-primary);\n}\n\n.object-state h3 {\n  margin: 0;\n  font-size: 18px;\n  color: var(--theme-text-primary);\n}\n\n.object-state p {\n  margin: 0;\n  font-size: 13px;\n  color: var(--theme-text-secondary);\n}\n\n.object-state--inline {\n  min-height: 210px;\n  border-style: dashed;\n}\n\n@media (max-width: 1160px) {\n  .object-layout {\n    grid-template-columns: 1fr;\n  }\n}\n\n@media (max-width: 860px) {\n  .object-workspace__shell {\n    padding: 12px;\n  }\n\n  .object-info-backdrop {\n    padding: 10px;\n  }\n\n  .object-info-dialog {\n    max-height: calc(100vh - 20px);\n    padding: 12px;\n  }\n\n  .object-hero {\n    flex-direction: column;\n  }\n\n  .object-hero__title {\n    font-size: 28px;\n  }\n\n  .object-meta-popover {\n    left: 0;\n    right: auto;\n    width: min(320px, 84vw);\n  }\n\n  .object-hero__actions {\n    width: 100%;\n    justify-content: flex-start;\n  }\n\n  .object-checklist {\n    grid-template-columns: 1fr;\n  }\n\n  .object-fields__inline {\n    grid-template-columns: 1fr;\n  }\n\n  .object-records__header {\n    flex-direction: column;\n  }\n\n  .object-records__actions {\n    width: 100%;\n    flex-wrap: wrap;\n  }\n\n  .object-columns {\n    width: 100%;\n  }\n\n  .object-columns > .object-btn {\n    width: 100%;\n    justify-content: center;\n  }\n\n  .object-columns__panel {\n    left: 0;\n    right: auto;\n    width: 100%;\n  }\n\n  .object-records__search {\n    min-width: 0;\n    width: 100%;\n  }\n\n  .object-records__views {\n    width: 100%;\n    min-width: 0;\n  }\n\n  .object-records__views-controls {\n    width: 100%;\n  }\n\n  .object-records__views-controls select {\n    flex: 1;\n    min-width: 0;\n  }\n\n  .object-records__scroll-tools {\n    flex-wrap: wrap;\n    justify-content: center;\n    padding: 8px 10px;\n    min-height: 0;\n  }\n\n  .object-records__footer {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n\n@media (max-width: 640px) {\n  .object-breadcrumbs {\n    flex-wrap: wrap;\n  }\n\n  .object-overview__top {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n\n  .object-meta-popover {\n    width: min(300px, 88vw);\n  }\n}\n"] }]
    }], () => [], { recordsTableShellRef: [{
            type: ViewChild,
            args: ['recordsTableShell']
        }], onWindowResize: [{
            type: HostListener,
            args: ['window:resize']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ObjectDetailsPage, { className: "ObjectDetailsPage", filePath: "avyra-crm/src/app/shared/pages/loggedin/object-details-page/object-details-page.ts", lineNumber: 23 }); })();
