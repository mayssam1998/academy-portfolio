import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { ProjectsComponent } from '../projects/projects.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutComponent, ProjectsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  openCV() {
    window.open('assets/resume-example.pdf', '_blank');
  }

  contactInfo() {
    window.location.href = 'mailto:yourmail@example.com';
  }

  openLinkedIn() {
    window.open('https://linkedin.com/', '_blank');
  }

  openGithub() {
    window.open('https://github.com/', '_blank');
  }
}