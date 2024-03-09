import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UnidadeFederativa } from '../types/unidade-federativa';
import { Observable, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UnidadesFederativasService {

  private apiUrl: string = environment.apiUrl;
  private cache$?: Observable<UnidadeFederativa[]>;

  formUF!:FormGroup;

  constructor(
    private http: HttpClient
  ) {

    this.formUF = new FormGroup({
      origem: new FormControl(),
      destino: new FormControl()

    })

   }

  listar() : Observable<UnidadeFederativa[]>{
    if(!this.cache$){
      this.cache$ = this.requestEstados().pipe(shareReplay(1));
    }
    return this.cache$;
  }

  private requestEstados(): Observable<UnidadeFederativa[]>{
    let urlApi: string = `${this.apiUrl}/estados`;
    return this.http.get<UnidadeFederativa[]>(urlApi);
  }

}
