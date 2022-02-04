import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class PorPaisComponent {
  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  placeholdertext: string = 'Buscar por país...';
  paisesSugeridos: Country[] = [];

  constructor(private paisService: PaisService) {}

  buscar(termino: string) {
    this.hayError = false;
    this.paisesSugeridos = [];
    this.termino = termino;
    this.paisService.buscarPais(this.termino).subscribe({
      next: (resp) => {
        this.paises = resp;
        this.termino = '';
      },
      error: () => {
        this.paises = [];
        this.hayError = true;
      },
    });
  }

  sugerencias(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarPais(termino).subscribe({
      next: (resp) => {
        this.paisesSugeridos = resp.splice(0, 5);
        console.log(resp);
      },
      error: () => {
        this.paisesSugeridos = [];
      },
    });
  }
}
