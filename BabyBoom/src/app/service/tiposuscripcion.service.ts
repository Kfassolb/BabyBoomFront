import { Injectable } from '@angular/core';
import {environment} from 'src/environment/environment';
import { HttpClient } from '@angular/common/http';
import { Tiposuscripcion } from '../model/Tiposuscripcion';
const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class TiposuscripcionService{
  private url = `${base_url}/TiposSuscripcion`
  constructor(private http:HttpClient) { }
  list(){
    return this.http.get<Tiposuscripcion[]>(this.url);
  }
}
