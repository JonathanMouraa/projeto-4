import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DadosRoutingModule } from './dados-routing-module';
import { Tabela } from './tabela/tabela';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    Tabela
  ],
  imports: [
    CommonModule,
    DadosRoutingModule,
    MatTableModule,
    FormsModule
  ]
})
export class DadosModule { }
