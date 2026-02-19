import { Component, effect, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';
import { BusinessService } from '../../../../services/business.service';
import { CrmObjectRecord, ObjectService } from '../../../../services/object.service';

@Component({
  selector: 'app-sidebar-component',
  imports: [RouterLinkActive, RouterLink],
  templateUrl: './sidebar-component.html',
  styleUrl: './sidebar-component.css',
})
export class SidebarComponent {
  private readonly authService = inject(AuthService);
  private readonly businessService = inject(BusinessService);
  private readonly objectService = inject(ObjectService);

  readonly objects = this.objectService.objects;
  readonly isObjectsLoading = this.objectService.isLoading;
  readonly selectedBusinessId = this.businessService.selectedBusinessId;

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

  buildObjectRoute(objectRecord: CrmObjectRecord): string[] {
    const routeName = this.toRouteSegment(objectRecord.name || objectRecord.key || 'object');
    return ['/objects', objectRecord.id, routeName];
  }

  objectInitial(name: string): string {
    const trimmed = String(name || '').trim();
    return trimmed ? trimmed.charAt(0).toUpperCase() : 'O';
  }

  logout() {
    this.authService.logout();
  }

  private toRouteSegment(value: string): string {
    const trimmed = String(value || '').trim();
    if (!trimmed) {
      return 'object';
    }
    return trimmed.replace(/\//g, '-');
  }
}
