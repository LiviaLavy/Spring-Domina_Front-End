import { Component, OnInit } from '@angular/core';
import { Piece, PieceInstallationDto } from '../../models/piece';
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
  incomingRequestBody: PieceInstallationDto;
  instals: Installation[];
  modeAccess: string;
  pieceInProgress: Piece;
  selectedInstbyId: string[];
  instalsID: string[];
  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private route: ActivatedRoute, private location: Location, private pieceService: PieceServiceService, private instalService: InstalServiceService) {
    this.pieceInProgress = Piece.createBlank();
    this.instalService.getAllInstallation().subscribe((response) => {
      this.instals = response;
      this.instalsID = this.stringifyIDFromInstallation(this.instals);
    });

  }

  public getInstallsByTypes(ids: string[]): Installation[] {
    let installs: Installation[] = [];
    ids.forEach(
      (currentIds) => {

        this.instals.forEach(
          (currentInstals) => {
            let idsNum = parseInt(currentIds, 10);
            if (idsNum === currentInstals.id) {
              installs.push(currentInstals);
            }
          }
        );
      }
    );
    return installs;

  }


  public stringifyIDFromInstallation(inst: Installation[]) {
    let instalID: string[] = [];
    inst.forEach(
      (currentInst) => {

        instalID.push(currentInst.id.toString());
      }
    );
    return instalID;

  }

  ngOnInit(): void {

    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.get('idPiece') != null) {
        this.modeAccess = 'MODIFICATION';
        this.pieceService.getPieceById(parseInt(params.get('idPiece'), 10)).subscribe(
          (responses) => {
            this.pieceInProgress = responses;
            console.log('Instals.getAll -----------');
            console.log(this.instals);
            console.log(' piece in progress -----------');
            console.log(this.pieceInProgress);
            this.instalService.getInstallationByPiece(parseInt(params.get('idPiece'), 10)).subscribe(
              (responseb) => {
                this.pieceInProgress.installations = responseb;
                this.selectedInstbyId = this.stringifyIDFromInstallation(this.pieceInProgress.installations);
                console.log('pieceInProgress.installations -----------');
                console.log(this.pieceInProgress.installations);
                console.log(' instalsID -----------');
                console.log(this.instalsID);
                console.log('selectedInstbyId avt  -----------');
                console.log(this.selectedInstbyId);
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
  public updatePiece(incomingRequestBody: PieceInstallationDto): void {

    this.pieceService.updatePiece(this.incomingRequestBody).subscribe(
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
  public addUpdatePieceClicked(): void {
    if (this.modeAccess === 'MODIFICATION') {
      console.log('-------------------------------------------------');
      console.log(this.pieceInProgress);
      console.log('++++++++++++++++++++++++++++++++++++++++++++++++++');

      console.log(this.pieceInProgress.installations);
      this.pieceInProgress.installations = this.getInstallsByTypes(this.selectedInstbyId);

      this.incomingRequestBody = new PieceInstallationDto(this.pieceInProgress, this.pieceInProgress.installations);
     
      console.log(this.incomingRequestBody);
      this.updatePiece(this.incomingRequestBody);
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
