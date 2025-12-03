import { Component} from '@angular/core';
import { DBZService } from '../services/dbz-service';
import { Personaje } from '../interfaces/personaje';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.html',
  standalone:false
})

export class MainPageComponent {
  constructor(private dbzService: DBZService){}

  get personajes(): Personaje[] {
    return this.dbzService.personajes;
  }

  onDeletePersonaje(id:string){
    this.dbzService.deletePersonajeById(id);
  }

  onNewPersonaje(personaje: Personaje){
    this.dbzService.addPersonaje(personaje);
  }
}
