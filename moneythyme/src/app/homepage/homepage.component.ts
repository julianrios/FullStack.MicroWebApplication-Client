import {Component, Input, OnInit} from '@angular/core';
import { Profile} from '../profile';
import { ProfileService} from '../services/profile.service';
import { AccountService} from '../services/account.service';
import { Account} from '../account';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  profile: Profile;
account: Account;

  constructor(
    private profiles: ProfileService,
    private accounts: AccountService,
  ) { }

  ngOnInit() {
  }

  createProfile(name: string) {
    this.profiles.createProfile({name} as Profile).subscribe(profile => {this.profiles.createProfile(profile); });
  }

}
