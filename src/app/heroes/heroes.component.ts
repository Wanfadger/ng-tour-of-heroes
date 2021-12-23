import { HEROES } from './../mock-heroes';
import { Hero } from './../hero';
import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  public heroes?: Hero[]
  
  constructor(private _heroService: HeroService, public _messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes()
  }

  getHeroes(): void {
    this._heroService.getHeroes().subscribe(data => this.heroes = data);
  }

  add(name: string):void {
    name = name.trim();
    if (!name) { return; }
    this._heroService.addHero({ name } as Hero).subscribe(hero => {
      this.heroes?.push(hero);
    });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes?.filter(h => h !== hero);
    this._heroService.deleteHero(hero.id).subscribe();
  }

}
