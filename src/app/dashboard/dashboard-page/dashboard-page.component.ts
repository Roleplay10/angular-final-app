import { FilmService } from './../../_core/services/film.service';
import { FilmDataService } from './../../_core/services/film-data.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  filmList : any[]= [];
  filmTitle: string;
  filmDirector: string;
  filmLength: string;
  filmRating: string;
  filmReleaseDate: string;

  searchControl = new FormControl();

  constructor(
    private http: HttpClient,
    private router: Router,
    private filmsService: FilmService,
    private filmDataService: FilmDataService,
  ) { }

  ngOnInit(): void {
    this.filmsService.getFilms().subscribe((res) => {
      this.filmList = res
    });
  }
  navigateToFilmPage(filmInfo: any): void {
    this.filmDataService.selectedFilm = filmInfo;
    this.router.navigate(['dashboard/film-page'], { queryParams: { filmId: filmInfo.id } });
  }
  addNewFilm(): void {
    const filmInfo = {
      title: this.filmTitle,
      director : this.filmDirector,
      length : this.filmLength,
      rating : this.filmRating,
      releaseDate : this.filmReleaseDate
    }
    this.filmsService.addFilm(filmInfo).subscribe((res) => this.filmList.push(res));
  }
  sortList(property: string) {
    this.filmList.sort((a: { [x: string]: number; }, b: { [x: string]: number; }) => {
      if (a[property] < b[property]) {
        return -1;
      }
      if (a[property] > b[property]) {
        return 1;
      }
      return 0;
    });
  }
}
