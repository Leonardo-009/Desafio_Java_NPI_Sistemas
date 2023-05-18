import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Dependente } from './dependente';
@Injectable({
  providedIn: 'root'
})
export class DependenteService {

  private baseURL = "http://localhost:8080/backend/dependente";

  constructor(private httpClient: HttpClient) { }

  getDependenteList(): Observable<Dependente[]>{
    return this.httpClient.get<Dependente[]>(`${this.baseURL}`);
  }

  createDependente(dependente: Dependente): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, dependente);
  }

  getDependenteById(id: number): Observable<Dependente>{
    return this.httpClient.get<Dependente>(`${this.baseURL}/${id}`);
  }

  updateDependente(id: number, dependente: Dependente): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, dependente);
  }

  deleteDependente(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
