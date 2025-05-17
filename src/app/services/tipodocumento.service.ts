import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable , throwError} from 'rxjs';
import { map,catchError } from 'rxjs/operators';



import {tipoDocumento} from '../modelos/tipodocumento';
import {ResponceI} from '../modelos/ResponceI';

@Injectable({
  providedIn: 'root'
})
export class TipodocumentoService {


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

  gettipoDocumentoList(): Observable<any>{
    let direccion = this.baseUrl + "TipoDocumento/listarTipoDocumento";
    let response = this.http.get<any>(direccion,this.httpOptions);
    console.log(response);
    return response;
  }


 createtipoDocumento(ciudad: tipoDocumento): Observable<any>{
    let direccion = this.baseUrl + "TipoDocumento/crearTipoDocumento";
    let response = this.http.post<any>(direccion,ciudad,this.httpOptions);

    return response;

   }



   actualizartipoDocumento(ciudad: tipoDocumento): Observable<any>{
    let direccion = this.baseUrl + "TipoDocumento/actualizarTipoDocumento";
    let response = this.http.post<any>(direccion,ciudad,this.httpOptions);
    console.log(response);
    return response;
   }

   eliminartipoDocumento(data:any): Observable<any>{

    console.log("parametro a enviar " + data)
    let direccion = this.baseUrl + "TipoDocumento/eliminarRegistro/dato=" + data;
    let response = this.http.delete<any>(direccion);
    console.log(response);
    return response;
   }

   gettipoDocumentoById(data:any): Observable<any>{

    console.log("parametro a enviar " + data)
    let direccion = this.baseUrl + "TipoDocumento/obtenerRegistroById/" + data;
    let response = this.http.get<any>(direccion);
    console.log(response);
    return response;
   }


}
