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

  constructor(private routeInfo: ActivatedRoute) {
  }

  ngOnInit() {
    this.routeInfo.params.subscribe((params: Params) => this.productId = params['id']);
    this.routeInfo.data.subscribe((data: { product: Product }) => {
      this.productId = data.product.id;
      this.productName = data.product.name;
    });
    if (this.routeInfo.snapshot.queryParams['id'] == null) {
      this.productId = this.routeInfo.snapshot.params['id'];
    } else {
      this.productId = this.routeInfo.snapshot.queryParams['id'];
    }
  }

}

export class Product {
  constructor(public id: number, public name: string) {
  }

}
