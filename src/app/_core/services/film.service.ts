import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  private readonly serverUrl = 'http://localhost:3000';

  constructor(
    private httpClient: HttpClient,
  ) { }

  getFilms(): Observable<any> {
    return this.httpClient.get(`${this.serverUrl}/films`);
  }

  getFilmsInfo(id: number): Observable<any> {
    return this.httpClient.get(`${this.serverUrl}/films/${id}`);
  }

  addFilm(filmInfo: any): Observable<any> {
    return this.httpClient.post(`${this.serverUrl}/films`, filmInfo);
  }

  updateFilm(filmInfo: any): Observable<any> {
    return this.httpClient.put(`${this.serverUrl}/films/${filmInfo.id}`, filmInfo);
  }

  deleteFilm(filmId: number): Observable<any> {
    return this.httpClient.delete(`${this.serverUrl}/films/${filmId}`);
  }
}
