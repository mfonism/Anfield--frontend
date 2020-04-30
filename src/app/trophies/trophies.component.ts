import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { TrophiesService } from './trophies.service';

@Component({
  selector: 'app-trophies',
  templateUrl: './trophies.component.html',
  styleUrls: ['./trophies.component.scss'],
})
export class TrophiesComponent implements OnInit {
  trophies: Array<any>;

  constructor(private trophiesService: TrophiesService) {}

  ngOnInit(): void {
    this.trophiesService.listTrophies().subscribe((data) => {
      this.trophies = data;
      console.log(this.trophies);
      return data;
    });
  }
}
