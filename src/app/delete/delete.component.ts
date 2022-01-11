import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  @Output() Complete = new EventEmitter<boolean>()
  constructor() { }

  ngOnInit(): void {
  }

  myDelete(complete: boolean) {

    this.Complete.emit(complete)
  }
}
