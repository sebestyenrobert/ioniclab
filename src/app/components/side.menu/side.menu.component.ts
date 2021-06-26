import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: 'side.menu.component.html',
})

export class SideMenuComponent {
  constructor(private authSvc: AuthService) {}
  logOut() {
    this.authSvc.removeToken();
  }
}
