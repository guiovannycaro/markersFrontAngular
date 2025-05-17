import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable , throwError} from 'rxjs';
import { map,catchError } from 'rxjs/operators';

import {Usuarios} from '../modelos/usuarios';
import {ResponceI} from '../modelos/ResponceI';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {


  private baseUrl = "http://localhost:8080/api/markers/AppAdmin/";
  id: number;
  constructor(private http: HttpClient) {
    this.id =0;
  }


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }



  getUsuariosList(): Observable<any>{
    let direccion = this.baseUrl + "Usuarios/listarUsuarios";
    let response = this.http.get<any>(direccion,this.httpOptions);
    console.log(response);
    return response;
  }

createUsuarios(ciudad: Usuarios): Observable<any>{
    let direccion = this.baseUrl + "Usuarios/crearUsuarios";
    let response = this.http.post<any>(direccion,ciudad,this.httpOptions);

    return response;

   }



   actualizarUsuarios(ciudad: Usuarios): Observable<any>{
    let direccion = this.baseUrl + "Usuarios/actualizarUsuarios";
    let response = this.http.post<any>(direccion,ciudad,this.httpOptions);
    console.log(response);
    return response;
   }

   eliminarUsuarios(data:any): Observable<any>{

    console.log("parametro a enviar " + data)
    let direccion = this.baseUrl + "Usuarios/eliminarRegistro?datos=" + data;
    let response = this.http.delete<any>(direccion);
    console.log(response);
    return response;
   }

   getUsuariosById(data:any): Observable<any>{

    console.log("parametro a enviar " + data)
    let direccion = this.baseUrl + "Usuarios/obtenerRegistroById?datos=" + data;
    let response = this.http.get<any>(direccion);
    console.log(response);
    return response;
   }

   obtUsuariosDtoById(data:any): Observable<any>{

    console.log("parametro a enviar " + data)
    let direccion = this.baseUrl + "Usuarios/obtenerListadoById?datos=" + data;
    let response = this.http.get<any>(direccion);
    console.log(response);
    return response;
   }

}

