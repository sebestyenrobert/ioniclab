import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/movie.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-movies',
  templateUrl: 'movies.page.html',
  styleUrls: ['movies.page.scss'],
  encapsulation: ViewEncapsulation.None
})

export class MoviesPage {
  movies: Movie[];

  constructor(private apiSvc: ApiService, private router: Router) {}

  ionViewWillEnter() {
    this.apiSvc.get('api/movie').subscribe((response: Array<Movie>) => {
      this.movies = response;
    });
  }

  goToAddProduct() {
    this.router.navigateByUrl('movies/add');
  }
}

