import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-evento-menor',
  templateUrl: './card-evento-menor.component.html',
  styleUrls: ['./card-evento-menor.component.css']
})
export class CardEventoMenorComponent {
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
