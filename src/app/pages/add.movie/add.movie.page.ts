import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Movie } from 'src/app/models/movie.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: 'add.movie.page.html',
})

export class AddMoviePage {
  movie = new Movie();

  constructor(private apiSvc: ApiService, private navCtrl: NavController) {}

  addMovie() {
    this.apiSvc.post('api/Movie', this.movie).subscribe(() => {
      this.navCtrl.pop();
    });
  }
}
