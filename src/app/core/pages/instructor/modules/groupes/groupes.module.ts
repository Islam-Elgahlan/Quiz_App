import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupesRoutingModule } from './groupes-routing.module';
import { ListGroupsComponent } from './components/list-groups/list-groups.component';


@NgModule({
  declarations: [
    ListGroupsComponent
  ],
  imports: [
    CommonModule,
    GroupesRoutingModule
  ]
})
export class GroupesModule { }
