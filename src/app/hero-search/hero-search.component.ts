import { Hero } from './../hero';
import { Observable, Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss']
})
export class HeroSearchComponent implements OnInit {
  heroes$ !: Observable<Hero[]>
  searchTerms :Subject<string> = new Subject()

  constructor(private _heroService: HeroService) { }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
          // wait 300ms after each keystroke before considering the term
      debounceTime(300),
       // ignore new term if same as previous term
      distinctUntilChanged(),

       // switch to new search observable each time the term changes
      switchMap( (term:string) => this._heroService.searchHeroes(term))
    )
  }

  // Push a search term into the observable stream.
  search(searchTerm: string) {
    this.searchTerms.next(searchTerm)
  }

}
