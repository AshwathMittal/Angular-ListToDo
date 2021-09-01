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
        dateOnAdded: "",
        date: "",
        active: true,
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
    if(this.todos[index].active == false){
    this.todos[index].date =  new Date().toDateString() + ", "  + new Date().getHours().toLocaleString() + ":" + new Date().getMinutes().toLocaleString()
    }
    else{
    this.todos[index].date= "Yet To Complete"

    }
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
