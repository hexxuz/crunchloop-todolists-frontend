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

  constructor(private apiClientService: ApiClientService){
  }

  ngOnInit(): void {
    this.apiClientService.getTodoLists().subscribe(lists => {
      this.lists = lists;
      this.loading = false;
    }, err => {
      this.loading = false;
    });
  }
}