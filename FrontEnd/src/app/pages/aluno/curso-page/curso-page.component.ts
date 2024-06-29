import { Component } from '@angular/core';

@Component({
  selector: 'app-curso-page',
  templateUrl: './curso-page.component.html',
  styleUrls: ['./curso-page.component.css']
})
export class CursoPageComponent {
  selectedContent: string = 'cursoGeral'; // Variável para armazenar a opção selecionada
  fileToUpload: File | null = null;

  tarefas = [
    { id: 1, titulo: 'Tarefa 1', descricao: 'Descrição da Tarefa 1' },
    { id: 2, titulo: 'Tarefa 2', descricao: 'Descrição da Tarefa 2' },
    // Adicione mais tarefas conforme necessário
  ];

  goBack() {
    window.history.back();
  }

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

  onFileChange(event: any) {
    this.fileToUpload = event.target.files[0];
  }

  enviarArquivo(tarefaId: number, event: Event) {
    event.preventDefault();
    if (this.fileToUpload) {
      const formData: FormData = new FormData();
      formData.append('file', this.fileToUpload, this.fileToUpload.name);

      // Lógica de envio do arquivo para o servidor
      // this.http.post(`https://seu-servidor.com/tarefas/${tarefaId}/upload`, formData)
      //   .subscribe(response => {
      //     console.log('Arquivo enviado com sucesso!', response);
      //   }, error => {
      //     console.error('Erro ao enviar arquivo', error);
      //   });

      console.log('Arquivo enviado com sucesso!', this.fileToUpload.name);
    } else {
      console.error('Nenhum arquivo selecionado');
    }
  }
}
