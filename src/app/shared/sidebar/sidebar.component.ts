import { Component , Inject,OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';


import { Usuarios } from '../../modelos/usuarios';
import { UsuarioRol } from '../../modelos/UsuarioRol';
import { SeguridadService } from '../../services/seguridad.service';
@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit{

  perusu: UsuarioRol[] = [];

     usuario: string | null = '';

     constructor(
      private _fb:FormBuilder,
      private api:SeguridadService,private router:Router,) {
      }

      ngOnInit() {
        this.usuario = sessionStorage.getItem('email');
console.log('usuario ' + this.usuario);
        this.obtenerPerfilUsuario(this.usuario);

       }

       private obtenerPerfilUsuario(usuario: any){

        this.api.getUsuarioPerfil(usuario).subscribe(data=>{
          this.perusu =data;

          console.log( this.perusu);

         },error=> console.log(error));
      }

      esPerfilPermitido(): boolean {
        if (this.perusu.length === 0) {
          return false;
        }
        const rol = this.perusu[0].descripcion;
        return rol === 'Cliente';
      }


      esPermitidoAdmin(): boolean {
        const rol = this.perusu[0]?.descripcion ?? '';
        return rol === 'Administrador' || rol === 'Empleado';
      }


}
