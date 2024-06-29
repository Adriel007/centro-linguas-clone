import { Component } from '@angular/core';

@Component({
  selector: 'app-evento-inscricao',
  templateUrl: './evento-inscricao.component.html',
  styleUrls: ['./evento-inscricao.component.css']
})
export class EventoInscricaoComponent {
  onSubmit() {
    // Lógica para processar o formulário
    alert('Inscrição enviada!');
  }
}
