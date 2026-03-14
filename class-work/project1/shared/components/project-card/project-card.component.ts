import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  standalone: true,
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  @Input() title = '';
  @Input() image = '';
  @Input() github = '';
  @Input() demo = '';

  openLink(url: string) {
    window.open(url, '_blank');
  }
}