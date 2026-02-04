
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
  // Component logic here
}
