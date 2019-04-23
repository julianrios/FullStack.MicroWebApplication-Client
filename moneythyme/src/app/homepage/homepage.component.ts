import {Component, Input, OnInit} from '@angular/core';
import { Profile} from '../profile';
import { ProfileService} from '../services/profile.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
@Input() profile: Profile;

  constructor(
    private profiles: ProfileService,
  ) { }

  ngOnInit() {
  }

  createProfile(name: string) {
    this.profiles.createProfile({name} as Profile).subscribe(profile => {this.profiles.createProfile(profile); });
  }
}
