

export class SolicitudesDto {
  idSolicitud: number;
  fechaSolicitud: Date;
  idCiudad: number;
  idTipoSolicitud: number;
  Estado: boolean;


  constructor() {
    this.idSolicitud = 0;
    this.fechaSolicitud = new Date();
    this.idCiudad = 0;
    this.idTipoSolicitud =0;
    this.Estado = false;

  }
}
