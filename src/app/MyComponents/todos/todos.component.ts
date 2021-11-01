import { Component, OnInit } from '@angular/core';
import { Todo } from "../../Todo"
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  headingHere: string;
  fileToUpload: File | null = null;
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

//   handleFileInput(event: any) {
//     this.fileToUpload = event.target.files[0];  
//     console.log(this.fileToUpload);
//     // this.fileToUpload = files.item(0);
//     const data = JSON.stringify(this.fileToUpload)
//     const blob = new Blob([data], {type: "appliction/json"})
//     let fileReader = new FileReader();
//     fileReader.onload = (e) => {
//       console.log(fileReader.result as string);
    
//     }
//     console.log(fileReader.readAsText(blob));

// }
changeListener($event: any) : void {
  this.readThis($event.target);
}

readThis(inputValue: any) : void {
  var file:File = inputValue.files[0]; 
  var myReader:FileReader = new FileReader();

  myReader.onloadend = function(e){
    let data = myReader.result as string
    let todos = JSON.parse(data)
    console.log(todos);
    localStorage.setItem("todos", data)
    window.location.reload();
  }

  myReader.readAsText(file);
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
  exportTodos(){
    console.log("Exported");
    const data = JSON.stringify(this.todos)
    const blob = new Blob([data], {type: "text/json"})
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = "todos.json"
    link.click()
    link.remove()
  }

}
