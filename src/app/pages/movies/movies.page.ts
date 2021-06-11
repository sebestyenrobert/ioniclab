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
    this.loadMovies();
  }

  goToAddMovie() {
    this.router.navigateByUrl('movies/add');
  }

  deleteMovie(movie: Movie) {
    this.apiSvc.delete(`api/Movie/${movie.id}`).subscribe(() => {
      this.loadMovies();
    });
  }

  goToEditMovie(movie: Movie) {
    this.router.navigateByUrl(`movie/edit/${movie.id}`);
  }

  goToMovieDetails(movie: Movie) {
    this.router.navigateByUrl(`movie/${movie.id}`);
  }

  detailMovie(movie: Movie) {}

  private loadMovies() {
    this.apiSvc.get('api/movie').subscribe((response: Array<Movie>) => {
      this.movies = response;
    });
  }
}

