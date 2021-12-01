import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import { DirectoryEntryComponent } from './directory-entry/directory-entry.component';
import { FormsModule} from "@angular/forms";
import {MemberService} from "./member.service";
import {HttpClient, HttpClientModule, HttpHandler} from "@angular/common/http";
import { MemberFormComponent } from './member-form/member-form.component';
import {RouterTestingModule} from "@angular/router/testing";
import {RouterModule} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { BoatFormComponent } from './boat-form/boat-form.component';
import { EditMemberComponent } from './edit-member/edit-member.component';
import { EditBoatComponent } from './edit-boat/edit-boat.component';
import { AssignSlipComponent } from './assign-slip/assign-slip.component';
import { AuthButtonComponent } from './auth-button/auth-button.component';
import {AuthModule} from "@auth0/auth0-angular";
import {AsyncPipe, CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DirectoryEntryComponent,
    MemberFormComponent,
    BoatFormComponent,
    EditMemberComponent,
    EditBoatComponent,
    AssignSlipComponent,
    AuthButtonComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterTestingModule,
    RouterModule.forRoot([]),
    RouterModule,
    AppRoutingModule,
    AuthModule.forRoot({
      //If you are using a custom domain with Auth0, the value of the domain property is the value of your custom domain instead of the value reflected in the "Settings" tab.
      domain: 'dev-sa711kdv.us.auth0.com',
      clientId: 'P7w8MUDVeIIHA5dZWCtb1w7XxFtIwbXk'
    })
  ],
  providers: [
    MemberService,
    AsyncPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
