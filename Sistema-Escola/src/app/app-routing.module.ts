import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncluirCursoComponentComponent } from './components/incluir-curso-component/incluir-curso-component.component';
import { PesquisaCursoComponentComponent } from './components/pesquisa-curso/pesquisa-curso-component.component';

const routes: Routes = [
  
  {path: '', component: PesquisaCursoComponentComponent},
  {path: 'incluir', component: IncluirCursoComponentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
