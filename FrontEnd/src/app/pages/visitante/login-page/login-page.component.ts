// login-page.component.ts
import { Component } from '@angular/core';
import { NavbarService } from '../../../components/navbar/navbar.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  constructor(private navbarService: NavbarService) {}

  login() {
    // Lógica para efetuar login
    this.navbarService.setLoggedIn(true);
  }
}