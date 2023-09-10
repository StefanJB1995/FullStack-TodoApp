import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[] = [];
  //= [
  //   new Todo(1, "Learn to Dance", false, new Date()),
  //   new Todo(2, "Become an Expert at Angular", false, new Date()),
  //   new Todo(3, "Read the Bible", false, new Date()),
    
  //   // {id: 1, description: "Learn to Dance"},
  //   // {id: 2, description: "Practice Angular"},
  //   // {id: 3, description: "Read the Bible"}
  // ]

  
  // todo = {
  //   id: 1,
  //   description: "Learn to Dance"
  // }

  constructor(private todoService:TodoDataService) { }

  ngOnInit(): void {
    this.todoService.retrieveAllTodos('stef').subscribe(
      response => {
        this.todos = response;
      }
    )
  }

}
