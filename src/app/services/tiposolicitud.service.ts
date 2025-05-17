import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable , throwError} from 'rxjs';
import { map,catchError } from 'rxjs/operators';



import {TipoSolicitud} from '../modelos/TipoSolicitud';
import {ResponceI} from '../modelos/ResponceI';

@Injectable({
  providedIn: 'root'
})
export class TiposolicitudService {

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

  getTipoSolicitudList(): Observable<any>{
    let direccion = this.baseUrl + "TipoSolicitud/listarTipoSolicitud";
    let response = this.http.get<any>(direccion,this.httpOptions);
    console.log(response);
    return response;
  }


 createTipoSolicitud(ciudad: TipoSolicitud): Observable<any>{
    let direccion = this.baseUrl + "TipoSolicitud/crearTipoSolicitud";
    let response = this.http.post<any>(direccion,ciudad,this.httpOptions);

    return response;

   }



   actualizarTipoSolicitud(ciudad: TipoSolicitud): Observable<any>{
    let direccion = this.baseUrl + "TipoSolicitud/actualizarTipoSolicitud";
    let response = this.http.post<any>(direccion,ciudad,this.httpOptions);
    console.log(response);
    return response;
   }

   eliminarTipoSolicitud(data:any): Observable<any>{

    console.log("parametro a enviar " + data)
    let direccion = this.baseUrl + "TipoSolicitud/eliminarRegistro/dato=" + data;
    let response = this.http.delete<any>(direccion);
    console.log(response);
    return response;
   }

   getTipoSolicitudById(data:any): Observable<any>{

    console.log("parametro a enviar " + data)
    let direccion = this.baseUrl + "TipoSolicitud/obtenerRegistroById/" + data;
    let response = this.http.get<any>(direccion);
    console.log(response);
    return response;
   }


}
