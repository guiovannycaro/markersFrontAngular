import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable , throwError} from 'rxjs';
import { map,catchError } from 'rxjs/operators';

import {Solicitudes} from '../modelos/solicitudes';
import {ResponceI} from '../modelos/ResponceI';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {

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




  getSolicitudesList(): Observable<any>{
    let direccion = this.baseUrl + "Solicitudes/listarSolicitudes";
    let response = this.http.get<any>(direccion,this.httpOptions);
    console.log(response);
    return response;
  }

  createSolicitudes(ciudad: Solicitudes): Observable<any>{
    let direccion = this.baseUrl + "Solicitudes/crearSolicitudes";
    let response = this.http.post<any>(direccion,ciudad,this.httpOptions);

    return response;

   }



   actualizarSolicitudes(ciudad: Solicitudes): Observable<any>{
    let direccion = this.baseUrl + "Solicitudes/actualizarSolicitudes";
    let response = this.http.post<any>(direccion,ciudad,this.httpOptions);
    console.log(response);
    return response;
   }

   eliminarSolicitudes(data:any): Observable<any>{

    console.log("parametro a enviar " + data)
    let direccion = this.baseUrl + "Solicitudes/eliminarRegistro/dato=" + data;
    let response = this.http.delete<any>(direccion);
    console.log(response);
    return response;
   }

   getSolicitudesById(data:any): Observable<any>{

    console.log("parametro a enviar " + data)
    let direccion = this.baseUrl + "Solicitudes/obtenerRegistroById/" + data;
    let response = this.http.get<any>(direccion);
    console.log(response);
    return response;
   }

}

