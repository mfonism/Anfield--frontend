import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { ITrophy } from './trophy.interface';

@Injectable({
  providedIn: 'root',
})
export class TrophiesService {
  constructor(private httpClient: HttpClient) {}

  listTrophies(): Observable<ITrophy[]> {
    return this.httpClient.get('/trophies').pipe(map((resp: any) => resp.data));
  }

  getTrophy(trophyId: string): Observable<ITrophy> {
    return this.httpClient.get(`/trophies/${trophyId}`).pipe(map((resp: any) => resp.data));
  }
}
