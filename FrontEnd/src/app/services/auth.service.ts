import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly LS_KEY = 'isLoggedIn';
  private readonly USER_TYPE_KEY = 'userType'; // Novo item para armazenar o tipo de usuário

  constructor() {
    this.setLoggedIn(localStorage.getItem(this.LS_KEY) === 'true');
  }

  login(email: string, password: string): boolean {
    if (email === 'aluno@example.com' && password === 'password') { // Exemplo de credenciais do aluno
      this.setLoggedIn(true);
      localStorage.setItem(this.USER_TYPE_KEY, 'aluno');
      return true;
    } else if (email === 'professor@example.com' && password === 'password') { // Exemplo de credenciais do professor
      this.setLoggedIn(true);
      localStorage.setItem(this.USER_TYPE_KEY, 'professor');
      return true;
    }
    return false;
  }

  logout() {
    this.setLoggedIn(false);
    localStorage.removeItem(this.USER_TYPE_KEY); // Remove o tipo de usuário ao fazer logout
  }

  private setLoggedIn(value: boolean) {
    localStorage.setItem(this.LS_KEY, value ? 'true' : 'false');
  }

  isAuthenticated(): boolean {
    return localStorage.getItem(this.LS_KEY) === 'true';
  }

  getUserType(): string | null {
    return localStorage.getItem(this.USER_TYPE_KEY);
  }
}
