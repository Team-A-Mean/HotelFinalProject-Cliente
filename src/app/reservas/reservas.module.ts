import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservasRoutingModule } from './reservas-routing.module';
import { ReservasComponent } from './reservas.component';

@NgModule({
  imports: [
    CommonModule,
    ReservasRoutingModule
  ],
  declarations: [ReservasComponent]
})
export class ReservasModule { }
