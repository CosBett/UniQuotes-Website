import { Directive, ElementRef } from '@angular/core';
import { Quote } from './quote';

@Directive({
  selector: '[appVoteHighlight]'
})
export class VoteHighlightDirective {
  quote!: Quote;
  highest(arr: any[]) {
    arr = [];
    const high = Math.max.apply(Math, arr);
    return high;
  }
  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'rgba(249, 165, 49, 0.2)';
  }
}
