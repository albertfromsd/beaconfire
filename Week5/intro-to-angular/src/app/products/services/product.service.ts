import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Product } from './product';

@Injectable({ providedIn: 'root' })
export class ProductService {

  constructor() { }

  subject = new Subject();

  products: Product[] = [
    {
      name: 'M&M',
      category: 'Snacks',
      price: 1.99
    },
    {
      name: 'Table',
      category: 'Furniture',
      price: 199
    },
    {
      name: 'Kale',
      category: 'Vegetables',
      price: 2.49
    },
  ];

  onSubscribe(): Observable<any> {
    return this.subject.asObservable();
  }

  addProduct(product: Product): void {
    this.subject.next(product);
  }

  deleteProduct(idx: number): void {
    this.products.splice(idx, 1)
  }

}