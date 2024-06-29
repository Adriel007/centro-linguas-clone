import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {
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
      link: '/inscricao-evento'
    },
    {
      titulo: 'Conferência de Design Gráfico',
      data: '20 de julho de 2024',
      descricao: 'Uma conferência emocionante para designers gráficos, destacando as melhores práticas e inspirações.',
      link: '/inscricao-evento'
    },
    {
      titulo: 'Seminário de Empreendedorismo',
      data: '5 de agosto de 2024',
      descricao: 'Um seminário imperdível para empreendedores, com histórias de sucesso e dicas práticas para iniciar um negócio.',
      link: '/inscricao-evento'
    },
    {
      titulo: 'Feira de Tecnologia',
      data: '18 de setembro de 2024',
      descricao: 'Uma feira incrível para entusiastas de tecnologia, apresentando as últimas inovações e produtos.',
      link: '/inscricao-evento'
    }
  ];

  noticias = [
    {
      titulo: 'Notícia 1',
      descricao: 'Descrição da notícia 1',
      link: '#',
      url: '../../../assets/img-h200w100p.svg'
    },
    {
      titulo: 'Notícia 2',
      descricao: 'Descrição da notícia 2',
      link: '#',
      url: '../../../assets/img-h200w100p.svg'
    },
    {
      titulo: 'Notícia 3',
      descricao: 'Descrição da notícia 3',
      link: '#',
      url: '../../../assets/img-h200w100p.svg'
    }
  ];

  activeIndex = 0;

  ngOnInit() {
    this.startCarousel();
  }

  startCarousel() {
    setInterval(() => {
      this.next();
    }, 5000);
  }

  next() {
    this.activeIndex = (this.activeIndex + 1) % this.noticias.length;
  }

  prev() {
    this.activeIndex = (this.activeIndex - 1 + this.noticias.length) % this.noticias.length;
  }
}
