import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentRoomPageComponent } from './equipment-room-page.component';

describe('EquipmentRoomPageComponent', () => {
  let component: EquipmentRoomPageComponent;
  let fixture: ComponentFixture<EquipmentRoomPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipmentRoomPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentRoomPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
