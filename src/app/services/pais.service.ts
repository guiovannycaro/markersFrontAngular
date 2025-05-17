import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable , throwError} from 'rxjs';
import { map,catchError } from 'rxjs/operators';

import {Pais} from '../modelos/pais';
import {ResponceI} from '../modelos/ResponceI';

@Injectable({
  providedIn: 'root'
})
export class PaisService {


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




  getPaisList(): Observable<any>{
    let direccion = this.baseUrl + "Pais/listarPais";
    let response = this.http.get<any>(direccion,this.httpOptions);
    console.log(response);
    return response;
  }

  createPais(ciudad: Pais): Observable<any>{
    let direccion = this.baseUrl + "Pais/crearPais";
    let response = this.http.post<any>(direccion,ciudad,this.httpOptions);

    return response;

   }



   actualizarPais(ciudad: Pais): Observable<any>{
    let direccion = this.baseUrl + "Pais/actualizarPais";
    let response = this.http.post<any>(direccion,ciudad,this.httpOptions);
    console.log(response);
    return response;
   }

   eliminarPais(data:any): Observable<any>{

    console.log("parametro a enviar " + data)
    let direccion = this.baseUrl + "Pais/eliminarRegistro/dato=" + data;
    let response = this.http.delete<any>(direccion);
    console.log(response);
    return response;
   }

   getPaisById(data:any): Observable<any>{

    console.log("parametro a enviar " + data)
    let direccion = this.baseUrl + "Pais/obtenerRegistroById/" + data;
    let response = this.http.get<any>(direccion);
    console.log(response);
    return response;
   }

}

