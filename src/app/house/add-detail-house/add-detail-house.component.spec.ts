import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDetailHouseComponent } from './add-detail-house.component';

describe('AddDetailHouseComponent', () => {
  let component: AddDetailHouseComponent;
  let fixture: ComponentFixture<AddDetailHouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDetailHouseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDetailHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
