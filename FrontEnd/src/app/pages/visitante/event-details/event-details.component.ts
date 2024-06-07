import { Component } from '@angular/core';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent {
  eventos = {
      titulo: 'Workshop de Desenvolvimento Web',
      data: '10 de maio de 2024',
      local: 'Local do Evento, Endereço, Cidade',
      descricao: 'Um workshop abrangente sobre desenvolvimento web, cobrindo as últimas tendências e tecnologias.',
      agenda: {
          horario: '09:00 - 10:00',
          atividade: 'Palestra de Abertura'
        },
      palestrantes: {
          nome: 'Nome do Palestrante 1',
          descricao: 'Descrição do palestrante...',
          foto: 'speaker1.jpg'
        },
      registro: 'Informações sobre como se registrar...',
      contato: 'Informações de contato...',
      link: '/evento'
    };
}
