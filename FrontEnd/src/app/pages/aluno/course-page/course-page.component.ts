import { Component } from '@angular/core';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.css']
})
export class CoursePageComponent {
  selectedContent: string = 'cursoGeral'; // Variável para armazenar a opção selecionada
  goBack() {
    window.history.back();
  }
  // Método para exibir o conteúdo correspondente ao clicar nas opções de navegação
  showContent(content: string) {
    this.selectedContent = content;
  }

  notas = [
    { nome: 'Inglês Básico 1', nota1: 8.5, nota2: 9.0 },
    // Adicionar mais disciplinas conforme necessário
  ];

  faltas = [
    { nome: 'Inglês Básico 1', presenca: 17, faltas: 3, totalAulas: 20 },
    // Adicionar mais disciplinas conforme necessário
  ];

  calcularMedia(nota1: number, nota2: number): number {
    return (nota1 + nota2) / 2;
  }

  calcularPresenca(faltas: number, totalAulas: number): string {
    const presenca = ((totalAulas - faltas) / totalAulas) * 100;
    return presenca.toFixed(2) + '%';
  }
}
