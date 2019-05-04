import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Personne } from '../models/personne';


const ADRESSE_SERVER = 'http://localhost:8080';
@Injectable({
  providedIn: 'root'
})
export class PersonneServiceService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient) { }

  public getAllPersonne(): Observable<any> {
    return this.http.get<Personne>(ADRESSE_SERVER + '/user/all');
  }
  public getPersonneByUsername(username: string): Observable<any> {
    return this.http.get<Personne>(ADRESSE_SERVER + '/user/User/' + username);
  }

  public getPieceByNom(nom: string): Observable<any> {
    return this.http.get<Personne>(ADRESSE_SERVER + '/user/nom/' + nom);
  }

  public createPersonne(piece: Personne): Observable<any> {
    return this.http.post<Personne>(ADRESSE_SERVER + '/user/adduser',
      JSON.stringify(piece), this.httpOptions);
  }

  public updatePersonne(personne: Personne): Observable<any> {
    return this.http.put<Personne>(ADRESSE_SERVER + '/user/' + personne.idUser,
      JSON.stringify(personne), this.httpOptions);
  }

  public deletePersonne(personne: Personne): Observable<any> {
    return this.http.delete<Personne>(ADRESSE_SERVER + '/user/' + personne.idUser,
      this.httpOptions);
  }

}
