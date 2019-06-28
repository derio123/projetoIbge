import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  constructor() { }
  public getUser(): Usuario {
    const user = new Usuario();
    user.nome = 'Derio';
    user.email = 'derio@gmail.com';

    return user;
  }

 /*  public exUser(): Usuario{
     const user = new Usuario();

     return user;
  } */

  /**
   * listaUsuario
   */
  public listaUsuario(): Usuario[] {
    return [
      { nome: 'Dério', email: 'deriomatheus6@gmail.com'},
      { nome: 'Maria', email: 'maria.Iral6@gmail.com'},
      { nome: 'Jessa', email: 'jessa.jes@gmail.com'},
      { nome: 'Otavio', email: 'otavio.mes@gmail.com'}
    ];
  }
}
