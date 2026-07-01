import { Routes } from '@angular/router';
import { Profile } from './features/profile/profile';
import { About } from './features/about/about';
import { Projects } from './features/projects/projects';


export const routes: Routes = [
  { path: '', component: Profile },
  { path: 'about', component: About },
  { path: 'projects', component: Projects },
  { path: '**', redirectTo: '' }
];