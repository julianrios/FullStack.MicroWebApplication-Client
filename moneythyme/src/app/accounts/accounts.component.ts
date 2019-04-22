import { Component, OnInit } from '@angular/core';
import {AccountService} from '../services/account.service';
import {Profile} from '../profile';
import {Account} from '../account';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  account: Account;
  accounts: Account[];
  profile: Profile;
  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.getAccounts();
  }

  private getAccounts() {
    this.accountService.getAccounts(this.profile.id).subscribe(data => this.accounts = data);
  }

}
