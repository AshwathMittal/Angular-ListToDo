import { Component, OnInit } from '@angular/core';
import { Todo } from "../../Todo"
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  headingHere: string;
  localItem: string | null ;
  todos:Todo[];
  constructor() {
    this.localItem = localStorage.getItem("todos")

    if(this.localItem == null){
      
    this.todos = [
      {
      sno: 1,
      title: "Welcome!",
      desc: "Add A Todo",
      active: true
      }
        ]
    }
    else{
      this.todos = JSON.parse(this.localItem)
    }
      this.headingHere = ""

    
  }



  ngOnInit(): void {
  }
  deleteTodo(todo: Todo){

    console.log(this.todos.length);
    const index = this.todos.indexOf(todo)
    console.log(index);
    
    this.todos.splice(index, 1)
    localStorage.setItem("todos", JSON.stringify(this.todos))
    
    if(this.todos.length == 0){
      this.headingHere = ""

    }
    else{
    this.headingHere = "Your List Of Work You Need To Do Today."

    }
    console.log(this.todos.length);
    
  }
  addTodo(todo: Todo){
    console.log(todo);
   
    this.todos.push(todo)
    localStorage.setItem("todos", JSON.stringify(this.todos))
    
    if(this.todos.length == 0){
      this.headingHere = ""

    }
    else{
    this.headingHere = "Your List Of Work You Need To Do Today."

    }
    console.log(this.todos.length);
    
  
  }
  toggleTodo(todo: Todo){
    const index = this.todos.indexOf(todo)
    console.log(index);
    
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todos", JSON.stringify(this.todos))

    if(this.todos.length == 0){
      this.headingHere = ""

    }
    else{
    this.headingHere = "Your List Of Work You Need To Do Today."

    }
    console.log(this.todos.length);
    
  }

}
