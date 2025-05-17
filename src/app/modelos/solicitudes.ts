import { TipoSolicitud } from './TipoSolicitud';
import { Ciudad } from './ciudad';

export class Solicitudes {
  idSolicitud: number;
  fechaSolicitud: Date;
  idCiudad: Ciudad;
  idTipoSolicitud: TipoSolicitud;
  Estado: boolean;


  constructor() {
    this.idSolicitud = 0;
    this.fechaSolicitud = new Date();
    this.idCiudad = new Ciudad();
    this.idTipoSolicitud = new TipoSolicitud();
    this.Estado = false;

  }
}
