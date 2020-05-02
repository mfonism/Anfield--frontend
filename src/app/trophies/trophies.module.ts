import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared';
import { TrophiesComponent } from './trophies.component';
import { TrophiesRoutingModule } from './trophies-routing.module';
import { TrophiesService } from './trophies.service';
import { TrophyDetailComponent } from './trophy-detail.component';

@NgModule({
  declarations: [TrophiesComponent, TrophyDetailComponent],
  imports: [CommonModule, SharedModule, TrophiesRoutingModule],
})
export class TrophiesModule {}
