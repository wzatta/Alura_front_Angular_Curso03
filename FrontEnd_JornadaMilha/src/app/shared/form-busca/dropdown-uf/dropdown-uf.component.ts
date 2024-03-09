import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { UnidadesFederativasService } from 'src/app/core/services/unidades-federativas.service';
import { UnidadeFederativa } from 'src/app/core/types/unidade-federativa';

@Component({
  selector: 'app-dropdown-uf',
  templateUrl: './dropdown-uf.component.html',
  styleUrls: ['./dropdown-uf.component.scss']
})
export class DropdownUfComponent implements OnInit {

  @Input() label: string = '';
  @Input() iconePrefix:string = '';
  @Input() control!:FormControl;

  unidadesFederativas: UnidadeFederativa[] = [];
  filteredOptions$?: Observable<UnidadeFederativa[]>;
//  filteredOptions= []

  constructor(
    private unidadeFederativaService:UnidadesFederativasService
  ){}

  ngOnInit(): void {
    this.unidadeFederativaService.listar()
    .subscribe(dados=> {
      this.unidadesFederativas = dados;
    })
    this.filteredOptions$ = this.control.valueChanges.pipe(
      startWith(''),
      map(value=> this.filtrarUfs(value))
    )
  }


  filtrarUfs(value:string):UnidadeFederativa[]{
    const valorFiltrado = value?.toLowerCase();
    const result = this.unidadesFederativas.filter(estado=> estado.nome.toLowerCase().includes(valorFiltrado))
    return result;
  }


}
