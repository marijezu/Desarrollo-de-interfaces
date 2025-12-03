import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personaje';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.html',
  styleUrl: './lista.css',
  standalone: false
})
export class ListaComponent {

  @Output()
  public onDeletePersonaje: EventEmitter<string> = new EventEmitter();

  @Input()
  public listaPersonajes: Personaje[]=[
    {
      id: uuid(),
      nombre: 'Bulma',
      fuerza: 7000
    }
  ]

  public eliminarPersonaje(id: string){
    this.onDeletePersonaje.emit(id);
  }
}
