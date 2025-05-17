export class RolesDto {
  idRol: number;
  descripcion: string;
  Estado: boolean;


  constructor() {
    this.idRol = 0;
    this.descripcion = '';
    this.Estado = false;

  }
}
