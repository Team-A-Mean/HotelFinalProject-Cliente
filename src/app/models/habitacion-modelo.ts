export class Habitacion {
    constructor(
        public numeroHabitacion: Number,
        public tipo: String,
        public categoria: String,
        public precio: Number,
        public reserva?: Array<reserva>

    ) { }

}
export type reserva =
    {
        "idReserva": Number,
        "fechaEntrada": Date,
        "fechaSalida": Date,
        "email": String,
        "nombre": String
    }