import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { TrophiesService } from './trophies.service';
import { ITrophy } from './trophy.interface';

@Component({
  selector: 'app-trophies',
  templateUrl: './trophies.component.html',
  styleUrls: ['./trophies.component.scss'],
})
export class TrophiesComponent implements OnInit {
  isLoading: boolean = false;
  trophies: ITrophy[];

  constructor(private trophiesService: TrophiesService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.trophiesService
      .listTrophies()
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((data: ITrophy[]) => {
        this.trophies = data;
      });
  }
}
