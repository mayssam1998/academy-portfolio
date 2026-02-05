import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss']
})
export class Hero {

  getImagePath(filename: string): string {
    return `assets/${filename}`;
  }
  downloadCV() {
    window.open('assets/resume-example.pdf', '_blank');
  }

  scrollToContact() {
    // If you have a contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  goToLinkedIn() {
    window.open('https://www.linkedin.com/in/reem-makarem-89468a2bb', '_blank');
  }

  goToGitHub() {
    window.open('https://github.com/', '_blank');
  }
}
