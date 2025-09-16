import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToolbarApp } from './toolbar-app/toolbar-app';


const routes: Routes = [
  {
    path: 'contador',
    loadChildren: () => import('./contador/contador-module').then(m => m.ContadorModule)
  },

   {
    path: 'estrutura',
    loadChildren: () => import('./estrutura/estrutura-module').then(m => m.EstruturaModule)
  },
  {
    path: 'produto',
    loadChildren: () => import('./produto/produto-module').then(m => m.ProdutoModule)
  },

  {
    path: 'shared',
    loadChildren: () => import('./shared/shared-module').then(m => m.SharedModule)
  },

{
    path: 'produtos2',
    loadChildren: () => import('./produtos2/produtos2-module').then(m => m.Produtos2Module)
  },
  {
    path: 'toolbar-app', component: ToolbarApp
  },
  {
    path: 'dados',
    loadChildren: () => import('./dados/dados-module').then(m => m.DadosModule)
  },
   {
    path: 'funcionario',
    loadChildren: () => import('./funcionario/funcionario-module').then(m => m.FuncionarioModule)
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
