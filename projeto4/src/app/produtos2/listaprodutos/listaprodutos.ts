import { Component } from '@angular/core';

@Component({
  selector: 'app-listaprodutos',
  standalone: false,
  templateUrl: './listaprodutos.html',
  styleUrl: './listaprodutos.css'
})
export class Listaprodutos {

mostrarlista: boolean = true;

lista = [
  {nome: 'jonathan'},
  {nome: 'gabriel'}
]

}
