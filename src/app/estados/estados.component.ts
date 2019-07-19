import { Component, OnInit } from '@angular/core';
import { EstadosService } from '../services/estados.service';

@Component({
  selector: 'app-estados',
  templateUrl: './estados.component.html',
  styleUrls: ['./estados.component.css']
})
export class EstadosComponent implements OnInit {
  estados: any;
  constructor(private estadosServe: EstadosService) { }

  ngOnInit() { // traz todos os resultados
    this.estadosServe.getEstados().subscribe(
      response => { // json com todos os dados.
        this.estados = response;
      }
    );
  }

}
