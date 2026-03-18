import { Component, signal } from '@angular/core';
import { RouterModule  } from '@angular/router';
import {Navbar} from './components/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterModule , Navbar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('first-project');
}
