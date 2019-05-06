import { Component, OnInit } from '@angular/core';
import { PieceServiceService } from 'src/app/services/piece-service.service';
import { Piece } from '../../models/piece';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-pieces',
  templateUrl: './list-pieces.component.html',
  styleUrls: ['./list-pieces.component.css']
})
export class ListPiecesComponent implements OnInit {

  pieces: Piece[];
  pieceInProgress: Piece;
  constructor(private router: Router, private pieceService: PieceServiceService) {

  }

  ngOnInit() {
  }
  public getAllPieces(): void {
    this.pieceService.getAllPieces().subscribe((response) => {
      this.pieces = response;
    });
  }
  public addPieceClicked() {
    this.pieces.unshift(this.pieceInProgress);
    this.pieceInProgress = Piece.createBlank();
  }
  addNewPiecePressed(): void {
    this.router.navigateByUrl('SpringDomina/pieces/editnewpiece');
  }
  userClickedOnPiece(idPiece): void {
    this.router.navigateByUrl('SpringDomina/pieces/' + idPiece);
  }
}
