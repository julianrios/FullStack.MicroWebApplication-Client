import {Injectable} from '@angular/core';
import {Profile} from '../profile';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private profileUrl = 'https://moneythyme.herokuapp.com/profiles';

  constructor(private http: HttpClient) {
  }

  getProfile(id: number): Observable<Profile> {
    const url = `${this.profileUrl}/${id}`
    return this.http.get<Profile>(url);
  }

  getProfiles(): Observable<Profile[]> {
    const url = `${this.profileUrl}/allProfiles`
    return this.http.get<Profile[]>(url);
  }
}
