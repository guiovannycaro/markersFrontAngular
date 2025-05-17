import { Departamento } from './departamento';


export class Ciudad {
  idCiudad: number;
  nombre: string;
  codoficial: string;
  latitud: number;
  longitud: number;
  idDepartamento:Departamento;
  codpostal:String;

  constructor() {
    this.idCiudad = 0;
    this.nombre = '';
    this.codoficial = '';
    this.latitud = 0;
    this.longitud = 0;
    this.idDepartamento = new Departamento();
    this.codpostal = '';

  }
}
