import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva',
  standalone: false,
  templateUrl: './diretiva.html',
  styleUrl: './diretiva.css'
})
export class Diretiva {
mostrarLista: boolean = true;

  fontSize: number = 16;

  alunos = [
    { id: 1, nome: 'Ana', ativo: true },
    { id: 2, nome: 'Carlos', ativo: false },
    { id: 3, nome: 'Beatriz', ativo: true },
    { id: 4, nome: 'João', ativo: false },
    { id: 5, nome: 'Jonathan', ativo: true },
    { id: 6, nome: 'Claudio', ativo: false }
  ];

  toggleLista() {
    this.mostrarLista = !this.mostrarLista;
  }

  aumentarFonte() {
    this.fontSize += 2;
  }

  diminuirFonte() {
    if (this.fontSize > 10) {
      this.fontSize -= 2;
    }
  }
}
