import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
  showDiv1(){
    this.isDivisible = true ;
  }

  hideDiv1(){
    this.isDivisible = false
  }
  

}
