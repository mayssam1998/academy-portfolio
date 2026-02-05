
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,  // ← MUST HAVE THIS
  imports: [CommonModule], // ← NEEDS IMPORTS ARRAY
  templateUrl: './about.html',
  styleUrls: ['./about.scss']
})
export class About {
  experienceYears: number = 4;
  experienceField: string = 'Web Development';

  educationDegree: string = 'B.Sc. Computer Engineering';
  educationInstitution: string = 'Lebanese American University';

  aboutText: string = `Senior Computer Engineering student at Lebanese American University with a Math Minor and Honors Program.
  Passionate about full-stack development, machine learning, and creating innovative solutions.
  Experienced in various web technologies and frameworks with a strong foundation in algorithms and data structures.`;

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

