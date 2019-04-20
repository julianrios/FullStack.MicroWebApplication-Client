import { Injectable } from '@angular/core';
import { Profile } from '../profile';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
private profileUrl = 'https://moneythyme.herokuapp.com/profiles/1';
  constructor(private http: HttpClient) { }

getProfile(): Observable<Profile> {
    return this.http.get<Profile>(this.profileUrl);
}
}
