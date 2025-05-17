import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable , throwError} from 'rxjs';
import { map,catchError } from 'rxjs/operators';

import {Roles} from '../modelos/roles';
import {ResponceI} from '../modelos/ResponceI';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

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




  getRolesList(): Observable<any>{
    let direccion = this.baseUrl + "Roles/listarRoles";
    let response = this.http.get<any>(direccion,this.httpOptions);
    console.log(response);
    return response;
  }

  createRoles(ciudad: Roles): Observable<any>{
    let direccion = this.baseUrl + "Roles/crearRoles";
    let response = this.http.post<any>(direccion,ciudad,this.httpOptions);

    return response;

   }



   actualizarRoles(ciudad: Roles): Observable<any>{
    let direccion = this.baseUrl + "Roles/actualizarRoles";
    let response = this.http.post<any>(direccion,ciudad,this.httpOptions);
    console.log(response);
    return response;
   }

   eliminarRoles(data:any): Observable<any>{

    console.log("parametro a enviar " + data)
    let direccion = this.baseUrl + "Roles/eliminarRegistro/dato=" + data;
    let response = this.http.delete<any>(direccion);
    console.log(response);
    return response;
   }

   getRolesById(data:any): Observable<any>{

    console.log("parametro a enviar " + data)
    let direccion = this.baseUrl + "Roles/obtenerRegistroById/" + data;
    let response = this.http.get<any>(direccion);
    console.log(response);
    return response;
   }

}

