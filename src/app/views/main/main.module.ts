import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import {MainComponent} from "./main.component";
import {SharedModule} from "../../shared/shared.module";
import {NgbModalModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgbModalModule,
    MainRoutingModule
  ],
  exports: [
    MainComponent,
    MainRoutingModule
  ]
})
export class MainModule { }
