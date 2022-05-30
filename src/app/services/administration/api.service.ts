import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'text/plain',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token')

    })
  };

  httpPutOptions = {
    headers: new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token')

    })
  };

  readonly BaseURI = 'http://10.2.10.117/api';
  readonly portBaseUrl = 'http://10.2.10.117:8095/api';

  constructor(private http: HttpClient) { }

  readonly testUrl = 'http://10.2.10.117:8095/api';


  public RegGetData(endPoint: string): Observable<any> {
    console.log('whats happening', this.portBaseUrl + endPoint);
    return this.http.get(this.portBaseUrl + endPoint, this.httpOptions);
  }

  public RegDeleteData(endPoint: string): Observable<any> {
    console.log('whats happening', this.portBaseUrl + endPoint);
    return this.http.delete(this.portBaseUrl + endPoint, this.httpOptions);
  }

  public RegPostData(url: string, formData: any): Observable<any> {
    return this.http.post(this.portBaseUrl + url, formData, this.httpPutOptions);
  }

  public SalesPutData(url: string, formData: any): Observable<any> {
    return this.http.put(this.portBaseUrl + url, formData, this.httpPutOptions);
  }
}
