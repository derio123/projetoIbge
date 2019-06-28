import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { ConnectionService } from '../services/connection.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

 /*  public user: Usuario; */
  public usuarios: Usuario[];
  constructor(private connectionServe: ConnectionService) { }

  ngOnInit() {
    this.usuarios = this.connectionServe.listaUsuario();
  }

}
