import { Component } from '@angular/core';

@Component({
  selector: 'app-incluir-curso-component',
  templateUrl: './incluir-curso-component.component.html',
  styleUrls: ['./incluir-curso-component.component.css']
})
export class IncluirCursoComponentComponent {

  inclusaoCurso: boolean = false

  incluirCurso(): void {
    this.inclusaoCurso = true  //método para mostrar a mensagem de inclusão do curso no sistema
  }

}
