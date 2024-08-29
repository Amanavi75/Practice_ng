import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { StructuralDirComponent } from './components/structural-dir/structural-dir.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DataBindingComponent,StructuralDirComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular2';
}
