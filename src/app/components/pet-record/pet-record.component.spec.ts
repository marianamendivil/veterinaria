import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetRecordComponent } from './pet-record.component';

describe('PetRecordComponent', () => {
  let component: PetRecordComponent;
  let fixture: ComponentFixture<PetRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
