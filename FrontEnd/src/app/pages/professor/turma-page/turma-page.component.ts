import { Component } from '@angular/core';

@Component({
  selector: 'app-turma-page',
  templateUrl: './turma-page.component.html',
  styleUrls: ['./turma-page.component.css']
})
export class TurmaPageComponent {
  selectedContent: string = 'informacoesTurma'; // Variável para armazenar a opção selecionada

  alunos: any[] = [
    { nome: 'João Silva', matricula: '2021001' },
    { nome: 'Maria Oliveira', matricula: '2021002' },
    { nome: 'Pedro Santos', matricula: '2021003' },
    { nome: 'Ana Souza', matricula: '2021004' },
    { nome: 'Carlos Ferreira', matricula: '2021005' }
  ];

  goBack() {
    window.history.back();
  }

  showContent(content: string) {
    this.selectedContent = content;
  }

}
