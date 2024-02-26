import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegimeGeneralService {
  private baseUrl = 'http://localhost:8090/api/entrees-sorties';

  constructor(private http: HttpClient) {}

  saisirNumEmployeur(numEmployeur: string): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/saisir-num-employeur`, numEmployeur);
  }
}
