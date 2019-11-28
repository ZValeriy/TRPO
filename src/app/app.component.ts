import { Component } from '@angular/core';
import {ManagingPopupsService} from './managing-popups.service';
import {Router} from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loginForm;

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

  constructor(private popupsService: ManagingPopupsService,
              private router: Router,
              public afAuth: AngularFireAuth,
              private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  logIn() {
    this.popupsService.hidePopups();
    console.log(this.loginForm.value.email);
    console.log(this.loginForm.value.password);

    this.afAuth.auth.signInWithEmailAndPassword('', 'hui')
      .catch(function(error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
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
