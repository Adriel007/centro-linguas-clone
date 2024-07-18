// notas-faltas.service.ts
import { Injectable } from '@angular/core';
import { NotaFalta } from './notas-faltas.model';

@Injectable({
  providedIn: 'root'
})
export class NotasFaltasService {

  constructor() { }

  getNotasFaltas(): NotaFalta[] {
    // Substitua por chamadas reais à API no futuro
    return [
      { curso: 'Inglês', nota1: 90, nota2: 85, media: (90 + 85) / 2, presencas: 10, faltas: 2 },
      { curso: 'Espanhol', nota1: 80, nota2: 75, media: (80 + 75) / 2, presencas: 10, faltas: 3 },
      { curso: 'Francês', nota1: 78, nota2: 82, media: (78 + 82) / 2, presencas: 10, faltas: 1 }
    ];
  }
}
