import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil-professor',
  templateUrl: './perfil-professor.component.html',
  styleUrls: ['./perfil-professor.component.css']
})
export class PerfilProfessorComponent {
  professor = {
    nome: 'João Silva',
    dataNascimento: '01/01/1990',
    emailInstitucional: 'joao.silva@universidade.com',
    emailPessoal: 'joao.silva@gmail.com',
    telefone: '(00) 1234-5678'
  };
}
