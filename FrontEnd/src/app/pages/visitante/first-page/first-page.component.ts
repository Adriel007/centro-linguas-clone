import { Component } from '@angular/core';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent {
  eventos = [
    {
      titulo: 'Workshop de Desenvolvimento Web',
      data: '10 de maio de 2024',
      descricao: 'Um workshop abrangente sobre desenvolvimento web, cobrindo as últimas tendências e tecnologias.',
      link: '/evento'
    },
    {
      titulo: 'Palestra sobre Inteligência Artificial',
      data: '15 de junho de 2024',
      descricao: 'Uma palestra fascinante sobre os avanços recentes em inteligência artificial e seu impacto na sociedade.',
      link: '/evento'
    },
    {
      titulo: 'Conferência de Design Gráfico',
      data: '20 de julho de 2024',
      descricao: 'Uma conferência emocionante para designers gráficos, destacando as melhores práticas e inspirações.',
      link: '/evento'
    },
    {
      titulo: 'Seminário de Empreendedorismo',
      data: '5 de agosto de 2024',
      descricao: 'Um seminário imperdível para empreendedores, com histórias de sucesso e dicas práticas para iniciar um negócio.',
      link: '/evento'
    },
    {
      titulo: 'Feira de Tecnologia',
      data: '18 de setembro de 2024',
      descricao: 'Uma feira incrível para entusiastas de tecnologia, apresentando as últimas inovações e produtos.',
      link: '/evento'
    }
  ];
}
