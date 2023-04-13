import { Injectable } from '@angular/core';
import {environment} from 'src/environment/environment';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../model/Producto';
const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private url = `${base_url}/Productos`
  constructor(private http:HttpClient) { }
  list(){
    return this.http.get<Producto[]>(this.url);
  }
}

