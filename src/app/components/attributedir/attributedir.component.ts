import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-attributedir',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './attributedir.component.html',
  styleUrl: './attributedir.component.css'
})
export class AttributedirComponent {

  div1BgColor:string = '';

  addRedCol (){
    this.div1BgColor = "bg-danger"

  }

  addBlueCol(){
    this.div1BgColor = "bg-primary"
  }

  addToggle(){
    
    if(this.div1BgColor=="bg-primary"){
      this.div1BgColor="bg-danger"
    }else if(this.div1BgColor=="bg-danger"){
      this.div1BgColor="bg-primary"
    }else{
      this.div1BgColor="bg-success"
    }
  }

}
