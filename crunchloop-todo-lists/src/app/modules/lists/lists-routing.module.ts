import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListsPageComponent } from './pages/todo-lists-page/todo-lists-page.component';
import { TodoListDetailsPageComponent } from './pages/todo-list-details-page/todo-list-details-page.component';

const routes: Routes = [
  {
    path: '',
    component: TodoListsPageComponent,
    pathMatch: 'full'
  },
  {
    path: ':id',
    component: TodoListDetailsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListsRoutingModule { }
