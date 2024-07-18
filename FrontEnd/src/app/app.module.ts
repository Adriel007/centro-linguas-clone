import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importar ReactiveFormsModule
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';

import { FullCalendarModule } from '@fullcalendar/angular'; // Import the FullCalendar module

import { FirstPageComponent } from './pages/visitante/first-page/first-page.component';
import { CardEventoMenorComponent } from './components/card-evento-menor/card-evento-menor.component';
import { CardNoticiaMaiorComponent } from './components/card-noticia-maior/card-noticia-maior.component';
import { CardQuadradoModeloComponent } from './components/card-quadrado-modelo/card-quadrado-modelo.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeAlunoComponent } from './pages/aluno/home-aluno/home-aluno.component';
import { CursosAlunoComponent } from './pages/aluno/cursos-aluno/cursos-aluno.component';
import { LoginPageComponent } from './pages/visitante/login-page/login-page.component';
import { InstitucionalPageComponent } from './pages/visitante/institucional-page/institucional-page.component';
import { CursosDisponiveisComponent } from './pages/visitante/cursos-disponiveis/cursos-disponiveis.component';
import { CursoPageComponent } from './pages/aluno/curso-page/curso-page.component';
import { DrawerComponent } from './components/drawer/drawer.component';
import { NavbarService } from './services/navbar.service';
import { PerfilAlunoComponent } from './pages/aluno/perfil-aluno/perfil-aluno.component';
import { EventoDetalhesComponent } from './pages/visitante/evento-detalhes/evento-detalhes.component';
import { CardEventoMaiorComponent } from './components/card-evento-maior/card-evento-maior.component';
import { EventosPageComponent } from './pages/visitante/eventos-page/eventos-page.component';
import { AgendaAlunoComponent } from './pages/aluno/agenda-aluno/agenda-aluno.component';
import { HistoricoPageComponent } from './pages/aluno/historico-page/historico-page.component';
import { EventoInscricaoComponent } from './pages/visitante/evento-inscricao/evento-inscricao.component';
import { HomeProfessorComponent } from './pages/professor/home-professor/home-professor.component';
import { PerfilProfessorComponent } from './pages/professor/perfil-professor/perfil-professor.component';
import { TurmasProfessorComponent } from './pages/professor/turmas-professor/turmas-professor.component';
import { TurmaPageComponent } from './pages/professor/turma-page/turma-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    CardEventoMenorComponent,
    CardNoticiaMaiorComponent,
    HomeAlunoComponent,
    CursosAlunoComponent,
    CardQuadradoModeloComponent,
    NavbarComponent,
    FooterComponent,
    LoginPageComponent,
    InstitucionalPageComponent,
    CursosDisponiveisComponent,
    CursoPageComponent,
    DrawerComponent,
    PerfilAlunoComponent,
    EventoDetalhesComponent,
    CardEventoMaiorComponent,
    EventosPageComponent,
    AgendaAlunoComponent,
    HistoricoPageComponent,
    EventoInscricaoComponent,
    HomeProfessorComponent,
    PerfilProfessorComponent,
    TurmasProfessorComponent,
    TurmaPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FullCalendarModule,
    ReactiveFormsModule // Adicionar ReactiveFormsModule aos imports
  ],
  providers: [NavbarService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
