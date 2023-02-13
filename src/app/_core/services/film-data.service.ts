import { Injectable } from '@angular/core';
import { Film } from '../models/film';

@Injectable({
  providedIn: 'root'
})
export class FilmDataService {

  selectedFilm: Film;
  constructor() { }
}
