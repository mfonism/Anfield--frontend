import { Injectable } from '@angular/core';
import { from } from 'rxjs';

import firebase from '../firebase-setup';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  private firebase: any;

  constructor() {
    this.firebase = firebase;
  }

  register(email: string, password: string) {
    return from(this.firebase.auth().createUserWithEmailAndPassword(email, password));
  }

  sendEmailVerification() {
    return from(this.firebase.auth().currentUser.sendEmailVerification());
  }
}
