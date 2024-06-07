import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Importar ReactiveFormsModule

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
import { HomePageComponent } from './pages/aluno/home-page/home-page.component';
import { StudentCoursesComponent } from './pages/aluno/student-courses/student-courses.component';
import { LoginPageComponent } from './pages/visitante/login-page/login-page.component';
import { InstitucionalPageComponent } from './pages/visitante/institucional-page/institucional-page.component';
import { AvailableCoursesComponent } from './pages/visitante/available-courses/available-courses.component';
import { CoursePageComponent } from './pages/aluno/course-page/course-page.component';
import { DrawerComponent } from './components/drawer/drawer.component';
import { NavbarService } from './components/navbar/navbar.service';
import { ProfilePageComponent } from './pages/aluno/profile-page/profile-page.component';
import { EventDetailsComponent } from './pages/visitante/event-details/event-details.component';
import { CardEventoMaiorComponent } from './components/card-evento-maior/card-evento-maior.component';
import { EventsPageComponent } from './pages/visitante/events-page/events-page.component';
import { AgendaPageComponent } from './pages/aluno/agenda-page/agenda-page.component';
import { NotasFaltasComponent } from './pages/aluno/notas-faltas/notas-faltas.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    CardEventoMenorComponent,
    CardNoticiaMaiorComponent,
    HomePageComponent,
    StudentCoursesComponent,
    CardQuadradoModeloComponent,
    NavbarComponent,
    FooterComponent,
    LoginPageComponent,
    InstitucionalPageComponent,
    AvailableCoursesComponent,
    CoursePageComponent,
    DrawerComponent,
    ProfilePageComponent,
    EventDetailsComponent,
    CardEventoMaiorComponent,
    EventsPageComponent,
    AgendaPageComponent,
    NotasFaltasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FullCalendarModule,
    ReactiveFormsModule // Adicionar ReactiveFormsModule aos imports
  ],
  providers: [NavbarService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }