import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import ITodoListItem from '../../../../types/ITodoListItem';

@Component({
  selector: 'app-todo-item-card',
  standalone: false,
  templateUrl: './todo-item-card.component.html',
  styleUrl: './todo-item-card.component.css'
})
export class TodoItemCardComponent implements OnInit {
  @Input() item?: ITodoListItem;
  @Output() onNameChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() onCompletionStatusChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onDelete: EventEmitter<void> = new EventEmitter<void>();
  debounceTimer: any;

  ngOnInit(): void {
    
  }

  onNameChangeEvent() {
    if (!this.item?.name) return;
  
    clearTimeout(this.debounceTimer);
  
    this.debounceTimer = setTimeout(() => {
      this.onNameChange.emit(this.item!.name);
    }, 500);
  }

  onCompletionStatusChangeEvent(){
    this.onCompletionStatusChange.emit(this.item!.isCompleted);
  }

  onDeleteEvent(){
    if (confirm('Are you sure you want to remove this item?'))
      this.onDelete.emit();
  }
}
