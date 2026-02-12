import {Component} from '@angular/core';
import { Navbar } from './navbar/navbar';


@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  standalone: true,
  imports: [Navbar]
})
export class App {
  intro: string = "Class work: navbar";
}