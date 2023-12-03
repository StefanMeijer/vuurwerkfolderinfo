import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductListComponent implements OnInit {
  private folderId: any; //String or null
  private products: Array<any>;
  private href: string;
  public dataLoaded: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) {
    this.products = [];
    this.href = this.router.url;
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
      folderId.push(" " + num.toString());
    }

    return folderId;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
        this.setFolderId(params.get('folderid'));
    });

    this.http.get('../../../assets/data/' + this.getFolderId() + '.json').subscribe(
        (data: any) => {
            this.setProducts([data]);
            this.dataLoaded = true;
        },
        (error) => {
            // console.error('Er is een fout opgetreden bij het laden van de gegevens:', error);
        }
    );
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
