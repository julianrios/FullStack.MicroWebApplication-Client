import { Component, OnInit } from '@angular/core';
import { Profile } from './profile';
import { ProfileServiceService } from './profile-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
profile: Profile={name:"mb"};

  constructor(private profileService: ProfileServiceService) { }

  ngOnInit() {
    this.profileService.getProfile().subscribe(data => {
      this.profile = data;
    });
  }

}
