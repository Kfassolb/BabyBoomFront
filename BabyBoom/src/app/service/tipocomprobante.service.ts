import { Injectable } from '@angular/core';
import {environment} from 'src/environment/environment';
import { HttpClient } from '@angular/common/http';
const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class TipocomprobanteService {
  private url = `${base_url}/tipocomprobante`
  constructor(private http:HttpClient) { }
  list(){
    return this.http.get<Pet[]>(this.url);
  }
}
