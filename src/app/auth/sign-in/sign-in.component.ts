import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;
  isLoading: boolean = false;
  submitted: boolean = false;
  signInError: string = '';

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.signInForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

    var cachedEmail: string = window.localStorage.getItem('emailForSignIn');
    if (cachedEmail) {
      this.f.email.setValue(cachedEmail);
      window.localStorage.removeItem('emailForSignIn');
    }
  }

  get f() {
    return this.signInForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    this.isLoading = true;
    this.signInError = '';

    if (this.signInForm.invalid) {
      this.isLoading = false;
      return;
    }

    this.signIn(this.f.email.value, this.f.password.value);
  }

  signIn(email: string, password: string): void {
    this.authService
      .signIn(email, password)
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe(
        (data: any) => {
          this.router.navigate(['/trophies']);
        },
        (error: any) => {
          this.signInError = error;
        }
      );
  }
}
