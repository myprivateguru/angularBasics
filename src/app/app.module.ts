import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { WarningAlertComponent } from './alerts/warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './alerts/success-alert/success-alert.component';
import { FramesComponent } from './components/frames/frames.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { Forms2509dComponent } from './assignments/forms2509d/forms2509d.component';
import { AssignmentComponent } from './assignments/assignment/assignment.component';
import { HttpClientModule } from '@angular/common/http';
import { EmpListComponent } from './components/emp-list/emp-list.component';
import { AddquestionComponent } from './components/qbank/addquestion/addquestion.component';
import { QlistComponent } from './components/qbank/qlist/qlist.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { QuedetailsComponent } from './components/qbank/quedetails/quedetails.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StarratingComponent } from './components/tools/starrating/starrating.component';
import { ReportinfoComponent } from './components/tools/reportinfo/reportinfo.component';
import { MatButtonModule} from '@angular/material/button';
import{MatCheckboxModule} from '@angular/material/checkbox';
import { SigupComponent } from './components/login/sigup/sigup.component';
import { LoginComponent } from './components/login/login/login.component';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import * as firebase from 'firebase/compat';
import { environment } from 'src/environments/environment';
import { ForgotPasswordComponent } from '../app/components/login/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/login/verify-email/verify-email.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    FramesComponent,
    HeaderComponent,
    FooterComponent,
    ContactUsComponent,
    Forms2509dComponent,
    AssignmentComponent,
    EmpListComponent,
    AddquestionComponent,
    QlistComponent,
    DashboardComponent,
    QuedetailsComponent,
    StarratingComponent,
    ReportinfoComponent,
    SigupComponent,
    LoginComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,RouterModule, MatButtonModule,
    MatCheckboxModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule, BrowserAnimationsModule,
    MatButtonModule,AngularFireModule,AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
