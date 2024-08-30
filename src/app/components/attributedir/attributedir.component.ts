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

  div1BgColor:string = 'bg-primary';

}
