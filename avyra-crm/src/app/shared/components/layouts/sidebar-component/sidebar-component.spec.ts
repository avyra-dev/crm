import { ComponentFixture, TestBed } from '@angular/core/testing';
import { signal } from '@angular/core';
import { provideRouter } from '@angular/router';

import { SidebarComponent } from './sidebar-component';
import { AuthService } from '../../../../services/auth.service';
import { BusinessService } from '../../../../services/business.service';
import { CrmObjectRecord, ObjectService } from '../../../../services/object.service';

class MockAuthService {
  currentUser = signal({ id: 'user-1', name: 'User', phone_number: '9000000000' });
}

class MockBusinessService {
  selectedBusinessId = signal('default');
}

class MockObjectService {
  objects = signal<CrmObjectRecord[]>([]);
  isLoading = signal(false);
  loadObjects() {}
  clearState() {}
}

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarComponent],
      providers: [
        provideRouter([]),
        { provide: AuthService, useClass: MockAuthService },
        { provide: BusinessService, useClass: MockBusinessService },
        { provide: ObjectService, useClass: MockObjectService },
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
