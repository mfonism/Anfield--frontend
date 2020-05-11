import { Injectable } from '@angular/core';

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
    return this.firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result: any) => {
        window.alert('You have been successfully registered!');
        console.log(result.user);
      })
      .catch((error: any) => {
        window.alert(error.message);
        console.log(error);
      });
  }
}
