import { Component, OnDestroy, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { DataService } from '../shared/services/data.service';
import { Movie } from '../shared/interfaces/movie';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss']
})
export class MoviePageComponent implements OnInit, OnDestroy {
  movieSubsc: Subscription = new Subscription();
  movie: Movie;
  messageText: string;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.movieSubsc = this.dataService.sharedMovieObj.subscribe(movie => {
      if (movie) {
        this.movie = movie;
      } else {
        this.messageText = 'This is a demo version. Please go back to the main page and try again';
      }
    });
  }

  ngOnDestroy(): void {
    this.movieSubsc.unsubscribe();
  }

  backTo() {
    this.location.back();
  }
}
