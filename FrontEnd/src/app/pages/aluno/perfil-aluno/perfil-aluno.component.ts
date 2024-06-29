import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil-aluno',
  templateUrl: './perfil-aluno.component.html',
  styleUrls: ['./perfil-aluno.component.css']
})
export class PerfilAlunoComponent {
  aluno = {
    nome: 'João Silva',
    dataNascimento: '01/01/1990',
    emailInstitucional: 'joao.silva@universidade.com',
    emailPessoal: 'joao.silva@gmail.com',
    telefone: '(00) 1234-5678'
  };

  novaSenha: string = '';
  confirmarNovaSenha: string = '';

  alterarSenha() {
    if (this.novaSenha === this.confirmarNovaSenha) {
      // Lógica para alterar a senha
      alert('Senha alterada com sucesso!');
    } else {
      alert('As senhas não coincidem.');
    }
  }
}
