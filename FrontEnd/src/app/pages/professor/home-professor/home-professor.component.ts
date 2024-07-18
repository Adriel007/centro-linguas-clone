import { Component, OnInit } from '@angular/core';
import { ProfessorService } from '../../../services/professor.service';
import { Postagem } from '../../../models/postagem.model';

@Component({
  selector: 'app-home-professor',
  templateUrl: './home-professor.component.html',
  styleUrls: ['./home-professor.component.css']
})
export class HomeProfessorComponent implements OnInit {
  nomeProfessor: string | undefined;
  turmas: any[] | undefined;
  novaPostagem: Postagem = { idPostagem: 0, nome: '', capaPost: '', descricao: '', idMural: 0 };

  constructor(private professorService: ProfessorService) { }

  ngOnInit() {
    this.nomeProfessor = 'Professor Nome'; // Substitua por chamada ao backend
    this.turmas = [
      { cardConteudo: 'Turma 1', cardNivel: 'Básico', cardLink: '/turma-pagina' },
      { cardConteudo: 'Turma 2', cardNivel: 'Intermediário', cardLink: '/turma-pagina' }
      // Adicione mais turmas conforme necessário
    ];
  }

  adicionarRecado() {
    this.professorService.postarRecado(this.novaPostagem).subscribe(response => {
      // Lógica para tratar a resposta, como atualizar a lista de recados
      console.log('Recado adicionado com sucesso', response);
      this.novaPostagem = { idPostagem: 0, nome: '', capaPost: '', descricao: '', idMural: 0 }; // Reseta o formulário
    }, error => {
      console.error('Erro ao adicionar recado', error);
    });
  }
}
