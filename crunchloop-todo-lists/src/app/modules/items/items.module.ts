import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import { TodoItemCardComponent } from './components/todo-item-card/todo-item-card.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TodoItemCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ItemsRoutingModule
  ],
  exports: [
    TodoItemCardComponent
  ]
})
export class ItemsModule { }
