import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-card',
  templateUrl: './app-card.component.html',
  styleUrls: ['./app-card.component.css']
})
export class AppCardComponent implements OnInit {
  todolist = [
    "my task 1"
  ];
  addNewTodo(valueTodo: string) {
    if (valueTodo) {
      this.todolist.push(valueTodo);
    }
  }
  constructor() { }

  ngOnInit() { }
}
