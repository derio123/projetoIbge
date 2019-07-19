import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  private url = environment.host + "usuario"

  constructor(private http: HttpClient) { }

  /**
   * salva os usuarios na APT Rest
   */
  public salvar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.url, usuario)
  }

  public delete(id: string): Observable<any>{
    return this.http.delete(this.url + "/" + id)
  }

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
  public listaUsuario():Observable<Usuario[]> {
      return this.http.get<Usuario[]>(this.url)

  }
}

/*  return [
      { nome: 'Dério', email: 'deriomatheus6@gmail.com'},
      { nome: 'Maria', email: 'maria.Iral6@gmail.com'},
      { nome: 'Jessa', email: 'jessa.jes@gmail.com'},
      { nome: 'Otavio', email: 'otavio.mes@gmail.com'}
    ]; */