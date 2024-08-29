import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-dir',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './structural-dir.component.html',
  styleUrl: './structural-dir.component.css'
})
export class StructuralDirComponent {

  isDivisible:boolean = true;
  showDiv1(){
    this.isDivisible = true ;
  }

  hideDiv1(){
    this.isDivisible = false
  }

  

}
