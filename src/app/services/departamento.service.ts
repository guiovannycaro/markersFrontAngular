import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable , throwError} from 'rxjs';
import { map,catchError } from 'rxjs/operators';

import {Departamento} from '../modelos/departamento';
import {ResponceI} from '../modelos/ResponceI';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {


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




  getDepartamentoList(): Observable<any>{
    let direccion = this.baseUrl + "Departamentos/listarDepartamentos";
    let response = this.http.get<any>(direccion,this.httpOptions);
    console.log(response);
    return response;
  }

  createDepartamento(ciudad: Departamento): Observable<any>{
    let direccion = this.baseUrl + "Departamentos/crearDepartamentos";
    let response = this.http.post<any>(direccion,ciudad,this.httpOptions);

    return response;

   }



   actualizarDepartamento(ciudad: Departamento): Observable<any>{
    let direccion = this.baseUrl + "Departamentos/actualizarDepartamentos";
    let response = this.http.post<any>(direccion,ciudad,this.httpOptions);
    console.log(response);
    return response;
   }

   eliminarDepartamento(data:any): Observable<any>{

    console.log("parametro a enviar " + data)
    let direccion = this.baseUrl + "Departamentos/eliminarRegistro/dato=" + data;
    let response = this.http.delete<any>(direccion);
    console.log(response);
    return response;
   }

   getDepartamentoById(data:any): Observable<any>{

    console.log("parametro a enviar " + data)
    let direccion = this.baseUrl + "Departamentos/obtenerRegistroById/" + data;
    let response = this.http.get<any>(direccion);
    console.log(response);
    return response;
   }

}
