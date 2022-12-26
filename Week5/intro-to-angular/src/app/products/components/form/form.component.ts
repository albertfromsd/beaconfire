import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Product } from '../../services/product';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor( private productService: ProductService ) { }

  ngOnInit() {
  }

  form = new FormBuilder().group({
    name: '',
    category: '',
    price: 0.00
  })

  onClick(): void {
    
    // trying to convert whole dollar amounts to show down to .00, but not working
    const price: number = this.form.getRawValue().price;
    const priceFloat = parseFloat(price.toFixed(2));
    
    const product: Product = {
      ...this.form.getRawValue(),
      price: priceFloat
    }

    this.productService.addProduct(product);
  }
}