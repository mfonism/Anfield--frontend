import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Shell } from '@app/shell/shell.service';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'not-found',
      component: NotFoundComponent,
      data: { title: '404 - Not Found' },
    },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErrorsRoutingModule {}
