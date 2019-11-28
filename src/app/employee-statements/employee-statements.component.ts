import { Component, OnInit } from '@angular/core';
import {ManagingPopupsService} from '../managing-popups.service';

@Component({
  selector: 'app-employee-statements',
  templateUrl: './employee-statements.component.html',
  styleUrls: ['./employee-statements.component.css']
})
export class EmployeeStatementsComponent implements OnInit {

  statements = [
    {name: 'Вася', date: '12.04.2019', role: 'fucker'},
    {name: 'Петя', date: '12.04.2019', role: 'Уч'},
    {name: 'Коля', date: '12.04.2019', role: 'Ролл'},
    {name: 'Юра', date: '12.04.2019', role: 'fuфыаr'}
    ];
  constructor(private popupsService: ManagingPopupsService) { }

  ngOnInit() {
  }

  openStatement() {
    this.popupsService.openStatement();
  }
}
