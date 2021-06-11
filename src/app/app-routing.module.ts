import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AddMoviePage } from './pages/add.movie/add.movie.page';
import { DetailMoviePage } from './pages/detail.movie/detail.movie.page';
import { EditMoviePage } from './pages/edit.movie/edit.movie.page';
import { LoginPage } from './pages/login/login.page';
import { MoviesPage } from './pages/movies/movies.page';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPage,
  },
  {
    path: 'movies',
    component: MoviesPage,
  },
  {
    path: 'movies/add',
    component: AddMoviePage,
  },
  {
    path: 'movie/edit/:id',
    component: EditMoviePage,
  },
  {
    path: 'movie/:id',
    component: DetailMoviePage,
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
