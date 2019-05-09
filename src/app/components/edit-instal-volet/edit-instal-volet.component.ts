import { Component, OnInit } from '@angular/core';
import { InstalVolet } from '../../models/installation';
import { Piece } from '../../models/piece';
import { Programme } from '../../models/programme';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { InstalServiceService } from '../../services/instal-service.service';
import { Location } from '@angular/common';
import { PieceServiceService } from '../../services/piece-service.service';
import { ProgrammeServiceService } from '../../services/programme-service.service';

@Component({
  selector: 'app-edit-instal-volet',
  templateUrl: './edit-instal-volet.component.html',
  styleUrls: ['./edit-instal-volet.component.css']
})
export class EditInstalVoletComponent implements OnInit {

  instalVolet_in_progress: InstalVolet;
  mode_access: string;
  pieces: Piece[];
  programmes: Programme[];


  constructor(private router: Router, private route: ActivatedRoute, private instalService: InstalServiceService,
              private location: Location, private pieceService: PieceServiceService, private progService: ProgrammeServiceService) {
    this.instalVolet_in_progress = InstalVolet.createBlank();
    this.pieceService.getAllPieces().subscribe((response) => {
      this.pieces = response;
    });

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.get('id') != null) {
        this.mode_access = 'MODIFICATION';
        this.instalService.getInstallationVoletByID(parseInt(params.get('id'), 10))
        .subscribe((response) => {
          this.instalVolet_in_progress = response;
          this.progService.getProgrammesByPiece(this.instalVolet_in_progress.piece.idPiece).subscribe((response2) => {
            this.programmes = response2;
          });
        });

      } else {
        this.mode_access = 'AJOUT';

      }
    });
  }


  public updateInstalVolet(instalVolet: InstalVolet): void {
    this.instalService.updateInstallationVolet(this.instalVolet_in_progress).subscribe(
      (response) => {
        this.router.navigateByUrl('/SpringDomina/installations/Volets');
      }
    );
  }


  public addInstalVolet(instalVolet: InstalVolet): void {
    this.instalService.createInstallationVolet(this.instalVolet_in_progress).subscribe(
      (response) => {
        this.router.navigateByUrl('/SpringDomina/installations/Volets');
      }
    );
  }

  public addUpdateInstalVoletClicked(): void {
    if (this.mode_access === 'MODIFICATION') {
      this.updateInstalVolet(this.instalVolet_in_progress);
    } else {
      this.addInstalVolet(this.instalVolet_in_progress);
    }
  }

  public userClickedOnDeleteVolet(): void {
    this.instalService.deleteInstallationVolet(this.instalVolet_in_progress).subscribe((response) => {
      this.router.navigateByUrl('/SpringDomina/installations/Volets');
    });
  }

  goBackButtonPressed(): void {
    this.location.back();
  }
  }
