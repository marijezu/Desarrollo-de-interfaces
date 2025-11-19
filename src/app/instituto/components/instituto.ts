import { Component } from '@angular/core';

export interface Instituto {
  centro: string;
  localidad: string;
  familias: string [];
  logo?: string;
}

const institutoPlayamar: Instituto = {
  centro: "IES Playamar",
  localidad: "Torremolinos",
  familias: ["Informática y Comunicaciones, Transporte y Mantenimiento de Vehículos"],
  logo: "/logo-iesplayamar.png"
}
const institutoJacaranda: Instituto = {
  centro: "IES Jacaranda",
  localidad: "Churriana",
  familias: ["Hostelería y turismo"],
  logo: "/logo-iesjacaranda.png"
  }
const institutoAlvarezCubero: Instituto = {
  centro: "IES Alvarez Cubero",
  localidad: "Priego de Córdona",
  familias: ["Administración y Gestión"],
  // logo:"/logo-iesalvarezcubero.png"
  }
const institutoFernandoIII: Instituto = {
  centro: "IES Fernando III El Santo",
  localidad: "Priego de Córdoba",
  familias: ["Sanidad"],
  logo: "/logo-iesfernandoiii.png"
  }

@Component({
  selector: 'app-instituto',
  templateUrl: './instituto.html',
  styleUrl: './instituto.css',
  standalone: false
})

export class InstitutoComponent {


  public listaInstitutos: Instituto[] = [institutoPlayamar, institutoJacaranda, institutoAlvarezCubero, institutoFernandoIII];
  public posicionActual: number = 0;
  public pilaInstitutos: Instituto[] = [];
  public mensajePosicion: string = "";


  public anteriorInstituto(): void {

    if(this.posicionActual>0){
      this.posicionActual--;
    }
  }

  public posteriorInstituto(): void {
    if(this.posicionActual<this.listaInstitutos.length -1){
      this.posicionActual++;
    }
  }

  public eliminarInstituto(): void{
    const institutoEliminado = this.listaInstitutos[this.posicionActual]
    this.pilaInstitutos.push(institutoEliminado);
    this.listaInstitutos.splice(this.posicionActual, 1);

    //ajusto la posicionActual tras eliminar el instituto de la lista
    if (this.listaInstitutos.length === 0) {
      this.posicionActual = 0;
    } else if (this.posicionActual >= this.listaInstitutos.length) {
      this.posicionActual = this.listaInstitutos.length - 1;
    }
  }

  public insertarInstituto(): void{
    this.mensajePosicion= "";
    const devolverInstituto = this.pilaInstitutos.pop();

      if (devolverInstituto !== undefined && devolverInstituto !== null) {
        //lo inserto en la posicion donde estoy
        this.listaInstitutos.splice(this.posicionActual, 0, devolverInstituto);
      }
    }

  public mostrarListadoPila(): string {
    let texto = ""
    if (this.pilaInstitutos.length === 0) {
     texto="La pila está vacía";
    } else {
      texto = "El contenido de la pila es: ";
      for (let i = 0; i < this.pilaInstitutos.length; i++) {
        texto += this.pilaInstitutos[i].centro + " ";
      }
    }
    return texto;
  }
}
