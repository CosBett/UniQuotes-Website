import { outputAst } from '@angular/compiler';
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Quote } from '../quote';
import { QuoteComponent } from '../quote/quote.component';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  @Input()
  quotes: any;
  showDetails!: QuoteComponent;
  @Output() isDelete = new EventEmitter<boolean>();
  totalVotes: number = 0;
  quoteDelete(complete: boolean) {
    this.isDelete.emit(complete);
  }
  inspired() {
    // this.quotes[i].votes = this.quotes[i].votes + 1
    this.quotes.upVote++
    // if (this.quotes[i].votes > this.totalVotes) {
    //   this.totalVotes = this.quotes.upVote
    // }
  }
  terrible() {
    this.quotes.downVote++
  }
  constructor() { }

  ngOnInit() {
  }

}
