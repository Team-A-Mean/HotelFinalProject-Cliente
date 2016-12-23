import { ReservaService } from './../service/reserva.service';
import { Habitacion } from './../models/habitacion-modelo';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';


@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  providers: [ReservaService]

})
export class FormularioComponent implements OnInit {

public habitaciones: Habitacion[];
  private habitacion: Habitacion;
  constructor( private route :ActivatedRoute) { }

  ngOnInit() {
    // this.habitacion.numeroHabitacion=this.route.snapshot.params['id'];
    // this.habitacion.tipo=this.route.snapshot.params['tipo'];
    // this.habitacion.precio=this.route.snapshot.params['precio'];

    //  this.service.getHabitaciones().subscribe((datos) => {
    //   this.habitaciones = datos;
    // }, (error) => {
    //   console.log("Error :", error);
    // });
  }


}
