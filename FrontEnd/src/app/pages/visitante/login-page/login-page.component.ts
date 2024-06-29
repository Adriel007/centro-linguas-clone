import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavbarService } from '../../../services/navbar.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private navbarService: NavbarService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      const isLoggedIn = this.authService.login(email, password);
      if (isLoggedIn) {
        const userType = email === 'professor@example.com' ? 'professor' : 'aluno';
        this.navbarService.setLoggedIn(true, userType);
        this.router.navigate([userType === 'professor' ? '/home-professor' : '/home-aluno']);
      } else {
        alert('Credenciais inválidas');
      }
    }
  }
}
