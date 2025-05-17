import { Component, Inject,OnInit  } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';

import { PrestamosDto } from '../../../modelos/prestamosdto';
import { PrestamosService } from '../../../services/prestamos.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Solicitudes } from '../../../modelos/solicitudes';
import { Usuarios } from '../../../modelos/usuarios';
import { UsuariosService } from '../../../services/usuarios.service';
import { TipoSolicitud } from '../../../modelos/TipoSolicitud';
import { TiposolicitudService } from '../../../services/tiposolicitud.service';

@Component({
  selector: 'app-addprestamo',
  standalone: false,
  templateUrl: './addprestamo.component.html',
  styleUrl: './addprestamo.component.css'
})
export class AddprestamoComponent {
  prestamoForm!: FormGroup;

  prestamo : PrestamosDto = new PrestamosDto();
  usuarios :Usuarios[] = [];

  tsolicitud: TipoSolicitud[] =[];


  constructor(
    private fb: FormBuilder,
    private api: PrestamosService,
    private  ususerve: UsuariosService,
     private  tsolserve: TiposolicitudService,
    public dialogRef: MatDialogRef<AddprestamoComponent>,
    private router: Router,
    private route: ActivatedRoute

  ) {
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

    this.ususerve.getUsuariosList().subscribe((usuariosData) => {
      this.usuarios = usuariosData;
    });


    this.tsolserve.getTipoSolicitudList().subscribe((res) => {
      this.tsolicitud = res;
    });



  }


  guardarPrestamo() {
    if (this.prestamoForm.valid) {
      console.log('envio prestamo al back ' + JSON.stringify(this.prestamoForm.value));
      this.api.crearPrestamo(this.prestamoForm.value).subscribe({
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


    const monto = this.prestamoForm.get('monto')?.value;
    const plazo = this.prestamoForm.get('plazoEnMeses')?.value;
    const estado = this.prestamoForm.get('estado')?.value;

    const solicitud = parseInt(this.prestamoForm.get('idSolicitud')?.value, 10);
    const usuario = parseInt(this.prestamoForm.get('usuarioId')?.value, 10);

    // Validación del nombre


    // Validación de la descripción


    // Validación del precio
    if (!monto || monto <= 0) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'El monto debe ser un número mayor a 0.',
        confirmButtonText: 'Aceptar'
      });
      return;
    }

    // Validación del stock
    if (!plazo || plazo <= 1) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'El plazo debe ser un número mayor a 1.',
        confirmButtonText: 'Aceptar'
      });
      return;
    }

    console.log(this.prestamoForm.value);
    this.guardarPrestamo();
  }

  cerrarModal() {
    this.dialogRef.close();
    this.router.navigate(['dashboard/prestamo']);
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
