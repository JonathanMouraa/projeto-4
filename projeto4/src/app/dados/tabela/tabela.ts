import { Component } from '@angular/core';
import { produto } from '../modelo/Produto';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tabela',
  standalone: false,
  templateUrl: './tabela.html',
  styleUrl: './tabela.css'
})
export class Tabela {
  displayedColumns: String[] = ['nome', 'valor'];

  dataSource: produto[] = [
    {nome: 'coca-cola', valor: 10},
    {nome: 'fanta', valor: 8}
  ];







  logado: boolean = false;

  alternarLogin() {
    this.logado = !this.logado;
  };





  
  tarefas: String[] = ['Estudar Angular', 'Praticar TypeScript'];
  novaTarefa: string = '';

  adicionarTarefa() {
    if (this.novaTarefa.trim()) {
      this.tarefas.push(this.novaTarefa);
      this.novaTarefa = '';
    }
  }

  removerTarefa(index: number) {
    this.tarefas.splice(index, 1);
  }







nome: string = 'Jonathan Moura';
  nota: number = 6;

}