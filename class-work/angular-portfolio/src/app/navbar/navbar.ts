import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class NavbarComponent {

  
  isScrolled     = false;
  isMobileOpen   = false;
  activeSection  = 'home';

  
  @Output() scrollRequest = new EventEmitter<string>();

  
  navLinks = [
    { id: 'home',     label: 'Home'     },
    { id: 'projects', label: 'Work'     },
    { id: 'skills',   label: 'Skills'   },
    { id: 'contact',  label: 'Contact'  }
  ];

  
  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 40;
    this.updateActiveSection();
  }

  
  toggleMobileMenu(): void {
    this.isMobileOpen = !this.isMobileOpen;
  }

  
  navigateTo(sectionId: string): void {
    this.activeSection = sectionId;
    this.isMobileOpen  = false;
    this.scrollRequest.emit(sectionId);
  }

  
  private updateActiveSection(): void {
    const sections = ['home', 'projects', 'skills', 'contact'];
    for (const id of [...sections].reverse()) {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= 120) {
        this.activeSection = id;
        break;
      }
    }
  }
}