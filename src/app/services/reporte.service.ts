import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReporteService {
  private url = environment.url + '/admin/reporte';
  constructor(private http: HttpClient) { }

  getReporteGeneral(): Observable<any>{
    return this.http.get<any>(this.url + '/1');
  }

  getReporteIndividual(value): Observable<any> {
    return this.http.get(`${this.url}/invitados/1/${value}`);
  }
}
