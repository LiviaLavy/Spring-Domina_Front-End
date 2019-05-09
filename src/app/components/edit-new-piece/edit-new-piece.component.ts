import { Component, OnInit } from '@angular/core';
import { Piece } from '../../models/piece';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PieceServiceService } from '../../services/piece-service.service';
import { Programme } from '../../models/programme';
import { Location } from '@angular/common';
import { InstalServiceService } from 'src/app/services/instal-service.service';
import { Observable, observable } from 'rxjs';
import { Installation } from 'src/app/models/installation';

@Component({
  selector: 'app-edit-new-piece',
  templateUrl: './edit-new-piece.component.html',
  styleUrls: ['./edit-new-piece.component.css']
})
export class EditNewPieceComponent implements OnInit {
  instals: Installation[];
  modeAccess: string;
  pieceInProgress: Piece;
  selectedInst: string[];
  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private route: ActivatedRoute, private location: Location, private pieceService: PieceServiceService, private instalService: InstalServiceService) {
    this.pieceInProgress = Piece.createBlank();
    this.instalService.getAllInstallation().subscribe((response) => {
      this.instals = response;


    });
  }

  public getInstallsByTypes(types: string[]): Installation[] {
    let installs: Installation[];
    types.forEach(
      (currentType) => {
        this.instals.forEach(
          (currentInstals) => {
            if (currentType === currentInstals.type) {
              installs.push(currentInstals);
            }
          }
        )
      }
    )
    return installs;

  }


  public stringifyTypeFromInstallation(inst: Installation[]) {
    let instTypes: string[];
    inst.forEach(
      (currentInst) => {
        instTypes.push(currentInst.type);
      }
    );
    return instTypes;

  }

  ngOnInit(): void {

    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.get('idPiece') != null) {
        this.modeAccess = 'MODIFICATION';
        this.pieceService.getPieceById(parseInt(params.get('idPiece'), 10)).subscribe(
          (responses) => {
            this.pieceInProgress = responses;
            console.log(this.instals);
            console.log(this.pieceInProgress);
            this.instalService.getInstallationByPiece(parseInt(params.get('idPiece'), 10)).subscribe(
              (responseb) => {
                this.pieceInProgress.installations = responseb;
                //this.selectedInst = this.stringifyTypeFromInstallation(this.pieceInProgress.installations);
                console.log('eeee')
                console.log(this.pieceInProgress.installations);
              }
            );
          }
        );


      } else {
        this.modeAccess = 'AJOUT';
        console.log(this.pieceInProgress);
      }
    });
  }
  public updatePiece(piece: Piece): void {
    this.pieceInProgress.installations = this.getInstallsByTypes(this.selectedInst);
    this.pieceService.updatePiece(this.pieceInProgress).subscribe(
      (response) => {
        this.router.navigateByUrl('SpringDomina/pieces');
      }
    );
  }

  public addPiece(piece: Piece): void {
    this.pieceService.createPiece(this.pieceInProgress).subscribe(
      (response) => {
        this.router.navigateByUrl('SpringDomina/pieces');
      }
    );
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


  public goBackButtonPressed(): void {
    this.location.back();
  }
}
