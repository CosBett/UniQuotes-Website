import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'Quote one ', 'des for this quote'),
    new Quote(2, 'Quote two ', 'des for this quote'),
    new Quote(3, 'Quote three ', 'des for this quote'),
    new Quote(4, 'Quote four ', 'des for this quote'),
  ]
  toggleDetails(index: number) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;

  }
  deleteQuote(isComplete: any, index: number) {
    if (isComplete) {
      this.quotes.splice(index, 1);
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
