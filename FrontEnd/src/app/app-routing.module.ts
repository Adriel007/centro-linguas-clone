import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// VISITANTE
import { FirstPageComponent } from './pages/visitante/first-page/first-page.component';
import { LoginPageComponent } from './pages/visitante/login-page/login-page.component';

// GERAL
import { InstitucionalPageComponent } from './pages/visitante/institucional-page/institucional-page.component';
import { AvailableCoursesComponent } from './pages/visitante/available-courses/available-courses.component';
import { EventsPageComponent } from './pages/visitante/events-page/events-page.component';
import { EventDetailsComponent } from './pages/visitante/event-details/event-details.component';

// ALUNO
import { HomePageComponent } from './pages/aluno/home-page/home-page.component';
import { StudentCoursesComponent } from './pages/aluno/student-courses/student-courses.component';
import { CoursePageComponent } from './pages/aluno/course-page/course-page.component';
import { ProfilePageComponent } from './pages/aluno/profile-page/profile-page.component';
import { AgendaPageComponent } from './pages/aluno/agenda-page/agenda-page.component';
import { NotasFaltasComponent } from './pages/aluno/notas-faltas/notas-faltas.component';

// GUARDS
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: FirstPageComponent, title: 'Centro de Línguas' },
  { path: 'login', component: LoginPageComponent, title: 'Login | Centro de Línguas' },
  { path: 'institucional', component: InstitucionalPageComponent, title: 'Institucional | Centro de Línguas' },
  { path: 'cursos-disponiveis', component: AvailableCoursesComponent, title: 'Cursos Disponiveis | Centro de Línguas' },
  { path: 'evento', component: EventDetailsComponent, title: 'Evento | Centro de Línguas' },
  { path: 'os-eventos', component: EventsPageComponent, title: 'Eventos | Centro de Línguas' },

  // Rotas dos alunos com AuthGuard
  { path: 'home', component: HomePageComponent, title: 'Centro de Línguas', canActivate: [AuthGuard] },
  { path: 'meus-cursos', component: StudentCoursesComponent, title: 'Meus Cursos | Centro de Línguas', canActivate: [AuthGuard] },
  { path: 'curso', component: CoursePageComponent, title: 'Curso | Centro de Línguas', canActivate: [AuthGuard] },
  { path: 'perfil', component: ProfilePageComponent, title: 'Meu Perfil | Centro de Línguas', canActivate: [AuthGuard] },
  { path: 'agenda', component: AgendaPageComponent, title: 'Agenda | Centro de Línguas', canActivate: [AuthGuard] },
  { path: 'notas-faltas', component: NotasFaltasComponent, title: 'Notas e Faltas | Centro de Línguas', canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
