import { Component, Inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ChangeDetectorRef } from '@angular/core';
import Swal from 'sweetalert2';

import { PrestamosDto } from '../../../modelos/prestamosdto';
import { PrestamosService } from '../../../services/prestamos.service';


import { Solicitudes } from '../../../modelos/solicitudes';
import { Usuarios } from '../../../modelos/usuarios';
import { UsuariosService } from '../../../services/usuarios.service';
import { TipoSolicitud } from '../../../modelos/TipoSolicitud';
import { TiposolicitudService } from '../../../services/tiposolicitud.service';

import { Prestamos } from '../../../modelos/prestamos';
import { UsuariosDto } from '../../../modelos/usuariosdto';
import { TipoSolicitudDto } from '../../../modelos/TipoSolicituddto';


@Component({
  selector: 'app-editprestamo',
  standalone: false,
  templateUrl: './editprestamo.component.html',
  styleUrl: './editprestamo.component.css'
})
export class EditprestamoComponent implements OnInit{
  prestamoForm!: FormGroup;

  prestamo : PrestamosDto = new PrestamosDto();
  prestamos :Prestamos[] = [];

  prestamossar: PrestamosDto [] =[];

  tsolicitud: TipoSolicitudDto[] =[];
  usuarios :UsuariosDto[] = [];

  constructor(
    private fb: FormBuilder,
    private api: PrestamosService,

    private  apitdoc: TiposolicitudService,
    private  apiusu: UsuariosService,
    public dialogRef: MatDialogRef<EditprestamoComponent>,
    private cdr: ChangeDetectorRef,
    private routera: ActivatedRoute,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log('Datos recibidos en el modal:', this.data);

    this.prestamoForm = this.fb.group({
      idPrestamo: [0, Validators.required],
      idSolicitud: [0, Validators.required],
      usuarioId: [0, Validators.required],
      monto: [0, Validators.required],
      plazoEnMeses: [0, Validators.required],
      estado: [true, Validators.required]
    });
  }

  ngOnInit(): void {

    this.prestamoForm.patchValue(this.data);

    const id = Number(this.data?.are_idcarea);
      console.log('envio parametros al update ',this.data);
      console.log('numero envio ',id);
        this.obtPrestamoById(id);

        this.apiusu.getUsuariosList().subscribe((Data) => {
          this.usuarios = Data;

          console.log('array usuarios ' + this.usuarios);
        });


        this.apitdoc.getTipoSolicitudList().subscribe((res) => {
          this.tsolicitud = res;

          console.log('array tsolicitud ' + this.tsolicitud);
        });
  }


  obtPrestamoById(id: number) {
    if (!id || isNaN(id)) {
      console.error('ID no válido:', id);
      return;
    }

    console.log('🔹 Enviando ID a la API:', id);

    this.api.obtPrestamoDtoById(id).subscribe({
      next: (response) => {
        console.log(' Respuesta de la API:', response);
         this.prestamossar = response;


      },
      error: (err) => {
        console.error(' Error obteniendo área:', err);
      }
    });
  }


   editarPrestamo(data: any) {
      console.log('va al back ' + JSON.stringify(data));
      this.api.actualizarPrestamos(data).subscribe({
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

        for (const area of this.prestamossar) {

           if (!area.monto || area.monto <= 0) {


                  Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'El monto debe ser un número mayor a 0.',
                    confirmButtonText: 'Aceptar'
                  });

                  return;
           }


           if (!area.plazoEnMeses || area.plazoEnMeses <=1) {
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'El plazo debe ser un número mayor a 1.',
              confirmButtonText: 'Aceptar'
            });
            return;
          }


        }


        this.prestamossar.forEach((area, index) => {
          console.log(`Areas ${index + 1}:`, area);

          this.editarPrestamo(area);
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
