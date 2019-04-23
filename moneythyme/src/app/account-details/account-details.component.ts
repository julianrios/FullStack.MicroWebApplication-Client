import {Component, Input, OnInit} from '@angular/core';

import {AccountService} from '../services/account.service';
import {ProfileService} from '../services/profile.service';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {Account} from '../account';
import {Profile} from '../profile';
import {ProfileDetailComponent} from '../profile-detail/profile-detail.component'
import {Location} from '@angular/common';



@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {
  account: Account;
  accounts: Account[];
  profile: Profile;

  constructor(
    private accountService: AccountService,

    private profileService: ProfileService,
    private route: ActivatedRoute,
    private location: Location,

  ) {
  }

  ngOnInit() {
    this.getAccount();
  }

  private getAccount() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.accountService.getAccount(id).subscribe(account => this.account = account);
  }

  public getThisProfileAccounts() {
    this.accountService.getAccounts(this.account.profileID).subscribe(accounts => this.accounts = accounts);
  }

  public deposit(amount: number) {
    const id = +this.route.snapshot.paramMap.get('id');
    this.accountService.deposit(id, amount).subscribe(account => this.account = account);
  }

  public withdraw(amount: number) {
    const id = +this.route.snapshot.paramMap.get('id');
    this.accountService.withdraw(id, amount).subscribe(account => this.account = account);
  }

  goBack(): void {
    this.location.back();
  }

  public deleteAccount(id: number) {
    this.accountService.deleteAccount(id).subscribe(account => this.account = account);
  }

}
