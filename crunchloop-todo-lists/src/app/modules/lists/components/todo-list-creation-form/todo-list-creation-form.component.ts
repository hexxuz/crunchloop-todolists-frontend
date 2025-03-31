import { Component, EventEmitter, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-todo-list-creation-form',
  standalone: false,
  templateUrl: './todo-list-creation-form.component.html',
  styleUrl: './todo-list-creation-form.component.css'
})
export class TodoListCreationFormComponent {
  name: string = '';

  @Output() onCreationSubmit: EventEmitter<any> = new EventEmitter<any>();

  onCreateListClick(){
    if (!this.name)
      return;

    this.onCreationSubmit.emit({
      name: this.name
    });

    this.name = '';
  }
}
