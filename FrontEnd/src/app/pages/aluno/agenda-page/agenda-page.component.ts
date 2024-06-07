import { Component } from '@angular/core';
import { CalendarOptions, EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-agenda-page',
  templateUrl: './agenda-page.component.html',
  styleUrls: ['./agenda-page.component.css']
})
export class AgendaPageComponent {
  eventos: EventInput[] = [
    { title: 'Evento 1', date: '2024-06-01' },
    { title: 'Evento 2', date: '2024-06-02' }
  ];

  opcoesCalendarioMes: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    events: this.eventos,
    dateClick: this.lidarComCliqueNaData.bind(this),
    selectable: true,
    editable: true,
    contentHeight: 'auto'
  };

  opcoesCalendarioSemana: CalendarOptions = {
    initialView: 'timeGridWeek',
    plugins: [timeGridPlugin, interactionPlugin],
    events: this.eventos,
    dateClick: this.lidarComCliqueNaData.bind(this),
    selectable: true,
    editable: true,
    contentHeight: '700px',
  };

  lidarComCliqueNaData(arg: any) {
    const titulo = prompt('Insira o título do evento:');
    if (titulo) {
      this.eventos = [
        ...this.eventos,
        { title: titulo, date: arg.dateStr }
      ];
    }
  }
}
