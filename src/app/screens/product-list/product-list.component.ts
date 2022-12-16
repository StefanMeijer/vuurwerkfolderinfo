import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductListComponent implements OnInit {
  
    constructor(private route: ActivatedRoute) { }
  
    ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
        console.log(params.get('folderid'));
      });
    }
  

}
