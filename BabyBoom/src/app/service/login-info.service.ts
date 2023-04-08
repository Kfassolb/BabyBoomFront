import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginInfo } from '../model/LoginInfo';
import { HttpClient } from '@angular/common/http';

const base_url = environment.base;

@Injectable({
  providedIn: 'root',
})
export class LoginInfoService {
  private url = `${base_url}/LoginInfo`;
  constructor(private http: HttpClient) {}
  list() {
    return this.http.get<LoginInfo[]>(this.url);
  }
}
