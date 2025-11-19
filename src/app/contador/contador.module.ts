import { NgModule } from "@angular/core";
import { ContadorComponent } from "./components/contador/contador.components";


@NgModule({
  declarations:  [
    ContadorComponent
  ],
  exports: [
    ContadorComponent
  ]
})

export class ContadorModule{

}
