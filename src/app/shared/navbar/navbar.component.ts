import { Component , Inject,OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';


import { Usuarios } from '../../modelos/usuarios';
import { UsuarioRol } from '../../modelos/UsuarioRol';
import { SeguridadService } from '../../services/seguridad.service';





@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent  implements OnInit {
  perusu: UsuarioRol[] = [];
  perusud: Usuarios = new Usuarios();
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

      logout() {
        localStorage.removeItem('username');
        this.router.navigate(['/login']);
      }

      getRolName(rol: number): string {
        switch (rol) {
            case 1: return 'Super Administrador';
            case 2: return 'Administrador';
            default: return 'Usuario';
        }
    }
}
