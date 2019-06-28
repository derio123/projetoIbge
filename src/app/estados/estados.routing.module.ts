import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstadosComponent } from './estados.component';

const routes: Routes = [
   // lazy Load
  { path: '', component: EstadosComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class EstadosRoutingModule { }
