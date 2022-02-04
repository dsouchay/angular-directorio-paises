import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
      button {
        margin-right: 5px;
      }
    `,
  ],
})
export class PorRegionComponent {
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: Country[] = [];
  hayError = false;

  constructor(private paisService: PaisService) {}

  selectRegion(value: string) {
    this.hayError = false;
    if (value == this.regionActiva) return;
    this.regionActiva = value;

    this.paises = [];
    this.paisService.getPaisPorREgion(value).subscribe({
      next: (resp) => {
        this.paises = resp;
      },
      error: () => {
        this.paises = [];
        this.hayError = true;
      },
    });
  }

  getClases(region: string) {
    return this.regionActiva !== region
      ? 'btn btn-outline-primary'
      : 'btn btn-primary';
  }
}
