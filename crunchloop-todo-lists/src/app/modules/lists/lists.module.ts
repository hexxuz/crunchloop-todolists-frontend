import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListsRoutingModule } from './lists-routing.module';
import { TodoListsPageComponent } from './pages/todo-lists-page/todo-lists-page.component';


@NgModule({
  declarations: [
    TodoListsPageComponent
  ],
  imports: [
    CommonModule,
    ListsRoutingModule
  ],
  exports: [
    TodoListsPageComponent
  ]
})
export class ListsModule { }
