import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateQuestionsComponent } from './add-update-questions.component';

describe('AddUpdateQuestionsComponent', () => {
  let component: AddUpdateQuestionsComponent;
  let fixture: ComponentFixture<AddUpdateQuestionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddUpdateQuestionsComponent]
    });
    fixture = TestBed.createComponent(AddUpdateQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
