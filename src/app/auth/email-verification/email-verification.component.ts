import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.component.html',
  styleUrls: ['./email-verification.component.scss'],
})
export class EmailVerificationComponent implements OnInit {
  email: string;

  constructor(private authService: AuthService, private router: Router) {
    if (this.authService.isUserSignedIn()) {
      // is registered * is verified * is signed-in
      // already verified
      this.router.navigate(['/trophies']);
    } else if (this.authService.isUserEmailVerified()) {
      // is registered * is verified
      // already verified
      this.router.navigate(['/trophies']);
    } else if (this.authService.isUserRegistered()) {
      // is registered
      // can verify
    } else {
      // needs register
      this.router.navigate(['/register']);
    }
  }

  ngOnInit(): void {
    this.email = history.state.email || 'the email address you provided';
  }
}
