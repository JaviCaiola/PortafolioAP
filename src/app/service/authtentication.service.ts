import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Skill } from '../model/ObjSkill';


@Injectable({
  providedIn: 'root'
})
export class AuthtenticationService {
  private apiurl = "https://apiback-4evp.onrender.com/api";

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<Skill[]>(`${this.apiurl}/all`);
  }
  getById(id : number){
    return this.http.get(`${this.apiurl}/buscar/${id}`);
  }

  create (data:Skill){
    return this.http.post(`${this.apiurl}/create`, data, {observe:'response'});
  }

  update (id:number, data :Skill){
    return this.http.put<Skill>(`${this.apiurl}/update/${id}`, data, {observe:'response'});
  }

  delete (id : number){
    return this.http.delete(`${this.apiurl}/delete/${id}`)
  }
}
