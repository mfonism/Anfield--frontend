import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '@shared';
import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './registration.component';
import { EmailVerificationComponent } from './email-verification/email-verification.component';

@NgModule({
  declarations: [RegistrationComponent, EmailVerificationComponent],
  imports: [CommonModule, RegistrationRoutingModule, ReactiveFormsModule, SharedModule],
})
export class RegistrationModule {}
