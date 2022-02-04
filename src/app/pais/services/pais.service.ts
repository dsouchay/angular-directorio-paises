import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private _apiUrl: string = 'https://restcountries.com/v3.1';
  fields: string = '?fields=name,capital,population,flags,cca2';

  constructor(private http: HttpClient) {}

  get httpParams() {
    const httpParams = new HttpParams();
    return httpParams.set('fields', this.fields);
  }

  buscarPais(termino: string): Observable<Country[]> {
    const url = ` ${this._apiUrl}/name/${termino}${this.fields}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  buscarCapital(termino: string): Observable<Country[]> {
    const url = ` ${this._apiUrl}/capital/${termino}${this.fields}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  getPaisPorCodigo(termino: string): Observable<Country> {
    const url = ` ${this._apiUrl}/alpha/${termino}`;
    return this.http.get<Country>(url);
  }

  getPaisPorREgion(termino: string): Observable<Country[]> {
    const url = ` ${this._apiUrl}/region/${termino}`;
    return this.http.get<Country[]>(url);
  }
}
