import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Listaprodutos } from './listaprodutos/listaprodutos';

const routes: Routes = [

{
  path: 'listaprodutos', component: Listaprodutos
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Produtos2RoutingModule { }
