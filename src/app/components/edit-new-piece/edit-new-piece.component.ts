import { Component, OnInit } from '@angular/core';
import { Piece } from '../../models/piece';

@Component({
  selector: 'app-edit-new-piece',
  templateUrl: './edit-new-piece.component.html',
  styleUrls: ['./edit-new-piece.component.css']
})
export class EditNewPieceComponent implements OnInit {
  modeAccess: string;
  pieceInProgress: Piece;
  constructor() { }

  ngOnInit() {
  }

}
