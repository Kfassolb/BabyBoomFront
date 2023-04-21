import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { Servicio } from '../model/Servicio';
import { Subject } from 'rxjs';
const base_url = environment.base
@Injectable({
  providedIn: 'root',
})
export class ServicioService {
private url=`${base_url}/servicio`
private listCambio=new Subject<Servicio[]>();
constructor(private http:HttpClient) { }

list() {
  return this.http.get<Servicio[]>(this.url);
}
insert(servicio: Servicio) {
  return this.http.post(this.url, servicio);
}
setList(listaNueva: Servicio[]) {
  this.listCambio.next(listaNueva);
}
getList() {
  return this.listCambio.asObservable();
}

}
