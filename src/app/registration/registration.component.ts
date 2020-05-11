import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { RegistrationService } from './registration.service';
import { emailPattern, MustMatch } from './validators';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  submitted = false;

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

  onSubmit() {
    this.submitted = true;

    if (this.registrationForm.invalid) {
      return;
    }

    this.registrationService.register(this.f.email.value, this.f.password.value);
  }
}
