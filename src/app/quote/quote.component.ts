import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    { id: 1, name: 'Quote one ', description: 'des for this quote' },
    { id: 2, name: 'Quote two ', description: 'des for this quote' },
    { id: 3, name: 'Quote three ', description: 'des for this quote' },
    { id: 4, name: 'Quote four ', description: 'des for this quote' },
  ]
  constructor() { }

  ngOnInit() {
  }

}
