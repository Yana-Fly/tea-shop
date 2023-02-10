import { Component } from '@angular/core';

@Component({
  selector: 'order-component',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  orderSuccess: boolean = false;

  onOrderSuccess(): void {
    this.orderSuccess = true;
  }

}
