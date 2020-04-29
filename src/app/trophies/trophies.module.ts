import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrophiesComponent } from './trophies.component';
import { TrophiesRoutingModule } from './trophies-routing.module';
import { TrophiesService } from './trophies.service';

@NgModule({
  declarations: [TrophiesComponent],
  imports: [CommonModule, TrophiesRoutingModule],
})
export class TrophiesModule {}
