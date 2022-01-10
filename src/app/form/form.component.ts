import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  [x: string]: any;
  @Input()
  quote!: Quote;
  @Output() addQuote = new EventEmitter<Quote>();

  submitQuote(form: any) {
    this.addQuote.emit(form)
    console.log(form)
  }

  constructor() { }

  ngOnInit() {
  }

}
