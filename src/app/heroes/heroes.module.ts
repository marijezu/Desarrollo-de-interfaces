import { NgModule } from "@angular/core";
import { HeroeComponent } from "./components/heroe/heroe";
import { ListaComponent } from "./components/lista/lista";


@NgModule({
  declarations: [HeroeComponent, ListaComponent],
  exports: [HeroeComponent, ListaComponent ]

})
export class HeroesModule {

}
