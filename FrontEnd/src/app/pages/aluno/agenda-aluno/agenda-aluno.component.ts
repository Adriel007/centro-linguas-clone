import { Component } from '@angular/core';
import { CalendarOptions, EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-agenda-aluno',
  templateUrl: './agenda-aluno.component.html',
  styleUrls: ['./agenda-aluno.component.css']
})
export class AgendaAlunoComponent {
  eventos: EventInput[] = [
    { title: 'Evento 1', date: '2024-08-01' },
    { title: 'Evento 2', date: '2024-08-02' }
  ];

  opcoesCalendarioMes: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    events: this.eventos,
    dateClick: this.lidarComCliqueNaData.bind(this),
    selectable: true,
    editable: true,
    contentHeight: 'auto',
  };

  opcoesCalendarioSemana: CalendarOptions = {
    initialView: 'timeGridWeek',
    plugins: [timeGridPlugin, interactionPlugin],
    events: this.eventos,
    dateClick: this.lidarComCliqueNaData.bind(this),
    selectable: true,
    editable: true,
    contentHeight: '60vh',
  };

  lidarComCliqueNaData(arg: any) {
    const titulo = prompt('Insira o título do evento:');
    if (titulo) {
      const novoEvento = { title: titulo, date: arg.dateStr };
      this.eventos = [...this.eventos, novoEvento];
      this.atualizarEventos();
    }
  }

  atualizarEventos() {
    this.opcoesCalendarioMes = { ...this.opcoesCalendarioMes, events: this.eventos };
    this.opcoesCalendarioSemana = { ...this.opcoesCalendarioSemana, events: this.eventos };
  }
}
