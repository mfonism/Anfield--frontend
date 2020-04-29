import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TrophiesService {
  constructor(private httpClient: HttpClient) {}

  listTrophies() {
    return 'Listing trophies from service!';
  }
}
