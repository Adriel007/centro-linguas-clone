import { Component } from '@angular/core';

@Component({
  selector: 'app-home-aluno',
  templateUrl: './home-aluno.component.html',
  styleUrls: ['./home-aluno.component.css']
})
export class HomeAlunoComponent {
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
