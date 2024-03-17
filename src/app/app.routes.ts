import { Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routeConfig: Routes = [
  {
    path: 'heroes',
    component: HeroesComponent,
    title: 'Hero title',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    title: 'Dashboard Page',
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];
export default routeConfig;
