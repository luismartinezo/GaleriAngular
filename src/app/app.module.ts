import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavegacionComponent } from './Cabecera/navegacion.component';
import { GaleriaComponent } from './galeria/galeria.component';


@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    GaleriaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
