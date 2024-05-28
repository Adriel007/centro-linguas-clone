import { Component, HostListener } from '@angular/core';
import { NavbarService } from './navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isMenuOpen: boolean = false; // Adiciona uma variável para rastrear se o menu está aberto

  constructor(public navbarService: NavbarService) {
    // Adiciona um listener para o evento beforeunload ao inicializar o componente
    window.addEventListener('beforeunload', () => {
      this.logoutOnWindowClose();
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen; // Alterna o estado do menu entre aberto e fechado
  }

  login() {
    // Lógica para efetuar login
    this.navbarService.setLoggedIn(true);
  }

  logout() {
    // Lógica para efetuar logout
    this.navbarService.setLoggedIn(false);
  }

  logoutOnWindowClose() {
    // Efetua logout quando o navegador está prestes a ser fechado
    this.navbarService.setLoggedIn(false);
  }

  @HostListener('document:click', ['$event'])
  closeMenuOnClickOutside(event: any) {
    if (this.isMenuOpen && !event.target.closest('.navbar-perfil')) {
      this.isMenuOpen = false;
    }
  }
}
