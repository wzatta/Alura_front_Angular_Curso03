import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PromocaoService } from 'src/app/core/services/promocao.service';
import { Promocao } from 'src/app/core/types/type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  promocoes$!: Observable<Promocao[]>;

  constructor(
    private service: PromocaoService
  ){}

  ngOnInit(): void {
   this.promocoes$ = this.service.listar();
   this.service.listar().subscribe();
  }

}
