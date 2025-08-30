import { Component } from '@angular/core';

@Component({
  selector: 'app-estoque',
  standalone: false,
  templateUrl: './estoque.html',
  styleUrl: './estoque.css'
})
export class Estoque {
produtos = [
    { id: 1, nome: 'Notebook Gamer', preco: 3500, estoque: 3 },
    { id: 2, nome: 'Mouse Sem Fio', preco: 120, estoque: 0 },
    { id: 3, nome: 'Teclado Mecânico', preco: 600, estoque: 4 },
    { id: 4, nome: 'Monitor 27"', preco: 1800, estoque: 5 }
  ];

  aumentarPrecos() {
    this.produtos = this.produtos.map(p => ({
    ...p,
      preco: p.preco * 1.1
    }));
  }

  diminuirPrecos() {
    this.produtos = this.produtos.map(p => ({
      ...p,
      preco: p.preco * 0.9
    }));
  }
}
