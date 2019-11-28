import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MaskComponent } from './mask/mask.component';
import {RouterModule, Routes} from '@angular/router';
import { ActionComponent } from './action/action.component';
import { CheckStatementComponent } from './check-statement/check-statement.component';
import { EmployeeComponent } from './employee/employee.component';
import { NewStatementComponent } from './new-statement/new-statement.component';
import { NewStatementEmployeeComponent } from './new-statement-employee/new-statement-employee.component';
import { NewStatementForeignComponent } from './new-statement-foreign/new-statement-foreign.component';
import { ForeingTableComponent } from './foreing-table/foreing-table.component';
import {ManagingPopupsService} from './managing-popups.service';
import { EmployeeStatementsComponent } from './employee-statements/employee-statements.component';
import { StatementTableItemComponent } from './statement-table-item/statement-table-item.component';
import {CommonModule} from '@angular/common';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFireAuthModule} from '@angular/fire/auth';

const appRoutes: Routes = [
  { path: '', component: ActionComponent},
  { path: 'main', component: ActionComponent},
  { path: 'check', component: CheckStatementComponent},
  { path: 'newStatementStudent', component: NewStatementComponent},
  { path: 'newStatementEmployee', component: NewStatementEmployeeComponent},
  { path: 'newStatementForeign', component: NewStatementForeignComponent},
  { path: 'employeeMain', component: EmployeeComponent},
  { path: 'employeeStatements', component: EmployeeStatementsComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    MaskComponent,
    ActionComponent,
    CheckStatementComponent,
    EmployeeComponent,
    NewStatementComponent,
    NewStatementEmployeeComponent,
    NewStatementForeignComponent,
    ForeingTableComponent,
    EmployeeStatementsComponent,
    StatementTableItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    RouterModule.forRoot(appRoutes),
    CommonModule
  ],
  providers: [ManagingPopupsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
