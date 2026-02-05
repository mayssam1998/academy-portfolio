
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrls: ['./about.scss']
})
export class About {
  experienceYears: number = 4;
  experienceField: string = 'Web Development';

  educationDegree: string = 'B.Sc. Computer Engineering';
  educationInstitution: string = 'Lebanese American University';

  aboutText: string = `I am Reem, a computer engineering student focused on software development and signal processing.
          I build projects in Java,C++, and Python, and I’m especially interested
          in applying tech to astronomy. Outside of coding, I like stargazing.`;

  skills: string[] = [
    'Angular',
    'TypeScript',
    'JavaScript',
    'HTML/CSS',
    'Node.js',
    'Python',
    'Java',
    'React',
    'Git'
  ];

  // Methods
  showExperienceDetails() {
    alert(`Experience: ${this.experienceYears}+ years in ${this.experienceField}`);
  }

  showEducationDetails() {
    alert(`Education: ${this.educationDegree} at ${this.educationInstitution}`);
  }

  // Optional: Download CV method
  downloadCV() {
    window.open('assets/resume.pdf', '_blank');
  }


}

