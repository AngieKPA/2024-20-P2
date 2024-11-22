import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainerListComponent } from './trainer/trainer-list/trainer-list.component';
import { TrainerDetailComponent } from './trainer/trainer-detail/trainer-detail.component';

const routes: Routes = [
  {
    path: 'list',
    component: TrainerListComponent
  },
  {
    path: ':id',
    component: TrainerDetailComponent
  },
  { path: 'books', loadChildren: () => import('./trainer/trainer.module').then(m => m.TrainerModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
