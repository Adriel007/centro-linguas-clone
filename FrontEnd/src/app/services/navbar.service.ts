import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  private readonly LS_KEY = 'isLoggedIn';
  private readonly USER_TYPE_KEY = 'userType'; // Novo item para armazenar o tipo de usuário
  private isLoggedIn: boolean = false;
  private userType: string | null = null;

  constructor() {
    this.isLoggedIn = localStorage.getItem(this.LS_KEY) === 'true';
    this.userType = localStorage.getItem(this.USER_TYPE_KEY);
    console.log('Estado de login:', this.isLoggedIn);
    console.log('Tipo de usuário:', this.userType);
  }

  setLoggedIn(value: boolean, userType: string | null = null) {
    localStorage.setItem(this.LS_KEY, value ? 'true' : 'false');
    if (value) {
      localStorage.setItem(this.USER_TYPE_KEY, userType!);
    } else {
      localStorage.removeItem(this.USER_TYPE_KEY);
    }
    this.isLoggedIn = value;
    this.userType = userType;
    console.log('Estado de login atualizado:', value);
    console.log('Tipo de usuário atualizado:', userType);
  }

  getLoggedIn() {
    return this.isLoggedIn;
  }

  getUserType(): string | null {
    return this.userType;
  }
}
