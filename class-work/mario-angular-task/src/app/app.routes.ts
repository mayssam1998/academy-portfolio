import { Routes } from '@angular/router';

import { Home } from './features/home/home';
import { About } from './features/about/about';
import { Project } from './features/project/project';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'projects', component: Project },
];