import { Component, OnDestroy, OnInit } from '@angular/core';

import {DataService} from '../shared/services/data.service';
import {Movie, Tab} from '../shared/interfaces/movie';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit, OnDestroy {

  btnStatus = false;
  isSortedByAsc = true;
  isSortedByDesc = false;
  sortAlphaDown = 'bi-sort-alpha-down';
  searchText: string;
  filterVal = '';
  tabs: Tab = {};
  movies: Movie[] = [];
  cloneMovies: Movie[] = []; // bug fixed for sorting  - needs to be moved to sharing service

  dataSubsc: Subscription;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.refreshData();
  }

  ngOnDestroy(): void {
    this.dataSubsc.unsubscribe();
    // throw new Error('Method not implemented.');
  }

  clearFilters() {
    this.filterVal = '';
    this.searchText = '';
    this.movies = [...this.cloneMovies];
    if (this.isSortedByDesc) { this.sortByAsc(); }
  }
// sortByAsc + sortByDesc it needs to be rewritten - start
// move to service.  replace with 1 button
  sortByAsc() {
    this.movies.sort((a, b) => 0 - (a.title.slice(0, 1).toLowerCase() > b.title.slice(0, 1).toLowerCase() ? -1 : 1));
    this.isSortedByAsc = true;
    this.isSortedByDesc = false;
  }

  sortByDesc() {
    this.movies.sort((a, b) => 0 - (a.title.slice(0, 1).toLowerCase() > b.title.slice(0, 1).toLowerCase() ? 1 : -1));
    this.isSortedByDesc = true;
    this.isSortedByAsc = false;
  }
  // sortByAsc + sortByDesc it needs to be rewritten - end

  refreshData() {
    this.dataSubsc = this.dataService.getMovies().subscribe(data => {
      this.filterVal = '';
      // @ts-ignore
      this.movies = data;
      // @ts-ignore
      this.cloneMovies = data; // bug fixed for sorting  - needs to be moved to sharing service
      this.tabs = this.buildTabs(data);
      this.sortByAsc();
    });
  }

  private buildTabs(movies) {
    const nonUniqTabs = [];
    movies.map(elem => nonUniqTabs.push(elem.type));
    return nonUniqTabs.reduce((acc, val) => {
      acc[val] = acc[val] === undefined ? 1 : acc[val] += 1;
      return acc;
    }, {});
  }

  tabChanged(filterVal: string) {
    // bug fixed for sorting  - needs to be moved to sharing service
    this.movies = this.cloneMovies.filter(elem => elem.type === filterVal);
    this.filterVal = filterVal;
  }

  // applyFilter(filterParam, data) {
  //   return data.filter(movie => movie.type === filterParam);
  // }
  viewChanged(event: boolean) {
    this.btnStatus = !this.btnStatus;
  }
}
