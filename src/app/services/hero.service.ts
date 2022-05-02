import { Injectable } from '@angular/core';
import {Hero} from "../classes/hero";
import {HEROES} from "../constants/mock-heroes";
import {Observable, of} from "rxjs";
import {MessageService} from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private messagesService: MessageService,
  ) { }

  getHeroes(): Observable<Hero[]> {
    this.messagesService.addMessage('HeroService: fetched heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messagesService.addMessage(`HeroService: fetched hero id=${id}`);
    // @ts-ignore
    return of(HEROES.find(hero => hero.id === id));
  }
}
