import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable , throwError} from 'rxjs';
import { tap,map , catchError} from 'rxjs/operators';
import { PrestamosDto } from '../modelos/prestamosdto';

@Injectable({
  providedIn: 'root'
})
export class PrestamosService {

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


  getPrestamoList(): Observable<any>{
    let direccion = this.baseUrl + "Prestamo/listarPrestamo";
    let response = this.http.get<any>(direccion,this.httpOptions);
    console.log('respuesta ',response);
    return response;
  }

  crearPrestamo(areas: PrestamosDto): Observable<any>{

    let direccion = this.baseUrl + "Prestamo/crearPrestamo";
    let response = this.http.post<any>(direccion,areas,this.httpOptions);

    return response;

   }


   actualizarPrestamos(ciudad: PrestamosDto): Observable<any>{
    let direccion = this.baseUrl + "Prestamo/actualizarPrestamo";
    let response = this.http.post<any>(direccion,ciudad,this.httpOptions);
    console.log(response);
    return response;
   }

  eliminarPrestamo(data:number): Observable<any>{

    console.log("parametro a enviar " + data)
    let direccion = this.baseUrl + "Prestamo/eliminarPrestamo?datos=" + data;
    let response = this.http.delete<any>(direccion);
    console.log(response);
    return response;
   }

      getPrestamoById(data:any): Observable<any>{

        console.log("parametro a enviar " + data)
        let direccion = this.baseUrl + "Prestamo/obtenerRegistroById?datos=" + data;
        let response = this.http.get<any>(direccion);
        console.log(response);
        return response;
       }


       obtPrestamoDtoById(data:any): Observable<any>{

        console.log("parametro a enviar " + data)
        let direccion = this.baseUrl + "Usuarios/obtenerListadoById?datos=" + data;
        let response = this.http.get<any>(direccion);
        console.log(response);
        return response;
       }
}
