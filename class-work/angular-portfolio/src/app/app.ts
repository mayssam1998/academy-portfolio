import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = 'angular-portfolio';

  heroName    = 'Nawar El Zein';
  heroRole    = 'Full-Stack Developer';
  heroTagline = 'Building scalable systems, secure architectures, and thoughtful developer tools.';

  projects = [
    {
      title: 'Exchain – Money Transfer Platform',
      category: 'FinTech / Full-Stack',
      description: 'A role-based money transfer system supporting agents, admins, and users with real-time notifications and map-based agent discovery.',
      tech: ['Laravel', 'React', 'MySQL', 'JWT', 'RBAC', 'Leaflet', 'PusherJS'],
      year: '2025'
    },
    {
      title: 'Babel – E-Library Management System',
      category: 'Enterprise Web App',
      description: 'Production-style digital library with automated workflows, background processing, notifications, and reporting.',
      tech: ['.NET Core', 'React TypeScript', 'SQL Server', 'Redis', 'SignalR', 'Hangfire'],
      year: '2025'
    },
    {
      title: 'Skyline – Real Estate Agency Platform',
      category: 'Full-Stack Web Application',
      description: 'Interactive property browsing platform with advanced filtering, favorites system, and integrated map-based property discovery.',
      tech: ['React.js', 'Node.js', 'MySQL', 'Leaflet', 'Nodemailer', 'Bcrypt'],
      year: '2024'
    }
  ];

  skills = [
    { name: 'C# / ASP.NET Core', level: 85 },
    { name: 'JavaScript / TypeScript', level: 90 },
    { name: 'React & Angular', level: 85 },
    { name: 'Laravel / Node.js', level: 80 },
    { name: 'SQL Databases', level: 85 },
    { name: 'Docker & DevOps', level: 75 }
  ];

  scrollToSection(sectionId: string): void {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  openEmailContact(): void {
    window.location.href = 'mailto:nawarelzein@gmail.com?subject=Portfolio%20Inquiry';
  }

  get currentYear(): number {
    return new Date().getFullYear();
  }
}