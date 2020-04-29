import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Shell } from '@app/shell/shell.service';
import { TrophiesComponent } from './trophies.component';

const routes: Routes = [
  Shell.childRoutes([
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
