import { ReservaService } from './../service/reserva.service';
import { Habitacion } from './../models/habitacion-modelo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css'],
  providers: [ReservaService]
})
export class ReservasComponent implements OnInit {

  private habitaciones: Habitacion[];

  constructor(private service: ReservaService) { }

  ngOnInit() {

  }

  getHabitaciones() {
    this.service.getHabitaciones().subscribe((datos) => {
      this.habitaciones = datos;
    }, (error) => {
      console.log("Error :", error);
    });

  }
}
