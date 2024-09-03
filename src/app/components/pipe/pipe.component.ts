import { Component } from '@angular/core';
import { NaPipe } from '../../pipe/na.pipe';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [NaPipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {
  firstName:string = "angular";
  state:string=''


}
