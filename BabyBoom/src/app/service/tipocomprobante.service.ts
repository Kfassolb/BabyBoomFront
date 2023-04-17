import { Injectable } from '@angular/core';
import {environment} from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Tipocomprobante } from '../model/TipoComprobante';
const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class TipocomprobanteService {
  private url = `${base_url}/tiposcomprobantes`
  constructor(private http:HttpClient) { }
  list(){
    return this.http.get<Tipocomprobante[]>(this.url);
  }
}
