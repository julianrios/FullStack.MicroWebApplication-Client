import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfileComponent} from './profile/profile.component';
import {AboutComponent} from './about/about.component';
import {NavbarComponent} from './navbar/navbar.component';

const routes: Routes = [
  {path: 'profiles', component: ProfileComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
