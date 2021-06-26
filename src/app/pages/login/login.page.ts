import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AuthResponse } from 'src/app/models/auth.model';
import { Login } from 'src/app/models/login.model';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
  encapsulation: ViewEncapsulation.None
})

export class LoginPage {
  loginData = new Login();
  constructor(
    private router: Router,
    private apiSvc: ApiService,
    private authSvc: AuthService
  ){}
  logIn() {
    this.apiSvc.post('api/Authentication/login', this.loginData).subscribe((response: AuthResponse) => {
      this.authSvc.saveToken(response.token);
    });
  }
}
