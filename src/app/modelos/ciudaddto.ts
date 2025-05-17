import { Departamento } from './departamento';


export class CiudadDto {
  idCiudad: number;
  nombre: string;
  codoficial: string;
  latitud: number;
  longitud: number;
  idDepartamento:number;
  codpostal:String;

  constructor() {
    this.idCiudad = 0;
    this.nombre = '';
    this.codoficial = '';
    this.latitud = 0;
    this.longitud = 0;
    this.idDepartamento = 0;
    this.codpostal = '';

  }
}
