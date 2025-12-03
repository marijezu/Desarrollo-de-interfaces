import { Component, signal } from '@angular/core';
import { ContadorModule } from './contador/contador.module';
import { HeroesModule } from './heroes/heroes.module';
import { InstitutoModule } from './instituto/instituto.module';
import { DbzModule } from './dbz/dbz-module';


@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [ContadorModule, HeroesModule, InstitutoModule, DbzModule]
})
export class App {
  public title : string = 'Ejercicio 4.1 Contador - Maria Jesus';
  public contador: number = 0;
  public cantidad: number = 2;

  incrementarPor(): void {
    this.contador += this.cantidad;
  }
  decrementarPor(): void {
    this.contador -= this.cantidad;
  }
  resetear(): void{
    // this.contador = 0;




  }



}
