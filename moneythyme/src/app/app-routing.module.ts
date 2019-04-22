import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfileComponent} from './profile/profile.component';
import {AboutComponent} from './about/about.component';
import {NavbarComponent} from './navbar/navbar.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { AccountDetailsComponent } from './account-details/account-details.component';

const routes: Routes = [
  {path: 'profiles', component: ProfileComponent},
  {path: 'about', component: AboutComponent},
  {path: 'profiles/:id', component: ProfileDetailComponent},
  {path: 'accounts/:id', component: AccountDetailsComponent},
  {path: 'accounts/:profile_id', component: AccountDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
