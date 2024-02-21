import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IQuestions } from '../../../instructor/modules/questions/model/questions';
import { StudentService } from '../../service/student.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SetupEndComponent } from '../../../instructor/modules/quizes/components/setup-end/setup-end.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-answer-questions',
  templateUrl: './answer-questions.component.html',
  styleUrls: ['./answer-questions.component.scss']
})
export class AnswerQuestionsComponent implements OnInit {
  quizId: string='';
  questions: IQuestions[]=[];
  options:any;
  answer = new FormGroup({
    question: new FormControl(null),
    answer : new FormControl(null)
  })
  constructor(
    private ActivatedRoute:ActivatedRoute,
    private _StudentService:StudentService,
    private _formBuilder: FormBuilder,
    private dialog: MatDialog,

  ){
    this.quizId= ActivatedRoute.snapshot.params['id']    
  }
  ngOnInit(): void {
    this.getQuestionsWithoutAnswer()
  }
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  getQuestionsWithoutAnswer(){
    this._StudentService.onGetQuestionsWithoutAnswers(this.quizId).subscribe({
      next:(res)=>{
        console.log(res);
        this.questions=res.data?.questions
        console.log(this.questions);
        this.options=res.data?.questions[0]?.options
        console.log(this.options);
        
      }
    })
  }
  submitQuestion(data:FormGroup,id:string){
    this._StudentService.onSubmitQuestion(data.value,id).subscribe({
      next:(res)=>{
        console.log(res);

        
      }
    })
  }
  openSetupEndDialog(dataEnd: string): void {
    const dialogRef = this.dialog.open(SetupEndComponent, {
      data: dataEnd,
      width: '30%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log(result.id);
      }
    });
  }
}
