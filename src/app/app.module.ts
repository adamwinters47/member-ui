import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import { DirectoryEntryComponent } from './directory-entry/directory-entry.component';
import { FormsModule} from "@angular/forms";
import {MemberService} from "./member.service";
import {HttpClient, HttpClientModule, HttpHandler} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DirectoryEntryComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    MemberService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
