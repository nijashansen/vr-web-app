import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentOverviewPageComponent } from './equipment-overview-page.component';

describe('EquipmentOverviewPageComponent', () => {
  let component: EquipmentOverviewPageComponent;
  let fixture: ComponentFixture<EquipmentOverviewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipmentOverviewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentOverviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
