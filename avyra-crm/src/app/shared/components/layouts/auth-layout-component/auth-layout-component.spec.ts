import { ComponentFixture, TestBed } from '@angular/core/testing';
import { signal } from '@angular/core';
import { provideRouter } from '@angular/router';
import { of } from 'rxjs';

import { AuthLayoutComponent } from './auth-layout-component';
import { AuthService } from '../../../../services/auth.service';
import { BusinessService } from '../../../../services/business.service';
import { ObjectService } from '../../../../services/object.service';
import { ThemeService } from '../../../../services/theme.service';

class MockAuthService {
  currentUser = signal({ id: 'user-1', name: 'User', phone_number: '9000000000' });
  logout() {}
}

class MockBusinessService {
  businesses = signal([]);
  selectedBusinessId = signal('default');
  isLoading = signal(false);

  selectedBusiness() {
    return null;
  }

  loadBusinesses() {}
  clearState() {}
  setSelectedBusiness() {}
  createBusiness() {
    return of({ message: 'ok', data: null, status: true });
  }
}

class MockObjectService {
  objects = signal([]);
  isLoading = signal(false);

  loadObjects() {}
  clearState() {}
}

class MockThemeService {
  syncThemeFromBackend() {}
}

describe('AuthLayoutComponent', () => {
  let component: AuthLayoutComponent;
  let fixture: ComponentFixture<AuthLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthLayoutComponent],
      providers: [
        provideRouter([]),
        { provide: AuthService, useClass: MockAuthService },
        { provide: BusinessService, useClass: MockBusinessService },
        { provide: ObjectService, useClass: MockObjectService },
        { provide: ThemeService, useClass: MockThemeService },
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthLayoutComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
