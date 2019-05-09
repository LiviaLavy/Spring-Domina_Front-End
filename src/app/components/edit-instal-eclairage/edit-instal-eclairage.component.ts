import { Component, OnInit } from '@angular/core';
import { InstalEclairage } from '../../models/installation';
import { Piece } from '../../models/piece';
import { Programme } from '../../models/programme';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { InstalServiceService } from '../../services/instal-service.service';
import { PieceServiceService } from '../../services/piece-service.service';
import { ProgrammeServiceService } from '../../services/programme-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-instal-eclairage',
  templateUrl: './edit-instal-eclairage.component.html',
  styleUrls: ['./edit-instal-eclairage.component.css']
})
export class EditInstalEclairageComponent implements OnInit {

 instalEclairage_in_progress: InstalEclairage;
  mode_access: string;
  pieces: Piece[];
  programmes: Programme[];


  constructor(private router: Router, private route: ActivatedRoute, private instalService: InstalServiceService,
              private location: Location, private pieceService: PieceServiceService, private progService: ProgrammeServiceService) {
    this.instalEclairage_in_progress = InstalEclairage.createBlank();
    this.pieceService.getAllPieces().subscribe((response) => {
      this.pieces = response;
    });

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.get('id') != null) {
        this.mode_access = 'MODIFICATION';
        this.instalService.getInstallationEclairageByID(parseInt(params.get('id'), 10))
        .subscribe((response) => {
          this.instalEclairage_in_progress = response;
          this.progService.getProgrammesByPiece(this.instalEclairage_in_progress.piece.idPiece).subscribe((response2) => {
            this.programmes = response2;
          });
        });

      } else {
        this.mode_access = 'AJOUT';

      }
    });
  }


  public updateInstalEclairage(instalEclairage: InstalEclairage): void {
    this.instalService.updateInstallationEclairage(this.instalEclairage_in_progress).subscribe(
      (response) => {
        this.router.navigateByUrl('/SpringDomina/installations/Eclairages');
      }
    );
  }


  public addInstalEclairage(instalEclairage: InstalEclairage): void {
    this.instalService.createInstallationEclairage(this.instalEclairage_in_progress).subscribe(
      (response) => {
        this.router.navigateByUrl('/SpringDomina/installations/Eclairages');
      }
    );
  }

  public addUpdateInstalEclairageClicked(): void {
    if (this.mode_access === 'MODIFICATION') {
      this.updateInstalEclairage(this.instalEclairage_in_progress);
    } else {
      this.addInstalEclairage(this.instalEclairage_in_progress);
    }
  }

  public userClickedOnDeleteEclairage(): void {
    this.instalService.deleteInstallationEclairage(this.instalEclairage_in_progress).subscribe((response) => {
      this.router.navigateByUrl('/SpringDomina/installations/Eclairages');
    });
  }

  goBackButtonPressed(): void {
    this.location.back();
  }
  }