import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginPage } from './pages/login/login.page';
import { MoviesPage } from './pages/movies/movies.page';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SideMenuComponent } from './components/side.menu/side.menu.component';
import { ApiService } from './services/api.service';
import { AuthService } from './services/auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddMoviePage } from './pages/add.movie/add.movie.page';
import { FormsModule } from '@angular/forms';
import { EditMoviePage } from './pages/edit.movie/edit.movie.page';
import { DetailMoviePage } from './pages/detail.movie/detail.movie.page';
import { TokenInterceptor } from './interceptors/auth.token.interceptor';

@NgModule({
  declarations: [AppComponent, LoginPage, MoviesPage, SideMenuComponent, NavbarComponent, AddMoviePage, EditMoviePage, DetailMoviePage],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, ApiService, AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent],
})
export class AppModule {}
