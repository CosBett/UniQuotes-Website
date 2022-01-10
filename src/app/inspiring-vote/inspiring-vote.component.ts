import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-inspiring-vote',
  templateUrl: './inspiring-vote.component.html',
  styleUrls: ['./inspiring-vote.component.css']
})
export class InspiringVoteComponent implements OnInit {
  quote!: Quote;
  upVoteI(index: number) {

  }
  constructor() { }

  ngOnInit(): void {
  }

}
