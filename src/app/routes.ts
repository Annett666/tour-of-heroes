import {HeroesComponent} from "./components/heroes/heroes.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {HeroDetailComponent} from "./components/hero-detail/hero-detail.component";

export const Routes = [
  { path: 'heroes', component: HeroesComponent },
  // { path: '', redirectTo: 'heroes', pathMatch: 'full' }
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];
