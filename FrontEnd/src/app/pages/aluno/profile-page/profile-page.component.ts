import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})

export class ProfilePageComponent {
  selectedContent: string = 'meusDados'; // Variável para armazenar a opção selecionada

  aluno = {
    nome: 'João Silva',
    dataNascimento: '01/01/1990',
    email: 'joao.silva@example.com',
    telefone: '(00) 1234-5678',
    senha: '1111111'
    // Adicione outras informações do perfil aqui
  };

  showContent(content: string) {
    this.selectedContent = content;
  }
}
