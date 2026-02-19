import { ComponentFixture, TestBed } from '@angular/core/testing';
import { signal } from '@angular/core';
import { of } from 'rxjs';

import { ObjectCreateComponent } from './object-create-component';
import { ObjectService, CrmObjectRecord } from '../../../../services/object.service';
import { BusinessService } from '../../../../services/business.service';

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

  fetchUserObjects() {
    return of({ message: 'ok', data: [], status: true });
  }

  createObject() {
    return of({ message: 'ok', data: null, status: true });
  }
}

describe('ObjectCreateComponent', () => {
  let component: ObjectCreateComponent;
  let fixture: ComponentFixture<ObjectCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObjectCreateComponent],
      providers: [
        { provide: BusinessService, useClass: MockBusinessService },
        { provide: ObjectService, useClass: MockObjectService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ObjectCreateComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
