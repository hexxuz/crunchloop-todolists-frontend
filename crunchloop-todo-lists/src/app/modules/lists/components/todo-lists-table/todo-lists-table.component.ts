import { Component, Input } from '@angular/core';
import ITodoList from '../../../../types/ITodoList';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-lists-table',
  standalone: false,
  templateUrl: './todo-lists-table.component.html',
  styleUrl: './todo-lists-table.component.css'
})
export class TodoListsTableComponent {
  @Input() lists?: ITodoList[] = [];
  @Output() onDelete = new EventEmitter<number>();

  onDeleteClick(id: number){
    if (!id)
      return;

    this.onDelete.emit(id);
  }
}
