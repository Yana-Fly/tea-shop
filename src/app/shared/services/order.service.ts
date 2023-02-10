import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {OrderDataType} from "../../../types/order-data.type";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  createOrder(data: OrderDataType) {
    return this.http.post<{ success: boolean, message?: string }>(`https://testologia.site/order-tea`, data);
  }
}
