import { Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormBuscaService implements OnInit {

  formBusca: FormGroup;

    constructor(){
      this.formBusca = new FormGroup({
        somenteIda: new FormControl(false)
      });
    }
  ngOnInit(): void {
  }

}
