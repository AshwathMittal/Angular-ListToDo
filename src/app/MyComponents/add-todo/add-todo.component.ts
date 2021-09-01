import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/Todo'
@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  title: string;
  desc: string
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter(); 

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    const todo = {
      sno: 8,
      title: this.title,
      desc: this.desc,
      active: true,
      date: "Yet To Complete",
     dateOnAdded: new Date().toDateString() + ", "  + new Date().getHours().toLocaleString() + ":" + new Date().getMinutes().toLocaleString()
    }
    this.todoAdd.emit(todo)
    this.title = ""
    this.desc = ""
  }
}
