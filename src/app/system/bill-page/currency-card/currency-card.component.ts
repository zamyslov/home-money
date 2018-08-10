import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'wfm-currency-card',
  templateUrl: './currency-card.component.html',
  styleUrls: ['./currency-card.component.scss']
})
export class CurrencyCardComponent implements OnInit {
  @Input() currency: any;
  currencies: string[] = ['usd', 'eur'];
  date = new Date();
  constructor() { }

  ngOnInit() {
    console.log(this.currency);
  }

}
