import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    { id: 1, name: 'Quote one ' },
    { id: 2, name: 'Quote two ' },
    { id: 3, name: 'Quote three ' },
    { id: 4, name: 'Quote four ' },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
