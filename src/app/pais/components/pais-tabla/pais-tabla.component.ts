import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styles: [
    `
      .small-flag {
        width: 50px;
      }
    `,
  ],
})
export class PaisTablaComponent {
  @Input() paises: Country[] = [];
}
