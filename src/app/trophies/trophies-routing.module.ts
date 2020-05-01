import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Shell } from '@app/shell/shell.service';
import { TrophiesComponent } from './trophies.component';
import { TrophyDetailComponent } from './trophy-detail.component';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'trophies/:id',
      component: TrophyDetailComponent,
      data: { title: 'Trophy Detail' },
    },
    {
      path: 'trophies',
      component: TrophiesComponent,
      data: { title: 'Trophies' },
    },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class TrophiesRoutingModule {}
