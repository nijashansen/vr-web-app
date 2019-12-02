import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentAdminOverviewPageComponent } from './equipment-admin-overview-page.component';

describe('EquipmentAdminOverviewPageComponent', () => {
  let component: EquipmentAdminOverviewPageComponent;
  let fixture: ComponentFixture<EquipmentAdminOverviewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipmentAdminOverviewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentAdminOverviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
