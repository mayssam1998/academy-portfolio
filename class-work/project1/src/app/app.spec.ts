import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app'; // This imports AppComponent

describe('AppComponent', () => { // Change from 'App' to 'AppComponent'
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent], // Change from App to AppComponent
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent); // Change here
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'academy-portfolio'`, () => { // Update title
    const fixture = TestBed.createComponent(AppComponent); // Change here
    const app = fixture.componentInstance;
    expect(app.title).toEqual('academy-portfolio'); // Match your actual title
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent); // Change here
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    // Check for your actual content, not 'Hello, project1'
    expect(compiled.querySelector('h1')?.textContent).toContain('academy-portfolio');
  });
});
