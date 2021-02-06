import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, throwError } from 'rxjs';
import {catchError, map, retry} from 'rxjs/operators';
import { Movie, Tab } from '../interfaces/movie';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private jsonDataUrl = 'assets/data.json';
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  // share movie details
  private movieSubj = new BehaviorSubject(null);
  sharedMovieObj = this.movieSubj.asObservable();
  nextMovieDetails(movie: Movie) {
    this.movieSubj.next(movie);
  }

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie> {
    return this.http.get<Movie>(this.jsonDataUrl).pipe(map(data => {
      const moviesList = data['results'];
      return moviesList.map((movie: any, index) => {
        return {
          title: movie.Title,
          year: movie.Year,
          imdbID: movie.imdbID,
          type: movie.Type,
          poster: movie.Poster,
          id: index
        };
      });
    }),
      catchError(this.handleError));
  }

  updateMovie(id, movie): Observable<Movie> {
    return this.http
      .put<Movie>(this.jsonDataUrl + '/' + id, JSON.stringify(movie), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  handleError(error: HttpErrorResponse){
    console.log('handleError', error.message);
    return throwError(error.message);
  }

}
