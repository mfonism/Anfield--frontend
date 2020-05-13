import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';

import firebase from '../firebase-setup';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  private firebase: any;

  constructor() {
    this.firebase = firebase;
  }

  register(email: string, password: string): Observable<any> {
    return from(this.firebase.auth().createUserWithEmailAndPassword(email, password));
  }

  sendEmailVerification(): Observable<any> {
    return from(this.firebase.auth().currentUser.sendEmailVerification());
  }
}
