import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { ConnectionService } from 'src/app/services/connection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html',
  styleUrls: ['../usuario.component.css']
})
export class UsuarioCadastroComponent implements OnInit {

  public usuario: Usuario = new Usuario();
  constructor(private userServe: ConnectionService, private route: Router) { }

  ngOnInit() { }

  /*salvar()*/
  public salvar() {
    this.userServe.salvar(this.usuario).subscribe(
      response => {
        alert('Salvo com sucesso!!');
        this.route.navigateByUrl('/usuario')
        return response;
      },
      error => {
        alert('Aconteceu um erro!!')
      }
    )
  }

}
