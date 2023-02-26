import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
var json = require('../../../assets/data/aldi2022.json');


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductListComponent implements OnInit {
  private folderId: any; //String or null
  private products: Array<any>;
  private href: string;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.products = [];
    this.href = this.router.url;
    console.log(this.splitFolderId("aldi2022")); //["aldi", "2022"] Make http request to get the folder information
    // console.log(json);

    this.setProducts([json]);

    // this.products.push(json.products);

    // console.log(this.getProducts());
  }

  /**
   * Function to split folderid into two parts
   * @param folderid String that contains the shop and the year Example: aldi2022
   * @returns Array with two elements. First element is the shop and the second element is the year Example: aldi, 2022
   */
  public splitFolderId(folderid: string): Array<string> {
    let folderId: Array<string> = [];

    var num = folderid.match(/\d+/g); //checkfor numbers
    var letr = folderid.match(/[a-zA-Z]+/g); //check for letters
    if (letr != null && num != null) {
      folderId.push(letr.toString());
      folderId.push(num.toString());
    }

    return folderId;
  }

  /**
   * Function to get the folderid from the url
   */
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.setFolderId(params.get('folderid'));
      // console.log(params.get('folderid'));
    });
  }

  public getFolderId(): string {
    return this.folderId;
  }

  public setFolderId(folderId: any): void {
    this.folderId = folderId;
  }

  public getProducts(): Array<any> {
    return this.products;
  }

  public setProducts(products: Array<any>): void {
    this.products = products;
  }

  public getHref(): string {
    return this.href;
  }

  public setHref(href: string): void {
    this.href = href;
  }
}
