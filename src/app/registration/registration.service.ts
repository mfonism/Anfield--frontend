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
    return from(this.firebase.auth().createUserWithEmailAndPassword(email, password)).subscribe(
      (data: any) => {
        window.alert('Successfully registered');
        console.log(typeof data);
        console.log(typeof data.user);
        console.log(data);
        console.log(data.user);
        console.log(this.firebase.auth().currentUser);
        this.firebase.auth().currentUser.sendEmailVerification();
      },
      (error: any) => {
        window.alert(error.message);
        console.log(typeof error);
        console.log(typeof error.message);
        console.log(error);
        console.log(error.message);
      }
    );
  }
}
