import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListsTableComponent } from './todo-lists-table.component';

describe('TodoListsTableComponent', () => {
  let component: TodoListsTableComponent;
  let fixture: ComponentFixture<TodoListsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoListsTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoListsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
