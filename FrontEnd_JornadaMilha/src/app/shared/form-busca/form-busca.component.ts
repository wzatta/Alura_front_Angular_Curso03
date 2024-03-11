import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuscaService } from 'src/app/core/services/form-busca.service';

@Component({
  selector: 'app-form-busca',
  templateUrl: './form-busca.component.html',
  styleUrls: ['./form-busca.component.scss']
})
export class FormBuscaComponent {

  constructor(
    //public dialog: MatDialog,
    public service:FormBuscaService) {}

    buscar(){
      console.log(this.service.formBusca.value);
    }

}
