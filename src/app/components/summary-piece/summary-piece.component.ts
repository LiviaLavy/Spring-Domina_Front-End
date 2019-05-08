import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Piece } from '../../models/piece';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';

@Component({
  selector: 'app-summary-piece',
  templateUrl: './summary-piece.component.html',
  styleUrls: ['./summary-piece.component.css']
})
export class SummaryPieceComponent implements OnInit {
  @Input()
  piece: Piece;

  @Output()
  userClick: EventEmitter<number> = new EventEmitter();

  constructor() { }
  userClicked() {
    this.userClick.emit(this.piece.idPiece);

  }

  ngOnInit() {
  }

}
