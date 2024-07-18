import { Component } from '@angular/core';

@Component({
  selector: 'app-cursos-aluno',
  templateUrl: './cursos-aluno.component.html',
  styleUrls: ['./cursos-aluno.component.css']
})
export class CursosAlunoComponent {
  cursos: { cardConteudo: string, cardNivel: string, cardLink:string }[] = [
    { cardConteudo: 'Curso de Inglês', cardNivel: 'Intermediário', cardLink: '/curso-pagina' },
    { cardConteudo: 'Curso de Espanhol', cardNivel: 'Avançado', cardLink: '/curso-pagina'  },
    { cardConteudo: 'Curso de Francês', cardNivel: 'Básico', cardLink: '/curso-pagina'  },
    { cardConteudo: 'Curso de Coreano', cardNivel: 'Avançado', cardLink: '/curso-pagina'  },
    { cardConteudo: 'Curso de Coreano', cardNivel: 'Avançado', cardLink: '/curso-pagina'  },
    { cardConteudo: 'Curso de Coreano', cardNivel: 'Avançado', cardLink: '/curso-pagina'  },
    { cardConteudo: 'Curso de Mandarim', cardNivel: 'Intermediário', cardLink: '/curso-pagina'  }
  ];
}
