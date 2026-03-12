import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProject, ICategory } from '../interfaces/project';

@Injectable({
  providedIn: 'root',
})
export class Projects {
  private baseUrl = 'https://my-json-server.typicode.com/christyantoun/frontend-session';

  constructor(private http: HttpClient) {}

  getProjects(categoryIds?: number[]): Observable<IProject[]> {
    let url = `${this.baseUrl}/projects`;
    if (categoryIds && categoryIds.length > 0) {
      const params = categoryIds.map((id) => `categoryId=${id}`).join('&');
      url += `?${params}`;
    }
    return this.http.get<IProject[]>(url);
  }

  getCategories(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(`${this.baseUrl}/categories`);
  }
}
