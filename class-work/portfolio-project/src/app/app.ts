import { Component, signal } from '@angular/core';
import { About } from './about/about';
import { Profile } from './profile/profile';
import { Navbar } from './navbar/navbar';
import { ProjectsComponent } from './projects/projects';

@Component({
  selector: 'app-root',
  imports: [ About, Profile, Navbar, ProjectsComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('portfolio-project');
}
