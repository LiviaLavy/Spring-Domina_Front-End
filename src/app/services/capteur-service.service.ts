import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Capteur, CapteurCO2, CapteurHumidite, CapteurLumen, CapteurTemp } from '../models/capteur';


const ADRESSE_SERVER = 'http://localhost:8080';
@Injectable({
  providedIn: 'root'
})
export class CapteurServiceService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient) { }


  // capteur général
  public getAllCapteurs(): Observable<any> {
    return this.http.get<Capteur>(ADRESSE_SERVER + '/capteur/all');
  }
  public getCapteurById(id: number): Observable<any> {
    return this.http.get<Capteur>(ADRESSE_SERVER + '/capteur/ID/' + id);
  }
  public getCapteurByType(idtype: number): Observable<any> {
    return this.http.get<Capteur>(ADRESSE_SERVER + '/capteur/Type/' + idtype);
  }
  public getCapteurByPiece(idpiece: number): Observable<any> {
    return this.http.get<Capteur>(ADRESSE_SERVER + '/capteur/Type/' + idpiece);
  }
  public createCapteur(capteur: Capteur): Observable<any> {
    return this.http.post<Capteur>(ADRESSE_SERVER + '/capteur/addCapteur',
      JSON.stringify(capteur), this.httpOptions);
  }
  public updateCapteur(capteur: Capteur): Observable<any> {
    return this.http.put<Capteur>(ADRESSE_SERVER + '/capteur/' + capteur.idCapteur,
      JSON.stringify(capteur), this.httpOptions);
  }
  public deleteCapteur(capteur: Capteur): Observable<any> {
    return this.http.delete<Capteur>(ADRESSE_SERVER + '/capteur/' + capteur.idCapteur,
      this.httpOptions);
  }


  // capteur CO2
  public getAllCapteursCO2(): Observable<any> {
    return this.http.get<CapteurCO2>(ADRESSE_SERVER + '/capteur/CO2/all');
  }
  public getCapteurCO2ById(id: number): Observable<any> {
    return this.http.get<CapteurCO2>(ADRESSE_SERVER + '/capteur/CO2/ID/' + id);
  }
  public getCapteurCO2ByPiece(idpiece: number): Observable<any> {
    return this.http.get<CapteurCO2>(ADRESSE_SERVER + '/capteur/CO2/Piece/' + idpiece);
  }
  public createCapteurCO2(capteur: CapteurCO2): Observable<any> {
    return this.http.post<CapteurCO2>(ADRESSE_SERVER + '/capteur/CO2/addCapteur',
      JSON.stringify(capteur), this.httpOptions);
  }
  public updateCapteurCO2(capteur: CapteurCO2): Observable<any> {
    return this.http.put<CapteurCO2>(ADRESSE_SERVER + '/capteur/CO2/' + capteur.idCapteur,
      JSON.stringify(capteur), this.httpOptions);
  }
  public deleteCapteurCO2(capteur: CapteurCO2): Observable<any> {
    return this.http.delete<CapteurCO2>(ADRESSE_SERVER + '/capteur/CO2/' + capteur.idCapteur,
      this.httpOptions);
  }


  // capteur Humidite
  public getAllCapteursHumidite(): Observable<any> {
    return this.http.get<CapteurHumidite>(ADRESSE_SERVER + '/capteur/Humidite/all');
  }
  public getCapteurHumiditeById(id: number): Observable<any> {
    return this.http.get<CapteurHumidite>(ADRESSE_SERVER + '/capteur/Humidite/ID/' + id);
  }
  public getCapteurHumiditeByPiece(idpiece: number): Observable<any> {
    return this.http.get<CapteurHumidite>(ADRESSE_SERVER + '/capteur/Humidite/Piece/' + idpiece);
  }
  public createCapteurHumidite(capteur: CapteurHumidite): Observable<any> {
    return this.http.post<CapteurHumidite>(ADRESSE_SERVER + '/capteur/Humidite/addCapteur',
      JSON.stringify(capteur), this.httpOptions);
  }
  public updateCapteurHumidite(capteur: CapteurHumidite): Observable<any> {
    return this.http.put<CapteurHumidite>(ADRESSE_SERVER + '/capteur/Humidite/' + capteur.idCapteur,
      JSON.stringify(capteur), this.httpOptions);
  }
  public deleteCapteurHumidite(capteur: CapteurHumidite): Observable<any> {
    return this.http.delete<CapteurHumidite>(ADRESSE_SERVER + '/capteur/Humidite/' + capteur.idCapteur,
      this.httpOptions);
  }


  // capteur Lumen
  public getAllCapteursLumen(): Observable<any> {
    return this.http.get<CapteurLumen>(ADRESSE_SERVER + '/capteur/Lumen/all');
  }
  public getCapteurLumenById(id: number): Observable<any> {
    return this.http.get<CapteurLumen>(ADRESSE_SERVER + '/capteur/Lumen/ID/' + id);
  }
  public getCapteurLumenByPiece(idpiece: number): Observable<any> {
    return this.http.get<CapteurLumen>(ADRESSE_SERVER + '/capteur/Lumen/Piece/' + idpiece);
  }
  public createCapteurLumen(capteur: CapteurLumen): Observable<any> {
    return this.http.post<CapteurLumen>(ADRESSE_SERVER + '/capteur/Lumen/addCapteur',
      JSON.stringify(capteur), this.httpOptions);
  }
  public updateCapteurLumen(capteur: CapteurLumen): Observable<any> {
    return this.http.put<CapteurLumen>(ADRESSE_SERVER + '/capteur/Lumen/' + capteur.idCapteur,
      JSON.stringify(capteur), this.httpOptions);
  }
  public deleteCapteurLumen(capteur: CapteurLumen): Observable<any> {
    return this.http.delete<CapteurLumen>(ADRESSE_SERVER + '/capteur/Lumen/' + capteur.idCapteur,
      this.httpOptions);
  }





  // capteur Temp
  public getAllCapteursTemp(): Observable<any> {
    return this.http.get<CapteurTemp>(ADRESSE_SERVER + '/capteur/Temp/all');
  }
  public getCapteurTempById(id: number): Observable<any> {
    return this.http.get<CapteurTemp>(ADRESSE_SERVER + '/capteur/Temp/ID/' + id);
  }
  public getCapteurTempByPiece(idpiece: string): Observable<any> {
    return this.http.get<CapteurTemp>(ADRESSE_SERVER + '/capteur/Temp/Piece/' + idpiece);
  }
  public createCapteurTemp(capteur: CapteurTemp): Observable<any> {
    return this.http.post<CapteurTemp>(ADRESSE_SERVER + '/capteur/Temp/addCapteur',
      JSON.stringify(capteur), this.httpOptions);
  }
  public updateCapteurTemp(capteur: CapteurTemp): Observable<any> {
    return this.http.put<CapteurTemp>(ADRESSE_SERVER + '/capteur/Temp/' + capteur.idCapteur,
      JSON.stringify(capteur), this.httpOptions);
  }
  public deleteCapteurTemp(capteur: CapteurTemp): Observable<any> {
    return this.http.delete<CapteurTemp>(ADRESSE_SERVER + '/capteur/Temp/' + capteur.idCapteur,
      this.httpOptions);
  }
}

