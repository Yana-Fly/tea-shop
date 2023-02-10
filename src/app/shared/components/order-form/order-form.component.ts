import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {CustomValidators} from "../../custom-validators";
import {OrderService} from "../../services/order.service";
import {OrderDataType} from "../../../../types/order-data.type";

@Component({
  selector: 'order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit, OnDestroy {

  @Output() orderSuccess = new EventEmitter();
  private subscription: Subscription | null = null;
  orderCreated: boolean = false;
  orderCreatedError: boolean = false;

  orderForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Zа-яА-Я]+$')]],
    lastName: ['', [Validators.required, Validators.pattern('^[a-zA-Zа-яА-Я]+$')]],
    phone: ['', [Validators.required, CustomValidators.phoneNumberValidator]],
    country: ['', [Validators.required]],
    zip: ['', [Validators.required]],
    product: ['', [Validators.required]],
    address: ['', [Validators.required, Validators.pattern('^[а-яА-Я\\w\/-\\s]*$')]],
    comment: [''],
  })

  constructor(private fb: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private orderService: OrderService) {
  }

  ngOnInit(): void {
    this.subscription = this.activatedRoute.queryParams.subscribe((params) => {
      if (params['product']) {
        this.orderForm.get('product')?.setValue(params['product']);
        this.orderForm.get('product')?.disable();
      }
    });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  public createOrder():void {
    const orderData: OrderDataType = {
      name: this.orderForm.get('firstName')?.value!,
      last_name: this.orderForm.get('lastName')?.value!,
      phone: this.orderForm.get('phone')?.value!,
      country: this.orderForm.get('country')?.value!,
      zip: this.orderForm.get('zip')?.value!,
      product: this.orderForm.get('product')?.value!,
      address: this.orderForm.get('address')?.value!
    }

    if (this.orderForm.get('comment')?.value) {
      orderData.comment = this.orderForm.get('comment')?.value!;
    }
    if (this.orderForm.valid) {
      this.subscription = this.orderService.createOrder(orderData)
        .subscribe({
          next: (response) => {
            this.orderSuccess.emit();
            this.orderCreated = true;
            this.orderCreatedError = false;
          },
          error: (error) => {
            this.orderCreated = false;
            this.orderCreatedError = true;
            console.log(error);
          }
        })

    } else {
      this.orderForm.markAllAsTouched();
      alert('Заполните поля формы!');
    }
  }
}
