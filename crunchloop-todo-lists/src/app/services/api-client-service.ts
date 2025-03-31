import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import environment from '../../../environment';
import ITodoListItem from '../types/ITodoListItem';
import ITodoList from '../types/ITodoList';

@Injectable({
    providedIn: 'root',
})
export class ApiClientService {
    private readonly baseUrl = environment.baseUrl;

    constructor(private http: HttpClient) {}

    // Lists
    createTodoList(name: string): Observable<ITodoList> {
        const url = `${this.baseUrl}/todolists`;
        const body = { name };

        return this.http.post<ITodoList>(url, body);
    }

    getTodoLists(): Observable<ITodoList[]> {
        const url = `${this.baseUrl}/todolists`;
        
        return this.http.get<ITodoList[]>(url);
    }

    deleteTodoList(id: number): Observable<void> {
        const url = `${this.baseUrl}/todolists/${id}`;
        
        return this.http.delete<void>(url);
    }

    // Items
    getTodoItems(listId: number): Observable<ITodoListItem[]> {
        const url = `${this.baseUrl}/todolists/${listId}/todoitems`;
        
        return this.http.get<ITodoListItem[]>(url);
    }
}