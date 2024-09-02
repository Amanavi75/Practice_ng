import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-structural-dir',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './structural-dir.component.html',
  styleUrl: './structural-dir.component.css'
})
export class StructuralDirComponent {

  num1 :string = ""
  num2:string=""
  isDivisible:boolean = true;
  cityArray:string [] = ['oune', 'delhi','patna','adi']



  studentList:any []= [
    {
      id:1,
      name:"ama",
      city:"delh",
      isActive:false
    },
    {
      id:2,
      name:"am",
      city:"del",
      isActive:true
    },
    {
      id:3,
      name:"a",
      city:"de",
      isActive:false
    },
  ]

  //creating object of injectable services 
  //way 1 - through constructor (dependency injection)
  
  constructor(private router:Router){

  }
  navigateToattrbutive(){
    this.router.navigateByUrl("attributaldirective")

  }
  showDiv1(){
    this.isDivisible = true ;
  }

  hideDiv1(){
    this.isDivisible = false
  }
  

}

// we can apply *ngFor on any type of element 
// mostly  we will use this in case of drop down 
