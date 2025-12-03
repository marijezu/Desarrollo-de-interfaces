import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/personaje';
import { v4 as uuid } from 'uuid';

@Injectable({providedIn: 'root'})
export class DBZService {
  constructor() { }

    public personajes: Personaje[]= [
    {
      id: uuid(),
      nombre: 'Goku',
      fuerza: 1000
    },
    {
      id: uuid(),
      nombre: 'Trunks',
      fuerza: 900
    },
    {
      id: uuid(),
      nombre: 'Mutenroshi',
      fuerza: 600
    },
    {
      id: uuid(),
      nombre: 'Nathy Peluso',
      fuerza: 300
    },
    {
      id: uuid(),
      nombre: 'Lia Kali',
      fuerza: 600
    },
    {
      id: uuid(),
      nombre: 'Vegeta',
      fuerza: 800
    }
  ];

  public addPersonaje(personaje: Personaje){
    personaje.id = uuid();
    //El spread crea una copia con todos los elementos de personaje y los suelta
    //En este caso lo que hago es que le añado tambien el id
    //Usando spread seria:
    //const newPersonaje: Personaje = {id:uuid(), ...personaje}
    personaje.id = uuid();
    this.personajes.push(personaje);
  }
  public deletePersonajeById(id: string){
    this.personajes = this.personajes.filter (personaje=> personaje.id !== id);
    console.log('Id del personaje eliminado: ', id )
  }
}
