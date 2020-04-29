import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrophiesRoutingModule } from './trophies-routing.module';
import { TrophiesComponent } from './trophies.component';

@NgModule({
  declarations: [TrophiesComponent],
  imports: [CommonModule, TrophiesRoutingModule],
})
export class TrophiesModule {}
