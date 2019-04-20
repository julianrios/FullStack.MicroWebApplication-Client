import { Component, OnInit } from '@angular/core';

import { Profile } from '../profile';
import { ProfileService } from '../profile/profile.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css']
})
export class ProfileDetailComponent implements OnInit {
  // @Input() profile: Profile;

  profile: Profile;

  constructor(
    private profileService : ProfileService,
    private route: ActivatedRoute,
    private location: Location,
    ) { }

  ngOnInit() {
    this.getProfile();
  }
  private getProfile() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.profileService.getProfile(id).subscribe(profile => this.profile = profile);
  }
}
