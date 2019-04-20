import { Component, OnInit, Input } from '@angular/core';

import { Profile } from '../profile';
import { ProfileService } from '../profile/profile.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'profiles',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css']
})
export class ProfileDetailComponent implements OnInit {
  @Input() profile: Profile;

  // profile: Profile;

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

  goBack(): void {
    [RouterLink] = "[`/profiles`]"
  }
}
