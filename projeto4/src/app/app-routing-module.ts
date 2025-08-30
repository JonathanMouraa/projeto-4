import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
