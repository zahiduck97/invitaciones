import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class InvitadosService {
  private url = environment.url + '/estadoInvitacion';
  constructor(private http: HttpClient) { }

  updateVisualizacion(token){
    return this.http.get(this.url + '/getByIdAndIdProyecto', {headers: {token}})
  }
}
