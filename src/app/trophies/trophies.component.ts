import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { TrophiesService } from './trophies.service';
import { ITrophy } from './trophy.interface';

@Component({
  selector: 'app-trophies',
  templateUrl: './trophies.component.html',
  styleUrls: ['./trophies.component.scss'],
})
export class TrophiesComponent implements OnInit {
  trophies: ITrophy[];

  constructor(private trophiesService: TrophiesService) {}

  ngOnInit(): void {
    this.trophiesService.listTrophies().subscribe((data: ITrophy[]) => {
      this.trophies = data;
    });
  }
}
