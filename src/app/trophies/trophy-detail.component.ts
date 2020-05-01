import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-trophy-detail',
  templateUrl: './trophy-detail.component.html',
  styleUrls: ['./trophy-detail.component.scss'],
})
export class TrophyDetailComponent implements OnInit {
  selectedId: string;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.selectedId = params.get('id');
    });
  }
}
