import { Injectable } from '@angular/core';
import { Account } from '../account';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private profileUrl = 'https://moneythyme.herokuapp.com/accounts';
  constructor(private http: HttpClient) { }

  getAccount(id: number): Observable<Account> {
    const url = `${this.profileUrl}/${id}`
    return this.http.get<Account>(url);
  }

  getAccounts(profile_id: number): Observable<Account[]>{
    const url = `${this.profileUrl}/${profile_id}`
    return this.http.get<Account[]>(url);
  }
}
