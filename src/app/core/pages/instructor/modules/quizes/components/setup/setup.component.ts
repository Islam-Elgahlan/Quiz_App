import { QuizzesService } from './../../services/quizzes.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SetupEndComponent } from '../setup-end/setup-end.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GroupsService } from '../../../groupes/sevice/groups.service';
import { IGroup } from '../../../groupes/model/groups';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit{

  groups: IGroup[]= [];

  constructor(public dialogRef: MatDialogRef<SetupComponent>,
    private dialog: MatDialog, private _quizzesService:QuizzesService,
    private _GroupsService:GroupsService,
    private toastr:ToastrService, private _Router: Router, 
  ) { }

  ngOnInit(): void {
    this.getAllGroups();
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

  onSubmit(data: FormGroup){
    this._quizzesService.createQuizze(data.value).subscribe({
      next:(res)=>{
        console.log(res);
        // this.groups = res;
        
      }, error:(err)=>{
        this.toastr.error(err.error.message,'Error!')
      },complete:()=>{
        this.toastr.success('Create Quiz Successfully','Success')
        this.openSetupEndDialog();
      }
    })
  }

  getAllGroups(){
    let params = {

    }
    this._GroupsService.onGetAllGroups().subscribe({
      next:(res)=>{
        this.groups = res;      
      }
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  openSetupEndDialog(): void {
    const dialogRef = this.dialog.open(SetupEndComponent, {
      data: {},
      width: '30%'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result.id);
      }
    });
    this.onNoClick()
  }

}
