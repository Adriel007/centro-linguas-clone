import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-quadrado-modelo',
  templateUrl: './card-quadrado-modelo.component.html',
  styleUrls: ['./card-quadrado-modelo.component.css']
})
export class CardQuadradoModeloComponent {
  @Input()
  cardConteudo:String = ''
  @Input()
  cardNivel:String = ''
  @Input()
  cardLink:String = '#'
  
}
