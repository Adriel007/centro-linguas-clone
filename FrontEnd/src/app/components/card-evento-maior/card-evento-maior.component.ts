import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-evento-maior',
  templateUrl: './card-evento-maior.component.html',
  styleUrls: ['./card-evento-maior.component.css']
})
export class CardEventoMaiorComponent {
  @Input() cardSrcImg: string | undefined;
  @Input() cardAltImg: string | undefined;
  @Input() cardTitulo: string | undefined;
  @Input() cardData: string | undefined;
  @Input() cardDescricao: string | undefined;
  @Input() cardLink: string | undefined;
}
