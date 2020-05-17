import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(
    private formBuilder: FormBuilder,
    private registrationService: RegistrationService,
    private router: Router
  ) {}

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
          this.sendEmailVerification();
          this.router.navigate(['/verify-email'], { state: { email: email } });
        },
        (error: any) => {
          return;
        }
      );
  }

  sendEmailVerification(): void {
    this.registrationService.sendEmailVerification();
  }
}
