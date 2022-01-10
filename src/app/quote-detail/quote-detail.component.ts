import { outputAst } from '@angular/compiler';
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Quote } from '../quote';
import { QuoteComponent } from '../quote/quote.component';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  @Input()
  quote!: Quote;
  showDetails!: QuoteComponent;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }
  constructor() { }

  ngOnInit() {
  }

}
