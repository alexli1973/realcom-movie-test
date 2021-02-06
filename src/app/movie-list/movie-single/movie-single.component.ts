import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../shared/interfaces/movie';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-movie-single',
  templateUrl: './movie-single.component.html',
  styleUrls: ['./movie-single.component.scss']
})
export class MovieSingleComponent implements OnInit {

  @Input()
  movie: Movie;
  isEditing: boolean;
  inputValue: string;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.isEditing = false;
    this.inputValue = '';
  }

  shareMovieDetails(movie: Movie) {
    this.dataService.nextMovieDetails(movie);
  }

  enableEdit() {
    this.isEditing = true;
  }

  valueChanged() {
    this.isEditing = false;
    // update server bellow
    // this.dataService.updateMovie(this.movie.id, this.movie);
    // it is required to inform the parent component that the data has changed and again make a GET request to the server
  }

  changeCanceled() {
    this.isEditing = false;
  }
}
