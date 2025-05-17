
import { Ciudad } from './ciudad';
import { tipoDocumento } from './tipodocumento';

export class UsuariosDto {
  usuId: number;
  usuNombre: string;
  tipoDocumento: number;
  numDocumento: number;
  usuEstado: boolean;
  usuContrasena: string;
  usuCorreo: string;
  usuRol: number;
  usuCiudad: number;

  constructor() {
    this.usuId = 0;
    this.usuNombre = '';
    this.tipoDocumento = 0;
    this.numDocumento = 0;
    this.usuEstado = false;
    this.usuContrasena = '';
    this.usuCorreo = '';
    this.usuRol = 0;
    this.usuCiudad = 0;
  }
}
