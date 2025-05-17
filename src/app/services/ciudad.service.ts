import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable , throwError} from 'rxjs';
import { map,catchError } from 'rxjs/operators';

import {Ciudad} from '../modelos/ciudad';
import {ResponceI} from '../modelos/ResponceI';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {

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




  getCiudadList(): Observable<any>{
    let direccion = this.baseUrl + "Ciudad/listarCiudades";
    let response = this.http.get<any>(direccion,this.httpOptions);
    console.log(response);
    return response;
  }

  obteCiudadListado(): Observable<any>{
    let direccion = this.baseUrl + "Ciudad/listadoCiudades";
    let response = this.http.get<any>(direccion,this.httpOptions);
    console.log(response);
    return response;
  }

  createCiudad(ciudad: Ciudad): Observable<any>{
    let direccion = this.baseUrl + "Ciudad/crearCiudades";
    let response = this.http.post<any>(direccion,ciudad,this.httpOptions);

    return response;

   }



   actualizarCiudad(ciudad: Ciudad): Observable<any>{
    let direccion = this.baseUrl + "Ciudad/actualizarCiudades";
    let response = this.http.post<any>(direccion,ciudad,this.httpOptions);
    console.log(response);
    return response;
   }

   eliminarCiudad(data:any): Observable<any>{

    console.log("parametro a enviar " + data)
    let direccion = this.baseUrl + "Ciudad/eliminarCiudad/dato=" + data;
    let response = this.http.delete<any>(direccion);
    console.log(response);
    return response;
   }

   getCiudadById(data:any): Observable<any>{

    console.log("parametro a enviar " + data)
    let direccion = this.baseUrl + "Ciudad/obtenerCiudadById/" + data;
    let response = this.http.get<any>(direccion);
    console.log(response);
    return response;
   }

}
