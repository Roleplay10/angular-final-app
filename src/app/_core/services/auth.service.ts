import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly serverUrl = 'https://reqres.in/api';

  constructor(
    private httpClient: HttpClient,
  ) { }

  login(body: { email: any; password: any; }): Observable<any> {
    return this.httpClient.post(`${this.serverUrl}/login`, body);
  }
  register(body:{ email: any; password: any; }): Observable<any>
    {
      return this.httpClient.post(`${this.serverUrl}/login`, body);
    }
}
