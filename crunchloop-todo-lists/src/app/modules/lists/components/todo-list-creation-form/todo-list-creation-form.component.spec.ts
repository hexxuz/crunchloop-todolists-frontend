import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListCreationFormComponent } from './todo-list-creation-form.component';

describe('TodoListCreationFormComponent', () => {
  let component: TodoListCreationFormComponent;
  let fixture: ComponentFixture<TodoListCreationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoListCreationFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoListCreationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
