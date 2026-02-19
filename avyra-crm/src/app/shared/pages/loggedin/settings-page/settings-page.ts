import { CommonModule } from '@angular/common';
import { Component, computed, effect, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ThemeConfig, ThemeService } from '../../../../services/theme.service';
import { BusinessService } from '../../../../services/business.service';

type SettingsTab = 'Theme' | 'Integrations' | 'Account' | 'Billing';
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
  imports: [CommonModule, FormsModule],
  templateUrl: './settings-page.html',
  styleUrl: './settings-page.css',
})
export class SettingsPage {
  private readonly themeService = inject(ThemeService);
  private readonly businessService = inject(BusinessService);

  readonly tabs: SettingsTab[] = ['Theme', 'Integrations', 'Account', 'Billing'];
  activeTab: SettingsTab = 'Theme';
  activeThemeScopeLabel = computed(() => this.businessService.selectedBusiness()?.name ?? 'Default');

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
}
