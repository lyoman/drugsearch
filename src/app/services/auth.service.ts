import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private fb: FormBuilder, private http: HttpClient) { }

  httpUploadOptions = {
    headers: new HttpHeaders({
      'Accept': 'text/plain',
      // 'Content-Type': 'multipart/form-data',
      Authorization: 'Bearer ' + localStorage.getItem('token')

    })
  };

  httpOptionsPlant = {
    headers: new HttpHeaders({
      'Accept': 'text/plain',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token')

    })
  };

  httpOptions = {
    headers: new HttpHeaders({
      'Accept': '*/*',
      // 'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token'),
      'Access-Control-Allow-Origin': '*'
    })
  };


  httpPutOptions = {
    headers: new HttpHeaders({
      // 'Content-Type': 'multipart/form-data',
      Authorization: 'Bearer ' + localStorage.getItem('token')
    })
  };



  httpLogin = {
    headers: new HttpHeaders({
      'Accept': '*/*',
      // 'Content-Type': 'text/plain',
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*'
    })
  };



  httpRegister = {
    headers: new HttpHeaders({
      'Accept': 'text/plain',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  };

  readonly BaseURI = 'https://chibuku.delta.co.zw:8091/api';

  readonly testUrl = 'https://chibuku.delta.co.zw:8091/api';

  login(formData: any): Observable<any> {
    return this.http.post(this.BaseURI + '/login', formData, this.httpLogin);
  }

  otp(formData: any): Observable<any> {
    return this.http.post(this.BaseURI + '/verifyOTP', formData, this.httpLogin);
  }

  getUserProfile() {
    return this.http.get(this.testUrl + '/UserProfile');
  }

  getUserRoles(username: String) {
    console.log("Bearer "+JSON.parse(localStorage.getItem('token')  || '{}'));
    return this.http.get(this.testUrl + '/UserRole/GetUserRoles?userName='+username, this.httpOptions);
  }

  public submitRegistration(formData: any){
    return this.http.post(this.testUrl+ "/register", formData, this.httpOptions)
  }
}
