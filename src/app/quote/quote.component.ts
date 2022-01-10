import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'Quote one ', 'des for this quote', 'james', new Date(2021, 12, 14), 0, 0),
    new Quote(2, 'Quote two ', 'des for this quote', 'Guy', new Date(2021, 12, 14), 0, 0),
    new Quote(3, 'Quote three ', 'des for this quote', 'Theo', new Date(2021, 12, 14), 0, 0),
    new Quote(4, 'Quote four ', 'des for this quote', 'Mathew', new Date(2021, 12, 14), 0, 0),
  ]
  toggleDetails(index: number) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
    this.quotes[index].showButton = !this.quotes[index].showButton;

  }
  deleteQuote(isComplete: any, index: number) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index]['description']}`)
      if (toDelete) {
        this.quotes.splice(index, 1);
      }


    }
  }

  constructor() { }

  ngOnInit() {
  }

}
