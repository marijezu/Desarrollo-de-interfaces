import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.html',
  styleUrl: './heroe.css',
  standalone: false

})
export class HeroeComponent {

  public nombre: string = "Goku";
  public edad: number = 36;

  public get nombreCapitalizado(): string{
    return this.nombre.toUpperCase();
  }

  public getDescripcionHeroe(): string {
    return`${this.nombre} - ${this.edad}`
  }

  public cambiarNombre(): string{

    if(this.nombre == "Goku"){
      this.nombre="Vegeta"
    }else{
      this.nombre = "Goku"
    }
    return this.nombre;
  }

  public cambiarEdad(): number{
    return this.edad + 1
  }

}
