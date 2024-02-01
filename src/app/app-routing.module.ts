import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./core/auth/auth.module').then(m => m.AuthModule)

  },

  {
    path: 'auth',
    loadChildren: () => import('./core/auth/auth.module').then(m => m.AuthModule)
  },
  {

    path: 'instructor',
    // canActivate:[adminGuard],
    loadChildren: () => import('./core/pages/instructor/instructor.module').then(m => m.InstructorModule)
  },
  {
    path: 'learner',
    loadChildren: () => import('./core/pages/learner/learner.module').then(m => m.LearnerModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
