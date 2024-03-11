import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuscaService } from 'src/app/core/services/form-busca.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  contadorAdulto:number = 0;
  @Output() adulto = new EventEmitter<number>()

  constructor(public service:FormBuscaService){}


}
