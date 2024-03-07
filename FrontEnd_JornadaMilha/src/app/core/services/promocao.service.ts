import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Promocao } from '../types/type';
import { environment } from 'src/environments/environment.development';
import { Params } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PromocaoService {

 private apiUrl: string = environment.apiUrl;

  constructor(
    private httpClient: HttpClient
  ) { }


  listar(): Observable<Promocao[]> {
    const url = `${this.apiUrl}/promocoes`;
    return this.httpClient.get<Promocao[]>(url);
  }
}
