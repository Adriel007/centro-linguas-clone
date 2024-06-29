import { Component } from '@angular/core';

interface Professor {
  nome: string;
  email: string;
  foto: string;
}

interface Curso {
  nomeCurso: string;
  horarioCurso: string;
  duracaoCurso: string;
  descricaoCurso: string;
  professorCurso: Professor;
  descricaoBasico: string;
  descricaoIntermediario: string;
  descricaoAvancado: string;
}

@Component({
  selector: 'app-cursos-disponiveis',
  templateUrl: './cursos-disponiveis.component.html',
  styleUrls: ['./cursos-disponiveis.component.css']
})
export class CursosDisponiveisComponent {
  cursos: Curso[] = [
    {
      nomeCurso: 'Inglês',
      descricaoCurso: `
        Nosso curso de inglês é projetado para ajudá-lo a desenvolver habilidades sólidas em conversação e gramática, permitindo que você se comunique de forma eficaz em inglês em uma variedade de situações. Durante o curso, você terá a oportunidade de praticar suas habilidades de fala, compreensão auditiva, leitura e escrita, garantindo um aprendizado abrangente e equilibrado do idioma.
        Resumo do Curso:
        Nosso curso de inglês é estruturado em três estágios principais para atender às diferentes necessidades e níveis de habilidade dos alunos.
      `,
      professorCurso: {
        nome: 'John Doe',
        email: 'johndoe@example.com',
        foto: '../../assets/profile-default.png'
      },
      horarioCurso:'Segunda-feira 15:00',
      duracaoCurso:'1 ano e meio',
      descricaoBasico: `
        Neste estágio, os alunos serão introduzidos aos fundamentos do inglês, incluindo vocabulário essencial, estruturas gramaticais básicas e expressões comuns utilizadas em situações do dia a dia. As aulas serão focadas em construir uma base sólida para o aprendizado futuro, com ênfase na prática de conversação simples e compreensão auditiva.
      `,
      descricaoIntermediario: `
        No estágio intermediário, os alunos irão expandir seus conhecimentos de inglês, aprofundando-se em tópicos mais complexos de gramática e ampliando seu vocabulário. As aulas incluirão atividades práticas para melhorar a fluência na conversação, bem como exercícios de leitura e escrita para aprimorar a compreensão e expressão escrita.
      `,
      descricaoAvancado: `
        O estágio avançado é voltado para alunos que desejam aprimorar suas habilidades de comunicação em inglês para um nível mais sofisticado. Durante este estágio, os alunos serão desafiados a participar de discussões mais complexas, apresentações orais e a trabalhar com textos autênticos em inglês. A ênfase estará na fluência, precisão gramatical e compreensão de nuances da língua inglesa.
      `,
    },
    {
      nomeCurso: 'Espanhol',
      descricaoCurso: `
        Nosso curso de espanhol é desenvolvido para ajudar os alunos a adquirirem habilidades sólidas em conversação e gramática, capacitando-os a se comunicar eficazmente em espanhol em uma variedade de contextos. Durante o curso, os alunos terão a oportunidade de praticar suas habilidades de fala, compreensão auditiva, leitura e escrita, garantindo uma compreensão abrangente e equilibrada do idioma.

        Resumo do Curso:
        O curso de espanhol é organizado em três estágios principais para atender às diferentes necessidades e níveis de habilidade dos alunos.
      `,
      professorCurso: {
        nome: 'Maria Garcia',
        email: 'mariagarcia@example.com',
        foto: '../../assets/profile-default.png'
      },
      horarioCurso:'Terça-feira 14:00',
      duracaoCurso:'1 ano e meio',
      descricaoBasico: `
        Durante este estágio, os alunos serão introduzidos aos conceitos fundamentais do espanhol, incluindo vocabulário essencial, estruturas gramaticais básicas e expressões comuns utilizadas em situações do dia a dia. As aulas serão focadas em estabelecer uma base sólida para o aprendizado futuro, com ênfase na prática de conversação simples e compreensão auditiva.
      `,
      descricaoIntermediario: `
        No estágio intermediário, os alunos expandirão seus conhecimentos de espanhol, explorando tópicos gramaticais mais complexos e ampliando seu vocabulário. As aulas incluirão atividades práticas para melhorar a fluência na conversação, bem como exercícios de leitura e escrita para aprimorar a compreensão e expressão escrita.
      `,
      descricaoAvancado: `
        O estágio avançado destina-se a alunos que desejam aprimorar suas habilidades de comunicação em espanhol para um nível mais avançado. Durante este estágio, os alunos serão desafiados a participar de discussões mais elaboradas, apresentações orais e a trabalhar com textos autênticos em espanhol. A ênfase estará na fluência, precisão gramatical e compreensão de nuances da língua espanhola.
      `,
    },
    {
      nomeCurso: 'Alemão',
      descricaoCurso: `
        O curso de alemão foi desenvolvido para ajudar os alunos a adquirirem habilidades sólidas em conversação e gramática, capacitando-os a se comunicar eficazmente em alemão em uma variedade de contextos. Durante o curso, os alunos terão a oportunidade de praticar suas habilidades de fala, compreensão auditiva, leitura e escrita, garantindo uma compreensão abrangente e equilibrada do idioma.

        Resumo do Curso:
        O curso de alemão é organizado em três estágios principais para atender às diferentes necessidades e níveis de habilidade dos alunos.
      `,
      professorCurso: {
        nome: 'Hans Müller',
        email: 'hansmueller@example.com',
        foto: '../../assets/profile-default.png'
      },
      horarioCurso:'Quarta-feira 16:00',
      duracaoCurso:'2 anos',
      descricaoBasico: `
        Durante este estágio, os alunos serão introduzidos aos conceitos fundamentais do alemão, incluindo vocabulário essencial, estruturas gramaticais básicas e expressões comuns utilizadas em situações do dia a dia. As aulas serão focadas em estabelecer uma base sólida para o aprendizado futuro, com ênfase na prática de conversação simples e compreensão auditiva.
      `,
      descricaoIntermediario: `
        No estágio intermediário, os alunos expandirão seus conhecimentos de alemão, explorando tópicos gramaticais mais complexos e ampliando seu vocabulário. As aulas incluirão atividades práticas para melhorar a fluência na conversação, bem como exercícios de leitura e escrita para aprimorar a compreensão e expressão escrita.
      `,
      descricaoAvancado: `
        O estágio avançado destina-se a alunos que desejam aprimorar suas habilidades de comunicação em alemão para um nível mais avançado. Durante este estágio, os alunos serão desafiados a participar de discussões mais elaboradas, apresentações orais e a trabalhar com textos autênticos em alemão. A ênfase estará na fluência, precisão gramatical e compreensão de nuances da língua alemã.
      `,
    },
    {
      nomeCurso: 'Coreano',
      descricaoCurso: `
        O curso de coreano foi desenvolvido para ajudar os alunos a adquirirem habilidades sólidas em conversação e gramática, capacitando-os a se comunicar eficazmente em coreano em uma variedade de contextos. Durante o curso, os alunos terão a oportunidade de praticar suas habilidades de fala, compreensão auditiva, leitura e escrita, garantindo uma compreensão abrangente e equilibrada do idioma.

        Resumo do Curso:
        O curso de coreano é organizado em três estágios principais para atender às diferentes necessidades e níveis de habilidade dos alunos.
      `,
      professorCurso: {
        nome: 'Kim Ji-soo',
        email: 'kimjiso@example.com',
        foto: '../../assets/profile-default.png'
      },
      horarioCurso:'Quinta-feira 17:30',
      duracaoCurso:'2 anos',
      descricaoBasico: `
        Durante este estágio, os alunos serão introduzidos aos conceitos fundamentais do coreano, incluindo vocabulário essencial, estruturas gramaticais básicas e expressões comuns utilizadas em situações do dia a dia. As aulas serão focadas em estabelecer uma base sólida para o aprendizado futuro, com ênfase na prática de conversação simples e compreensão auditiva.
      `,
      descricaoIntermediario: `
        No estágio intermediário, os alunos expandirão seus conhecimentos de coreano, explorando tópicos gramaticais mais complexos e ampliando seu vocabulário. As aulas incluirão atividades práticas para melhorar a fluência na conversação, bem como exercícios de leitura e escrita para aprimorar a compreensão e expressão escrita.
      `,
      descricaoAvancado: `
        O estágio avançado destina-se a alunos que desejam aprimorar suas habilidades de comunicação em coreano para um nível mais avançado. Durante este estágio, os alunos serão desafiados a participar de discussões mais elaboradas, apresentações orais e a trabalhar com textos autênticos em coreano. A ênfase estará na fluência, precisão gramatical e compreensão de nuances da língua coreana.
      `,
    },
    {
      nomeCurso: 'Francês',
      descricaoCurso: `
        O curso de francês foi desenvolvido para ajudar os alunos a adquirirem habilidades sólidas em conversação e gramática, capacitando-os a se comunicar eficazmente em francês em uma variedade de contextos. Durante o curso, os alunos terão a oportunidade de praticar suas habilidades de fala, compreensão auditiva, leitura e escrita, garantindo uma compreensão abrangente e equilibrada do idioma.

        Resumo do Curso:
        O curso de francês é organizado em três estágios principais para atender às diferentes necessidades e níveis de habilidade dos alunos.
      `,
      professorCurso: {
        nome: 'Marie Leclerc',
        email: 'marieleclerc@example.com',
        foto: '../../assets/profile-default.png'
      },
      horarioCurso:'Sexta-feira 19:00',
      duracaoCurso:'2 anos',
      descricaoBasico: `
        Durante este estágio, os alunos serão introduzidos aos conceitos fundamentais do francês, incluindo vocabulário essencial, estruturas gramaticais básicas e expressões comuns utilizadas em situações do dia a dia. As aulas serão focadas em estabelecer uma base sólida para o aprendizado futuro, com ênfase na prática de conversação simples e compreensão auditiva.
      `,
      descricaoIntermediario: `
        No estágio intermediário, os alunos expandirão seus conhecimentos de francês, explorando tópicos gramaticais mais complexos e ampliando seu vocabulário. As aulas incluirão atividades práticas para melhorar a fluência na conversação, bem como exercícios de leitura e escrita para aprimorar a compreensão e expressão escrita.
      `,
      descricaoAvancado: `
        O estágio avançado destina-se a alunos que desejam aprimorar suas habilidades de comunicação em francês para um nível mais avançado. Durante este estágio, os alunos serão desafiados a participar de discussões mais elaboradas, apresentações orais e a trabalhar com textos autênticos em francês. A ênfase estará na fluência, precisão gramatical e compreensão de nuances da língua francesa.
      `,
    },
    // Adicione mais cursos conforme necessário
  ];

  cursoSelecionado: Curso | null = null;

  mostrarDescricao(curso: Curso) {
    this.cursoSelecionado = curso;
  }
}
