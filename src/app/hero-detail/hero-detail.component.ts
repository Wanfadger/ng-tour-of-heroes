import { Hero } from './../hero';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  hero?:Hero

  constructor(private _activatedRoute: ActivatedRoute, private _heroService: HeroService, private location:Location ) { }

  ngOnInit(): void {
    this.getHero()
  }

  getHero() {
    const id = Number(this._activatedRoute.snapshot.paramMap.get("id"))
    this._heroService.getHero(id).subscribe(h => this.hero = h)
  }

  goBack() {
    this.location.back()
  }

  save() {
    if (this.hero) {
      this._heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }
  }

}
