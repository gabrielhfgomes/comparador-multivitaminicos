import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  tokenUrl: string = environment.apiBaseUrl + environment.getTokenUrl;
  clientId: string = environment.clientId;
  clientSecret: string = environment.clientSecret;
  jwtHelper: JwtHelperService = new JwtHelperService();

  constructor(
    private http: HttpClient,
    private router: Router
    ) { }

  tryLogin(login: string, password: string): Observable<any> {
    const params = new HttpParams()
            .set('username', login)
            .set('password', password)
            .set('grant_type', 'password');

    const headers = {
      'Authorization': 'Basic ' + btoa(`${this.clientId}:${this.clientSecret}`),
      'Content-Type': 'application/x-www-form-urlencoded'
    }

    return this.http.post(this.tokenUrl, params.toString(), { headers });
  }

  isAutheticated() : boolean {
    let token = this.getToken();
    if(token) {
      const isExpired = this.jwtHelper.isTokenExpired(token);
      return !isExpired;
    }
    return false;
  }

  getToken() {
    const token_string = localStorage.getItem('access_token');
    if(token_string) {
      return JSON.parse(token_string).access_token;
    }
    return null;
  }

  getAuthenticatedUser() {
    let token = this.getToken()
    if(token) {
      let username = this.jwtHelper.decodeToken(token).user_name;
      return username;
    }
    return null;
  }

  closeSession() {
    localStorage.removeItem('access_token');
    this.router.navigate(['/login']);
  }
}
