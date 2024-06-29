import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos-page',
  templateUrl: './eventos-page.component.html',
  styleUrls: ['./eventos-page.component.css']
})
export class EventosPageComponent {
  proximosEventos = [
    {
      srcImg: '../../../../assets/icone-logo.png',
      altImg: 'Imagem do evento 1',
      titulo: 'Palestra Intercâmbio',
      data: '15/02/2024 às 20h',
      descricao: 'Auditório 3º andar',
      link: '/evento'
    },
    {
      srcImg: '../../../../assets/icone-logo.png',
      altImg: 'Imagem do evento 2',
      titulo: 'Palestra Intercâmbio',
      data: '16/02/2024 às 20h',
      descricao: 'Auditório 3º andar',
      link: '/evento'
    }
  ];

  eventosConcluidos = [
    {
      srcImg: '../../../../assets/evento-default.jpg',
      altImg: 'Imagem do evento 3',
      titulo: 'Palestra Intercâmbio',
      data: '10/01/2024 às 20h',
      descricao: 'Auditório 3º andar',
      link: '/evento'
    },
    {
      srcImg: '../../../../assets/evento-default.jpg',
      altImg: 'Imagem do evento 4',
      titulo: 'Palestra Intercâmbio',
      data: '11/01/2024 às 20h',
      descricao: 'Auditório 3º andar',
      link: '/evento'
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
