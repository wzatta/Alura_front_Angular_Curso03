import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UnidadeFederativa } from '../types/unidade-federativa';
import { Observable, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UnidadesFederativasService {

  private apiUrl: string = environment.apiUrl;
  private cache$?: Observable<UnidadeFederativa[]>;

  constructor(
    private http: HttpClient
  ) { }

  listar() : Observable<UnidadeFederativa[]>{
    if(!this.cache$){
      this.cache$ = this.requestEstados().pipe(shareReplay(1));
    }
    return this.cache$;
  }

  private requestEstados(): Observable<UnidadeFederativa[]>{
    url : `${this.apiUrl}/estados`;
    return this.http.get<UnidadeFederativa[]>('url');
  }

}
