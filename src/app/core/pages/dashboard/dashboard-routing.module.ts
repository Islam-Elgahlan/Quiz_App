import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {path:'',component:DashboardComponent,children:[
    {
      path: '', redirectTo:'instructor', pathMatch:'full'},
    {
      path: 'instructor',
      // canActivate:[adminGuard],
      loadChildren: () => import('../../pages/instructor/instructor.module').then(m => m.InstructorModule)
    },
    {
      path: 'learner',
      loadChildren: () => import('../../pages/learner/learner.module').then(m => m.LearnerModule)
    }, 
  ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
