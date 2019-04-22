import { Component, OnInit } from '@angular/core';
import { Profile} from '../profile';
import { ProfileService} from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: Profile;
  profiles: Profile[];
  deletedProfile: Boolean;
  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.getProfiles();
    this.deleteProfile();
  }

  // private getProfile() {
  //   this.profileService.getProfile().subscribe(profile => this.profile = profile);
  // }

  private getProfiles() {
    this.profileService.getProfiles().subscribe(data => this.profiles = data);
  }

  private deleteProfile() {
    this.profileService.deleteProfile().subscribe(profile => this.deletedProfile = profile);
  }
}
