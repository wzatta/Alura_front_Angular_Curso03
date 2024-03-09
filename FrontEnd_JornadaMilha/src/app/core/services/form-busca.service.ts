import { Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormBuscaService implements OnInit {

  formBusca: FormGroup;

    constructor(){
      this.formBusca = new FormGroup({
        somenteIda: new FormControl(false),
        origem: new FormControl(null),
        destino:new FormControl(null)
      });
    }
  ngOnInit(): void {
  }

  obterControle(nome:string): FormControl {
    const control = this.formBusca.get(nome);
    if (!control) {
      throw new Error(`FormControl com nome "${nome}" não existe.`);
    }
    return control as FormControl;
  }

}
