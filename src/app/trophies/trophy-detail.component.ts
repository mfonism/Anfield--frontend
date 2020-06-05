import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { map } from 'rxjs/operators';

import { TrophiesService } from './trophies.service';
import { ITrophy } from './trophy.interface';

@Component({
  selector: 'app-trophy-detail',
  templateUrl: './trophy-detail.component.html',
  styleUrls: ['./trophy-detail.component.scss'],
})
export class TrophyDetailComponent implements OnInit {
  selectedId: string;
  trophy: ITrophy;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private trophiesService: TrophiesService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.selectedId = params.get('id');
    });
    this.trophiesService.getTrophy(this.selectedId).subscribe(
      (trophy: ITrophy) => {
        this.trophy = trophy;
      },
      (error: any) => {
        this.router.navigate(['/not-found']);
      }
    );
  }
}
