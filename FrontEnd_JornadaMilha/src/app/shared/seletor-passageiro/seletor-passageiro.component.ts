import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-seletor-passageiro',
  templateUrl: './seletor-passageiro.component.html',
  styleUrls: ['./seletor-passageiro.component.scss'],
  providers:[{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(()=> SeletorPassageiroComponent),
    multi: true
  }]
})
export class SeletorPassageiroComponent implements ControlValueAccessor{

  @Input() titulo: string = '';
  @Input() subTitulo: string = '';

  contador:number = 0;

  onChange = (val:number) => {};
  onTouch = () => {};

  writeValue(val: any): void {
    this.contador = val;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {

  }


  incrementarContador(){
    this.contador+=1;
    this.onChange(this.contador);
    this.onTouch();
    }

  decrementarContador(){
    if(this.contador>0){
      this.contador-=1;
      this.onChange(this.contador);
      this.onTouch();
    }
  }


}
