import { Injectable } from '@angular/core';
import { Http, Response, Headers, ResponseOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Habitacion } from './../models/habitacion-modelo';
@Injectable()
export class ReservaService {
  private url = "http://localhost:3000/"
  public habitaciones: Habitacion[];

  constructor(private http: Http) {

    // this.habitaciones = [
    //   { numeroHabitacion: 303, tipo:"Doble", categoria:"Premiun", precio: 1000 },
    //   { numeroHabitacion: 303, tipo:"Simple", categoria:"Normal", precio: 500 },
    //   { numeroHabitacion: 303, tipo:"Doble", categoria:"Premiun", precio: 1000 },
    //   { numeroHabitacion: 303, tipo:"Simple", categoria:"Normal", precio: 500 },

    // ];

  }

  getHabitaciones(): Observable<Habitacion[]> {
    return this.http.get(this.url+'rooms')
      .map((response: Response) => {
        return response.json()
      })
      .catch((error: any) => {
        console.log('Error al procesar la petición');
        return Observable
          .throw(error.json().error || "Error de servidor");

      })
  }

}
