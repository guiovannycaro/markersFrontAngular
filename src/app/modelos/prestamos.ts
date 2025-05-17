import { Usuarios } from './usuarios';
import { Solicitudes } from './solicitudes';
export class Prestamos {
  idPrestamo: number;
  idSolicitud?: Solicitudes;
  usuarioId: Usuarios;
  monto: number;
  plazoEnMeses: number;
  estado: boolean;

  constructor() {
    this.idPrestamo = 0;
this.idSolicitud=new Solicitudes();
    this.usuarioId = new Usuarios();
    this.monto = 0;
    this.plazoEnMeses = 0;
    this.estado = true;
  }
}
