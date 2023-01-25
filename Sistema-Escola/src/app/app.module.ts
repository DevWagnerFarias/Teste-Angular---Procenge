import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideMenuComponentComponent } from './components/side-menu-component/side-menu-component.component';
import { NavBarComponentComponent } from './components/nav-bar-component/nav-bar-component.component';
import { PesquisaCursoComponentComponent } from './components/pesquisa-curso/pesquisa-curso-component.component';
import { IncluirCursoComponentComponent } from './components/incluir-curso-component/incluir-curso-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponentComponent,
    NavBarComponentComponent,
    PesquisaCursoComponentComponent,
    IncluirCursoComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
