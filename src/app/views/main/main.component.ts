import {Observable, Subscription} from "rxjs";
import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

declare const $: any;

@Component({
  selector: 'main-component',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild('popup')
  popup!: TemplateRef<ElementRef>;

  private openModalObservable: Observable<any>;
  private subscription: Subscription | null = null;

  constructor(private modalService: NgbModal) {
    const that = this;
    this.openModalObservable = new Observable((observer) => {
      const openModalTimeout = setTimeout(() => {
        observer.next();
      }, 10000);
      return {
        unsubscribe() {
          clearTimeout(openModalTimeout);
          that.modalService.dismissAll();
        }
      }
    });
  }

  ngOnInit() {
    $('#accordion').accordion({
      heightStyle: 'content',
    });
  }

  ngAfterViewInit() {
    this.subscription = this.openModalObservable
      .subscribe({
        next: () => {
          this.modalService.open(this.popup, { centered: true });
        },
        error: (error: string) => {
          console.log('ERROR: ' + error);
        }
      });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
