import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
    `
      .mr-1 {
        margin-right: 10px !important;
      }

      .mt-5 {
        margin-top: 10px !important;
      }
    `,
  ],
})
export class VerPaisComponent implements OnInit {
  pais!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.paisService.getPaisPorCodigo(id)),
        tap(console.log)
      )
      .subscribe((resp) => {
        this.pais = resp[0];
        console.log(resp);
      });

    /*this.activatedRoute.params.subscribe(({ id }) => {
      this.paisService.getPaisPorCodigo(id).subscribe({
        next: (pais) => {
          console.log(pais);
        },
        error: () => {},
      });
    });*/
  }
}
