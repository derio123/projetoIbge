import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioComponent } from './usuario.component';
import { UsuarioRoutingModule } from './usuario.routing.module';
import { UsuarioCadastroComponent } from './cadastro/usuario-cadastro.component';
import { FormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
  declarations: [UsuarioComponent, UsuarioCadastroComponent],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    FormsModule,
    ButtonModule,
    InputTextModule
  ]
})
export class UsuarioModule { }
