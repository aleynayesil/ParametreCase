import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardListComponent } from './cards/card-list/card-list.component';
import { CardCreateComponent } from './cards/card-create/card-create.component';

const routes:Routes =[
  { path: '', component: CardListComponent },
  { path: 'create', component: CardCreateComponent }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
