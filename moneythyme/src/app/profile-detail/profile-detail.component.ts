import { Component, OnInit, Input } from '@angular/core';

import { Profile } from '../profile';
import { ProfileService } from '../profile/profile.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Location } from '@angular/common';
import { Account} from '../account';
import { AccountService} from '../accounts/account.service';


@Component({
  selector: 'profiles',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css']
})
export class ProfileDetailComponent implements OnInit {
  @Input() profile: Profile;
  @Input() account: Account;
  @Input() accounts: Account[];

  // profile: Profile;

  constructor(
<<<<<<< HEAD
    private profileService : ProfileService,
=======
    private profileService: ProfileService,
    private accountService: AccountService,
>>>>>>> 8b3e3321b1b67c0484599b3990a313e3df534f4b
    private route: ActivatedRoute,
    private location: Location,
    ) { }

  ngOnInit() {
    this.getProfile();
    this.getAccounts();
  }
  private getProfile() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.profileService.getProfile(id).subscribe(profile => this.profile = profile);
  }
<<<<<<< HEAD

  private deleteProfile(profile: Profile) {
    const id = +this.route.snapshot.paramMap.get('id');

    // this.profiles = this.profiles.filter(p => p !== profile);
    this.profileService.deleteProfile(profile).subscribe(profile => this.profile = profile);
=======
  private getAccounts() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.accountService.getAccounts(id).subscribe(account => this.accounts = account);
>>>>>>> 8b3e3321b1b67c0484599b3990a313e3df534f4b
  }
}
