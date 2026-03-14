import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  openCV() {
    window.open('assets/resume-example.pdf', '_blank');
  }

  goToContact() {
    window.location.href = 'mailto:yourmail@example.com';
  }

  openLinkedIn() {
    window.open('https://linkedin.com/', '_blank');
  }

  openGithub() {
    window.open('https://github.com/', '_blank');
  }
}