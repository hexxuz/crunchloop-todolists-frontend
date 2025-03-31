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

    this.apiClientService.getTodoList(id).subscribe(list => {
      if (!list){
        this.loading = false;
        return;
      }

      this.list = list;
      this.loading = false;
    }, err => this.loading = false);
  }
}
