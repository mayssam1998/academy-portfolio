import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about-card',
  standalone: true,
  templateUrl: './about-card.component.html',
  styleUrl: './about-card.component.scss'
})
export class AboutCardComponent {
  @Input() icon = '';
  @Input() title = '';
  @Input() line1 = '';
  @Input() line2 = '';
}