import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InvitadosService {
  private url = environment.url + '/invitados';
  constructor(private http: HttpClient) { }

  updateVisualizacion(token): Observable<any>{
    return this.http.get<any>(this.url + '/getByIdAndIdProyecto', {headers: {token}})
  }

  update(token, data): Observable<any> {
    return this.http.put(this.url, {token, data});
  }
}
