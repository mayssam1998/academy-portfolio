import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
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

  openLink(url: string) {
    window.open(url, '_blank');
  }
}