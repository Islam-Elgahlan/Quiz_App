import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material/material.module';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';


@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent
  ],
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
    HttpClientModule,
    NavbarComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
