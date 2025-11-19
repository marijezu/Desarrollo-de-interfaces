import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h3>Contador: {{ contador }}</h3>
    <h3>Cantidad: {{ cantidad }}</h3>
    <button (click)=" incrementarPor()"> Incrementar: {{cantidad}}</button>
    <button (click)=" decrementarPor()"> Decrementar: {{cantidad}}</button>
    <button (click)=" resetear()"> Resetear: </button>
    `,
    standalone: false
})

export class ContadorComponent{
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
    this.contador = 0;
  }
}
