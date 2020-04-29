import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { finalize } from 'rxjs/operators';

import { QuoteService } from './quote.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  quote: string | undefined;
  isLoading = false;

  constructor(private quoteService: QuoteService) {}

  ngOnInit() {
    this.isLoading = true;
    this.quoteService
      .getRandomQuote({ category: 'dev' })
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((quote: string) => {
        const VIPs = ['Sadio Mané', 'Jürgen Klopp', 'Mohamed Salah'];
        var vip = _.sample(VIPs);
        var vip_split = vip.split(' ');
        this.quote = quote.replace('Chuck Norris', vip);
        this.quote = this.quote.replace('Chuck', vip_split[0]);
        this.quote = this.quote.replace('Norris', vip_split[1]);
      });
  }
}
