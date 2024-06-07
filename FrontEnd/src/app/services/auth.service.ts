import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly LS_KEY = 'isLoggedIn';
  private isLoggedIn: boolean = false;

  constructor() {
    this.isLoggedIn = localStorage.getItem(this.LS_KEY) === 'true';
  }

  login(email: string, password: string): boolean {
    if (email === 'user@example.com' && password === 'password') { // Exemplo de verificação de credenciais
      this.setLoggedIn(true);
      return true;
    }
    return false;
  }

  logout() {
    this.setLoggedIn(false);
  }

  setLoggedIn(value: boolean) {
    this.isLoggedIn = value;
    localStorage.setItem(this.LS_KEY, value ? 'true' : 'false');
  }

  getLoggedIn(): boolean {
    return this.isLoggedIn;
  }

  isAuthenticated(): boolean {
    return this.getLoggedIn();
  }
}
