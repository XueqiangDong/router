import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(protected router: Router) {
  }

  toProductDetails() {
    this.router.navigate(['/product', 3]);
  }

  toProductDetailsMultParams(catlogue: string, levelP: number) {
    return this.router.navigate(['/product', {'catlogue': 'Electronic', 'levelP': 3}]);
  }
}
