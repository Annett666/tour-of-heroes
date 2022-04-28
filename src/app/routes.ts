import {HeroesComponent} from "./components/heroes/heroes.component";

export const Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: '', redirectTo: 'heroes', pathMatch: 'full' }
];
