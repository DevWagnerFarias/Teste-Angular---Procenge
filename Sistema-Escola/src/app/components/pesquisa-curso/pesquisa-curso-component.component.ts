import { Component } from '@angular/core';

@Component({
  selector: 'app-pesquisa-curso-component',
  templateUrl: './pesquisa-curso-component.component.html',
  styleUrls: ['./pesquisa-curso-component.component.css']
})
export class PesquisaCursoComponentComponent {

  curso1 = {
    codigo: 1,
    nome: 'Angular',
    instrutor: 'Genival',
    local: 'Softex',
    carga: 36,
    dataini: '03/02/2020'
  }

  curso2 = {
    codigo: 2,
    nome: 'Java',
    instrutor: 'Genival',
    local: 'Softex',
    carga: 60,
    dataini: '06/02/2020'
  }

}
