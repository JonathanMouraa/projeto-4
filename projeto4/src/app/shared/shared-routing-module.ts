import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Conta } from '../contador/conta/conta';
import { Botao } from './botao/botao';

const routes: Routes = [
  {
    path: 'botao', component: Botao
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
