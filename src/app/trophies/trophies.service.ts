import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TrophiesService {
  constructor(private httpClient: HttpClient) {}

  listTrophies(): Observable<any> {
    return this.httpClient.get('/trophies').pipe(map((resp: any) => resp.data));
  }
}
