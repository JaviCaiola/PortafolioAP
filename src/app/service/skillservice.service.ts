import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillserviceService {

  url="https://localhost:8080/";

  constructor(private http:HttpClient) { }

  public lista():Observable<any>{
    return this.http.get<any>(this.url);
  }

  public borrar (id: number):Observable<any> {
    return this.http.delete<any>(this.url+'/${id}');
  }

  public update (skill : any):Observable<any>{
    return this.http.put<any>(this.url, skill);
  }

}
