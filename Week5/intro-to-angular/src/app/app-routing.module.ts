import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductPageComponent } from './products/components/product-page/product-page.component';

const routes: Routes = [
  { path: 'products', component: ProductPageComponent },
  // { path: 'cities', component: CitiesComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
