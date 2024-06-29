import { Component, HostListener } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isMenuOpen: boolean = false;

  constructor(public navbarService: NavbarService) {
    window.addEventListener('beforeunload', () => {
      this.logoutOnWindowClose();
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  login() {
    // Exemplo de login
    this.navbarService.setLoggedIn(true, 'aluno');
  }

  logout() {
    this.navbarService.setLoggedIn(false);
  }

  logoutOnWindowClose() {
    this.navbarService.setLoggedIn(false);
  }

  @HostListener('document:click', ['$event'])
  closeMenuOnClickOutside(event: any) {
    if (this.isMenuOpen && !event.target.closest('.navbar-perfil')) {
      this.isMenuOpen = false;
    }
  }
}
