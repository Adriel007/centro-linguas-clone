import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './pages/visitante/first-page/first-page.component';
import { HomePageComponent } from './pages/aluno/home-page/home-page.component';
import { StudentCoursesComponent } from './pages/aluno/student-courses/student-courses.component';
import { LoginPageComponent } from './pages/visitante/login-page/login-page.component';
import { InstitucionalPageComponent } from './pages/visitante/institucional-page/institucional-page.component';
import { AvailableCoursesComponent } from './pages/visitante/available-courses/available-courses.component';
import { CoursePageComponent } from './pages/aluno/course-page/course-page.component';
import { ProfilePageComponent } from './pages/aluno/profile-page/profile-page.component';
import { EventPageComponent } from './pages/visitante/event-page/event-page.component';
import { StudentEventsComponent } from './pages/aluno/student-events/student-events.component';


const routes: Routes = [
  {path: '', component: FirstPageComponent, title: 'Centro de Línguas'},
  {path: 'home', component: HomePageComponent, title: 'Centro de Línguas'},
  {path: 'meus-cursos', component: StudentCoursesComponent, title: 'Meus Cursos | Centro de Línguas'},
  {path: 'login', component: LoginPageComponent, title: 'Login | Centro de Línguas'},
  {path: 'institucional', component: InstitucionalPageComponent, title: 'Institucional | Centro de Línguas'},
  {path: 'cursos-disponiveis', component: AvailableCoursesComponent, title: 'Cursos Disponiveis | Centro de Línguas'},
  {path: 'curso', component: CoursePageComponent, title: 'Curso | Centro de Línguas'},
  {path: 'perfil', component: ProfilePageComponent, title: 'Meu Perfil | Centro de Línguas'},
  {path: 'evento', component: EventPageComponent, title: 'Evento | Centro de Línguas'},
  {path: 'meus-eventos', component: StudentEventsComponent, title: 'Meus Eventos | Centro de Línguas'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
