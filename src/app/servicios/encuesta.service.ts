import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {

  private baseUrl = 'http://localhost:8080/api/encuestas';

  constructor(private http: HttpClient) { }

  getResultados(): Observable<any> {
    return this.http.get(`${this.baseUrl}/resultados`);
  }

  registrarEncuesta(email: string, estiloMusical: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = {
      email: email,
      estiloMusical: estiloMusical
    };
    return this.http.post(`${this.baseUrl}/registrar`, body, { headers: headers });
  }
}
