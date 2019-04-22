import {Component, Input, OnInit} from '@angular/core';

import {AccountService} from '../accounts/account.service';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {Account} from '../account';


@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {
  @Input() accounts: Account;

  constructor(
    private accountService: AccountService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.getAccount();
  }

  private getAccount() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.accountService.getAccount(id).subscribe(account => this.accounts = account);
  }

}
