import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmDataService } from 'src/app/_core/services/film-data.service';
import { FilmService } from 'src/app/_core/services/film.service';
import { FilmCardComponent } from '../film-card/film-card.component';

@Component({
  selector: 'app-film-page',
  templateUrl: './film-page.component.html',
  styleUrls: ['./film-page.component.scss']
})
export class FilmPageComponent implements OnInit {

  filmTitle: string;
  filmDirector: string;
  filmLength: string;
  filmRating: string;
  filmReleaseDate: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private filmDataService: FilmDataService,
    private filmService: FilmService,
  ) {
    // get id from the url and use it to receive game details
    this.getFilmInfo(this.activatedRoute.snapshot.queryParams['filmId']);
  }

  ngOnInit(): void {
  }

  getFilmInfo(id: number): void {
    this.filmService.getFilmsInfo(id).subscribe({
      next: (response) => {
        this.filmTitle = response.title;
        this.filmDirector = response.director;
        this.filmLength = response.length;
        this.filmRating = response.rating;
        this.filmReleaseDate = response.releaseDate;
      }
    });
  }
  editFilm(): void {
    // we also need to send the id together with the updated information
    const filmInfo = {
      id: this.activatedRoute.snapshot.queryParams['filmId'],
      title: this.filmTitle,
      director: this.filmDirector,
      length: this.filmLength,
      rating: this.filmRating,
      releaseDate: this.filmReleaseDate
    }
    // We don't write anything in the subscribe method because we only want to send the updated info to the database
    this.filmService.updateFilm(filmInfo).subscribe({
      next: () => {
        this.router.navigate(['/dashboard']);
      }
    });
  }
  deleteFilm(): void {
    const filmId = this.activatedRoute.snapshot.queryParams['filmId'];
    this.filmService.deleteFilm(filmId).subscribe({
      next: () => {
        this.router.navigate(['/dashboard']);
      }
    });
  }

}
