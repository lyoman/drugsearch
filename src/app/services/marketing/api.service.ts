import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs'

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

  readonly BaseURI = 'https://chibuku.delta.co.zw:8091/api';
  readonly portBaseUrl = 'https://chibuku.delta.co.zw:8091/api';

  constructor(private http: HttpClient) { }

  readonly testUrl = 'https://chibuku.delta.co.zw:8091/api';


  public MarketGetData(endPoint: string): Observable<any> {
    console.log('whats happening', this.portBaseUrl + endPoint);
    return this.http.get(this.portBaseUrl + endPoint, this.httpOptions);
  }

  public MarketDeleteData(endPoint: string): Observable<any> {
    console.log('whats happening', this.portBaseUrl + endPoint);
    return this.http.delete(this.portBaseUrl + endPoint, this.httpOptions);
  }

  public MarketPostData(url: string, formData: any): Observable<any> {
    return this.http.post(this.portBaseUrl + url, formData, this.httpPutOptions);
  }

  public MarketPutData(url: string, formData: any): Observable<any> {
    return this.http.put(this.portBaseUrl + url, formData, this.httpPutOptions);
  }
  public GetData(endPoint: string): Observable<any> {
    return this.http.get(this.portBaseUrl + endPoint, this.httpOptions);
  }

}
