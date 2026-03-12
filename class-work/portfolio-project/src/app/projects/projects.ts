import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ICategory, IProject } from '../interfaces/project';
import { ProjectsService } from '../services/projects'
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class ProjectsComponent implements OnInit {
  allProjects: IProject[] = [];
  projects: IProject[] = [];
  categories: ICategory[] = [];
  selectedCategoryIds: number[] = [];

  constructor(private projectsService: ProjectsService) {}

  ngOnInit(): void {
    this.loadCategories();
    this.loadProjects();
  }

  loadCategories(): void {
    this.projectsService.getCategories().subscribe({
      next: (cats) => {
        console.log('categories:', cats);
        this.categories = cats;
      },
      error: (err) => console.error('categories error:', err),
    });
  }

  loadProjects(): void {
    this.projectsService.getProjects().subscribe((projects: IProject[]) => {
      this.allProjects = projects;
      this.projects = projects;
    });
  }

  getCategoryName(categoryId: number): string {
    return this.categories.find((c: ICategory) => c.id === categoryId)?.name ?? 'Unknown';
  }

  onSelectionChange(event: Event): void {
    const select = event.target as HTMLSelectElement;
    this.selectedCategoryIds = Array.from(select.selectedOptions).map((o) => +o.value);

    if (this.selectedCategoryIds.length === 0) {
      this.projects = this.allProjects; // no filter → show all
    } else {
      this.projects = this.allProjects.filter((project) =>
        project.categoryIds.some((id) => this.selectedCategoryIds.includes(id)),
      );
    }
  }
  openUrl(url: string): void {
    window.open(url, '_blank');
  }

  onImgError(event: Event): void {
    console.error('Image failed to load:', (event.target as HTMLImageElement).src);
  }
}
