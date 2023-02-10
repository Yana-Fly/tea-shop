import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OrderFormComponent} from "./components/order-form/order-form.component";
import {ProductCardComponent} from "./components/product-card/product-card.component";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    OrderFormComponent,
    ProductCardComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    OrderFormComponent,
    ProductCardComponent
  ]
})
export class SharedModule { }
