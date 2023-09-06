import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  apiurl = `${base_url}/Usuario`

  GetAll(){
    return this.http.get(this.apiurl);
  }
  Getbycode(code:any){
    return this.http.get(this.apiurl+'/'+code);
  }

  proceedRegister(inputdata:any){
    return this.http.post(this.apiurl, inputdata)
  }

  updateUser(code:any, inputdata:any){
    return this.http.put(this.apiurl+'/'+code, inputdata)
  }

  isLoggedIn(){
    return sessionStorage.getItem('username')!=null;
  }
}
