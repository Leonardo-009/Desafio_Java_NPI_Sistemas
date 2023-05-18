import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Socio } from './socio';

@Injectable({
  providedIn: 'root'
})
export class SocioService {

  private baseURL = "http://localhost:8080/backend/socio";

  constructor(private httpClient: HttpClient) { }

  getSocioList(): Observable<Socio[]>{
    return this.httpClient.get<Socio[]>(`${this.baseURL}`);
  }

  createSocio(socio: Socio): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, socio);
  }

  getSocioById(id: number): Observable<Socio>{
    return this.httpClient.get<Socio>(`${this.baseURL}/${id}`);
  }

  updateSocio(id: number, socio: Socio): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, socio);
  }

  deleteSocio(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
