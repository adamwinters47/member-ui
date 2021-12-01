import { Component, OnInit } from '@angular/core';
import {AuthService} from "@auth0/auth0-angular";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {


  constructor(public auth: AuthService) { }

  ngOnInit(): void {
    this.isLoggedIn()
  }

  isLoggedIn() {
    this.auth.getAccessTokenSilently().subscribe()
    this.auth.isAuthenticated$.subscribe()
  }

}
