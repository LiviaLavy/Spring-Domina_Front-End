import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Consommation, ConsommationChauffage, ConsommationEau, ConsommationElec } from '../models/consommation';


const ADRESSE_SERVER = 'http://localhost:8080';
@Injectable({
  providedIn: 'root'
})
export class ConsommationServiceService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient) { }

  // Conso General
  public getAllConsommation(): Observable<any> {
    return this.http.get<Consommation>(ADRESSE_SERVER + '/conso/all');
  }
  public getConsommationById(id: number): Observable<any> {
    return this.http.get<Consommation>(ADRESSE_SERVER + '/conso/ID/' + id);
  }
  public getConsommationByPiece(idPiece: number): Observable<any> {
    return this.http.get<Consommation>(ADRESSE_SERVER + '/conso/Piece/' + idPiece);
  }
  public getConsommationByInstal(idInstal: number): Observable<any> {
    return this.http.get<Consommation>(ADRESSE_SERVER + '/conso/Instal/' + idInstal);
  }
  public createConsommation(consommation: Consommation): Observable<any> {
    return this.http.post<Consommation>(ADRESSE_SERVER + '/conso/addConso',
      JSON.stringify(consommation), this.httpOptions);
  }
  public updateConsommation(consommation: Consommation): Observable<any> {
    return this.http.put<Consommation>(ADRESSE_SERVER + '/conso/' + consommation.idConsommateur,
      JSON.stringify(consommation), this.httpOptions);
  }
  public deleteConsommation(consommation: Consommation): Observable<any> {
    return this.http.delete<Consommation>(ADRESSE_SERVER + '/conso/' + consommation.idConsommateur,
      this.httpOptions);
  }

  // Conso Chauffage
  public getAllConsommationChauffage(): Observable<any> {
    return this.http.get<ConsommationChauffage>(ADRESSE_SERVER + '/conso/Chauffage/all');
  }
  public getConsommationChauffageById(id: number): Observable<any> {
    return this.http.get<ConsommationChauffage>(ADRESSE_SERVER + '/conso/Chauffage/ID/' + id);
  }
  public getConsommationChauffageByPiece(idPiece: number): Observable<any> {
    return this.http.get<ConsommationChauffage>(ADRESSE_SERVER + '/conso/Chauffage/Piece/' + idPiece);
  }
  public getConsommationChauffageByInstal(idInstal: number): Observable<any> {
    return this.http.get<ConsommationChauffage>(ADRESSE_SERVER + '/conso/Chauffage/Instal/' + idInstal);
  }
  public createConsommationChauffage(consommation: Consommation): Observable<any> {
    return this.http.post<ConsommationChauffage>(ADRESSE_SERVER + '/conso/Chauffage/addConso',
      JSON.stringify(consommation), this.httpOptions);
  }
  public updateConsommationChauffage(consommation: Consommation): Observable<any> {
    return this.http.put<ConsommationChauffage>(ADRESSE_SERVER + '/conso/Chauffage/' + consommation.idConsommateur,
      JSON.stringify(consommation), this.httpOptions);
  }
  public deleteConsommationChauffage(consommation: Consommation): Observable<any> {
    return this.http.delete<ConsommationChauffage>(ADRESSE_SERVER + '/conso/Chauffage/' + consommation.idConsommateur,
      this.httpOptions);
  }

  // Conso Eau
  public getAllConsommationEau(): Observable<any> {
    return this.http.get<ConsommationEau>(ADRESSE_SERVER + '/conso/Eau/all');
  }
  public getConsommationEauById(id: number): Observable<any> {
    return this.http.get<ConsommationEau>(ADRESSE_SERVER + '/conso/Eau/ID/' + id);
  }
  public getConsommationEauByPiece(idPiece: number): Observable<any> {
    return this.http.get<ConsommationEau>(ADRESSE_SERVER + '/conso/Eau/Piece/' + idPiece);
  }
  public getConsommationEauByInstal(idInstal: number): Observable<any> {
    return this.http.get<ConsommationEau>(ADRESSE_SERVER + '/conso/Eau/Instal/' + idInstal);
  }
  public createConsommationEau(consommation: ConsommationEau): Observable<any> {
    return this.http.post<ConsommationEau>(ADRESSE_SERVER + '/conso/Eau/addConso',
      JSON.stringify(consommation), this.httpOptions);
  }
  public updateConsommationEau(consommation: ConsommationEau): Observable<any> {
    return this.http.put<ConsommationEau>(ADRESSE_SERVER + '/conso/Eau/' + consommation.idConsommateur,
      JSON.stringify(consommation), this.httpOptions);
  }
  public deleteConsommationEau(consommation: ConsommationEau): Observable<any> {
    return this.http.delete<ConsommationEau>(ADRESSE_SERVER + '/conso/Eau/' + consommation.idConsommateur,
      this.httpOptions);
  }

  // Conso Elec
  public getAllConsommationElec(): Observable<any> {
    return this.http.get<ConsommationElec>(ADRESSE_SERVER + '/conso/Elec/all');
  }
  public getConsommationElecById(id: number): Observable<any> {
    return this.http.get<ConsommationElec>(ADRESSE_SERVER + '/conso/Elec/ID/' + id);
  }
  public getConsommationElecByPiece(idPiece: number): Observable<any> {
    return this.http.get<ConsommationElec>(ADRESSE_SERVER + '/conso/Elec/Piece/' + idPiece);
  }
  public getConsommationElecByInstal(idInstal: number): Observable<any> {
    return this.http.get<ConsommationElec>(ADRESSE_SERVER + '/conso/Elec/Instal/' + idInstal);
  }
  public createConsommationElec(consommation: ConsommationElec): Observable<any> {
    return this.http.post<ConsommationElec>(ADRESSE_SERVER + '/conso/Elec/addConso',
      JSON.stringify(consommation), this.httpOptions);
  }
  public updateConsommationElec(consommation: ConsommationElec): Observable<any> {
    return this.http.put<ConsommationElec>(ADRESSE_SERVER + '/conso/Elec/' + consommation.idConsommateur,
      JSON.stringify(consommation), this.httpOptions);
  }
  public deleteConsommationElec(consommation: ConsommationElec): Observable<any> {
    return this.http.delete<ConsommationElec>(ADRESSE_SERVER + '/conso/Elec/' + consommation.idConsommateur,
      this.httpOptions);
  }
}
