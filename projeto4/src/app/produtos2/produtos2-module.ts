import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Produtos2RoutingModule } from './produtos2-routing-module';
import { Listaprodutos } from './listaprodutos/listaprodutos';
import { SharedModule } from '../shared/shared-module';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    Listaprodutos
  ],
  imports: [
    CommonModule,
    Produtos2RoutingModule,
    SharedModule,
    MatToolbarModule
  ]
})
export class Produtos2Module { }
