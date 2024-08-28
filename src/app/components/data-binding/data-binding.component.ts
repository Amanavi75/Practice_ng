import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  cName:string = "cse"
  id:number = 54

  inputType:string= "checkbox"
  myClassName :string = "bg-primary"


  firstName = signal("aman avi ") 
  // basic signal 


  constructor( ){
   
  }

   showAlert(message:string){

    alert(message)

  }

  changeCourseName(){
    this.cName = "react js "

    this.firstName.set("aditya")

    // signal updation using set method or we can use update method 

  }



  

}
