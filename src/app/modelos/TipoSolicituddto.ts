export class TipoSolicitudDto {
  idTipoSolicitud: number;
  descripcion: string;
  Estado: boolean;


  constructor() {
    this.idTipoSolicitud = 0;
    this.descripcion = '';
    this.Estado = false;

  }
}
