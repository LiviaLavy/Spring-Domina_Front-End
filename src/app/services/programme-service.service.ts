import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Programme } from '../models/programme';

const ADRESSE_SERVER = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class ProgrammeServiceService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient) { }

  public getAllProgrammes(): Observable<any> {
    return this.http.get<Programme>(ADRESSE_SERVER + '/prog/all');
  }
  public getProgrammeById(id: number): Observable<any> {
    return this.http.get<Programme>(ADRESSE_SERVER + '/prog/ID/' + id);
  }

  public getProgrammeByNom(nom: string): Observable<any> {
    return this.http.get<Programme>(ADRESSE_SERVER + '/prog/Nom/' + nom);
  }

  public getProgrammesByPiece(idPiece: number): Observable<any> {
    return this.http.get<Programme>(ADRESSE_SERVER + '/prog/piece/' + idPiece);
  }

  public createProgramme(programme: Programme): Observable<any> {
    return this.http.post<Programme>(ADRESSE_SERVER + '/prog/addprog',
    JSON.stringify(programme), this.httpOptions);
  }

  public updateProgramme(programme: Programme): Observable<any> {
    return this.http.put<Programme>(ADRESSE_SERVER + '/prog/' + programme.idProg,
    JSON.stringify(programme), this.httpOptions);
  }

  public deleteProgramme(programme: Programme): Observable<any> {
    return this.http.delete<Programme>(ADRESSE_SERVER + '/prog/' + programme.idProg,
    this.httpOptions);
  }
}
