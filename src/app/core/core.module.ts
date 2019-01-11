import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { BsNavbarComponent } from './components/bs-navbar/bs-navbar.component';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([])
  ],
  declarations: [
    BsNavbarComponent,
    HomeComponent,
    LoginComponent,        
  ],schemas:[NO_ERRORS_SCHEMA],
  exports: [
    BsNavbarComponent
  ]
})
export class CoreModule { }
