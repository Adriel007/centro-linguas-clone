import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-noticia-maior',
  templateUrl: './card-noticia-maior.component.html',
  styleUrls: ['./card-noticia-maior.component.css']
})
export class CardNoticiaMaiorComponent {
  @Input()
  cardData:string = "01-01-2024"
  
  @Input()
  cardTitulo:string = "Titulo Modelo"
  
  @Input()
  cardLink:string = "#"
  
  @Input()
  cardUrl:string = "../../../assets/img-h200w100p.svg"

  @Input()
  cardDescricao:string = "Descrição Modelo, Descrição Modelo, Descrição Modelo, Descrição Modelo, Descrição Modelo, Descrição Modelo, Descrição Modelo."  
  
  @Input()
  Id:string = "0"
}
