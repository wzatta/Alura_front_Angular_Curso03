import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-botao-controle',
  templateUrl: './botao-controle.component.html',
  styleUrls: ['./botao-controle.component.scss']
})
export class BotaoControleComponent {
  @Input() operacao: 'incrementar' | 'decrementar' = "incrementar";
  @Input() src = '';
  @Input() alt = '';


  @Output() incrementar = new EventEmitter<number>();
  @Output() decrementar = new EventEmitter<number>();


  valueIncrement(){
    if(this.operacao==="incrementar"){
    this.incrementar.emit(+1);}
    if(this.operacao==="decrementar"){
      this.decrementar.emit(-1);
    }
  }

}
