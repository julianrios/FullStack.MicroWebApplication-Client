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
  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.getProfiles();
  }

  // private getProfile() {
  //   this.profileService.getProfile().subscribe(profile => this.profile = profile);
  // }

  private getProfiles() {
    this.profileService.getProfiles().subscribe(data => this.profiles = data);
  }

  private deleteProfile(profile: Profile) {
    this.profiles = this.profiles.filter(p => p !== profile);
    this.profileService.deleteProfile(profile).subscribe(profile => this.profile = profile);
  }
}
