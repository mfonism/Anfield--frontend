import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';

import { RegistrationService } from './registration.service';
import { emailPattern, MustMatch } from './validators';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  isLoading: boolean = false;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder, private registrationService: RegistrationService) {}

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.pattern(emailPattern)]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', Validators.required],
      },
      {
        validator: MustMatch('password', 'confirmPassword'),
      }
    );
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registrationForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    this.isLoading = true;

    if (this.registrationForm.invalid) {
      this.isLoading = false;
      return;
    }

    this.register(this.f.email.value, this.f.password.value);
  }

  register(email: string, password: string): void {
    this.registrationService
      .register(email, password)
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe(
        (data: any) => {
          console.log('Successfully registered');
          this.sendEmailVerification();
          window.alert('Verification email sent');
        },
        (error: any) => {
          console.log(error);
        }
      );
  }

  sendEmailVerification(): void {
    this.registrationService.sendEmailVerification();
  }
}
