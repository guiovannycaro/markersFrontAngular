import { Component, Inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ChangeDetectorRef } from '@angular/core';
import Swal from 'sweetalert2';

import { UsuariosDto } from '../../../modelos/usuariosdto';
import { UsuariosService } from '../../../services/usuarios.service';


import { RolesDto } from '../../../modelos/rolesdto';
import { CiudadDto } from '../../../modelos/ciudaddto';
import { RolesService } from '../../../services/roles.service';
import { CiudadService } from '../../../services/ciudad.service';
import { tipoDocumentoDto } from '../../../modelos/tipodocumentodto';
import { TipodocumentoService } from '../../../services/tipodocumento.service';

@Component({
  selector: 'app-editusuarios',
  standalone: false,
  templateUrl: './editusuarios.component.html',
  styleUrl: './editusuarios.component.css'
})
export class EditusuariosComponent  implements OnInit {
  usuarioForm!: FormGroup;
  usuarios : UsuariosDto= new  UsuariosDto();
  usuariosar: UsuariosDto [] =[];

  roles :RolesDto[] = [];
  ciudades :CiudadDto[] = [];
  tipodocumento :tipoDocumentoDto[] = [];

  constructor(
    private fb: FormBuilder,
    private api: UsuariosService,
    private  apirol: RolesService,
    private  apiciu: CiudadService,
    private  apitdoc: TipodocumentoService,
    public dialogRef: MatDialogRef<EditusuariosComponent>,
    private cdr: ChangeDetectorRef,
    private routera: ActivatedRoute,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log('Datos recibidos en el modal:', this.data);

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

    this.usuarioForm.patchValue(this.data);

    const id = Number(this.data?.are_idcarea);
      console.log('envio parametros al update ',this.data);
      console.log('numero envio ',id);
        this.obtUsuariosById(id);

        this.apirol.getRolesList().subscribe((Data) => {
          this.roles = Data;

          console.log('array roles ' + this.roles);
        });


        this.apiciu.obteCiudadListado().subscribe((res) => {
          this.ciudades = res;

          console.log('array ciudad ' + this.ciudades);
        });

        this.apitdoc.gettipoDocumentoList().subscribe((res) => {
          this.tipodocumento = res;
          console.log('array tipodocumento ' + this.tipodocumento);
        });
  }

  obtUsuariosById(id: number) {
    if (!id || isNaN(id)) {
      console.error('ID no válido:', id);
      return;
    }

    console.log('🔹 Enviando ID a la API:', id);

    this.api.obtUsuariosDtoById(id).subscribe({
      next: (response) => {
        console.log(' Respuesta de la API:', response);
         this.usuariosar = response;


      },
      error: (err) => {
        console.error(' Error obteniendo área:', err);
      }
    });
  }

  editarUsuario(data: any) {
    console.log('va al back ' + JSON.stringify(data));
    this.api.actualizarUsuarios(data).subscribe({
      next: (response) => {
        console.log(response);
        Swal.fire({
          icon: 'success',
          title: 'Éxito',
          text: 'El registro se actualizó correctamente',
          confirmButtonText: 'Aceptar'
        }).then(() => {
          this.dialogRef.close(true);
          window.location.reload();
        });
      },
      error: (error) => {
        console.error(error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Hubo un problema al actualizar el registro',
          confirmButtonText: 'Aceptar'
        });
      }
    });
  }

  onSubmit() {



    const regexEspeciales = /[^a-zA-Z0-9\s]/;

    for (const area of this.usuariosar) {

       if (!area.usuNombre || regexEspeciales.test(area.usuNombre)) {


              Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El nombre  no puede estar vacío ni contener caracteres especiales.',
                confirmButtonText: 'Aceptar'
              });

              return;
       }


       if (!area.tipoDocumento || area.tipoDocumento === 0) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Debe seleccionar un tipo de documento válido.',
          confirmButtonText: 'Aceptar'
        });
        return;
      }


      if (!area.numDocumento || area.numDocumento <= 0) {


        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'El número de documento en el usuario debe ser mayor a 0.' ,
          confirmButtonText: 'Aceptar'
        });
        return;
      }


      if (!area.usuCorreo || !this.validarCorreo(area.usuCorreo)) {


        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'El correo electrónico en el usuario no es válido' ,
          confirmButtonText: 'Aceptar'
        });
        return;
      }

      if (!area.usuContrasena || area.usuContrasena.length < 6) {

        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'La contraseña en el usuario debe tener al menos 6 caracteres.' ,
          confirmButtonText: 'Aceptar'
        });

        return;
      }


      if (!area.usuRol || area.usuRol <= 0) {


        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'El rol en el usuario debe ser un valor válido.' ,
          confirmButtonText: 'Aceptar'
        });

        return;
      }

    }


    this.usuariosar.forEach((area, index) => {
      console.log(`Areas ${index + 1}:`, area);

      this.editarUsuario(area);
    });


  }

  closeDialog() {
    this.dialogRef.close();
  }

  validarCorreo(correo: string): boolean {
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexCorreo.test(correo);
  }
}
