import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { HomeComponent } from './common/home/home.component';

import { RentalModule } from './rental/rental.module';
import { AuthModule } from './auth/auth.module';

 const routes: Routes = [
  {path: 'car 2 rental', component: HomeComponent },
  {path: '', redirectTo: '/rentals', pathMatch: 'full' },
 /*  {path: 'rental', component: RentalComponent }, */
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent

  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    RentalModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
