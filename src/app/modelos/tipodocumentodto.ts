export class tipoDocumentoDto {
  idTipoDocumento: number;
  descripcion: string;
  Estado: boolean;


  constructor() {
    this.idTipoDocumento = 0;
    this.descripcion = '';
    this.Estado = false;

  }
}
