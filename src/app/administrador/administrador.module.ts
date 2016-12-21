import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministradorRoutingModule } from './administrador-routing.module';
import { AdministradorComponent } from './administrador.component';

@NgModule({
  imports: [
    CommonModule,
    AdministradorRoutingModule
  ],
  declarations: [AdministradorComponent]
})
export class AdministradorModule { }
