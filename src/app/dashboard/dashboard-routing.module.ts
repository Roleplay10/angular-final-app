import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { FilmPageComponent } from './film-page/film-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { component: DashboardPageComponent, path: '' },
  {
    path: 'film-page',
    component: FilmPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
