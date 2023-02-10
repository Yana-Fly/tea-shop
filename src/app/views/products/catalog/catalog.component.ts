import {Subscription} from "rxjs";
import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ProductType} from "../../../../types/product.type";
import {ProductService} from "../../../shared/services/product.service";

@Component({
  selector: 'catalog-component',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit, OnDestroy {

  private subscription: Subscription | null = null;
  public products: ProductType[] = [];

  constructor(private productService: ProductService,
              private router: Router) {
  }

  ngOnInit() {
    this.subscription = this.productService.getProducts()
      .subscribe({
          next: (data) => {
            this.products = data;
          },
        error: (error) => {
          console.log(error);
          this.router.navigate(['/']);
        }
        }
      )
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
