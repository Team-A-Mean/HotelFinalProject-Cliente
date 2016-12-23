import { AdministradorModule } from './administrador/administrador.module';
import { ReservasModule } from './reservas/reservas.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material';
import { FormularioComponent } from './formulario/formulario.component';
import { DialogComponent } from './dialog/dialog.component';
import { DialogsService } from './dialogs.service';


@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReservasModule,
    AdministradorModule,
    AppRoutingModule,
    MaterialModule.forRoot(),

  ],
  providers: [DialogsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
