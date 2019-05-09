import { Component, OnInit } from '@angular/core';
import { InstalVMC } from '../../models/installation';
import { Piece } from '../../models/piece';
import { Programme } from '../../models/programme';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { InstalServiceService } from '../../services/instal-service.service';
import { Location } from '@angular/common';
import { PieceServiceService } from '../../services/piece-service.service';
import { ProgrammeServiceService } from '../../services/programme-service.service';

@Component({
  selector: 'app-edit-instal-vmc',
  templateUrl: './edit-instal-vmc.component.html',
  styleUrls: ['./edit-instal-vmc.component.css']
})
export class EditInstalVmcComponent implements OnInit {

  instalVMC_in_progress: InstalVMC;
  mode_access: string;
  pieces: Piece[];
  programmes: Programme[];


  constructor(private router: Router, private route: ActivatedRoute, private instalService: InstalServiceService,
              private location: Location, private pieceService: PieceServiceService, private progService: ProgrammeServiceService) {
    this.instalVMC_in_progress = InstalVMC.createBlank();
    this.pieceService.getAllPieces().subscribe((response) => {
      this.pieces = response;
    });

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.get('id') != null) {
        this.mode_access = 'MODIFICATION';
        this.instalService.getInstallationVMCByID(parseInt(params.get('id'), 10))
        .subscribe((response) => {
          this.instalVMC_in_progress = response;
          this.progService.getProgrammesByPiece(this.instalVMC_in_progress.piece.idPiece).subscribe((response2) => {
            this.programmes = response2;
          });
        });

      } else {
        this.mode_access = 'AJOUT';

      }
    });
  }


  public updateInstalVMC(instalVMC: InstalVMC): void {
    this.instalService.updateInstallationVMC(this.instalVMC_in_progress).subscribe(
      (response) => {
        this.router.navigateByUrl('/SpringDomina/installations/VMCs');
      }
    );
  }


  public addInstalVMC(instalVMC: InstalVMC): void {
    this.instalService.createInstallationVMC(this.instalVMC_in_progress).subscribe(
      (response) => {
        this.router.navigateByUrl('/SpringDomina/installations/VMCs');
      }
    );
  }

  public addUpdateInstalVMCClicked(): void {
    if (this.mode_access === 'MODIFICATION') {
      this.updateInstalVMC(this.instalVMC_in_progress);
    } else {
      this.addInstalVMC(this.instalVMC_in_progress);
    }
  }

  public userClickedOnDeleteVMC(): void {
    this.instalService.deleteInstallationVMC(this.instalVMC_in_progress).subscribe((response) => {
      this.router.navigateByUrl('/SpringDomina/installations/VMCs');
    });
  }

  goBackButtonPressed(): void {
    this.location.back();
  }
  }
