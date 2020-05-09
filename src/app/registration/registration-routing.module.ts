import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Shell } from '@app/shell/shell.service';
import { RegistrationComponent } from './registration.component';

const routes: Routes = [
  Shell.childRoutes([{ path: 'register', component: RegistrationComponent, data: { title: 'Register' } }]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrationRoutingModule {}
