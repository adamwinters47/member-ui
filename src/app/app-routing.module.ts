import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterModule, Routes} from "@angular/router";
import {DirectoryEntryComponent} from "./directory-entry/directory-entry.component";
import {MemberFormComponent} from "./member-form/member-form.component";

const appRoutes: Routes = [
  { path: 'members', component: DirectoryEntryComponent },
  { path: 'addMember', component: MemberFormComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }

