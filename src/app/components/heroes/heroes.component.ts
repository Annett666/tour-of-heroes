import {Component, OnInit} from '@angular/core';
import {Hero} from "../../classes/hero";
import {HEROES} from "../../constants/mock-heroes";
import {HeroService} from "../../services/hero.service";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes?: Hero[];
  selectedHero?: Hero;

  constructor(
    private heroService: HeroService,
  ) {
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

}