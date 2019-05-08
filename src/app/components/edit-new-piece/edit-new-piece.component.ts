import { Component, OnInit } from '@angular/core';
import { Piece } from '../../models/piece';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PieceServiceService } from '../../services/piece-service.service';
import { Programme } from '../../models/programme';
import { Location } from '@angular/common';
import { InstalServiceService } from 'src/app/services/instal-service.service';
import { Observable, observable } from 'rxjs';

@Component({
  selector: 'app-edit-new-piece',
  templateUrl: './edit-new-piece.component.html',
  styleUrls: ['./edit-new-piece.component.css']
})
export class EditNewPieceComponent implements OnInit {
  modeAccess: string;
  pieceInProgress: Piece;
  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private route: ActivatedRoute, private location: Location, private pieceService: PieceServiceService, private instalService: InstalServiceService) {
    this.pieceInProgress = Piece.createBlank();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.get('idPiece') != null) {
        this.modeAccess = 'MODIFICATION';
        this.pieceService.getPieceById(parseInt(params.get('idPiece'), 10)).subscribe(
          (response) => {
            this.pieceInProgress = response;
          }
        );
        this.instalService.getInstallationByPiece(parseInt(params.get('idPiece'), 10)).subscribe(
          (responseb) => {
            this.pieceInProgress.installations = responseb;

          }
        );
      } else {
        this.modeAccess = 'AJOUT';
      }
    });

  }
  public updatePiece(piece: Piece): void {
    this.pieceService.updatePiece(this.pieceInProgress).subscribe(
      (response) => {
        this.router.navigateByUrl('SpringDomina/pieces');
      }
    );
  }

  public addPiece(piece: Piece): void {
    this.pieceService.updatePiece(this.pieceInProgress).subscribe(
      (response) => {
        this.router.navigateByUrl('SpringDomina/pieces');
      });
  }
  public addUpdateRecipeClicked(): void {
    if (this.modeAccess === 'MODIFICATION') {
      this.updatePiece(this.pieceInProgress);
    } else {
      this.addPiece(this.pieceInProgress);
    }
  }
  public userClickedOnView(): void {
    this.router.navigateByUrl('SpringDomina/installations/Chauffages');
  }

  addInstallationPressed(): void {
    if (!this.pieceInProgress.installations) {
      this.pieceInProgress.installations = [{
        id: null, type: null,
        dateAjout: null, etat: null, piece: this.pieceInProgress, programmes: []
      }];
    } else {
      this.pieceInProgress.installations.push({
        id: null, type: null,
        dateAjout: null, etat: null, piece: this.pieceInProgress, programmes: []
      });
    }
  }
  removeInstallationAtIndex(index): void {
    this.pieceInProgress.installations.splice(index, 1);
  }

  public goBackButtonPressed(): void {
    this.location.back();
  }
}
