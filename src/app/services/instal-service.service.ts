import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Installation, InstalChauffage, InstalChauffeEau, InstalVMC, InstalVolet } from '../models/installation';


const ADRESSE_SERVER = 'http://localhost:8080';
@Injectable({
  providedIn: 'root'
})
export class InstalServiceService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient) { }
  // Installations en general
  public getAllInstallation(): Observable<any> {
    return this.http.get<Installation>(ADRESSE_SERVER + '/instal/all');
  }
  public getInstallationByID(id: number): Observable<any> {
    return this.http.get<Installation>(ADRESSE_SERVER + '/instal/ID/' + id);
  }
  public getInstallationByType(type: string): Observable<any> {
    return this.http.get<Installation>(ADRESSE_SERVER + '/instal/type/' + type);
  }
  public getInstallationByEtat(etat: string): Observable<any> {
    return this.http.get<Installation>(ADRESSE_SERVER + '/instal/etat/' + etat);
  }
  public getInstallationByPiece(idpiece: number): Observable<any> {
    return this.http.get<Installation>(ADRESSE_SERVER + '/instal/piece/' + idpiece);
  }
  public getInstallationByProgramme(idprog: string): Observable<any> {
    return this.http.get<Installation>(ADRESSE_SERVER + '/instal/IDProg/' + idprog);
  }
  public putInstallationActive(installation: Installation): Observable<any> {
    return this.http.put<Installation>(ADRESSE_SERVER + '/instal/actived/' + installation.id,
      JSON.stringify(installation), this.httpOptions);
  }
  public createInstallation(installation: Installation): Observable<any> {
    return this.http.post<Installation>(ADRESSE_SERVER + '/instal/addInstall',
      JSON.stringify(installation), this.httpOptions);
  }
  public updateInstallation(installation: Installation): Observable<any> {
    return this.http.put<Installation>(ADRESSE_SERVER + '/instal/' + installation.id,
      JSON.stringify(installation), this.httpOptions);
  }
  public deleteInstallation(installation: Installation): Observable<any> {
    return this.http.delete<Installation>(ADRESSE_SERVER + '/instal/' + installation.id,
      this.httpOptions);
  }
  // Installations Chauffage
  public getAllInstallationChauffage(): Observable<any> {
    return this.http.get<InstalChauffage>(ADRESSE_SERVER + '/instal/Chauffage/all', this.httpOptions);
  }
  public getInstallationChauffageByID(id: number): Observable<any> {
    return this.http.get<InstalChauffage>(ADRESSE_SERVER + '/instal/Chauffage/ID/' + id, this.httpOptions);
  }
  public getInstallationChauffageByEtat(etat: boolean): Observable<any> {
    return this.http.get<InstalChauffage>(ADRESSE_SERVER + '/instal/Chauffage/etat/' + etat, this.httpOptions);
  }
  public getInstallationChauffageByPiece(idpiece: number): Observable<any> {
    return this.http.get<InstalChauffage>(ADRESSE_SERVER + '/instal/Chauffage/piece/' + idpiece, this.httpOptions);
  }
  public getInstallationChauffageByProgramme(idprog: number): Observable<any> {
    return this.http.get<InstalChauffage>(ADRESSE_SERVER + '/instal/Chauffage/IDProg/' + idprog, this.httpOptions);
  }

  public createInstallationChauffage(installation: InstalChauffage): Observable<any> {
    return this.http.post<InstalChauffage>(ADRESSE_SERVER + '/instal/Chauffage/add',
      JSON.stringify(installation), this.httpOptions);
  }
  public updateInstallationChauffage(installation: InstalChauffage): Observable<any> {
    return this.http.put<InstalChauffage>(ADRESSE_SERVER + '/instal/Chauffage/' + installation.id,
      JSON.stringify(installation), this.httpOptions);
  }
  public deleteInstallationChauffage(installation: InstalChauffage): Observable<any> {
    return this.http.delete<InstalChauffage>(ADRESSE_SERVER + '/instal/Chauffage/' + installation.id,
      this.httpOptions);
  }

  // Installations en general
  public getAllInstallationChauffeEau(): Observable<any> {
    return this.http.get<InstalChauffeEau>(ADRESSE_SERVER + '/instal/ChauffeEau/all');
  }
  public getInstallationChauffeEauByID(id: number): Observable<any> {
    return this.http.get<InstalChauffeEau>(ADRESSE_SERVER + '/instal/ChauffeEau/ID/' + id);
  }
  public getInstallationChauffeEauByEtat(etat: string): Observable<any> {
    return this.http.get<InstalChauffeEau>(ADRESSE_SERVER + '/instal/ChauffeEau/etat/' + etat);
  }
  public getInstallationChauffeEauByPiece(idpiece: string): Observable<any> {
    return this.http.get<InstalChauffeEau>(ADRESSE_SERVER + '/instal/ChauffeEau/piece/' + idpiece);
  }
  public getInstallationByProgrammeChauffeEau(idprog: string): Observable<any> {
    return this.http.get<InstalChauffeEau>(ADRESSE_SERVER + '/instal/ChauffeEau/IDProg/' + idprog);
  }
  public putInstallationChauffeEauActive(installation: Installation): Observable<any> {
    return this.http.put<InstalChauffeEau>(ADRESSE_SERVER + '/instal/ChauffeEau/actived/' + installation.id,
      JSON.stringify(installation), this.httpOptions);
  }
  public createInstallationChauffeEau(installation: Installation): Observable<any> {
    return this.http.post<InstalChauffeEau>(ADRESSE_SERVER + '/instal/ChauffeEau/add',
      JSON.stringify(installation), this.httpOptions);
  }
  public updateInstallationChauffeEau(installation: Installation): Observable<any> {
    return this.http.put<InstalChauffeEau>(ADRESSE_SERVER + '/instal/ChauffeEau/' + installation.id,
      JSON.stringify(installation), this.httpOptions);
  }
  public deleteInstallationChauffeEau(installation: Installation): Observable<any> {
    return this.http.delete<InstalChauffeEau>(ADRESSE_SERVER + '/instal/ChauffeEau/' + installation.id,
      this.httpOptions);
  }
  // Installations Eclairage
  public getAllInstallationEclairage(): Observable<any> {
    return this.http.get<InstalChauffeEau>(ADRESSE_SERVER + '/instal/Eclairage/all');
  }
  public getInstallationEclairageByID(id: number): Observable<any> {
    return this.http.get<InstalChauffeEau>(ADRESSE_SERVER + '/instal/Eclairage/ID/' + id);
  }
  public getInstallationEclairageByEtat(etat: string): Observable<any> {
    return this.http.get<InstalChauffeEau>(ADRESSE_SERVER + '/instal/Eclairage/etat/' + etat);
  }
  public getInstallationEclairageByPiece(idpiece: string): Observable<any> {
    return this.http.get<InstalChauffeEau>(ADRESSE_SERVER + '/instal/Eclairage/piece/' + idpiece);
  }
  public getInstallationEclairageByProgramme(idprog: string): Observable<any> {
    return this.http.get<InstalChauffeEau>(ADRESSE_SERVER + '/instal/Eclairage/IDProg/' + idprog);
  }
  public putInstallationEclairageActive(installation: InstalChauffeEau): Observable<any> {
    return this.http.put<InstalChauffeEau>(ADRESSE_SERVER + '/instal/Eclairage/actived/' + installation.id,
      JSON.stringify(installation), this.httpOptions);
  }
  public createInstallationEclairage(installation: InstalChauffeEau): Observable<any> {
    return this.http.post<InstalChauffeEau>(ADRESSE_SERVER + '/instal/Eclairage/add',
      JSON.stringify(installation), this.httpOptions);
  }
  public updateInstallationEclairage(installation: InstalChauffeEau): Observable<any> {
    return this.http.put<InstalChauffeEau>(ADRESSE_SERVER + '/instal/Eclairage/' + installation.id,
      JSON.stringify(installation), this.httpOptions);
  }
  public deleteInstallationEclairage(installation: InstalChauffeEau): Observable<any> {
    return this.http.delete<InstalChauffeEau>(ADRESSE_SERVER + '/instal/Eclairage/' + installation.id,
      this.httpOptions);
  }

  // Installations VMC
  public getAllInstallationVMC(): Observable<any> {
    return this.http.get<InstalVMC>(ADRESSE_SERVER + '/instal/VMC/all');
  }
  public getInstallationVMCByID(id: number): Observable<any> {
    return this.http.get<InstalVMC>(ADRESSE_SERVER + '/instal/VMC/ID/' + id);
  }
  public getInstallationVMCByEtat(etat: string): Observable<any> {
    return this.http.get<InstalVMC>(ADRESSE_SERVER + '/instal/VMC/etat/' + etat);
  }
  public getInstallationVMCByPiece(idpiece: string): Observable<any> {
    return this.http.get<InstalVMC>(ADRESSE_SERVER + '/instal/VMC/piece/' + idpiece);
  }
  public getInstallationVMCByProgramme(idprog: string): Observable<any> {
    return this.http.get<InstalVMC>(ADRESSE_SERVER + '/instal/IDProg/' + idprog);
  }
  public putInstallationVMCActive(installation: Installation): Observable<any> {
    return this.http.put<InstalVMC>(ADRESSE_SERVER + '/instal/VMC/actived/' + installation.id,
      JSON.stringify(installation), this.httpOptions);
  }
  public createInstallationVMC(installation: Installation): Observable<any> {
    return this.http.post<InstalVMC>(ADRESSE_SERVER + '/instal/VMC/add',
      JSON.stringify(installation), this.httpOptions);
  }
  public updateInstallationVMC(installation: Installation): Observable<any> {
    return this.http.put<InstalVMC>(ADRESSE_SERVER + '/instal/VMC/' + installation.id,
      JSON.stringify(installation), this.httpOptions);
  }
  public deleteInstallationVMC(installation: Installation): Observable<any> {
    return this.http.delete<InstalVMC>(ADRESSE_SERVER + '/instal/VMC/' + installation.id,
      this.httpOptions);
  }

  // Installations Volet
  public getAllInstallationVolet(): Observable<any> {
    return this.http.get<InstalVolet>(ADRESSE_SERVER + '/instal/Volet/all');
  }
  public getInstallationVoletByID(id: number): Observable<any> {
    return this.http.get<InstalVolet>(ADRESSE_SERVER + '/instal/Volet/ID/' + id);
  }
  public getInstallationVoletByEtat(etat: string): Observable<any> {
    return this.http.get<InstalVolet>(ADRESSE_SERVER + '/instal/Volet/etat/' + etat);
  }
  public getInstallationVoletByPiece(idpiece: string): Observable<any> {
    return this.http.get<InstalVolet>(ADRESSE_SERVER + '/instal/Volet/piece/' + idpiece);
  }
  public getInstallationVoletByProgramme(idprog: string): Observable<any> {
    return this.http.get<InstalVolet>(ADRESSE_SERVER + '/instal/Volet/IDProg/' + idprog);
  }
  public putInstallationVoletActive(installation: Installation): Observable<any> {
    return this.http.put<InstalVolet>(ADRESSE_SERVER + '/instal/Volet/actived/' + installation.id,
      JSON.stringify(installation), this.httpOptions);
  }
  public createInstallationVolet(installation: Installation): Observable<any> {
    return this.http.post<InstalVolet>(ADRESSE_SERVER + '/instal/Volet/add',
      JSON.stringify(installation), this.httpOptions);
  }
  public updateInstallationVolet(installation: Installation): Observable<any> {
    return this.http.put<InstalVolet>(ADRESSE_SERVER + '/instal/Volet/' + installation.id,
      JSON.stringify(installation), this.httpOptions);
  }
  public deleteInstallationVolet(installation: Installation): Observable<any> {
    return this.http.delete<InstalVolet>(ADRESSE_SERVER + '/instal/Volet/' + installation.id,
      this.httpOptions);
  }
}
