import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Shell } from '@app/shell/shell.service';
import { RegistrationComponent } from './registration.component';
import { EmailVerificationComponent } from './email-verification/email-verification.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'register',
      component: RegistrationComponent,
      data: { title: 'Register' },
    },
    {
      path: 'verify-email',
      component: EmailVerificationComponent,
      data: { title: 'Verify Email' },
    },
    {
      path: 'sign-in',
      component: SignInComponent,
      data: { title: 'Sign In' },
    },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrationRoutingModule {}
