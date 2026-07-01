import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile {

  userName = 'Your Name';
  userRole = 'Fullstack Developer';

 
  downloadCV() {
    window.open('resume-example.pdf');
  }


  openLinkedIn() {
    window.open('https://linkedin.com/');
  }


  openGitHub() {
    window.open('https://github.com/');
  }


  goToContact() {
    // Scroll to contact section or navigate
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  }
}