import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AuthrizationComponent} from "./authrization/authrization.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AuthrizationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projectdz9';
}
