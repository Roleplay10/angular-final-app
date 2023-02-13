import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.scss']
})
export class FilmCardComponent implements OnInit {

  @Input() film : any;

  @Output() clickedMore = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  navigateToFilmPage() {
    this.clickedMore.emit();
  }
}
