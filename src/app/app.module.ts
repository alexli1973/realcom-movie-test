import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieSingleComponent } from './movie-list/movie-single/movie-single.component';
import { HttpClientModule } from '@angular/common/http';
import { MoviePageComponent } from './movie-page/movie-page.component';
import { ExtractYearPipe } from './shared/pipes/extract-year.pipe';
import { MenuComponent } from './menu/menu.component';
import { FilterByTypePipe } from './shared/pipes/filter-by-type.pipe';
import {FormsModule} from '@angular/forms';
import { SearchTextPipe } from './shared/pipes/search-text.pipe';
import { MovieTitleEditComponent } from './movie-list/movie-single/movie-title-edit/movie-title-edit.component';
import { AlertComponent } from './shared/components/alert/alert.component';


@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieSingleComponent,
    MoviePageComponent,
    ExtractYearPipe,
    MenuComponent,
    FilterByTypePipe,
    SearchTextPipe,
    MovieTitleEditComponent,
    AlertComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
