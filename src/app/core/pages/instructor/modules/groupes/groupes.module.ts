import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupesRoutingModule } from './groupes-routing.module';
import { ListGroupsComponent } from './components/list-groups/list-groups.component';
import { AddUpdateGroupComponent } from './components/add-update-group/add-update-group.component';


@NgModule({
  declarations: [
    ListGroupsComponent,
    AddUpdateGroupComponent
  ],
  imports: [
    CommonModule,
    GroupesRoutingModule
  ]
})
export class GroupesModule { }
