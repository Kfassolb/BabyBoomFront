import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Usuario } from '../model/usuario';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

const base_url = environment.base;

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private url = `${base_url}/Usuario`;
  private listCambio=new Subject<Usuario[]>();
  private confirmDeletion = new Subject<Boolean>();

  constructor(private http: HttpClient) {}
  list() {
    return this.http.get<Usuario[]>(this.url);
  }
  insert(usuario:Usuario){
    return this.http.post(this.url, usuario);
  }
  setList(listaNueva:Usuario[]){
    return this.listCambio.next(listaNueva);
  }
  getList(){
    return this.listCambio.asObservable();
  }
  listId(id:number){
    return this.http.get<Usuario>(`${this.url}/${id}`)
  }
  update(usuario:Usuario){
    return this.http.put(this.url + "/" + usuario.id, usuario);
  }
  delete(id:number){
    return this.http.delete(`${this.url}/${id}`);
  }
  getConfirmDeletion(){
    return this.confirmDeletion.asObservable();
  }
  setConfirmDeletion(estado:boolean){
    return this.confirmDeletion.next(estado);
  }
}
