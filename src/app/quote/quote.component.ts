import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote('Quote one ', 'des for this quote', 'james', new Date(2021, 12, 14), 0, 0),
    new Quote('Quote two ', 'des for this quote', 'Guy', new Date(2021, 12, 14), 0, 0),
    new Quote('Quote three ', 'des for this quote', 'Theo', new Date(2021, 12, 14), 0, 0),
    new Quote('Quote four ', 'des for this quote', 'Mathew', new Date(2021, 12, 14), 0, 0),
  ]
  toggleDetails(index: number) {
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
    this.quotes[index].showButton = !this.quotes[index].showButton;

  }
  deleteQuote(isComplete: any, index: any) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index]}`)
      if (toDelete) {
        this.quotes.splice(index, 1);
      }


    }
  }
  addNewQuote(newQuote: any) {
    this.quotes.push(new Quote(newQuote.author, newQuote.description, newQuote.postedBy, newQuote.timePosted, 0, 0))
  }

  constructor() { }

  ngOnInit() {
  }

}
