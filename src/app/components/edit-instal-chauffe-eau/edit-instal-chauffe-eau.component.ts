import { Component, OnInit } from '@angular/core';
import { InstalChauffeEau, InstalChauffage } from '../../models/installation';
import { Piece } from '../../models/piece';
import { Programme } from '../../models/programme';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { InstalServiceService } from '../../services/instal-service.service';
import { Location } from '@angular/common';
import { PieceServiceService } from '../../services/piece-service.service';
import { ProgrammeServiceService } from '../../services/programme-service.service';

@Component({
  selector: 'app-edit-instal-chauffe-eau',
  templateUrl: './edit-instal-chauffe-eau.component.html',
  styleUrls: ['./edit-instal-chauffe-eau.component.css']
})
export class EditInstalChauffeEauComponent implements OnInit {
  instalChauffeEau_in_progress: InstalChauffeEau;
  mode_access: string;
  pieces: Piece[];
  programmes: Programme[];


  constructor(private router: Router, private route: ActivatedRoute, private instalService: InstalServiceService,
              private location: Location, private pieceService: PieceServiceService, private progService: ProgrammeServiceService) {
    this.instalChauffeEau_in_progress = InstalChauffeEau.createBlank();
    this.pieceService.getAllPieces().subscribe((response) => {
      this.pieces = response;
    });

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.get('id') != null) {
        this.mode_access = 'MODIFICATION';
        this.instalService.getInstallationChauffeEauByID(parseInt(params.get('id'), 10))
        .subscribe((response) => {
          this.instalChauffeEau_in_progress = response;
          this.progService.getProgrammesByPiece(this.instalChauffeEau_in_progress.piece.idPiece).subscribe((response2) => {
            this.programmes = response2;
          });
        });

      } else {
        this.mode_access = 'AJOUT';

      }
    });
  }


  public updateInstalChauffeEau(instalChauffeEau: InstalChauffeEau): void {
    this.instalService.updateInstallationChauffeEau(this.instalChauffeEau_in_progress).subscribe(
      (response) => {
        this.router.navigateByUrl('/SpringDomina/installations/ChauffeEau');
      }
    );
  }


  public addInstalChauffeEau(instalChauffeEau: InstalChauffeEau): void {
    this.instalService.createInstallationChauffeEau(this.instalChauffeEau_in_progress).subscribe(
      (response) => {
        this.router.navigateByUrl('/SpringDomina/installations/ChauffeEau');
      }
    );
  }

  public addUpdateInstalChauffeEauClicked(): void {
    if (this.mode_access === 'MODIFICATION') {
      this.updateInstalChauffeEau(this.instalChauffeEau_in_progress);
    } else {
      this.addInstalChauffeEau(this.instalChauffeEau_in_progress);
    }
  }

  public userClickedOnDeleteChauffeEau(): void {
    this.instalService.deleteInstallationChauffeEau(this.instalChauffeEau_in_progress).subscribe((response) => {
      this.router.navigateByUrl('/SpringDomina/installations/ChauffeEau');
    });
  }

  goBackButtonPressed(): void {
    this.location.back();
  }
  }
