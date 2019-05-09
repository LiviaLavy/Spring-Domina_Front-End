import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Piece, PieceInstallationDto } from '../models/piece';
import { Installation } from '../models/installation';


const ADRESSE_SERVER = 'http://localhost:8080';
@Injectable({
  providedIn: 'root'
})
export class PieceServiceService {
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };


  constructor(private http: HttpClient) { }
  public getAllPieces(): Observable<any> {
    return this.http.get<Piece>(ADRESSE_SERVER + '/piece/all');
  }
  public getPieceById(id: number): Observable<any> {
    return this.http.get<Piece>(ADRESSE_SERVER + '/piece/ID/' + id);
  }

  public getPieceByNom(nom: string): Observable<any> {
    return this.http.get<Piece>(ADRESSE_SERVER + '/piece/Nom/' + nom);
  }

  public createPiece(piece: Piece): Observable<any> {
    return this.http.post<Piece>(ADRESSE_SERVER + '/piece/addPiece',
      JSON.stringify(piece), this.httpOptions);
  }

  public updatePiece(incomingRequestBody: PieceInstallationDto): Observable<any> {
    return this.http.put<Piece>(ADRESSE_SERVER + '/piece/' + incomingRequestBody.piece.idPiece,
      JSON.stringify(incomingRequestBody), this.httpOptions);
  }

  public deletePiece(piece: Piece): Observable<any> {
    return this.http.delete<Piece>(ADRESSE_SERVER + '/piece/' + piece.idPiece,
      this.httpOptions);
  }
}




