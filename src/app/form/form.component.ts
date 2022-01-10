import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input()
  quote!: Quote;
  @Output() quoteUpdate = new EventEmitter<Quote>();

  newQuote = new Quote(0, '', '', '', new Date(), 0, 0);
  submit() {
    this.quoteUpdate.emit(this.newQuote);
  }
  constructor() { }

  ngOnInit() {
  }

}
