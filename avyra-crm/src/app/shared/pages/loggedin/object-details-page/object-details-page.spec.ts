import { ComponentFixture, TestBed } from '@angular/core/testing';
import { signal } from '@angular/core';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';

import { ObjectDetailsPage } from './object-details-page';
import { BusinessService } from '../../../../services/business.service';
import { FieldService } from '../../../../services/field.service';
import { ObjectRecordService } from '../../../../services/object-record.service';
import { CrmObjectRecord, ObjectService } from '../../../../services/object.service';

class MockBusinessService {
  selectedBusinessId = signal('default');

  selectedBusiness() {
    return null;
  }
}

class MockObjectService {
  objects = signal<CrmObjectRecord[]>([
    {
      id: 'obj-1',
      user_id: 'user-1',
      name: 'Leads',
      key: 'leads',
      description: 'Lead pipeline object',
      mapped_business_ids: [],
      mapped_business_count: 0,
      status: 1,
      created_at: null,
      updated_at: null,
    },
  ]);
  isLoading = signal(false);
}

class MockFieldService {
  fields = signal([]);
  isLoading = signal(false);

  loadFields() {}
  clearState() {}

  createField() {
    return of({ message: 'ok', data: null, status: true });
  }

  unmapFieldFromObject() {
    return of({ message: 'ok', data: null, status: true });
  }
}

class MockObjectRecordService {
  listRecords() {
    return of({
      message: 'ok',
      data: {
        object_id: 'obj-1',
        business_id: null,
        fields: [],
        items: [],
        pagination: {
          page: 1,
          limit: 10,
          total: 0,
          total_pages: 1,
          has_prev: false,
          has_next: false,
        },
        sort: { field: 'created_at', direction: 'desc' as const },
        search: '',
      },
      status: true,
    });
  }

  exportRecords() {
    return of({
      message: 'ok',
      data: { file_name: 'records.csv', mime_type: 'text/csv', content: '', total_records: 0 },
      status: true,
    });
  }

  listViews() {
    return of({
      message: 'ok',
      data: {
        object_id: 'obj-1',
        business_id: null,
        default_view_id: 'view-1',
        items: [
          {
            id: 'view-1',
            object_id: 'obj-1',
            business_id: null,
            name: 'View 1',
            visible_field_ids: [],
            is_default: true,
            status: 1,
            created_at: null,
            updated_at: null,
          },
        ],
      },
      status: true,
    });
  }

  createListView() {
    return of({
      message: 'ok',
      data: {
        view: {
          id: 'view-2',
          object_id: 'obj-1',
          business_id: null,
          name: 'View 2',
          visible_field_ids: [],
          is_default: false,
          status: 1,
          created_at: null,
          updated_at: null,
        },
      },
      status: true,
    });
  }

  updateListView() {
    return of({
      message: 'ok',
      data: {
        view: {
          id: 'view-1',
          object_id: 'obj-1',
          business_id: null,
          name: 'View 1',
          visible_field_ids: [],
          is_default: true,
          status: 1,
          created_at: null,
          updated_at: null,
        },
      },
      status: true,
    });
  }
}

describe('ObjectDetailsPage', () => {
  let component: ObjectDetailsPage;
  let fixture: ComponentFixture<ObjectDetailsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObjectDetailsPage],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of(convertToParamMap({ objectId: 'obj-1', objectName: 'Leads' })),
          },
        },
        { provide: BusinessService, useClass: MockBusinessService },
        { provide: ObjectService, useClass: MockObjectService },
        { provide: FieldService, useClass: MockFieldService },
        { provide: ObjectRecordService, useClass: MockObjectRecordService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ObjectDetailsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.selectedObject()?.id).toBe('obj-1');
  });
});
