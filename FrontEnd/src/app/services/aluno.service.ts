import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  private apiUrl = 'http://seu-backend-url/api/alunos'; // URL base da API

  constructor(private http: HttpClient) { }

  // Método para obter as notas de um aluno
  getNotas(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}/notas`);
  }

  // Método para obter o horário de um aluno
  getHorario(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}/horario`);
  }

  // Outros métodos para alunos podem ser adicionados aqui
}
