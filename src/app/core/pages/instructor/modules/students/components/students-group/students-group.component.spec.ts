import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsGroupComponent } from './students-group.component';

describe('StudentsGroupComponent', () => {
  let component: StudentsGroupComponent;
  let fixture: ComponentFixture<StudentsGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentsGroupComponent]
    });
    fixture = TestBed.createComponent(StudentsGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
