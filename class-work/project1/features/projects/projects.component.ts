import { Component } from '@angular/core';
import { ProjectCardComponent } from '../../shared/components/project-card/project-card.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Project One',
      image: 'assets/project-1.png',
      github: 'https://github.com/',
      demo: 'https://github.com/'
    },
    {
      title: 'Project Two',
      image: 'assets/project-2.png',
      github: 'https://github.com/',
      demo: 'https://github.com/'
    },
    {
      title: 'Project Three',
      image: 'assets/project-3.png',
      github: 'https://github.com/',
      demo: 'https://github.com/'
    }
  ];
}