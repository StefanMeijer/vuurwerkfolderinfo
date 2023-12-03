import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-firework-card',
  templateUrl: './firework-card.component.html',
  styleUrls: ['./firework-card.component.less']
})
export class FireworkCardComponent {
  @Input() product: Array<any>;

  constructor() {
    this.product = [];
  }

  ngoninit(): void {
  }

  public getProduct(): Array<any> {
    return this.product;
  }

  public setProduct(product: Array<any>): void {
    this.product = product;
  }
}
