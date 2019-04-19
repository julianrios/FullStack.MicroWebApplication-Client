import { Component } from '@angular/core';
import { Profile } from './profile/profile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MoneyThyme';
  profile: Profile={name:"mb"};
}
