import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceCarCardComponent } from './maintenance-car-card.component';

describe('MaintenanceCarCardComponent', () => {
  let component: MaintenanceCarCardComponent;
  let fixture: ComponentFixture<MaintenanceCarCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintenanceCarCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceCarCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
