import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-card',
  templateUrl: './app-card.component.html',
  styleUrls: ['./app-card.component.css']
})
export class AppCardComponent implements OnInit {
  a = 0 ;
  todolist = [
    {
      id: this.a,
      title: "task 1"
    }
  ];
  addNewTodo(valueTodo: string) {
    if (valueTodo) {
      console.log(this.todolist.length)
      this.todolist.push({
        id: ++this.a,
        title: valueTodo
      });
    }
  }
  deleteTodo(id: number) {
    console.log(id)
    this.todolist = this.todolist.filter((item) => item.id != id)
    console.log(this.todolist)
  }
  constructor() { }

  ngOnInit() { }
}
