import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';

import { AuthService } from '../auth.service';
import { emailPattern, MustMatch } from '../validators';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  isLoading: boolean = false;
  submitted: boolean = false;
  registrationError: string = '';

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.routeBasedOnAuthUserState();

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

  routeBasedOnAuthUserState() {
    if (this.authService.isUserSignedIn()) {
      // is registered * is verified * is signed-in
      // stay signed in
      this.router.navigate(['/trophies']);
    } else if (this.authService.isUserEmailVerified()) {
      // is registered * is verified
      // not signed-in
      // can register
    } else if (this.authService.isUserRegistered()) {
      // is registered
      // not signed-in
      // can register
    } else {
      // can register
    }
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registrationForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    this.isLoading = true;
    this.registrationError = '';

    if (this.registrationForm.invalid) {
      this.isLoading = false;
      return;
    }

    this.register(this.f.email.value, this.f.password.value);
  }

  register(email: string, password: string): void {
    this.authService
      .register(email, password)
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe(
        (data: any) => {
          window.localStorage.setItem('emailForSignIn', email);
          this.sendEmailVerification();
          this.router.navigate(['/verify-email'], { state: { email: email } });
        },
        (error: any) => {
          this.registrationError = error;
        }
      );
  }

  sendEmailVerification(): void {
    this.authService.sendEmailVerification();
  }
}
