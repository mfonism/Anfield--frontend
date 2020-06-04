import { Injectable } from '@angular/core';
import { User } from 'firebase';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import firebase from '../firebase-setup';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: User;
  private firebase: any;

  constructor() {
    this.firebase = firebase;
    var cachedUser: string = window.localStorage.getItem('user');

    if (cachedUser) {
      this.user = JSON.parse(cachedUser);
    }

    this.firebase.auth().onAuthStateChanged((user: User) => {
      if (user) {
        this.user = user;
        window.localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        this.user = null;
        window.localStorage.removeItem('user');
      }
    });
  }

  register(email: string, password: string): Observable<any> {
    return from(this.firebase.auth().createUserWithEmailAndPassword(email, password));
  }

  sendEmailVerification(): Observable<any> {
    return from(this.firebase.auth().currentUser.sendEmailVerification());
  }

  signIn(email: string, password: string): Observable<any> {
    return from(this.firebase.auth().signInWithEmailAndPassword(email, password)).pipe(
      map((data) => {
        window.localStorage.setItem('userSignInEmail', email);
        return data;
      })
    );
  }

  hasUser(): boolean {
    return this.user != null;
  }

  isUserRegistered(): boolean {
    return this.hasUser();
  }

  isUserEmailVerified(): boolean {
    return this.isUserRegistered() && this.user.emailVerified;
  }

  isUserSignedIn(): boolean {
    return this.isUserEmailVerified() && this.user.email == window.localStorage.getItem('userSignInEmail');
  }
}
