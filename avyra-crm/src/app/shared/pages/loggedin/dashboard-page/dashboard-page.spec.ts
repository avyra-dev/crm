import { ComponentFixture, TestBed } from '@angular/core/testing';
import { signal } from '@angular/core';
import { provideRouter } from '@angular/router';
import { of } from 'rxjs';

import { DashboardPage } from './dashboard-page';
import { BusinessService } from '../../../../services/business.service';
import { CrmObjectRecord, ObjectService } from '../../../../services/object.service';

class MockBusinessService {
  selectedBusinessId = signal('default');

  selectedBusiness() {
    return null;
  }
}

class MockObjectService {
  objects = signal<CrmObjectRecord[]>([]);
  isLoading = signal(false);
  loadObjects() {}
  clearState() {}

  deleteObject() {
    return of({ message: 'ok', data: null, status: true });
  }
}

describe('DashboardPage', () => {
  let component: DashboardPage;
  let fixture: ComponentFixture<DashboardPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardPage],
      providers: [
        provideRouter([]),
        { provide: BusinessService, useClass: MockBusinessService },
        { provide: ObjectService, useClass: MockObjectService },
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
