import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  cName:string = "cse"
  id:number = 54

  inputType:string= "checkbox"
  myClassName :string = "bg-primary"

  constructor( ){
   
  }
  

}
