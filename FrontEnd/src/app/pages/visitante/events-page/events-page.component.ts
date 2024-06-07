import { Component } from '@angular/core';

@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.css']
})
export class EventsPageComponent {
  proximosEventos = [
    {
      srcImg: 'path/to/image1.png',
      altImg: 'Imagem do evento 1',
      titulo: 'Palestra Intercâmbio',
      data: '15/02/2024 às 20h',
      descricao: 'Auditório 3º andar',
      link: '#'
    },
    {
      srcImg: 'path/to/image2.png',
      altImg: 'Imagem do evento 2',
      titulo: 'Palestra Intercâmbio',
      data: '16/02/2024 às 20h',
      descricao: 'Auditório 3º andar',
      link: '#'
    }
  ];

  eventosConcluidos = [
    {
      srcImg: 'path/to/image3.png',
      altImg: 'Imagem do evento 3',
      titulo: 'Palestra Intercâmbio',
      data: '10/01/2024 às 20h',
      descricao: 'Auditório 3º andar',
      link: '#'
    },
    {
      srcImg: 'path/to/image4.png',
      altImg: 'Imagem do evento 4',
      titulo: 'Palestra Intercâmbio',
      data: '11/01/2024 às 20h',
      descricao: 'Auditório 3º andar',
      link: '#'
    }
  ];

  eventosVisiveis = 'proximos';  // Inicializa com 'proximos'

  mostrarProximosEventos() {
    this.eventosVisiveis = 'proximos';
  }

  mostrarEventosConcluidos() {
    this.eventosVisiveis = 'concluidos';
  }
}
