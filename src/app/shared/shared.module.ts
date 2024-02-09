import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material/material.module';
import { RouterLink, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { VectorComponent } from './icons/vector/vector.component';
import { LogoutComponent } from './components/logout/logout.component';
import { DeleteComponent } from './components/delete/delete.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    VectorComponent,
    LogoutComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterLink,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

  ],
  exports: [
    RouterLink,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NavbarComponent,
    SidebarComponent,
    VectorComponent
  ]
})
export class SharedModule { }
