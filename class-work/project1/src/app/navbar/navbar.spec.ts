import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar'; // Fixed import name

describe('NavbarComponent', () => { // Fixed describe name
  let component: NavbarComponent; // Fixed type
  let fixture: ComponentFixture<NavbarComponent>; // Fixed type

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarComponent] // Fixed import
    })
      .compileComponents();

    fixture = TestBed.createComponent(NavbarComponent); // Fixed component name
    component = fixture.componentInstance;
    fixture.detectChanges(); // Fixed: changed from whenStable() to detectChanges()
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
