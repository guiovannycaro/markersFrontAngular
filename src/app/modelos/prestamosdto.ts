
export class PrestamosDto {
  idPrestamo: number;
  idSolicitud: number;
  usuarioId: number;
  monto: number;
  plazoEnMeses: number;
  estado: boolean;

  constructor() {
    this.idPrestamo=0;
this.idSolicitud=0;
    this.usuarioId=0;
    this.monto =0;
    this.plazoEnMeses =0;
    this.estado=true;
  }
}
