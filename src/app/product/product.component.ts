import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  protected productId: number;
  protected productName: string;
  protected productCatlogue: string;
  protected productLevel: number;

  constructor(private routeInfo: ActivatedRoute) {
  }

  ngOnInit() {
    if (this.routeInfo.snapshot.queryParams['id'] == null) {
      this.routeInfo.params.subscribe((params: Params) => this.productId = params['id']);
      this.routeInfo.data.subscribe((data: { product: Product }) => {
        this.productId = data.product.id;
        this.productName = data.product.name;
      });
    } else {
      this.routeInfo.queryParams.subscribe((params: Params) => this.productId = params['id']);
      this.productCatlogue = this.routeInfo.snapshot.queryParams['catlogue'];
      this.productLevel = this.routeInfo.snapshot.queryParams['levelP'];
    }
  }

}

export class Product {
  constructor(public id: number, public name: string) {
  }

}
