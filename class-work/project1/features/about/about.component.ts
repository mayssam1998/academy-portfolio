import { Component } from '@angular/core';
import { AboutCardComponent } from '../../shared/components/about-card/about-card.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AboutCardComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  aboutCards = [
    {
      icon: 'assets/experience.png',
      title: 'Experience',
      line1: '4+ years',
      line2: 'Web Development'
    },
    {
      icon: 'assets/education.png',
      title: 'Education',
      line1: 'B.Sc. Bachelors Degree',
      line2: 'University Name'
    }
  ];
}