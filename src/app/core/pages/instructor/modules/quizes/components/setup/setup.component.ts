import { QuizzesService } from './../../services/quizzes.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SetupEndComponent } from '../setup-end/setup-end.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GroupsService } from '../../../groupes/sevice/groups.service';
import { IGroup } from '../../../groupes/model/groups';
import { IQuizzes } from '../../model/quizzes';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss'],
})
export class SetupComponent implements OnInit {

  groups: IGroup[] = [];
  quizzeId: any;
  isUpdateQuiz: boolean = true;
  isAddQuiz: boolean = true;
  quizze: IQuizzes | any;
  quizzeList: IQuizzes | any;
  code: string = '';


  constructor(public dialogRef: MatDialogRef<SetupComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog, private _quizzesService: QuizzesService,
    private _GroupsService: GroupsService,
    private toastr: ToastrService, private _Router: Router, private _ActivatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getAllGroups();

    if (this.data !== null) {
      this.quizzeById(this.data);
      this.isUpdateQuiz = true;
      this.isAddQuiz = false;
    } else {
      this.isAddQuiz = true;
      this.isUpdateQuiz = false;
    }
  }

  setupForm = new FormGroup({
    title: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required]),
    group: new FormControl(null, [Validators.required]),
    questions_number: new FormControl(null, [Validators.required]),
    difficulty: new FormControl(null, [Validators.required]),
    type: new FormControl(null, [Validators.required]),
    schadule: new FormControl(null, [Validators.required]),
    duration: new FormControl(null, [Validators.required]),
    score_per_question: new FormControl(null, [Validators.required]),
  })

  onSubmit(data: FormGroup) {
    if (this.data !== null) {
      this._quizzesService.updateQuizze(this.data, data.value.title).subscribe({
        next: (res) => {
          console.log(res);
          this.quizze = res;
          this.code = this.quizze.data.code;
        }, error: (err) => {
          this.toastr.error(err.error.message, 'Error!')
        }, complete: () => {
          this.toastr.success('Quiz Updated Successfully', 'Success');
          this.onNoClick();
          this.openSetupEndDialog(this.code);
        }
      })
    } else {
      this._quizzesService.createQuizze(data.value).subscribe({
        next: (res) => {
          console.log(res);
          this.quizze = res;
          this.code = this.quizze.data.code;
        }, error: (err) => {
          this.toastr.error(err.error.message, 'Error!')
        }, complete: () => {
          this.toastr.success('Create Quiz Successfully', 'Success');
          this.onNoClick();
          this.openSetupEndDialog(this.code);
        }
      })
    }
  }

  quizzeById(id: string) {
    this._quizzesService.getQuizzeById(id).subscribe({
      next: (res) => {
        console.log(res);
        this.quizze = res;
        // this.quizzeList = this.quizze.data;

      }, error: (err) => {
        this.toastr.error(err.error.message, 'Error!')
      }, complete: () => {
        this.setupForm.patchValue({
          title: this.quizze?.title,
          description: this.quizze?.description,
          group: this.quizze?.group,
          questions_number: this.quizze?.questions_number,
          difficulty: this.quizze?.difficulty,
          type: this.quizze?.type,
          schadule: this.quizze?.schadule,
          duration: this.quizze?.duration,
          score_per_question: this.quizze?.score_per_question
        })
      }
    })
  }

  getAllGroups() {
    this._GroupsService.onGetAllGroups().subscribe({
      next: (res) => {
        this.groups = res;
      }
    })
  }

  allQuizze() {
    this._quizzesService.getAllQuizze().subscribe({
      next: (res) => {
        console.log(res);
        // this.quizzeList = res;

      }
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  openSetupEndDialog(quizData: string): void {
    const dialogRef = this.dialog.open(SetupEndComponent, {
      data: quizData,
      width: '30%',
    });

    dialogRef.afterClosed().subscribe((result) => {

      if (result) {
        console.log(result.id);
        this.allQuizze()
      }
    });

  }
}
