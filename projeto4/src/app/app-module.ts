import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ProdutoModule } from './produto/produto-module';
import { ToolbarApp } from './toolbar-app/toolbar-app';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';


@NgModule({
  declarations: [
    App,
    ToolbarApp
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProdutoModule,
    MatProgressBarModule,
    MatCardModule,
    MatChipsModule


  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection()
  ],
  bootstrap: [App]
})
export class AppModule { }
