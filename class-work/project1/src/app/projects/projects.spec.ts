import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  // Bonus: Add mobile menu toggle (for future enhancement)
  isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    console.log('Mobile menu toggled:', this.isMobileMenuOpen);
  }

  // Function to handle smooth scroll navigation
  scrollToSection(sectionId: string) {
    console.log(`Scrolling to ${sectionId}`);

    // For Angular routing, you'd use router.navigate
    // For smooth scroll on single page:
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
