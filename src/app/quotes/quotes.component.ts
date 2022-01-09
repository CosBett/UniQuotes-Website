import { Component, OnInit } from '@angular/core';
import { Quote } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes: Quote[] = [
    { id: 1, name: 'quote one' },
    { id: 2, name: 'quote two' },
    { id: 3, name: 'quote three' },
    { id: 4, name: 'quote four' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
