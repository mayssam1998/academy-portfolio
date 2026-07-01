import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  // Project data array
  projects = [
    {
      title: 'Project One',
      image: 'project-1.png',
      githubUrl: 'https://github.com/',
      demoUrl: 'https://github.com/'
    },
    {
      title: 'Project Two',
      image: 'project-2.png',
      githubUrl: 'https://github.com/',
      demoUrl: 'https://github.com/'
    },
    {
      title: 'Project Three',
      image: 'project-3.png',
      githubUrl: 'https://github.com/',
      demoUrl: 'https://github.com/'
    }
  ];

  constructor() {
    console.log('✅ Projects component loaded!');
  }

  // Function: Open GitHub
  openGithub(url: string) {
    window.open(url);
  }

  // Function: Open Live Demo
  openLiveDemo(url: string) {
    window.open(url);
  }
}