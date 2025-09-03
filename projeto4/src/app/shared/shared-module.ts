import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing-module';
import { Botao } from './botao/botao';


@NgModule({
  declarations: [
    Botao
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    Botao
  ]
})
export class SharedModule { }
