import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {isUndefined} from 'util';
import {Product} from '../product/product.component';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';

@Injectable()
export class ProductResolve implements Resolve<Product> {
  constructor(private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> | Promise<Product> | Product {
    let productId: number = route.params['id'];
    if (productId == 2) {
      return new Product(3, 'iPhone7');
    } else {
      this.router.navigate(['/home']);
      return undefined;
    }
  }
}
