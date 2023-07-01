import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Skill } from '../model/ObjSkill';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthtenticationService {
  private apiurl = 'https://apiback-4evp.onrender.com/api/';

  constructor(private http:HttpClient) { }

  getAll():Observable<any>{
    return this.http.get<any>(this.apiurl+`all`);
  }
  getById(id : number):Observable<any>{
    return this.http.get<any>(this.apiurl+`buscar/${id}`);
  }

  create (data:Skill):Observable<any>{
    return this.http.post<any>(this.apiurl+`crear`,data);
  }

  update (id:number, data :Skill):Observable<any>{
    return this.http.put<any>(this.apiurl+`update/${id}`, data);
  }

  delete (id : number):Observable<any>{
    return this.http.delete<any>(this.apiurl+`borrar/${id}`)
  }
}
