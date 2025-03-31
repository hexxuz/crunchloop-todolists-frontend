import { Component, OnInit } from '@angular/core';
import ITodoList from '../../../../types/ITodoList';
import { ApiClientService } from '../../../../services/api-client-service';

@Component({
  selector: 'app-todo-lists-page',
  standalone: false,
  templateUrl: './todo-lists-page.component.html',
  styleUrl: './todo-lists-page.component.css'
})
export class TodoListsPageComponent implements OnInit {
  loading: boolean = true;
  lists?: ITodoList[] = [];
  showCreationForm: boolean = false;

  constructor(private apiClientService: ApiClientService){}

  ngOnInit(): void {
    this.retrieveItems();
  }

  retrieveItems(){
    this.loading = true;

    this.apiClientService.getTodoLists().subscribe(lists => {
      this.lists = lists;
      this.loading = false;
    }, err => {
      this.loading = false;
    });
  }

  manageCreateListEvent($event: any){
    if (!$event || !$event.name)
      return;

    this.apiClientService.createTodoList($event.name).subscribe(res => {
     if (!res)
      return;
    
     this.showCreationForm = false;
     this.retrieveItems();
    });
  }

  manageDeleteEvent($event: number){
    if (!$event || isNaN($event))
      return;

    if (!confirm('Are you sure that you want to delete this list?'))
      return;

    this.apiClientService.deleteTodoList($event).subscribe(() => {
      this.retrieveItems();
     });
  }
}