import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { environment } from 'src/environments/environment';
import { Servicio } from '../model/Servicio'
=======
import { environment } from 'src/environment/environment';
import { Servicio } from '../model/Servicio';
import { Subject } from 'rxjs';
>>>>>>> sheyla
const base_url = environment.base
@Injectable({
  providedIn: 'root',
})
export class ServicioService {
private url=`${base_url}/servicio`
private listaCambio=new Subject<Servicio[]>()
private confirmaEliminacion = new Subject<Boolean>()

constructor(private http:HttpClient) { }

list() {
  return this.http.get<Servicio[]>(this.url);
}
insert(servicio: Servicio) {
  return this.http.post(this.url, servicio);
}
setList(listaNueva: Servicio[]) {
  this.listaCambio.next(listaNueva);
}
getLista() {
  return this.listaCambio.asObservable();
}
modificar(servicio: Servicio) {
  return this.http.put(this.url + "/" + servicio.id, servicio);
}
listarId(id: number) {
  return this.http.get<Servicio>(`${this.url}/${id}`);
}
eliminar(id: number) {

  return this.http.delete(`${this.url}/${id}`);
}
getConfirmaEliminacion() {
  return this.confirmaEliminacion.asObservable();
}
setConfirmaEliminacion(estado: Boolean) {
  this.confirmaEliminacion.next(estado);
}
}
