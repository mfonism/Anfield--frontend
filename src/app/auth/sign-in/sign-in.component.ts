import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { finalize } from 'rxjs/operators';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  next_url: string;

  signInForm: FormGroup;
  isLoading: boolean = false;
  submitted: boolean = false;
  signInError: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.routeBasedOnAuthUserState();

    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.next_url = params['next'];
    });
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

  routeBasedOnAuthUserState() {
    if (this.authService.isUserSignedIn()) {
      // is registered * is verified * is signed-in
      // stay signed in
      this.router.navigate(['/trophies']);
    } else if (this.authService.isUserEmailVerified()) {
      // is registered * is verified
      // not signed-in
      // can sign in
    } else if (this.authService.isUserRegistered()) {
      // is registered
      // not signed-in
      // can sign in
    } else {
      // not signed-in
      // can sign in
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
          if (this.next_url) {
            this.router.navigate([this.next_url]);
          }
          this.router.navigate(['/trophies']);
        },
        (error: any) => {
          this.signInError = error;
        }
      );
  }
}
