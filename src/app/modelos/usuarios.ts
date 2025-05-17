
import { Ciudad } from './ciudad';
import { tipoDocumento } from './tipodocumento';

export class Usuarios {
  usuId: number;
  usuNombre: string;
  tipodocumentoId: tipoDocumento;
  numDocumento: number;
  usuEstado: boolean;
  usuContrasena: string;
  usuCorreo: string;
  usuRol: number;
  ciudad: Ciudad;

  constructor() {
    this.usuId = 0;
    this.usuNombre = '';
    this.tipodocumentoId = new tipoDocumento();
    this.numDocumento = 0;
    this.usuEstado = false;
    this.usuContrasena = '';
    this.usuCorreo = '';
    this.usuRol = 0;
    this.ciudad = new Ciudad();
  }
}
