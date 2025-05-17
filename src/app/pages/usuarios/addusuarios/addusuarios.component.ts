import { Component, Inject,OnInit  } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { Usuarios } from '../../../modelos/usuarios';
import { UsuariosService } from '../../../services/usuarios.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Roles } from '../../../modelos/roles';
import { Ciudad } from '../../../modelos/ciudad';
import { RolesService } from '../../../services/roles.service';
import { CiudadService } from '../../../services/ciudad.service';
import { tipoDocumento } from '../../../modelos/tipodocumento';
import { TipodocumentoService } from '../../../services/tipodocumento.service';

@Component({
  selector: 'app-addusuarios',
  standalone: false,
  templateUrl: './addusuarios.component.html',
  styleUrl: './addusuarios.component.css'
})
export class AddusuariosComponent {

  usuarioForm!: FormGroup;

  usuarios : Usuarios = new Usuarios();
  roles :Roles[] = [];
  ciudades :Ciudad[] = [];
  tipodocumento :tipoDocumento[] = [];
  constructor(
    private fb: FormBuilder,
    private api: UsuariosService,
       private  apirol: RolesService,
         private  apiciu: CiudadService,
         private  apitdoc: TipodocumentoService,
    public dialogRef: MatDialogRef<AddusuariosComponent>,
    private router: Router,
    private route: ActivatedRoute

  ) {
    this.usuarioForm = this.fb.group({
      usuId: [0, Validators.required],
      usuNombre: ['', Validators.required],
      tipoDocumento: [0, Validators.required],
      numDocumento: [0, Validators.required],
      usuRol: [0, Validators.required],
      usuCorreo: ['', Validators.required],
      usuPassword: ['', Validators.required],
      usuCiudad: [0, Validators.required],
      usuEstado: [true, Validators.required],

    });

  }

  ngOnInit(): void {
    this.apirol.getRolesList().subscribe((Data) => {
      this.roles = Data;

      console.log('array roles ' + this.roles);
    });


    this.apiciu.getCiudadList().subscribe((res) => {
      this.ciudades = res;

      console.log('array ciudad ' + this.ciudades);
    });

    this.apitdoc.gettipoDocumentoList().subscribe((res) => {
      this.tipodocumento = res;

      console.log('array tipodocumento ' + this.tipodocumento);
    });

  }


  guardarUsuario() {
    if (this.usuarioForm.valid) {
      this.api.createUsuarios(this.usuarioForm.value).subscribe({
        next: (response) => {
          console.log(response);

          Swal.fire({
            icon: 'success',
            title: 'Éxito',
            text: 'El registro se ingresó correctamente',
            confirmButtonText: 'Aceptar'
          }).then(() => {
            this.dialogRef.close(true);
            window.location.reload(); // Recarga la página
          });
        },
        error: (error) => {
          console.error(error);
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Hubo un problema al ingresar el registro',
            confirmButtonText: 'Aceptar'
          });
        }
      });
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Formulario inválido',
        text: 'Completa los campos requeridos.',
        confirmButtonText: 'Aceptar'
      });
    }
  }


  onSubmit() {

    const regexEspeciales = /[^a-zA-Z0-9\s]/;
  const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const nombre = this.usuarioForm.get('usuNombre')?.value;
  const tipodocumento = this.usuarioForm.get('tipoDocumento')?.value;
  const numerodocumento = this.usuarioForm.get('numDocumento')?.value;
  const rol = this.usuarioForm.get('usuRol')?.value;
  const email = this.usuarioForm.get('usuCorreo')?.value;
  const password = this.usuarioForm.get('usuPassword')?.value;

  const ciudad = this.usuarioForm.get('usuCiudad')?.value;
  const estado = this.usuarioForm.get('usuEstado')?.value;

  // Validación del nombre
  if (!nombre || regexEspeciales.test(nombre)) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'El nombre no puede estar vacío ni contener caracteres especiales.',
      confirmButtonText: 'Aceptar'
    });
    return;
  }

  // Validación del tipo de documento
  if (!tipodocumento || tipodocumento === 0) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Debe seleccionar un tipo de documento válido.',
      confirmButtonText: 'Aceptar'
    });
    return;
  }

  // Validación del número de documento
  if (!numerodocumento || numerodocumento <= 0) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'El número de documento debe ser mayor a 0.',
      confirmButtonText: 'Aceptar'
    });
    return;
  }

  // Validación del rol
  if (!rol || rol === 0) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Debe seleccionar un rol válido.',
      confirmButtonText: 'Aceptar'
    });
    return;
  }

  // Validación del correo electrónico
  if (!email || !regexCorreo.test(email)) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'El correo electrónico no es válido.',
      confirmButtonText: 'Aceptar'
    });
    return;
  }

  // Validación de la contraseña
  if (!password || password.length < 6) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'La contraseña debe tener al menos 6 caracteres.',
      confirmButtonText: 'Aceptar'
    });
    return;
  }


  if (!ciudad || ciudad === 0) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Debe seleccionar un rol válido.',
      confirmButtonText: 'Aceptar'
    });
    return;
  }

    console.log(this.usuarioForm.value);
    this.guardarUsuario();
  }


  cerrarModal() {
    this.dialogRef.close();
    this.router.navigate(['dashboard/usuarios']);
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
