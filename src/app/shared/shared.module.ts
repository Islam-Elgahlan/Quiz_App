import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material/material.module';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    RouterLink,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    RouterLink,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class SharedModule { }
