import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SalaireRetraite } from './salaire-retraite';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SalaireRetraiteService {
  private baseUrl = 'http://localhost:8090/api/salaire-retraite';

  constructor(private http: HttpClient) {}

  createSalaire(Salaire: SalaireRetraite): Observable<SalaireRetraite> {
    return this.http.post<SalaireRetraite>(this.baseUrl, Salaire);
  }

  getAllSalaires(): Observable<SalaireRetraite[]> {
    return this.http.get<SalaireRetraite[]>(this.baseUrl);
  }

  getSalaireFile(): Observable<Blob> {
    return this.http.get(this.baseUrl, { responseType: 'blob' });
  }

  updateSalaire(Salaire: SalaireRetraite): any {
    return this.http.put(`${this.baseUrl}/${Salaire.id}`, Salaire);
  }

  deleteSalaire(id: number): any {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
