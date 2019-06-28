import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html',
  styleUrls: ['../usuario.component.css']
})
export class UsuarioCadastroComponent implements OnInit {

    public user: Usuario = new Usuario();
  constructor() { }

  ngOnInit() {  }

  /*salvar()*/
  public salvar() {
      console.log(this.user);
      alert('Salvo com sucesso');
  }

}
