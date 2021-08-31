import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  todayNumber:string = new Date().toDateString();
  name = "You List Below"
  @Input() todo: Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter(); 
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter(); 
  constructor() { }

  ngOnInit(): void {
  }
  onClick(todo: Todo){
    this.todoDelete.emit(todo)
    
  }
  onCheckBox(todo: Todo){
  console.log(todo);
    this.todoCheckbox.emit(todo)
  }
}
