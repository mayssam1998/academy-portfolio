import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProjectsService } from './projects';


describe('ProjectsService', () => {
  let service: ProjectsService;
  let httpMock: HttpTestingController;
  const base = 'https://my-json-server.typicode.com/christyantoun/frontend-session';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProjectsService],
    });
    service = TestBed.inject(ProjectsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpMock.verify());

  it('should fetch all projects', () => {
    service.getProjects().subscribe((p) => expect(p.length).toBe(2));
    httpMock.expectOne(`${base}/projects`).flush([{ id: 1 }, { id: 2 }]);
  });

  it('should fetch projects filtered by category', () => {
    service.getProjects([1, 2]).subscribe();
    const req = httpMock.expectOne((r) => r.url.includes('/projects'));
    expect(req.request.url).toContain('categoryId=1');
  });

  it('should fetch categories', () => {
    service.getCategories().subscribe((c) => expect(c).toBeTruthy());
    httpMock.expectOne(`${base}/categories`).flush([{ id: 1, name: 'Web' }]);
  });
});
