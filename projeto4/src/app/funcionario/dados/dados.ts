import { Component } from '@angular/core';

@Component({
  selector: 'app-dados',
  standalone: false,
  templateUrl: './dados.html',
  styleUrl: './dados.css'
})
export class Dados {
nome: string = 'Jonathan Moura';
  salario: string = '1.000,00';
  exibir: boolean = false;

  mostrar() {
    this.exibir = true;
  }

  ocultar() {
    this.exibir = false;
    }
}
