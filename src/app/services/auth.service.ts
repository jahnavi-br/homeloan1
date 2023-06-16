import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl: string = 'https://localhost:7294/api/';

  constructor(private http: HttpClient) { }

  register(userObj: any) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(this.baseUrl + 'Register/register', userObj, { headers });
  }

  userlogin(userloginObj: any) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(this.baseUrl + 'Register/authenticate', userloginObj, { headers });
  }

  adminlogin(adminloginObj: any) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(this.baseUrl + 'Register/authenticate', adminloginObj, { headers });
  }
}
