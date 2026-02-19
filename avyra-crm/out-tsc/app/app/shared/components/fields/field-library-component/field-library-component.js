import { CommonModule } from '@angular/common';
import { Component, computed, effect, inject, signal, untracked } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { startWith } from 'rxjs';
import { BusinessService } from '../../../../services/business.service';
import { FieldService } from '../../../../services/field.service';
import { ObjectService } from '../../../../services/object.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
const _forTrack0 = ($index, $item) => $item.value;
const _forTrack1 = ($index, $item) => $item.id;
const _forTrack2 = ($index, $item) => $item.object_id + "-" + ($item.business_id || "default");
function FieldLibraryComponent_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 5);
    i0.ɵɵtext(1, " Fields created here are saved to your reusable schema and mapped to the selected business object. ");
    i0.ɵɵelementEnd();
} }
function FieldLibraryComponent_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Creates reusable user-level field definition (no mapping by default). ");
} }
function FieldLibraryComponent_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Creates reusable field schema and maps it to an object in this business. ");
} }
function FieldLibraryComponent_For_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 15);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const fieldType_r1 = ctx.$implicit;
    i0.ɵɵproperty("value", fieldType_r1.value);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(fieldType_r1.label);
} }
function FieldLibraryComponent_Conditional_34_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 21);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r2.optionErrorMessage());
} }
function FieldLibraryComponent_Conditional_34_Conditional_11_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 35);
    i0.ɵɵlistener("click", function FieldLibraryComponent_Conditional_34_Conditional_11_For_2_Template_button_click_0_listener() { const option_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.removeOption(option_r5)); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "i", 36);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r5 = ctx.$implicit;
    i0.ɵɵattribute("aria-label", "Remove option " + option_r5);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(option_r5);
} }
function FieldLibraryComponent_Conditional_34_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 33);
    i0.ɵɵrepeaterCreate(1, FieldLibraryComponent_Conditional_34_Conditional_11_For_2_Template, 4, 2, "button", 34, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r2.fieldOptionsPreview());
} }
function FieldLibraryComponent_Conditional_34_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 16)(1, "span");
    i0.ɵɵtext(2, "Select Options");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 28)(4, "input", 29);
    i0.ɵɵlistener("input", function FieldLibraryComponent_Conditional_34_Template_input_input_4_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onOptionDraftInput($event.target.value)); })("keydown.enter", function FieldLibraryComponent_Conditional_34_Template_input_keydown_enter_4_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.addOption($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 30);
    i0.ɵɵlistener("click", function FieldLibraryComponent_Conditional_34_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.addOption()); });
    i0.ɵɵtext(6, "Add");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "p", 31);
    i0.ɵɵtext(8, "Add options quickly with Enter. You can also paste comma or new-line values.");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(9, "textarea", 32);
    i0.ɵɵconditionalCreate(10, FieldLibraryComponent_Conditional_34_Conditional_10_Template, 2, 1, "p", 21);
    i0.ɵɵconditionalCreate(11, FieldLibraryComponent_Conditional_34_Conditional_11_Template, 3, 0, "div", 33);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("value", ctx_r2.optionDraft());
    i0.ɵɵadvance(6);
    i0.ɵɵconditional(ctx_r2.optionErrorMessage() ? 10 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r2.fieldOptionsPreview().length ? 11 : -1);
} }
function FieldLibraryComponent_Conditional_35_For_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 15);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const objectRecord_r6 = ctx.$implicit;
    i0.ɵɵproperty("value", objectRecord_r6.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", objectRecord_r6.name, " (", objectRecord_r6.key, ")");
} }
function FieldLibraryComponent_Conditional_35_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 31);
    i0.ɵɵtext(1, "Loading objects...");
    i0.ɵɵelementEnd();
} }
function FieldLibraryComponent_Conditional_35_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 31);
    i0.ɵɵtext(1, "No objects mapped to this business yet.");
    i0.ɵɵelementEnd();
} }
function FieldLibraryComponent_Conditional_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 10)(1, "span");
    i0.ɵɵtext(2, "Target Object (required in business)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "select", 37)(4, "option", 38);
    i0.ɵɵtext(5, "Choose object");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(6, FieldLibraryComponent_Conditional_35_For_7_Template, 2, 3, "option", 15, _forTrack1);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(8, FieldLibraryComponent_Conditional_35_Conditional_8_Template, 2, 0, "p", 31)(9, FieldLibraryComponent_Conditional_35_Conditional_9_Template, 2, 0, "p", 31);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", ctx_r2.isLoadingObjectOptions());
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r2.createTargetObjectOptions());
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r2.isLoadingObjectOptions() ? 8 : !ctx_r2.createTargetObjectOptions().length ? 9 : -1);
} }
function FieldLibraryComponent_Conditional_53_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 21);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r2.createErrorMessage());
} }
function FieldLibraryComponent_Conditional_54_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 22);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r2.createSuccessMessage());
} }
function FieldLibraryComponent_Conditional_57_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Saving... ");
} }
function FieldLibraryComponent_Conditional_58_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Save Field ");
} }
function FieldLibraryComponent_Conditional_59_For_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 15);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const fieldRecord_r8 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("value", fieldRecord_r8.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2(" ", fieldRecord_r8.name, " (", ctx_r2.fieldTypeLabel(fieldRecord_r8.type), ") ");
} }
function FieldLibraryComponent_Conditional_59_For_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 15);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const business_r9 = ctx.$implicit;
    i0.ɵɵproperty("value", business_r9.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(business_r9.name);
} }
function FieldLibraryComponent_Conditional_59_For_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 15);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const objectRecord_r10 = ctx.$implicit;
    i0.ɵɵproperty("value", objectRecord_r10.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", objectRecord_r10.name, " (", objectRecord_r10.key, ")");
} }
function FieldLibraryComponent_Conditional_59_Conditional_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 31);
    i0.ɵɵtext(1, "Loading objects...");
    i0.ɵɵelementEnd();
} }
function FieldLibraryComponent_Conditional_59_Conditional_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 31);
    i0.ɵɵtext(1, "No objects available for selected business scope.");
    i0.ɵɵelementEnd();
} }
function FieldLibraryComponent_Conditional_59_Conditional_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 21);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r2.mapErrorMessage());
} }
function FieldLibraryComponent_Conditional_59_Conditional_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 22);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r2.mapSuccessMessage());
} }
function FieldLibraryComponent_Conditional_59_Conditional_37_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Mapping... ");
} }
function FieldLibraryComponent_Conditional_59_Conditional_38_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Map Field ");
} }
function FieldLibraryComponent_Conditional_59_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article", 7)(1, "header", 8)(2, "h3");
    i0.ɵɵtext(3, "Map Field To Object");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5, "Assign reusable fields to any object in default or a specific business.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "form", 9);
    i0.ɵɵlistener("ngSubmit", function FieldLibraryComponent_Conditional_59_Template_form_ngSubmit_6_listener() { i0.ɵɵrestoreView(_r7); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.submitMapField()); });
    i0.ɵɵelementStart(7, "label", 10)(8, "span");
    i0.ɵɵtext(9, "Select Field");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "select", 39)(11, "option", 38);
    i0.ɵɵtext(12, "Choose field");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(13, FieldLibraryComponent_Conditional_59_For_14_Template, 2, 3, "option", 15, _forTrack1);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "label", 10)(16, "span");
    i0.ɵɵtext(17, "Business Scope");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "select", 40)(19, "option", 41);
    i0.ɵɵtext(20, "Default (Global Mapping)");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(21, FieldLibraryComponent_Conditional_59_For_22_Template, 2, 2, "option", 15, _forTrack1);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(23, "label", 10)(24, "span");
    i0.ɵɵtext(25, "Object");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "select", 37)(27, "option", 38);
    i0.ɵɵtext(28, "Choose object");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(29, FieldLibraryComponent_Conditional_59_For_30_Template, 2, 3, "option", 15, _forTrack1);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(31, FieldLibraryComponent_Conditional_59_Conditional_31_Template, 2, 0, "p", 31)(32, FieldLibraryComponent_Conditional_59_Conditional_32_Template, 2, 0, "p", 31);
    i0.ɵɵconditionalCreate(33, FieldLibraryComponent_Conditional_59_Conditional_33_Template, 2, 1, "p", 21);
    i0.ɵɵconditionalCreate(34, FieldLibraryComponent_Conditional_59_Conditional_34_Template, 2, 1, "p", 22);
    i0.ɵɵelementStart(35, "footer", 23)(36, "button", 24);
    i0.ɵɵconditionalCreate(37, FieldLibraryComponent_Conditional_59_Conditional_37_Template, 1, 0)(38, FieldLibraryComponent_Conditional_59_Conditional_38_Template, 1, 0);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("formGroup", ctx_r2.mapFieldForm);
    i0.ɵɵadvance(7);
    i0.ɵɵrepeater(ctx_r2.fields());
    i0.ɵɵadvance(8);
    i0.ɵɵrepeater(ctx_r2.businesses());
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("disabled", ctx_r2.isLoadingObjectOptions());
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r2.filteredObjectOptions());
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r2.isLoadingObjectOptions() ? 31 : !ctx_r2.filteredObjectOptions().length ? 32 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r2.mapErrorMessage() ? 33 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r2.mapSuccessMessage() ? 34 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r2.mapFieldForm.invalid || ctx_r2.isMappingField());
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r2.isMappingField() ? 37 : 38);
} }
function FieldLibraryComponent_Conditional_66_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 26);
    i0.ɵɵelement(1, "i", 42);
    i0.ɵɵelementStart(2, "p");
    i0.ɵɵtext(3, "Loading field schema...");
    i0.ɵɵelementEnd()();
} }
function FieldLibraryComponent_Conditional_67_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 26);
    i0.ɵɵelement(1, "i", 43);
    i0.ɵɵelementStart(2, "p");
    i0.ɵɵtext(3, "No fields created yet.");
    i0.ɵɵelementEnd()();
} }
function FieldLibraryComponent_Conditional_68_For_2_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Deleting... ");
} }
function FieldLibraryComponent_Conditional_68_For_2_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Delete ");
} }
function FieldLibraryComponent_Conditional_68_For_2_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 49);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const fieldRecord_r12 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(fieldRecord_r12.description);
} }
function FieldLibraryComponent_Conditional_68_For_2_Conditional_23_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const mapping_r13 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r2.businessLabel(mapping_r13.business_id));
} }
function FieldLibraryComponent_Conditional_68_For_2_Conditional_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 51);
    i0.ɵɵrepeaterCreate(1, FieldLibraryComponent_Conditional_68_For_2_Conditional_23_For_2_Template, 2, 1, "span", null, _forTrack2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const fieldRecord_r12 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵrepeater(fieldRecord_r12.mapped_objects);
} }
function FieldLibraryComponent_Conditional_68_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article", 44)(1, "header", 45)(2, "div")(3, "h4");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 46)(8, "span", 47);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "button", 48);
    i0.ɵɵlistener("click", function FieldLibraryComponent_Conditional_68_For_2_Template_button_click_10_listener() { const fieldRecord_r12 = i0.ɵɵrestoreView(_r11).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.deleteField(fieldRecord_r12)); });
    i0.ɵɵconditionalCreate(11, FieldLibraryComponent_Conditional_68_For_2_Conditional_11_Template, 1, 0)(12, FieldLibraryComponent_Conditional_68_For_2_Conditional_12_Template, 1, 0);
    i0.ɵɵelementEnd()()();
    i0.ɵɵconditionalCreate(13, FieldLibraryComponent_Conditional_68_For_2_Conditional_13_Template, 2, 1, "p", 49);
    i0.ɵɵelementStart(14, "div", 50)(15, "span");
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "span");
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "span");
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "span");
    i0.ɵɵtext(22);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(23, FieldLibraryComponent_Conditional_68_For_2_Conditional_23_Template, 3, 0, "div", 51);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const fieldRecord_r12 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(fieldRecord_r12.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(fieldRecord_r12.key);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r2.fieldTypeLabel(fieldRecord_r12.type));
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r2.deletingFieldId() === fieldRecord_r12.id);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r2.deletingFieldId() === fieldRecord_r12.id ? 11 : 12);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(fieldRecord_r12.description ? 13 : -1);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(fieldRecord_r12.is_required ? "Required" : "Optional");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Mapped Objects: ", fieldRecord_r12.mapped_object_count);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Mapped Businesses: ", fieldRecord_r12.mapped_business_count);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Created ", ctx_r2.formatDate(fieldRecord_r12.created_at));
    i0.ɵɵadvance();
    i0.ɵɵconditional(fieldRecord_r12.mapped_objects.length ? 23 : -1);
} }
function FieldLibraryComponent_Conditional_68_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 27);
    i0.ɵɵrepeaterCreate(1, FieldLibraryComponent_Conditional_68_For_2_Template, 24, 11, "article", 44, _forTrack1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r2.fields());
} }
export class FieldLibraryComponent {
    fieldService = inject(FieldService);
    objectService = inject(ObjectService);
    businessService = inject(BusinessService);
    fb = inject(FormBuilder);
    selectedBusinessId = this.businessService.selectedBusinessId;
    businesses = this.businessService.businesses;
    activeBusinessId = computed(() => this.selectedBusinessId() || 'default', ...(ngDevMode ? [{ debugName: "activeBusinessId" }] : []));
    isDefaultWorkspace = computed(() => this.activeBusinessId() === 'default', ...(ngDevMode ? [{ debugName: "isDefaultWorkspace" }] : []));
    isBusinessWorkspace = computed(() => !this.isDefaultWorkspace(), ...(ngDevMode ? [{ debugName: "isBusinessWorkspace" }] : []));
    fields = this.fieldService.fields;
    isLoadingFields = this.fieldService.isLoading;
    userObjectOptions = signal([], ...(ngDevMode ? [{ debugName: "userObjectOptions" }] : []));
    isLoadingObjectOptions = signal(false, ...(ngDevMode ? [{ debugName: "isLoadingObjectOptions" }] : []));
    isCreatingField = signal(false, ...(ngDevMode ? [{ debugName: "isCreatingField" }] : []));
    isMappingField = signal(false, ...(ngDevMode ? [{ debugName: "isMappingField" }] : []));
    deletingFieldId = signal(null, ...(ngDevMode ? [{ debugName: "deletingFieldId" }] : []));
    optionDraft = signal('', ...(ngDevMode ? [{ debugName: "optionDraft" }] : []));
    optionErrorMessage = signal('', ...(ngDevMode ? [{ debugName: "optionErrorMessage" }] : []));
    createErrorMessage = signal('', ...(ngDevMode ? [{ debugName: "createErrorMessage" }] : []));
    createSuccessMessage = signal('', ...(ngDevMode ? [{ debugName: "createSuccessMessage" }] : []));
    mapErrorMessage = signal('', ...(ngDevMode ? [{ debugName: "mapErrorMessage" }] : []));
    mapSuccessMessage = signal('', ...(ngDevMode ? [{ debugName: "mapSuccessMessage" }] : []));
    createFieldForm = this.fb.group({
        name: ['', [Validators.required, Validators.maxLength(120)]],
        key: ['', [Validators.maxLength(64)]],
        type: ['text', [Validators.required]],
        description: ['', [Validators.maxLength(400)]],
        is_required: [false, [Validators.required]],
        options: ['', [Validators.maxLength(1200)]],
        object_id: [''],
        status: [1, [Validators.required]],
    });
    mapFieldForm = this.fb.group({
        field_id: ['', [Validators.required]],
        business_id: ['default', [Validators.required]],
        object_id: ['', [Validators.required]],
    });
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
    createFieldType = toSignal(this.createFieldForm.controls.type.valueChanges.pipe(startWith(this.createFieldForm.controls.type.value ?? 'text')), { initialValue: this.createFieldForm.controls.type.value ?? 'text' });
    showOptionsInput = computed(() => String(this.createFieldType() || '').trim().toLowerCase() === 'select', ...(ngDevMode ? [{ debugName: "showOptionsInput" }] : []));
    fieldOptionsPreview = computed(() => this.parseOptions(this.createFieldForm.controls.options.value), ...(ngDevMode ? [{ debugName: "fieldOptionsPreview" }] : []));
    mappingBusinessId = computed(() => String(this.mapFieldForm.value.business_id || 'default'), ...(ngDevMode ? [{ debugName: "mappingBusinessId" }] : []));
    createTargetObjectOptions = computed(() => {
        const activeBusinessId = this.activeBusinessId();
        const allObjects = this.userObjectOptions();
        if (activeBusinessId === 'default') {
            return allObjects;
        }
        return allObjects.filter((objectRecord) => objectRecord.mapped_business_ids.includes(activeBusinessId));
    }, ...(ngDevMode ? [{ debugName: "createTargetObjectOptions" }] : []));
    filteredObjectOptions = computed(() => {
        const selectedBusinessId = this.mappingBusinessId();
        const allObjects = this.userObjectOptions();
        if (selectedBusinessId === 'default') {
            return allObjects;
        }
        return allObjects.filter((objectRecord) => objectRecord.mapped_business_ids.includes(selectedBusinessId));
    }, ...(ngDevMode ? [{ debugName: "filteredObjectOptions" }] : []));
    constructor() {
        effect(() => {
            const activeBusinessId = this.activeBusinessId();
            this.createErrorMessage.set('');
            this.mapErrorMessage.set('');
            this.createSuccessMessage.set('');
            this.mapSuccessMessage.set('');
            this.createFieldForm.patchValue({ object_id: '' });
            this.mapFieldForm.patchValue({
                business_id: activeBusinessId === 'default' ? 'default' : activeBusinessId,
                object_id: '',
            });
            untracked(() => {
                this.fieldService.loadFields(activeBusinessId);
                this.loadObjectOptions();
            });
        });
        effect(() => {
            const showOptions = this.showOptionsInput();
            if (!showOptions) {
                this.optionDraft.set('');
                this.optionErrorMessage.set('');
                this.createFieldForm.controls.options.setValue('', { emitEvent: false });
            }
        });
        this.mapFieldForm.controls.business_id.valueChanges.subscribe(() => {
            this.mapFieldForm.patchValue({ object_id: '' });
        });
    }
    onOptionDraftInput(value) {
        this.optionDraft.set(String(value || ''));
        if (this.optionErrorMessage()) {
            this.optionErrorMessage.set('');
        }
    }
    addOption(event) {
        event?.preventDefault();
        const draft = String(this.optionDraft() || '').trim();
        if (!draft) {
            return;
        }
        const normalizedDraft = draft.slice(0, 120);
        const existing = this.fieldOptionsPreview();
        if (existing.some((option) => option.toLowerCase() === normalizedDraft.toLowerCase())) {
            this.optionErrorMessage.set(`"${normalizedDraft}" is already added.`);
            return;
        }
        this.setOptions([...existing, normalizedDraft]);
        this.optionDraft.set('');
        this.optionErrorMessage.set('');
    }
    removeOption(optionToRemove) {
        const remaining = this.fieldOptionsPreview().filter((option) => option !== optionToRemove);
        this.setOptions(remaining);
    }
    submitCreateField() {
        if (this.createFieldForm.invalid || this.isCreatingField()) {
            this.createFieldForm.markAllAsTouched();
            return;
        }
        const activeBusinessId = this.activeBusinessId();
        const selectedObjectId = String(this.createFieldForm.value.object_id || '');
        if (this.isBusinessWorkspace() && !selectedObjectId) {
            this.createErrorMessage.set('Select an object for business-level field creation.');
            return;
        }
        const fieldType = String(this.createFieldForm.value.type || 'text');
        const options = this.parseOptions(this.createFieldForm.value.options);
        if (fieldType === 'select' && !options.length) {
            this.optionErrorMessage.set('Add at least one option for select fields.');
            this.createErrorMessage.set('Add at least one option for select fields.');
            return;
        }
        this.optionErrorMessage.set('');
        this.createErrorMessage.set('');
        this.createSuccessMessage.set('');
        this.isCreatingField.set(true);
        const payload = {
            name: String(this.createFieldForm.value.name || '').trim(),
            key: String(this.createFieldForm.value.key || '').trim() || undefined,
            type: fieldType,
            description: String(this.createFieldForm.value.description || '').trim() || null,
            is_required: Boolean(this.createFieldForm.value.is_required),
            options: fieldType === 'select' ? options : [],
            status: Number(this.createFieldForm.value.status ?? 1),
        };
        this.fieldService.createField(payload, activeBusinessId, activeBusinessId === 'default' ? undefined : selectedObjectId, { businessId: activeBusinessId }).subscribe({
            next: (response) => {
                this.isCreatingField.set(false);
                if (!response.status) {
                    this.createErrorMessage.set(response.message || 'Unable to create field.');
                    return;
                }
                this.createSuccessMessage.set(this.isDefaultWorkspace()
                    ? 'Field schema created in reusable library.'
                    : 'Field created and mapped to selected business object.');
                this.resetCreateFieldForm();
            },
            error: (error) => {
                this.isCreatingField.set(false);
                this.createErrorMessage.set(error?.error?.message || 'Unable to create field.');
            },
        });
    }
    submitMapField() {
        if (!this.isDefaultWorkspace()) {
            this.mapErrorMessage.set('Field mapping across businesses is available from default workspace.');
            return;
        }
        if (this.mapFieldForm.invalid || this.isMappingField()) {
            this.mapFieldForm.markAllAsTouched();
            return;
        }
        const selectedObjectId = String(this.mapFieldForm.value.object_id || '');
        const hasObject = this.filteredObjectOptions().some((objectRecord) => objectRecord.id === selectedObjectId);
        if (!hasObject) {
            this.mapErrorMessage.set('Select an object available for the selected business context.');
            return;
        }
        this.mapErrorMessage.set('');
        this.mapSuccessMessage.set('');
        this.isMappingField.set(true);
        const fieldId = String(this.mapFieldForm.value.field_id || '');
        const businessId = String(this.mapFieldForm.value.business_id || 'default');
        this.fieldService
            .mapFieldToObject(fieldId, selectedObjectId, businessId, { businessId: 'default' })
            .subscribe({
            next: (response) => {
                this.isMappingField.set(false);
                if (!response.status) {
                    this.mapErrorMessage.set(response.message || 'Unable to map field.');
                    return;
                }
                this.mapSuccessMessage.set('Field mapped successfully.');
                this.mapFieldForm.patchValue({ object_id: '' });
            },
            error: (error) => {
                this.isMappingField.set(false);
                this.mapErrorMessage.set(error?.error?.message || 'Unable to map field.');
            },
        });
    }
    deleteField(fieldRecord) {
        if (this.deletingFieldId()) {
            return;
        }
        if (typeof window !== 'undefined') {
            const confirmed = window.confirm(`Delete field "${fieldRecord.name}"? This will remove all object mappings for this field.`);
            if (!confirmed) {
                return;
            }
        }
        this.mapErrorMessage.set('');
        this.createErrorMessage.set('');
        this.deletingFieldId.set(fieldRecord.id);
        this.fieldService.deleteField(fieldRecord.id, { businessId: 'default' }).subscribe({
            next: (response) => {
                this.deletingFieldId.set(null);
                if (!response.status) {
                    this.mapErrorMessage.set(response.message || 'Unable to delete field.');
                }
            },
            error: (error) => {
                this.deletingFieldId.set(null);
                this.mapErrorMessage.set(error?.error?.message || 'Unable to delete field.');
            },
        });
    }
    businessLabel(businessId) {
        if (!businessId) {
            return 'Default';
        }
        return this.businesses().find((business) => business.id === businessId)?.name ?? 'Business';
    }
    fieldTypeLabel(type) {
        return this.fieldTypeOptions.find((option) => option.value === type)?.label ?? type;
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
    loadObjectOptions() {
        if (this.isLoadingObjectOptions()) {
            return;
        }
        this.isLoadingObjectOptions.set(true);
        this.objectService.fetchUserObjects().subscribe({
            next: (response) => {
                this.isLoadingObjectOptions.set(false);
                const options = Array.isArray(response.data) ? response.data : [];
                this.userObjectOptions.set(options);
            },
            error: () => {
                this.isLoadingObjectOptions.set(false);
                this.userObjectOptions.set([]);
            },
        });
    }
    setOptions(options) {
        const normalized = this.parseOptions(options.join('\n'));
        this.createFieldForm.controls.options.setValue(normalized.join('\n'));
        this.createFieldForm.controls.options.markAsDirty();
        this.createFieldForm.controls.options.markAsTouched();
    }
    parseOptions(value) {
        const normalized = String(value || '')
            .split(/[\n,]/g)
            .map((option) => option.trim())
            .filter((option) => option.length > 0)
            .map((option) => option.slice(0, 120));
        return Array.from(new Set(normalized)).slice(0, 50);
    }
    resetCreateFieldForm() {
        this.createFieldForm.reset({
            name: '',
            key: '',
            type: 'text',
            description: '',
            is_required: false,
            options: '',
            object_id: '',
            status: 1,
        });
        this.optionDraft.set('');
        this.optionErrorMessage.set('');
    }
    static ɵfac = function FieldLibraryComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || FieldLibraryComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FieldLibraryComponent, selectors: [["app-field-library-component"]], decls: 69, vars: 13, consts: [[1, "field-library-shell"], [1, "field-library-header"], [1, "field-library-kicker"], [1, "field-library-title"], [1, "field-library-subtitle"], [1, "field-library-note"], [1, "field-library-grid"], [1, "field-panel"], [1, "field-panel__header"], [1, "field-form", 3, "ngSubmit", "formGroup"], [1, "field-form__field"], ["type", "text", "formControlName", "name", "placeholder", "Example: Lead Source"], [1, "field-form__inline"], ["type", "text", "formControlName", "key", "placeholder", "lead_source"], ["formControlName", "type"], [3, "value"], [1, "field-form__field", "field-form__field--options"], ["rows", "3", "formControlName", "description", "placeholder", "Used to track the origin channel for each lead"], ["formControlName", "status"], [1, "field-form__switch"], ["type", "checkbox", "formControlName", "is_required"], [1, "field-form__error"], [1, "field-form__success"], [1, "field-form__actions"], ["type", "submit", 1, "field-primary-btn", 3, "disabled"], [1, "field-list-panel"], [1, "field-list-state"], [1, "field-list-grid"], [1, "field-options-builder"], ["type", "text", "placeholder", "Type option and press Enter", 3, "input", "keydown.enter", "value"], ["type", "button", 1, "field-options-builder__btn", 3, "click"], [1, "field-form__hint"], ["rows", "3", "formControlName", "options", "placeholder", "Cold, Warm, Hot"], [1, "field-options-chips"], ["type", "button", 1, "field-option-chip"], ["type", "button", 1, "field-option-chip", 3, "click"], ["aria-hidden", "true", 1, "fa-solid", "fa-xmark"], ["formControlName", "object_id", 3, "disabled"], ["value", ""], ["formControlName", "field_id"], ["formControlName", "business_id"], ["value", "default"], [1, "fa-solid", "fa-spinner", "fa-spin"], [1, "fa-regular", "fa-square-plus"], [1, "field-item"], [1, "field-item__header"], [1, "field-item__actions"], [1, "field-type-pill"], ["type", "button", 1, "field-delete-btn", 3, "click", "disabled"], [1, "field-item__description"], [1, "field-item__meta"], [1, "field-item__mappings"]], template: function FieldLibraryComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0)(1, "header", 1)(2, "div")(3, "p", 2);
            i0.ɵɵtext(4, "Fields");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "h2", 3);
            i0.ɵɵtext(6, "Reusable Field Library");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "p", 4);
            i0.ɵɵtext(8, " Create user-owned field schema in default workspace and map to any object/business. ");
            i0.ɵɵelementEnd()()();
            i0.ɵɵconditionalCreate(9, FieldLibraryComponent_Conditional_9_Template, 2, 0, "p", 5);
            i0.ɵɵelementStart(10, "section", 6)(11, "article", 7)(12, "header", 8)(13, "h3");
            i0.ɵɵtext(14, "Create Field Schema");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "p");
            i0.ɵɵconditionalCreate(16, FieldLibraryComponent_Conditional_16_Template, 1, 0)(17, FieldLibraryComponent_Conditional_17_Template, 1, 0);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(18, "form", 9);
            i0.ɵɵlistener("ngSubmit", function FieldLibraryComponent_Template_form_ngSubmit_18_listener() { return ctx.submitCreateField(); });
            i0.ɵɵelementStart(19, "label", 10)(20, "span");
            i0.ɵɵtext(21, "Field Name");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(22, "input", 11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "div", 12)(24, "label", 10)(25, "span");
            i0.ɵɵtext(26, "Field Key (optional)");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(27, "input", 13);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "label", 10)(29, "span");
            i0.ɵɵtext(30, "Field Type");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(31, "select", 14);
            i0.ɵɵrepeaterCreate(32, FieldLibraryComponent_For_33_Template, 2, 2, "option", 15, _forTrack0);
            i0.ɵɵelementEnd()()();
            i0.ɵɵconditionalCreate(34, FieldLibraryComponent_Conditional_34_Template, 12, 3, "div", 16);
            i0.ɵɵconditionalCreate(35, FieldLibraryComponent_Conditional_35_Template, 10, 2);
            i0.ɵɵelementStart(36, "label", 10)(37, "span");
            i0.ɵɵtext(38, "Description");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(39, "textarea", 17);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(40, "div", 12)(41, "label", 10)(42, "span");
            i0.ɵɵtext(43, "Status");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(44, "select", 18)(45, "option", 15);
            i0.ɵɵtext(46, "Active");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(47, "option", 15);
            i0.ɵɵtext(48, "Inactive");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(49, "label", 19);
            i0.ɵɵelement(50, "input", 20);
            i0.ɵɵelementStart(51, "span");
            i0.ɵɵtext(52, "Mark as required");
            i0.ɵɵelementEnd()()();
            i0.ɵɵconditionalCreate(53, FieldLibraryComponent_Conditional_53_Template, 2, 1, "p", 21);
            i0.ɵɵconditionalCreate(54, FieldLibraryComponent_Conditional_54_Template, 2, 1, "p", 22);
            i0.ɵɵelementStart(55, "footer", 23)(56, "button", 24);
            i0.ɵɵconditionalCreate(57, FieldLibraryComponent_Conditional_57_Template, 1, 0)(58, FieldLibraryComponent_Conditional_58_Template, 1, 0);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵconditionalCreate(59, FieldLibraryComponent_Conditional_59_Template, 39, 7, "article", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(60, "section", 25)(61, "header", 8)(62, "h3");
            i0.ɵɵtext(63, "Field Schema Inventory");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(64, "p");
            i0.ɵɵtext(65, "All reusable fields owned by your user profile.");
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(66, FieldLibraryComponent_Conditional_66_Template, 4, 0, "div", 26)(67, FieldLibraryComponent_Conditional_67_Template, 4, 0, "div", 26)(68, FieldLibraryComponent_Conditional_68_Template, 3, 0, "div", 27);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(9);
            i0.ɵɵconditional(ctx.isBusinessWorkspace() ? 9 : -1);
            i0.ɵɵadvance(7);
            i0.ɵɵconditional(ctx.isDefaultWorkspace() ? 16 : 17);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("formGroup", ctx.createFieldForm);
            i0.ɵɵadvance(14);
            i0.ɵɵrepeater(ctx.fieldTypeOptions);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.showOptionsInput() ? 34 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.isBusinessWorkspace() ? 35 : -1);
            i0.ɵɵadvance(10);
            i0.ɵɵproperty("value", 1);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("value", 0);
            i0.ɵɵadvance(6);
            i0.ɵɵconditional(ctx.createErrorMessage() ? 53 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.createSuccessMessage() ? 54 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", ctx.createFieldForm.invalid || ctx.isCreatingField());
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.isCreatingField() ? 57 : 58);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.isDefaultWorkspace() ? 59 : -1);
            i0.ɵɵadvance(7);
            i0.ɵɵconditional(ctx.isLoadingFields() ? 66 : !ctx.fields().length ? 67 : 68);
        } }, dependencies: [CommonModule, ReactiveFormsModule, i1.ɵNgNoValidate, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.DefaultValueAccessor, i1.CheckboxControlValueAccessor, i1.SelectControlValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.field-library-shell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n\n.field-library-header[_ngcontent-%COMP%] {\n  border: 1px solid color-mix(in srgb, var(--theme-border) 58%, white);\n  border-radius: 16px;\n  background: color-mix(in srgb, var(--theme-bg-surface) 97%, transparent);\n  padding: 14px;\n}\n\n.field-library-kicker[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  font-weight: 700;\n  color: var(--theme-text-muted);\n}\n\n.field-library-title[_ngcontent-%COMP%] {\n  margin: 6px 0 0;\n  font-size: 22px;\n  color: var(--theme-text-primary);\n  line-height: 1.2;\n}\n\n.field-library-subtitle[_ngcontent-%COMP%] {\n  margin: 7px 0 0;\n  font-size: 13px;\n  color: var(--theme-text-secondary);\n}\n\n.field-library-note[_ngcontent-%COMP%] {\n  margin: 0;\n  border-radius: 12px;\n  border: 1px solid color-mix(in srgb, var(--theme-primary) 42%, white);\n  background: color-mix(in srgb, var(--theme-primary) 10%, white);\n  color: var(--theme-text-primary);\n  font-size: 13px;\n  font-weight: 600;\n  padding: 10px 12px;\n}\n\n.field-library-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 12px;\n  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\n}\n\n.field-panel[_ngcontent-%COMP%], \n.field-list-panel[_ngcontent-%COMP%] {\n  border: 1px solid color-mix(in srgb, var(--theme-border) 58%, white);\n  border-radius: 16px;\n  background: color-mix(in srgb, var(--theme-bg-surface) 98%, transparent);\n  padding: 13px;\n}\n\n.field-panel__header[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n\n.field-panel__header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  color: var(--theme-text-primary);\n}\n\n.field-panel__header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 5px 0 0;\n  font-size: 12px;\n  color: var(--theme-text-muted);\n}\n\n.field-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.field-form__inline[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 10px;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n\n.field-form__field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n\n.field-form__field--options[_ngcontent-%COMP%] {\n  gap: 8px;\n}\n\n.field-form__field[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--theme-text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n\n.field-form__field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.field-form__field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], \n.field-form__field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 9px;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 64%, white);\n  background: var(--theme-bg-surface);\n  color: var(--theme-text-primary);\n  font-size: 13px;\n  padding: 9px 10px;\n}\n\n.field-form__field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 82px;\n}\n\n.field-options-builder[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 8px;\n  grid-template-columns: minmax(0, 1fr) auto;\n  align-items: center;\n}\n\n.field-options-builder__btn[_ngcontent-%COMP%] {\n  border: 1px solid color-mix(in srgb, var(--theme-border) 62%, white);\n  border-radius: 9px;\n  min-height: 38px;\n  padding: 0 12px;\n  background: var(--theme-bg-surface);\n  color: var(--theme-text-secondary);\n  font-size: 12px;\n  font-weight: 700;\n  cursor: pointer;\n}\n\n.field-options-builder__btn[_ngcontent-%COMP%]:hover {\n  color: var(--theme-text-primary);\n  border-color: color-mix(in srgb, var(--theme-primary) 45%, white);\n}\n\n.field-options-chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 7px;\n}\n\n.field-option-chip[_ngcontent-%COMP%] {\n  border: 1px solid color-mix(in srgb, var(--theme-primary) 44%, white);\n  border-radius: 999px;\n  background: color-mix(in srgb, var(--theme-primary) 10%, white);\n  color: var(--theme-primary);\n  min-height: 28px;\n  padding: 0 10px;\n  font-size: 11px;\n  font-weight: 700;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  cursor: pointer;\n}\n\n.field-form__field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus-visible, \n.field-form__field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus-visible, \n.field-form__field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus-visible {\n  outline: none;\n  border-color: color-mix(in srgb, var(--theme-primary) 48%, white);\n  box-shadow: 0 0 0 3px color-mix(in srgb, var(--theme-primary) 16%, transparent);\n}\n\n.field-form__switch[_ngcontent-%COMP%] {\n  margin-top: 22px;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 12px;\n  color: var(--theme-text-secondary);\n  font-weight: 600;\n}\n\n.field-form__hint[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12px;\n  color: var(--theme-text-muted);\n}\n\n.field-form__error[_ngcontent-%COMP%], \n.field-form__success[_ngcontent-%COMP%] {\n  margin: 0;\n  border-radius: 10px;\n  padding: 8px 10px;\n  font-size: 12px;\n  font-weight: 600;\n}\n\n.field-form__error[_ngcontent-%COMP%] {\n  color: var(--theme-danger);\n  background: color-mix(in srgb, var(--theme-danger) 12%, white);\n}\n\n.field-form__success[_ngcontent-%COMP%] {\n  color: var(--theme-success);\n  background: color-mix(in srgb, var(--theme-success) 12%, white);\n}\n\n.field-form__actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.field-primary-btn[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 9px;\n  min-height: 38px;\n  padding: 0 14px;\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--theme-primary-contrast);\n  background: linear-gradient(120deg, var(--theme-primary), var(--theme-accent-end));\n  cursor: pointer;\n}\n\n.field-primary-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n.field-list-state[_ngcontent-%COMP%] {\n  min-height: 180px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  color: var(--theme-text-secondary);\n  font-size: 13px;\n}\n\n.field-list-grid[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  display: grid;\n  gap: 10px;\n  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));\n}\n\n.field-item[_ngcontent-%COMP%] {\n  border: 1px solid color-mix(in srgb, var(--theme-border) 60%, white);\n  border-radius: 13px;\n  background: var(--theme-bg-surface);\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 9px;\n}\n\n.field-item__header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 10px;\n}\n\n.field-item__header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  color: var(--theme-text-primary);\n}\n\n.field-item__header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  font-size: 10px;\n  color: var(--theme-text-muted);\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;\n}\n\n.field-item__actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.field-type-pill[_ngcontent-%COMP%] {\n  border-radius: 999px;\n  border: 1px solid color-mix(in srgb, var(--theme-primary) 45%, white);\n  background: color-mix(in srgb, var(--theme-primary) 11%, white);\n  color: var(--theme-primary);\n  font-size: 10px;\n  font-weight: 700;\n  padding: 3px 8px;\n}\n\n.field-delete-btn[_ngcontent-%COMP%] {\n  border: 1px solid color-mix(in srgb, var(--theme-danger) 45%, white);\n  border-radius: 8px;\n  padding: 5px 8px;\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--theme-danger);\n  background: color-mix(in srgb, var(--theme-danger) 8%, white);\n  cursor: pointer;\n}\n\n.field-delete-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n.field-item__description[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12px;\n  color: var(--theme-text-secondary);\n}\n\n.field-item__meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n\n.field-item__meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  border: 1px solid color-mix(in srgb, var(--theme-border) 64%, white);\n  border-radius: 999px;\n  padding: 3px 8px;\n  font-size: 10px;\n  font-weight: 600;\n  color: var(--theme-text-muted);\n}\n\n.field-item__mappings[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n\n.field-item__mappings[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  border-radius: 999px;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 64%, white);\n  background: color-mix(in srgb, var(--theme-bg-surface-soft) 80%, white);\n  color: var(--theme-text-secondary);\n  font-size: 10px;\n  font-weight: 700;\n  padding: 3px 8px;\n}\n\n@media (max-width: 980px) {\n  .field-library-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n@media (max-width: 620px) {\n  .field-form__inline[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FieldLibraryComponent, [{
        type: Component,
        args: [{ selector: 'app-field-library-component', imports: [CommonModule, ReactiveFormsModule], template: "<section class=\"field-library-shell\">\n  <header class=\"field-library-header\">\n    <div>\n      <p class=\"field-library-kicker\">Fields</p>\n      <h2 class=\"field-library-title\">Reusable Field Library</h2>\n      <p class=\"field-library-subtitle\">\n        Create user-owned field schema in default workspace and map to any object/business.\n      </p>\n    </div>\n  </header>\n\n  @if (isBusinessWorkspace()) {\n  <p class=\"field-library-note\">\n    Fields created here are saved to your reusable schema and mapped to the selected business object.\n  </p>\n  }\n\n  <section class=\"field-library-grid\">\n    <article class=\"field-panel\">\n      <header class=\"field-panel__header\">\n        <h3>Create Field Schema</h3>\n        <p>\n          @if (isDefaultWorkspace()) {\n          Creates reusable user-level field definition (no mapping by default).\n          } @else {\n          Creates reusable field schema and maps it to an object in this business.\n          }\n        </p>\n      </header>\n\n      <form [formGroup]=\"createFieldForm\" (ngSubmit)=\"submitCreateField()\" class=\"field-form\">\n        <label class=\"field-form__field\">\n          <span>Field Name</span>\n          <input type=\"text\" formControlName=\"name\" placeholder=\"Example: Lead Source\" />\n        </label>\n\n        <div class=\"field-form__inline\">\n          <label class=\"field-form__field\">\n            <span>Field Key (optional)</span>\n            <input type=\"text\" formControlName=\"key\" placeholder=\"lead_source\" />\n          </label>\n          <label class=\"field-form__field\">\n            <span>Field Type</span>\n            <select formControlName=\"type\">\n              @for (fieldType of fieldTypeOptions; track fieldType.value) {\n              <option [value]=\"fieldType.value\">{{ fieldType.label }}</option>\n              }\n            </select>\n          </label>\n        </div>\n\n        @if (showOptionsInput()) {\n        <div class=\"field-form__field field-form__field--options\">\n          <span>Select Options</span>\n\n          <div class=\"field-options-builder\">\n            <input type=\"text\" [value]=\"optionDraft()\" (input)=\"onOptionDraftInput(($any($event.target).value))\"\n              (keydown.enter)=\"addOption($event)\" placeholder=\"Type option and press Enter\" />\n            <button type=\"button\" class=\"field-options-builder__btn\" (click)=\"addOption()\">Add</button>\n          </div>\n\n          <p class=\"field-form__hint\">Add options quickly with Enter. You can also paste comma or new-line values.</p>\n          <textarea rows=\"3\" formControlName=\"options\" placeholder=\"Cold, Warm, Hot\"></textarea>\n\n          @if (optionErrorMessage()) {\n          <p class=\"field-form__error\">{{ optionErrorMessage() }}</p>\n          }\n\n          @if (fieldOptionsPreview().length) {\n          <div class=\"field-options-chips\">\n            @for (option of fieldOptionsPreview(); track option) {\n            <button type=\"button\" class=\"field-option-chip\" (click)=\"removeOption(option)\"\n              [attr.aria-label]=\"'Remove option ' + option\">\n              <span>{{ option }}</span>\n              <i class=\"fa-solid fa-xmark\" aria-hidden=\"true\"></i>\n            </button>\n            }\n          </div>\n          }\n        </div>\n        }\n\n        @if (isBusinessWorkspace()) {\n        <label class=\"field-form__field\">\n          <span>Target Object (required in business)</span>\n          <select formControlName=\"object_id\" [disabled]=\"isLoadingObjectOptions()\">\n            <option value=\"\">Choose object</option>\n            @for (objectRecord of createTargetObjectOptions(); track objectRecord.id) {\n            <option [value]=\"objectRecord.id\">{{ objectRecord.name }} ({{ objectRecord.key }})</option>\n            }\n          </select>\n        </label>\n\n        @if (isLoadingObjectOptions()) {\n        <p class=\"field-form__hint\">Loading objects...</p>\n        } @else if (!createTargetObjectOptions().length) {\n        <p class=\"field-form__hint\">No objects mapped to this business yet.</p>\n        }\n        }\n\n        <label class=\"field-form__field\">\n          <span>Description</span>\n          <textarea rows=\"3\" formControlName=\"description\"\n            placeholder=\"Used to track the origin channel for each lead\"></textarea>\n        </label>\n\n        <div class=\"field-form__inline\">\n          <label class=\"field-form__field\">\n            <span>Status</span>\n            <select formControlName=\"status\">\n              <option [value]=\"1\">Active</option>\n              <option [value]=\"0\">Inactive</option>\n            </select>\n          </label>\n\n          <label class=\"field-form__switch\">\n            <input type=\"checkbox\" formControlName=\"is_required\" />\n            <span>Mark as required</span>\n          </label>\n        </div>\n\n        @if (createErrorMessage()) {\n        <p class=\"field-form__error\">{{ createErrorMessage() }}</p>\n        }\n        @if (createSuccessMessage()) {\n        <p class=\"field-form__success\">{{ createSuccessMessage() }}</p>\n        }\n\n        <footer class=\"field-form__actions\">\n          <button type=\"submit\" class=\"field-primary-btn\" [disabled]=\"createFieldForm.invalid || isCreatingField()\">\n            @if (isCreatingField()) {\n            Saving...\n            } @else {\n            Save Field\n            }\n          </button>\n        </footer>\n      </form>\n    </article>\n\n    @if (isDefaultWorkspace()) {\n    <article class=\"field-panel\">\n      <header class=\"field-panel__header\">\n        <h3>Map Field To Object</h3>\n        <p>Assign reusable fields to any object in default or a specific business.</p>\n      </header>\n\n      <form [formGroup]=\"mapFieldForm\" (ngSubmit)=\"submitMapField()\" class=\"field-form\">\n        <label class=\"field-form__field\">\n          <span>Select Field</span>\n          <select formControlName=\"field_id\">\n            <option value=\"\">Choose field</option>\n            @for (fieldRecord of fields(); track fieldRecord.id) {\n            <option [value]=\"fieldRecord.id\">\n              {{ fieldRecord.name }} ({{ fieldTypeLabel(fieldRecord.type) }})\n            </option>\n            }\n          </select>\n        </label>\n\n        <label class=\"field-form__field\">\n          <span>Business Scope</span>\n          <select formControlName=\"business_id\">\n            <option value=\"default\">Default (Global Mapping)</option>\n            @for (business of businesses(); track business.id) {\n            <option [value]=\"business.id\">{{ business.name }}</option>\n            }\n          </select>\n        </label>\n\n        <label class=\"field-form__field\">\n          <span>Object</span>\n          <select formControlName=\"object_id\" [disabled]=\"isLoadingObjectOptions()\">\n            <option value=\"\">Choose object</option>\n            @for (objectRecord of filteredObjectOptions(); track objectRecord.id) {\n            <option [value]=\"objectRecord.id\">{{ objectRecord.name }} ({{ objectRecord.key }})</option>\n            }\n          </select>\n        </label>\n\n        @if (isLoadingObjectOptions()) {\n        <p class=\"field-form__hint\">Loading objects...</p>\n        } @else if (!filteredObjectOptions().length) {\n        <p class=\"field-form__hint\">No objects available for selected business scope.</p>\n        }\n\n        @if (mapErrorMessage()) {\n        <p class=\"field-form__error\">{{ mapErrorMessage() }}</p>\n        }\n        @if (mapSuccessMessage()) {\n        <p class=\"field-form__success\">{{ mapSuccessMessage() }}</p>\n        }\n\n        <footer class=\"field-form__actions\">\n          <button type=\"submit\" class=\"field-primary-btn\" [disabled]=\"mapFieldForm.invalid || isMappingField()\">\n            @if (isMappingField()) {\n            Mapping...\n            } @else {\n            Map Field\n            }\n          </button>\n        </footer>\n      </form>\n    </article>\n    }\n  </section>\n\n  <section class=\"field-list-panel\">\n    <header class=\"field-panel__header\">\n      <h3>Field Schema Inventory</h3>\n      <p>All reusable fields owned by your user profile.</p>\n    </header>\n\n    @if (isLoadingFields()) {\n    <div class=\"field-list-state\">\n      <i class=\"fa-solid fa-spinner fa-spin\"></i>\n      <p>Loading field schema...</p>\n    </div>\n    } @else if (!fields().length) {\n    <div class=\"field-list-state\">\n      <i class=\"fa-regular fa-square-plus\"></i>\n      <p>No fields created yet.</p>\n    </div>\n    } @else {\n    <div class=\"field-list-grid\">\n      @for (fieldRecord of fields(); track fieldRecord.id) {\n      <article class=\"field-item\">\n        <header class=\"field-item__header\">\n          <div>\n            <h4>{{ fieldRecord.name }}</h4>\n            <p>{{ fieldRecord.key }}</p>\n          </div>\n          <div class=\"field-item__actions\">\n            <span class=\"field-type-pill\">{{ fieldTypeLabel(fieldRecord.type) }}</span>\n            <button type=\"button\" class=\"field-delete-btn\" [disabled]=\"deletingFieldId() === fieldRecord.id\"\n              (click)=\"deleteField(fieldRecord)\">\n              @if (deletingFieldId() === fieldRecord.id) {\n              Deleting...\n              } @else {\n              Delete\n              }\n            </button>\n          </div>\n        </header>\n\n        @if (fieldRecord.description) {\n        <p class=\"field-item__description\">{{ fieldRecord.description }}</p>\n        }\n\n        <div class=\"field-item__meta\">\n          <span>{{ fieldRecord.is_required ? 'Required' : 'Optional' }}</span>\n          <span>Mapped Objects: {{ fieldRecord.mapped_object_count }}</span>\n          <span>Mapped Businesses: {{ fieldRecord.mapped_business_count }}</span>\n          <span>Created {{ formatDate(fieldRecord.created_at) }}</span>\n        </div>\n\n        @if (fieldRecord.mapped_objects.length) {\n        <div class=\"field-item__mappings\">\n          @for (mapping of fieldRecord.mapped_objects; track mapping.object_id + '-' + (mapping.business_id || 'default')) {\n          <span>{{ businessLabel(mapping.business_id) }}</span>\n          }\n        </div>\n        }\n      </article>\n      }\n    </div>\n    }\n  </section>\n</section>\n", styles: [":host {\n  display: block;\n}\n\n.field-library-shell {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n\n.field-library-header {\n  border: 1px solid color-mix(in srgb, var(--theme-border) 58%, white);\n  border-radius: 16px;\n  background: color-mix(in srgb, var(--theme-bg-surface) 97%, transparent);\n  padding: 14px;\n}\n\n.field-library-kicker {\n  margin: 0;\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  font-weight: 700;\n  color: var(--theme-text-muted);\n}\n\n.field-library-title {\n  margin: 6px 0 0;\n  font-size: 22px;\n  color: var(--theme-text-primary);\n  line-height: 1.2;\n}\n\n.field-library-subtitle {\n  margin: 7px 0 0;\n  font-size: 13px;\n  color: var(--theme-text-secondary);\n}\n\n.field-library-note {\n  margin: 0;\n  border-radius: 12px;\n  border: 1px solid color-mix(in srgb, var(--theme-primary) 42%, white);\n  background: color-mix(in srgb, var(--theme-primary) 10%, white);\n  color: var(--theme-text-primary);\n  font-size: 13px;\n  font-weight: 600;\n  padding: 10px 12px;\n}\n\n.field-library-grid {\n  display: grid;\n  gap: 12px;\n  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\n}\n\n.field-panel,\n.field-list-panel {\n  border: 1px solid color-mix(in srgb, var(--theme-border) 58%, white);\n  border-radius: 16px;\n  background: color-mix(in srgb, var(--theme-bg-surface) 98%, transparent);\n  padding: 13px;\n}\n\n.field-panel__header {\n  margin-bottom: 12px;\n}\n\n.field-panel__header h3 {\n  margin: 0;\n  font-size: 16px;\n  color: var(--theme-text-primary);\n}\n\n.field-panel__header p {\n  margin: 5px 0 0;\n  font-size: 12px;\n  color: var(--theme-text-muted);\n}\n\n.field-form {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.field-form__inline {\n  display: grid;\n  gap: 10px;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n\n.field-form__field {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n\n.field-form__field--options {\n  gap: 8px;\n}\n\n.field-form__field > span {\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--theme-text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n\n.field-form__field input,\n.field-form__field textarea,\n.field-form__field select {\n  width: 100%;\n  border-radius: 9px;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 64%, white);\n  background: var(--theme-bg-surface);\n  color: var(--theme-text-primary);\n  font-size: 13px;\n  padding: 9px 10px;\n}\n\n.field-form__field textarea {\n  resize: vertical;\n  min-height: 82px;\n}\n\n.field-options-builder {\n  display: grid;\n  gap: 8px;\n  grid-template-columns: minmax(0, 1fr) auto;\n  align-items: center;\n}\n\n.field-options-builder__btn {\n  border: 1px solid color-mix(in srgb, var(--theme-border) 62%, white);\n  border-radius: 9px;\n  min-height: 38px;\n  padding: 0 12px;\n  background: var(--theme-bg-surface);\n  color: var(--theme-text-secondary);\n  font-size: 12px;\n  font-weight: 700;\n  cursor: pointer;\n}\n\n.field-options-builder__btn:hover {\n  color: var(--theme-text-primary);\n  border-color: color-mix(in srgb, var(--theme-primary) 45%, white);\n}\n\n.field-options-chips {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 7px;\n}\n\n.field-option-chip {\n  border: 1px solid color-mix(in srgb, var(--theme-primary) 44%, white);\n  border-radius: 999px;\n  background: color-mix(in srgb, var(--theme-primary) 10%, white);\n  color: var(--theme-primary);\n  min-height: 28px;\n  padding: 0 10px;\n  font-size: 11px;\n  font-weight: 700;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  cursor: pointer;\n}\n\n.field-form__field input:focus-visible,\n.field-form__field textarea:focus-visible,\n.field-form__field select:focus-visible {\n  outline: none;\n  border-color: color-mix(in srgb, var(--theme-primary) 48%, white);\n  box-shadow: 0 0 0 3px color-mix(in srgb, var(--theme-primary) 16%, transparent);\n}\n\n.field-form__switch {\n  margin-top: 22px;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 12px;\n  color: var(--theme-text-secondary);\n  font-weight: 600;\n}\n\n.field-form__hint {\n  margin: 0;\n  font-size: 12px;\n  color: var(--theme-text-muted);\n}\n\n.field-form__error,\n.field-form__success {\n  margin: 0;\n  border-radius: 10px;\n  padding: 8px 10px;\n  font-size: 12px;\n  font-weight: 600;\n}\n\n.field-form__error {\n  color: var(--theme-danger);\n  background: color-mix(in srgb, var(--theme-danger) 12%, white);\n}\n\n.field-form__success {\n  color: var(--theme-success);\n  background: color-mix(in srgb, var(--theme-success) 12%, white);\n}\n\n.field-form__actions {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.field-primary-btn {\n  border: none;\n  border-radius: 9px;\n  min-height: 38px;\n  padding: 0 14px;\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--theme-primary-contrast);\n  background: linear-gradient(120deg, var(--theme-primary), var(--theme-accent-end));\n  cursor: pointer;\n}\n\n.field-primary-btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n.field-list-state {\n  min-height: 180px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  color: var(--theme-text-secondary);\n  font-size: 13px;\n}\n\n.field-list-grid {\n  margin-top: 10px;\n  display: grid;\n  gap: 10px;\n  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));\n}\n\n.field-item {\n  border: 1px solid color-mix(in srgb, var(--theme-border) 60%, white);\n  border-radius: 13px;\n  background: var(--theme-bg-surface);\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 9px;\n}\n\n.field-item__header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 10px;\n}\n\n.field-item__header h4 {\n  margin: 0;\n  font-size: 14px;\n  color: var(--theme-text-primary);\n}\n\n.field-item__header p {\n  margin: 4px 0 0;\n  font-size: 10px;\n  color: var(--theme-text-muted);\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;\n}\n\n.field-item__actions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.field-type-pill {\n  border-radius: 999px;\n  border: 1px solid color-mix(in srgb, var(--theme-primary) 45%, white);\n  background: color-mix(in srgb, var(--theme-primary) 11%, white);\n  color: var(--theme-primary);\n  font-size: 10px;\n  font-weight: 700;\n  padding: 3px 8px;\n}\n\n.field-delete-btn {\n  border: 1px solid color-mix(in srgb, var(--theme-danger) 45%, white);\n  border-radius: 8px;\n  padding: 5px 8px;\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--theme-danger);\n  background: color-mix(in srgb, var(--theme-danger) 8%, white);\n  cursor: pointer;\n}\n\n.field-delete-btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n.field-item__description {\n  margin: 0;\n  font-size: 12px;\n  color: var(--theme-text-secondary);\n}\n\n.field-item__meta {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n\n.field-item__meta span {\n  border: 1px solid color-mix(in srgb, var(--theme-border) 64%, white);\n  border-radius: 999px;\n  padding: 3px 8px;\n  font-size: 10px;\n  font-weight: 600;\n  color: var(--theme-text-muted);\n}\n\n.field-item__mappings {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n\n.field-item__mappings span {\n  border-radius: 999px;\n  border: 1px solid color-mix(in srgb, var(--theme-border) 64%, white);\n  background: color-mix(in srgb, var(--theme-bg-surface-soft) 80%, white);\n  color: var(--theme-text-secondary);\n  font-size: 10px;\n  font-weight: 700;\n  padding: 3px 8px;\n}\n\n@media (max-width: 980px) {\n  .field-library-grid {\n    grid-template-columns: 1fr;\n  }\n}\n\n@media (max-width: 620px) {\n  .field-form__inline {\n    grid-template-columns: 1fr;\n  }\n}\n"] }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(FieldLibraryComponent, { className: "FieldLibraryComponent", filePath: "avyra-crm/src/app/shared/components/fields/field-library-component/field-library-component.ts", lineNumber: 16 }); })();
