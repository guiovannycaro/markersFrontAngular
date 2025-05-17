import { Pais } from './pais';


export class Departamento {
  idDepartamento: number;
  pais: Pais;
  codoficial: string;
  nombre: string;
  latitud:number
  longitud: number;

  constructor() {
    this.idDepartamento = 0;
    this.pais = new Pais();
    this.codoficial = '';
    this.nombre = '';
    this.latitud = 0;
    this.longitud = 0;


  }
}
