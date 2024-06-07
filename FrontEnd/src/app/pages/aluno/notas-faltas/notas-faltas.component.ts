// notas-faltas.component.ts
import { Component, OnInit } from '@angular/core';
import { NotaFalta } from './notas-faltas.model';
import { NotasFaltasService } from './notas-faltas.service';

@Component({
  selector: 'app-notas-faltas',
  templateUrl: './notas-faltas.component.html',
  styleUrls: ['./notas-faltas.component.css']
})
export class NotasFaltasComponent implements OnInit {
  notasFaltas: NotaFalta[] = [];
  filter: 'all' | 'notas' | 'faltas' = 'all';

  constructor(private notasFaltasService: NotasFaltasService) { }

  ngOnInit(): void {
    this.notasFaltas = this.notasFaltasService.getNotasFaltas();
  }

  setFilter(filter: 'all' | 'notas' | 'faltas'): void {
    this.filter = filter;
  }

  calcularMedia(nota1: number, nota2: number): number {
    return (nota1 + nota2) / 2;
  }
}
