import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-evento-maior',
  templateUrl: './card-evento-maior.component.html',
  styleUrls: ['./card-evento-maior.component.css']
})
export class CardEventoMaiorComponent {
  @Input()
  cardSrcImg:string = ""

  @Input()
  cardAltImg:string = "Imagem modelo"

  @Input()
  cardData:string = "01-01-2024"
  
  @Input()
  cardTitulo:string = "Titulo Modelo"
  
  @Input()
  cardLink:string = "/evento:id"

  @Input()
  cardDescricao:string = "Descrição Modelo, Descrição Modelo, Descrição Modelo."  
  
  @Input()
  Id:string = "0"
}
