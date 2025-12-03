import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page';
import { ListaComponent } from './components/lista/lista';
import { AddPersonajeComponent } from './components/add-personaje/add-personaje';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ MainPageComponent, ListaComponent, AddPersonajeComponent],
  imports: [
    CommonModule, FormsModule
  ],
  exports:[MainPageComponent]
})
export class DbzModule { }
