import { ApplicationConfig, Component, CUSTOM_ELEMENTS_SCHEMA, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar'; 

import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App {
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes)
  ]
};
