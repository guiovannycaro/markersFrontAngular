import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { SeguridadService } from '../../services/seguridad.service';
import { Usuarios } from '../../modelos/usuarios';
import {Login} from '../../modelos/login'

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{

  usuCorreo: string ="";
  usuContrasena: string ="";

  userdata:any;
  loginform!: FormGroup;
  constructor(
    private builder: FormBuilder,
    private api: SeguridadService,
    private router: Router
  ) {
    this.loginform = this.builder.group({
      usuCorreo: ['', [Validators.required, Validators.email]],
      usuContrasena: ['', [Validators.required]]
    });
  }

  ngOnInit():void{
    this.checkLocalStorage();
 }

 checkLocalStorage(){
  if(localStorage.getItem("token")){
  this.router.navigate(['home']);
  }
}

onSubmit()
{
  console.log(this.loginform.value);

 if(this.loginform.valid){

  console.log(this.loginform.value);

       this.api.login(this.loginform.value).subscribe(
       res=>{
             this.userdata = res;
             console.log(this.userdata);

             if(this.userdata === true){

              const correo = this.loginform.get('usuCorreo')?.value;

                          sessionStorage.setItem('email',correo);

                         this.router.navigate(['/dashboard']);

             }else{
               alert('Clave Invalidad');
             }
            }

        );
  }else{
    alert('Porfavor ingrese  Informacion  valida.')
  }

}



}
