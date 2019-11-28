import { Component, OnInit } from '@angular/core';
import {ManagingPopupsService} from '../managing-popups.service';

@Component({
  selector: 'app-employee-statements',
  templateUrl: './employee-statements.component.html',
  styleUrls: ['./employee-statements.component.css']
})
export class EmployeeStatementsComponent implements OnInit {

  statements = ['Вася', 'Петя', 'Коля', 'Олёшка'];
  constructor(private popupsService: ManagingPopupsService) { }

  ngOnInit() {
  }

  openStatement() {
    this.popupsService.openStatement();
  }
}
