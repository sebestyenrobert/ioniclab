import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Movie } from 'src/app/models/movie.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-edit-movie',
  templateUrl: 'edit.movie.page.html',
})

export class EditMoviePage {

  movie = new Movie();
  private routeSub: Subscription;
  private id: number;

  constructor(private apiSvc: ApiService, private route: ActivatedRoute, private navCtrl: NavController, private router: Router) {}

  ionViewWillEnter() {

    this.routeSub = this.route.params.subscribe(params => {
      this.id = params.id;
    });

    this.apiSvc.get(`api/movie/${this.id}`).subscribe((response: Movie) => {
      console.log(response);
      this.movie = response;
    });

  }

  updateMovie(movie: Movie) {
    console.log(movie);
    this.apiSvc.put(`api/Movie/${this.id}`, movie).subscribe(() => {
      this.router.navigateByUrl('movies');
    });
  }
}
