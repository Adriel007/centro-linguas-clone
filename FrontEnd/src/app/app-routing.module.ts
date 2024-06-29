import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// VISITANTE
import { FirstPageComponent } from './pages/visitante/first-page/first-page.component';
import { LoginPageComponent } from './pages/visitante/login-page/login-page.component';

// GERAL
import { InstitucionalPageComponent } from './pages/visitante/institucional-page/institucional-page.component';
import { CursosDisponiveisComponent } from './pages/visitante/cursos-disponiveis/cursos-disponiveis.component';
import { EventosPageComponent } from './pages/visitante/eventos-page/eventos-page.component';
import { EventoDetalhesComponent } from './pages/visitante/evento-detalhes/evento-detalhes.component';

// ALUNO
import { HomeAlunoComponent } from './pages/aluno/home-aluno/home-aluno.component';
import { CursosAlunoComponent } from './pages/aluno/cursos-aluno/cursos-aluno.component';
import { CursoPageComponent } from './pages/aluno/curso-page/curso-page.component';
import { PerfilAlunoComponent } from './pages/aluno/perfil-aluno/perfil-aluno.component';
import { AgendaAlunoComponent } from './pages/aluno/agenda-aluno/agenda-aluno.component';
import { HistoricoPageComponent } from './pages/aluno/historico-page/historico-page.component';

// GUARDS
import { AuthGuard } from './guards/auth.guard';
import { EventoInscricaoComponent } from './pages/visitante/evento-inscricao/evento-inscricao.component';
import { HomeProfessorComponent } from './pages/professor/home-professor/home-professor.component';

const routes: Routes = [
  { path: '', component: FirstPageComponent, title: 'Centro de Línguas' },
  { path: 'login', component: LoginPageComponent, title: 'Login | Centro de Línguas' },
  { path: 'institucional', component: InstitucionalPageComponent, title: 'Institucional | Centro de Línguas' },
  { path: 'cursos-disponiveis', component: CursosDisponiveisComponent, title: 'Cursos Disponiveis | Centro de Línguas' },
  { path: 'evento', component: EventoDetalhesComponent, title: 'Evento | Centro de Línguas' },
  { path: 'os-eventos', component: EventosPageComponent, title: 'Eventos | Centro de Línguas' },
  { path: 'inscricao-evento', component: EventoInscricaoComponent, title: 'Inscrição Evento | Centro de Línguas' },

  // Rotas dos alunos com AuthGuard
  { path: 'home-aluno', component: HomeAlunoComponent, title: 'Centro de Línguas', canActivate: [AuthGuard] },
  { path: 'meus-cursos', component: CursosAlunoComponent, title: 'Meus Cursos | Centro de Línguas', canActivate: [AuthGuard] },
  { path: 'curso', component: CursoPageComponent, title: 'Curso | Centro de Línguas', canActivate: [AuthGuard] },
  { path: 'perfil-aluno', component: PerfilAlunoComponent, title: 'Meu Perfil | Centro de Línguas', canActivate: [AuthGuard] },
  { path: 'agenda', component: AgendaAlunoComponent, title: 'Agenda | Centro de Línguas', canActivate: [AuthGuard] },
  { path: 'historico', component: HistoricoPageComponent, title: 'Histórico | Centro de Línguas', canActivate: [AuthGuard] },
  
  // Rotas dos professores
  { path: 'home-professor', component: HomeProfessorComponent, title: 'Home | Centro de Línguas', canActivate: [AuthGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
