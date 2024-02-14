import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateStudentsComponent } from './add-update-students.component';

describe('AddUpdateStudentsComponent', () => {
  let component: AddUpdateStudentsComponent;
  let fixture: ComponentFixture<AddUpdateStudentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddUpdateStudentsComponent]
    });
    fixture = TestBed.createComponent(AddUpdateStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
