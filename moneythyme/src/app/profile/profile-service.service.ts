import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProfileServiceService {
private profileUrl = "https://moneythyme.herokuapp.com/profiles/1";
private http: HttpClient;
  constructor(http: HttpClient) { 
    this.http = http;
  }

  getProfile(): Observable<any>{
    return this.http.get(this.profileUrl);
  }
}
