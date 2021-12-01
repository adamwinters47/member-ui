import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';
import { async } from "rxjs";

@Component({
  selector: 'app-auth-button',
  template: `
    <ng-container *ngIf="this.isLoggedIn else loggedOut">
      <button (click)="auth.logout({ returnTo: document.location.origin })">
        Log out
      </button>
    </ng-container>

    <ng-template #loggedOut>
      <button (click)="auth.loginWithRedirect()">Log in</button>
    </ng-template>
  `,
  styles: [],
})
export class AuthButtonComponent {
  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) {}
  isLoggedIn: boolean
  ngOnInit(): void {
    this.setIsLoggedIn()
  }

  setIsLoggedIn() {

    this.auth.isAuthenticated$.subscribe(data =>  {
      this.isLoggedIn = data
    })
  }

}
