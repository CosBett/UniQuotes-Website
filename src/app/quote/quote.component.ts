import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote('Quote one ', 'des for this quote', new Date(2021, 12, 14)),
    new Quote('Quote two ', 'des for this quote', new Date(2021, 12, 14)),
    new Quote('Quote three ', 'des for this quote', new Date(2021, 12, 14)),
    new Quote('Quote four ', 'des for this quote', new Date(2021, 12, 14)),
  ]
  toggleDetails(index: number) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
    this.quotes[index].showButton = !this.quotes[index].showButton;

  }
  deleteQuote(isComplete: any, index: number) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)
      if (toDelete) {
        this.quotes.splice(index, 1);
      }


    }
  }

  constructor() { }

  ngOnInit() {
  }

}
