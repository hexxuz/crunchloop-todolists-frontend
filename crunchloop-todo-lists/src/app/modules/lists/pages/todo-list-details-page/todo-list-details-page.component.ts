import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiClientService } from '../../../../services/api-client-service';
import ITodoList from '../../../../types/ITodoList';

@Component({
  selector: 'app-todo-list-details-page',
  standalone: false,
  templateUrl: './todo-list-details-page.component.html',
  styleUrl: './todo-list-details-page.component.css'
})
export class TodoListDetailsPageComponent {
  id?: number;
  list?: ITodoList;
  loading: boolean = true;

  constructor(private route: ActivatedRoute, private apiClientService: ApiClientService) {
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!id){
      this.loading = false;
      return;
    }

    this.id = id;

    this.retrieveItems(id);
  }

  retrieveItems(id: number){
    this.loading = true;
    this.apiClientService.getTodoList(id).subscribe(list => {
      if (!list){
        this.loading = false;
        return;
      }

      this.list = list;

      this.apiClientService.getTodoItems(list.id).subscribe(items => {
        list.items = items;

        this.loading = false;
      }, err => this.loading = false)
    }, err => this.loading = false);
  }

  manageItemNameChange($event: string){
    if (!$event)
      return;
  }

  manageItemCompletionStatusChange($event: boolean){
  }

  manageOnDelete($event: number){
    if (!$event || isNaN($event) || !this.list)
      return;

    this.apiClientService.deleteTodoItem(this.list.id, $event).subscribe(res => {
      if (!this.list)
        return;

      this.retrieveItems(this.list.id);
    })
  }

  manageBulkDelete(id: number){
    if (!confirm('Are you sure you want to proceed?'))
      return;

    this.loading = true;

    this.apiClientService.deleteTodoItemsBulk(id).subscribe(() => {
      alert('Elements are being deleted...');
      this.loading = false;
    }, err => this.loading = false);
  }

  manageBulkCreation(id: number){
    if (!confirm('Are you sure you want to bulk create items?'))
      return;

    this.loading = true;

    this.apiClientService.createTodoItemsBulk(id).subscribe(() => {
      this.loading = false;
      this.retrieveItems(id);
    }, err => this.loading = false);
  }
}
