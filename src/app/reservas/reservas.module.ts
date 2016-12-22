import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservasRoutingModule } from './reservas-routing.module';
import { ReservasComponent } from './reservas.component';
import { MaterialModule } from '@angular/material';




@NgModule({
  imports: [
    CommonModule,
    ReservasRoutingModule,
    MaterialModule.forRoot(),

  ],
  declarations: [ReservasComponent]
})
export class ReservasModule { }
