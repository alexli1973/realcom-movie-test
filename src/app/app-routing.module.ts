import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component';
import { MovieSingleComponent } from './movie-list/movie-single/movie-single.component';
import {MovieListComponent} from './movie-list/movie-list.component';
import {MoviePageComponent} from './movie-page/movie-page.component';


const routes: Routes = [
 {path: '', component: MovieListComponent},
 // {path: 'movie', component: MovieSingleComponent},
 {path: 'movie/:id', component: MoviePageComponent},
 // {path: 'login', component: LoginPageComponent},
  // {path: 'dashboard', loadChildren: () => import('./admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)},
 // {path: 'dashboard', loadChildren: './admin-layout/admin-layout.module#AdminLayoutModule', canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
