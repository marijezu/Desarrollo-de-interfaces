import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.html',
  styleUrl: './lista.css',
  standalone: false
})
export class ListaComponent {

  public centro: string = "IES Playamar";
  public localidad: string = "Torremolinos";
  public familias: string[] = ["Informática y Comunicaciones, Transporte y Mantenimiento de Vehículos"];
  public familiaCentro: string = this.familias[0];
  public logo: string = "/logo-iesplayamar.png";

  public get centroCapitalizado(): string{
    return this.centro.toUpperCase();
  }

  public cambiarCentro(): void{

    if(this.centro == "IES Playamar"){
      this.centro="IES Jacaranda";
      this.localidad = "Churriana";
      this.familias = ["Hosteleria y Turismo"];
      this.logo = "/logo-iesjacaranda.png";

    }else{
      this.centro = "IES Playamar";
      this.localidad = "Torremolinos"
      this.familias = ["Informática y Comunicaciones, Transporte y Mantenimiento de Vehículos"];
      this.logo = "/logo-iesplayamar.png";

    }
  }

}
