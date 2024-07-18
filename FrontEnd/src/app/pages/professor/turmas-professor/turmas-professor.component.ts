import { Component } from '@angular/core';

@Component({
  selector: 'app-turmas-professor',
  templateUrl: './turmas-professor.component.html',
  styleUrls: ['./turmas-professor.component.css']
})
export class TurmasProfessorComponent {
  turmas: { cardConteudo: string, cardNivel: string, cardLink:string }[] = [
    { cardConteudo: 'Turma de Inglês', cardNivel: 'Intermediário', cardLink: '/turma-pagina' },
    { cardConteudo: 'Turma de Espanhol', cardNivel: 'Avançado', cardLink: '/turma-pagina'  },
    { cardConteudo: 'Turma de Francês', cardNivel: 'Básico', cardLink: '/turma-pagina'  },
    { cardConteudo: 'Turma de Coreano', cardNivel: 'Avançado', cardLink: '/turma-pagina'  },
    { cardConteudo: 'Turma de Coreano', cardNivel: 'Avançado', cardLink: '/turma-pagina'  },
    { cardConteudo: 'Turma de Coreano', cardNivel: 'Avançado', cardLink: '/turma-pagina'  },
    { cardConteudo: 'Turma de Mandarim', cardNivel: 'Intermediário', cardLink: '/turma-pagina'  }
  ];
}
