import { Component } from '@angular/core';
import { Product } from './products/services/product';
import { ProductService } from './products/services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'intro-to-angular';

  constructor( private productService: ProductService ) {}

  ngOnInit(): void {
    this.productService.onSubscribe().subscribe((product: Product) => {
      this.productService.products.push(product);
    })
  }
}
