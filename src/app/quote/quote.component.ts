import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote('A user interface is like a joke, if you have to explain it, it is not that good ', 'Martin LeBlare', 'Cosmas Bett', new Date(2021, 12, 19), 0, 0),
    new Quote('The cost of being wrong is less than the cost of doing nothing ', 'Seth Godin', 'Cosmas Bett', new Date(2021, 12, 20), 0, 0),
    new Quote('Have no fear of perfection.you will never reach it ', 'Salvador Dali', 'Cosmas Bett', new Date(2021, 12, 15), 0, 0),
    new Quote('The most damaging phrase in the languange is .. it is always been done this way', 'Grace Hopper', 'Cosmas Bett', new Date(2021, 12, 28), 0, 0),
    new Quote('Programing is not about what you know ; it is about what you can figure out', 'Chris Pine', 'Cosmas Bett', new Date(2021, 12, 14), 0, 0),
  ]

  deleteQuote(isComplete: any, index: any) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete Quote`)
      if (toDelete) {
        this.quotes.splice(index, 1);
      }


    }
  }
  addNewQuote(newQuote: any) {
    this.quotes.push(new Quote(newQuote.description, newQuote.author, newQuote.postedBy, newQuote.timePosted, 0, 0))
  }
  showDet(index: any) {
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
    this.quotes[index].showButton = !this.quotes[index].showButton;
  }
  totalVotes: number = 0;
  constructor() { }

  ngOnInit() {
  }

}
