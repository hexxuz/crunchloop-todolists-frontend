import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListsPage } from './todo-lists-page.component';

describe('TodoListsPageComponent', () => {
  let component: TodoListsPage;
  let fixture: ComponentFixture<TodoListsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoListsPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoListsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
