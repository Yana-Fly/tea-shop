import {Component, Input, OnInit} from '@angular/core';
import {ProductType} from "../../../../types/product.type";

declare const $: any;

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit{
  @Input() product: ProductType;

  constructor() {
    this.product = {
      description: '',
      id: 0,
      image: '',
      price: 0,
      title: ''
    }
  }

  ngOnInit() {
    $('.card-img').magnificPopup({
      type: 'image'
    });
  }
}
