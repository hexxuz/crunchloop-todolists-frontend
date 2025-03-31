import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListsRoutingModule } from './lists-routing.module';
import { TodoListsPageComponent } from './pages/todo-lists-page/todo-lists-page.component';
import { TodoListsTableComponent } from './components/todo-lists-table/todo-lists-table.component';
import { TodoListCreationFormComponent } from './components/todo-list-creation-form/todo-list-creation-form.component';
import { FormsModule } from '@angular/forms';
import { TodoListDetailsPageComponent } from './pages/todo-list-details-page/todo-list-details-page.component';
import { ItemsModule } from '../items/items.module';


@NgModule({
  declarations: [
    TodoListsPageComponent,
    TodoListsTableComponent,
    TodoListCreationFormComponent,
    TodoListDetailsPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ItemsModule,
    ListsRoutingModule
  ],
  exports: [
    TodoListsPageComponent,
  ]
})
export class ListsModule { }
