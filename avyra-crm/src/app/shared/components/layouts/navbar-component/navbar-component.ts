import { Component, HostListener, OnDestroy, computed, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';
import { BusinessService } from '../../../../services/business.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ThemeService } from '../../../../services/theme.service';

@Component({
  selector: 'app-navbar-component',
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './navbar-component.html',
  styleUrl: './navbar-component.css',
})
export class NavbarComponent implements OnDestroy {
  private authService = inject(AuthService);
  private businessService = inject(BusinessService);
  private themeService = inject(ThemeService);
  private fb = inject(FormBuilder);
  currentUser = this.authService.currentUser;
  businesses = this.businessService.businesses;
  selectedBusinessId = this.businessService.selectedBusinessId;
  selectedBusiness = computed(() => this.businessService.selectedBusiness());
  selectedBusinessLabel = computed(() => this.selectedBusiness()?.name ?? 'Default');
  selectedBusinessType = computed(() => this.selectedBusiness()?.type ?? 'No business selected');

  isBusinessMenuOpen = signal<boolean>(false);
  isAddBusinessDrawerOpen = signal<boolean>(false);
  isSubmittingBusiness = signal<boolean>(false);
  businessErrorMessage = signal<string>('');
  isLogoDragOver = signal<boolean>(false);
  logoFile = signal<File | null>(null);
  logoPreview = signal<string | null>(null);

  readonly businessTypes = ['IT', 'Real Estate', 'Finance', 'Healthcare', 'Education', 'E-commerce', 'Other'];

  addBusinessForm = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(120)]],
    type: ['IT', [Validators.required]],
    status: [1, [Validators.required]],
  });

  private readonly userEffect = effect(() => {
    const user = this.currentUser();
    if (!user) {
      this.businessService.clearState();
      return;
    }

    this.businessService.loadBusinesses();
  });

  private readonly businessThemeEffect = effect(() => {
    const user = this.currentUser();
    if (!user) {
      return;
    }

    const selectedBusinessId = this.selectedBusinessId();
    this.themeService.syncThemeFromBackend(selectedBusinessId);
  });

  @HostListener('document:click')
  closeBusinessMenuOnOutsideClick() {
    this.isBusinessMenuOpen.set(false);
  }

  logout() {
    this.authService.logout();
  }

  trackByBusinessId(_: number, business: { id: string }) {
    return business.id;
  }

  toggleBusinessMenu(event: MouseEvent) {
    event.stopPropagation();
    this.isBusinessMenuOpen.update((open) => !open);
  }

  preventMenuClose(event: MouseEvent) {
    event.stopPropagation();
  }

  selectBusiness(businessId: string, event?: MouseEvent) {
    event?.stopPropagation();
    this.businessService.setSelectedBusiness(businessId);
    this.isBusinessMenuOpen.set(false);
  }

  openAddBusinessDrawer(event?: MouseEvent) {
    event?.stopPropagation();
    this.isBusinessMenuOpen.set(false);
    this.isAddBusinessDrawerOpen.set(true);
  }

  closeAddBusinessDrawer() {
    this.isAddBusinessDrawerOpen.set(false);
    this.businessErrorMessage.set('');
    this.resetAddBusinessForm();
  }

  onLogoInputChange(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0] ?? null;
    if (file) {
      this.applyLogoFile(file);
    }
    input.value = '';
  }

  onLogoDragOver(event: DragEvent) {
    event.preventDefault();
    this.isLogoDragOver.set(true);
  }

  onLogoDragLeave(event: DragEvent) {
    event.preventDefault();
    this.isLogoDragOver.set(false);
  }

  onLogoDrop(event: DragEvent) {
    event.preventDefault();
    this.isLogoDragOver.set(false);
    const file = event.dataTransfer?.files?.[0] ?? null;
    if (file) {
      this.applyLogoFile(file);
    }
  }

  removeLogo(event?: MouseEvent) {
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

  businessInitial(name: string): string {
    const trimmed = (name || '').trim();
    return trimmed ? trimmed.charAt(0).toUpperCase() : 'B';
  }

  private applyLogoFile(file: File) {
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

  private resetAddBusinessForm() {
    this.addBusinessForm.reset({ name: '', type: 'IT', status: 1 });
    this.removeLogo();
  }

  private revokeLogoPreview() {
    const preview = this.logoPreview();
    if (preview) {
      URL.revokeObjectURL(preview);
      this.logoPreview.set(null);
    }
  }

  ngOnDestroy(): void {
    this.revokeLogoPreview();
  }
}
