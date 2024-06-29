import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Aluno } from '../models/aluno.model';
import { Tarefa } from '../models/tarefa.model';
import { Nota } from '../models/nota.model';
import { Postagem } from '../models/postagem.model';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {
  private apiUrl = 'http://seu-backend-url/api/professores'; // URL base da API

  constructor(private http: HttpClient) { }

  getAlunosDaTurma(turmaId: number): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(`${this.apiUrl}/turmas/${turmaId}/alunos`);
  }

  postarTarefa(turmaId: number, tarefa: Tarefa): Observable<Tarefa> {
    return this.http.post<Tarefa>(`${this.apiUrl}/turmas/${turmaId}/tarefas`, tarefa);
  }

  registrarNota(alunoId: number, nota: Nota): Observable<Nota> {
    return this.http.post<Nota>(`${this.apiUrl}/alunos/${alunoId}/notas`, nota);
  }

  getProfessorInfo(professorId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${professorId}`);
  }

  getTurmasDoProfessor(professorId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${professorId}/turmas`);
  }

  postarRecado(postagem: Postagem): Observable<Postagem> {
    return this.http.post<Postagem>(`${this.apiUrl}/recados`, postagem);
  }
}
