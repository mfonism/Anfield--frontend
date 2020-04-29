import { Component, OnInit } from '@angular/core';

import { TrophiesService } from './trophies.service';

@Component({
  selector: 'app-trophies',
  templateUrl: './trophies.component.html',
  styleUrls: ['./trophies.component.scss'],
})
export class TrophiesComponent implements OnInit {
  constructor(private trophiesService: TrophiesService) {}

  ngOnInit(): void {}

  listTrophies() {
    return this.trophiesService.listTrophies();
  }
}
