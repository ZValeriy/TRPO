import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  isStatementHidden = true;
  isStatementRejectReasonHidden = true;
  isStatementSubmittedHidden = true;
  isFindStatementHidden = true;
  isLoginFormHidden = true;
  get isMaskHidden() {
    return !(!this.isStatementSubmittedHidden || !this.isLoginFormHidden ||
      !this.isFindStatementHidden || !this.isStatementHidden || !this.isStatementRejectReasonHidden);
  };

  openLoginForm() {
    this.isLoginFormHidden = false;
  }

  hidePopupsAndMasks() {
    this.isLoginFormHidden = true;
    this.isStatementHidden = true;
    this.isFindStatementHidden = true;
    this.isStatementRejectReasonHidden = true;
    this.isStatementSubmittedHidden = true;
  }

  checkStatus() {
    this.isFindStatementHidden = false;
  }
}
