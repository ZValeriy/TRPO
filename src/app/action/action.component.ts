import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {
  @Output() checkStatement: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  checkStatus() {
    this.checkStatement.emit();
  }

  ngOnInit() {
  }

}
