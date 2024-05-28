
// navbar.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  private readonly LS_KEY = 'isLoggedIn';
  private isLoggedIn: boolean = false;

  constructor() {
    // Ao inicializar o serviço, verifique se há um estado de login no localStorage
    this.isLoggedIn = localStorage.getItem(this.LS_KEY) === 'true';
    console.log('Estado de login:', this.isLoggedIn);
  }

  setLoggedIn(value: boolean) {
    // Atualize o estado de login no localStorage
    localStorage.setItem(this.LS_KEY, value ? 'true' : 'false');
    console.log('Estado de login atualizado:', value);
  }

  getLoggedIn() {
    console.log('Obtendo estado de login:', this.isLoggedIn);
    return this.isLoggedIn = localStorage.getItem(this.LS_KEY) === 'true';
  }
}