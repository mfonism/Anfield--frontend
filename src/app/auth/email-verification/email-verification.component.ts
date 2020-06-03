import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.component.html',
  styleUrls: ['./email-verification.component.scss'],
})
export class EmailVerificationComponent implements OnInit {
  email: string;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.email = history.state.email || 'the email address you provided';
  }
}
