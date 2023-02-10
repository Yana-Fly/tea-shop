import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "./shared/shared.module";
import {HeaderComponent} from "./shared/layout/header/header.component";
import {FooterComponent} from "./shared/layout/footer/footer.component";
import {MainModule} from "./views/main/main.module";
import {OrderModule} from "./views/order/order.module";
import {ProductsModule} from "./views/products/products.module";
import {NgbCollapseModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AppComponent
  ],
  imports: [
    MainModule,
    OrderModule,
    ProductsModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    NgbCollapseModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
