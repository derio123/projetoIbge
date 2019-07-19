import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { ConnectionService } from '../services/connection.service';
import {ConfirmationService} from 'primeng/api';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
  providers: [ConfirmationService]
})
export class UsuarioComponent implements OnInit {

 /*  public user: Usuario; */
  public usuarios: Usuario[];
  constructor(private connectionServe: ConnectionService,
              private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.listaUsuario()
  }

  public listaUsuario(){
    this.connectionServe.listaUsuario().subscribe(
      response => {
        this.usuarios = response
      }, 
      error => {
        alert('Houve um erro')
      })
  }

  /**
   * Excluir os dados da tabela.
   */
  public Excluir(id: string) {
    this.confirmationService.confirm({
      message: 'Deseja excluir?',
      accept: () => {
        this.connectionServe.delete(id).subscribe(
          r => {
            this.listaUsuario();
          })
        }
      });
    }
  }
