import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListDetailsPageComponent } from './todo-list-details-page.component';

describe('TodoListDetailsPageComponent', () => {
  let component: TodoListDetailsPageComponent;
  let fixture: ComponentFixture<TodoListDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoListDetailsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoListDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
