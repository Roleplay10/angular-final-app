import { FilmCardComponent } from './film-card/film-card.component';
import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FilmPageComponent } from './film-page/film-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';

@NgModule({
  declarations: [FilmPageComponent,FilmCardComponent, DashboardPageComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NzCardModule,
    NzButtonModule,
    FormsModule,
    NzInputModule,
  ],
})
export class DashboardModule {}
