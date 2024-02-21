import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerQuestionsComponent } from './answer-questions.component';

describe('AnswerQuestionsComponent', () => {
  let component: AnswerQuestionsComponent;
  let fixture: ComponentFixture<AnswerQuestionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnswerQuestionsComponent]
    });
    fixture = TestBed.createComponent(AnswerQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
