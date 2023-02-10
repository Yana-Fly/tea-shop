import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {ProductType} from "../../../../types/product.type";
import {ProductService} from "../../../shared/services/product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnDestroy {

  product: ProductType;
  private subscription: Subscription | null = null;

  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProductService,
              private router: Router) {
    this.product = {
      description: '',
      id: 0,
      image: '',
      price: 0,
      title: ''
    }
  }

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.productService.getProduct(+params['id'])
          .subscribe({
            next: (data) => {
              this.product = data;
            },
            error: (error) => {
              console.log(error);
              this.router.navigate(['/']);
            }
          });
      }
    });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

}
