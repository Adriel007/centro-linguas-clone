import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { EventPageComponent } from './pages/visitante/event-page/event-page.component';
import { CardEventoMaiorComponent } from './components/card-evento-maior/card-evento-maior.component';
import { StudentEventsComponent } from './pages/aluno/student-events/student-events.component';


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
    EventPageComponent,
    CardEventoMaiorComponent,
    StudentEventsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [NavbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
