import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthtenticationService {
  private apiurl = "https://apiback-4evp.onrender.com/api"

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get(`${this.apiurl}/all`);
  }
  getById(id : number){
    return this.http.get(`${this.apiurl}/buscar/${id}`);
  }

  create (data:any){
    return this.http.post(`${this.apiurl}/create`, data);
  }

  update (id:number, data :any){
    return this.http.put(`${this.apiurl}/update/${id}`, data);
  }

  delete (id : number){
    return this.http.delete(`${this.apiurl}/delete/${id}`)
  }
}
