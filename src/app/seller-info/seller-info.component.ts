import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-seller-info',
  templateUrl: './seller-info.component.html',
  styleUrls: ['./seller-info.component.css']
})
export class SellerInfoComponent implements OnInit {
  protected sellerId: number;

  constructor(private routeInfor: ActivatedRoute) {
  }

  ngOnInit() {
    this.sellerId = this.routeInfor.snapshot.params['id'];
  }

}
