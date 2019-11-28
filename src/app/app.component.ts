import { Component } from '@angular/core';
import {ManagingPopupsService} from './managing-popups.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  get isMaskHidden() {
    return this.popupsService.isMaskHidden;
  };

  get isLoginFormHidden() {
    return this.popupsService.isLoginFormHidden;
  }

  get isStatementHidden() {
    return this.popupsService.isStatementHidden;
  }

  get isFindStatementHidden() {
    return this.popupsService.isFindStatementHidden;
  }

  get isStatementSubmittedHidden() {
    return this.popupsService.isStatementSubmittedHidden;
  }
  get isStatementRejectReasonHidden() {
    return this.popupsService.isStatementRejectReasonHidden;
  }

  get isContinueStatementHidden() {
    return this.popupsService.isContinueStatementHidden;
  }

  constructor(private popupsService: ManagingPopupsService, private router: Router) {
  }

  logIn() {
    this.popupsService.hidePopups();
    this.router.navigateByUrl('/employeeMain');
  }


  openLoginForm() {
    this.popupsService.isLoginFormHidden = false;
  }

  rejectStatement() {
    this.popupsService.rejectStatement();
  }

  resolveStatement() {
    console.log('Урааа');
  }

  sendRejectReason() {
    console.log('Отправка отказа заявления');
  }

  findStatement() {
    this.popupsService.hidePopups();
    this.router.navigateByUrl('/check');
  }

  hidePopupsAndMasks() {
    this.popupsService.hidePopups();
  }
}
