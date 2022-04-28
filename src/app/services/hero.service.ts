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
}
