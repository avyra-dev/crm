import { CommonModule } from '@angular/common';
import { Component, computed, effect, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ThemeConfig, ThemeService } from '../../../../services/theme.service';
import { BusinessService } from '../../../../services/business.service';
import { ObjectCreateComponent } from '../../../components/objects/object-create-component/object-create-component';
import { FieldLibraryComponent } from '../../../components/fields/field-library-component/field-library-component';

type SettingsTab = 'Theme' | 'Objects' | 'Fields' | 'Integrations' | 'Account' | 'Billing';
type ThemeSectionId = 'Brand' | 'Typography' | 'Surfaces' | 'Status';

interface ThemeField {
  key: keyof ThemeConfig;
  label: string;
  hint: string;
}

interface ThemeSection {
  id: ThemeSectionId;
  title: string;
  description: string;
  fields: ThemeField[];
}

@Component({
  selector: 'app-settings-page',
  imports: [CommonModule, FormsModule, ObjectCreateComponent, FieldLibraryComponent],
  templateUrl: './settings-page.html',
  styleUrl: './settings-page.css',
})
export class SettingsPage {
  private readonly themeService = inject(ThemeService);
  private readonly businessService = inject(BusinessService);
  private readonly route = inject(ActivatedRoute);

  readonly tabs: SettingsTab[] = ['Theme', 'Objects', 'Fields', 'Integrations', 'Account', 'Billing'];
  activeTab: SettingsTab = 'Theme';
  activeThemeScopeLabel = computed(() => this.businessService.selectedBusiness()?.name ?? 'Default');
  headerSubtitle = computed(() =>
    this.activeTab === 'Theme'
      ? 'Professional controls for your dashboard theme system.'
      : this.activeTab === 'Objects'
        ? 'Create and reuse CRM objects that can be assigned per business.'
        : this.activeTab === 'Fields'
          ? 'Manage reusable user-owned fields and object mappings.'
        : 'Configuration surface for upcoming workspace modules.',
  );
  headerNote = computed(() =>
    this.activeTab === 'Theme'
      ? `Apply All saves theme for ${this.activeThemeScopeLabel()} workspace`
      : this.activeTab === 'Objects'
        ? this.businessService.selectedBusiness()
          ? `Objects created here are assigned to ${this.activeThemeScopeLabel()} workspace`
          : 'Objects created here are saved to your reusable user library'
        : this.activeTab === 'Fields'
          ? this.businessService.selectedBusiness()
            ? `Fields created here are mapped to objects in ${this.activeThemeScopeLabel()}`
            : 'Field schema created here is reusable and can be mapped to any object/business'
        : `Coming soon for ${this.activeTab}`,
  );

  themeDraft: ThemeConfig = this.themeService.getDefaultTheme();

  readonly themeSections: ThemeSection[] = [
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

  setActiveTab(tab: SettingsTab): void {
    this.activeTab = tab;
  }

  onTokenInput(key: keyof ThemeConfig, value: string): void {
    this.themeDraft = {
      ...this.themeDraft,
      [key]: value,
    } as ThemeConfig;
  }

  applyToken(key: keyof ThemeConfig, value: string): void {
    const updatedTheme = this.themeService.updateTheme({
      [key]: value.trim(),
    } as Partial<ThemeConfig>);
    this.themeDraft = { ...updatedTheme };
  }

  applyAll(): void {
    const updatedTheme = this.themeService.updateTheme(this.themeDraft);
    this.themeService.saveTheme(updatedTheme, this.businessService.selectedBusinessId());
    this.themeDraft = { ...updatedTheme };
  }

  resetTheme(): void {
    const defaultTheme = this.themeService.resetTheme();
    this.themeDraft = { ...defaultTheme };
  }

  private resolveSettingsTab(value: string | null): SettingsTab | null {
    if (!value) {
      return null;
    }

    const normalized = value.trim().toLowerCase();
    return this.tabs.find((tab) => tab.toLowerCase() === normalized) ?? null;
  }
}
