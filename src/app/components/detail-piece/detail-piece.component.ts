import { Component, OnInit } from '@angular/core';
import { Piece } from '../../models/piece';
import { Location } from '@angular/common';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { PieceServiceService } from '../../services/piece-service.service';
import { FieldsetModule } from 'primeng/fieldset';
import { InstalServiceService } from 'src/app/services/instal-service.service';

@Component({
  selector: 'app-detail-piece',
  templateUrl: './detail-piece.component.html',
  styleUrls: ['./detail-piece.component.css']
})
export class DetailPieceComponent implements OnInit {
  piece: Piece;
  pieces: Piece[];
  constructor(private route: ActivatedRoute,
              private location: Location,
              private router: Router,
              private pieceService: PieceServiceService,
              private instalService: InstalServiceService) { }

  findPieceById(idPiece: number): Piece {
    for (const piece of this.pieces) {
      if (piece.idPiece === idPiece) {
        return piece;
      }
    }
    return null;
  }

  public goBackButtonPressed(): void {
    this.location.back();
  }

  public editButtonPressed(): void {
    this.router.navigateByUrl('SpringDomina/pieces/editnewpieces/' + this.piece.idPiece);
  }
  public deleteButtonPressed(): void {
    this.pieceService.deletePiece(this.piece).subscribe((response) => {
      this.router.navigateByUrl('SpringDomina/pieces');
    });
  }

  public getPieceByID(idPiece: number): void {
    this.pieceService.getPieceById(idPiece).subscribe((response) => {
      this.piece = response;
    });
  }



  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {

      this.getPieceByID(parseInt(params.get('idPiece'), 10));
      console.log(this.piece);
      this.instalService.getInstallationByPiece(parseInt(params.get('idPiece'), 10)).subscribe(
        (responseb) => {
          this.piece.installations = responseb;

        }
      );
    });

  }
}
