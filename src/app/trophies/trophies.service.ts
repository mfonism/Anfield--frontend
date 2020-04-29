import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TrophiesService {
  constructor(private httpClient: HttpClient) {}

  listTrophies(): Observable<string> {
    return of('Listing trophies from service!');
  }
}
