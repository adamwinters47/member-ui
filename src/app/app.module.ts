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

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DirectoryEntryComponent,
    MemberFormComponent,
    BoatFormComponent,
    EditMemberComponent,
    EditBoatComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterTestingModule,
    RouterModule.forRoot([]),
    RouterModule,
    AppRoutingModule
  ],
  providers: [
    MemberService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
