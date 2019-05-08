import { Component, OnInit } from '@angular/core';
import { InstalChauffage } from 'src/app/models/installation';
import { InstalServiceService } from '../../services/instal-service.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-instal-chauffage',
  templateUrl: './edit-instal-chauffage.component.html',
  styleUrls: ['./edit-instal-chauffage.component.css']
})
export class EditInstalChauffageComponent implements OnInit {

  instalChauffage_in_progress: InstalChauffage;
  mode_access: string;


  constructor(private router: Router, private route: ActivatedRoute, private instalService: InstalServiceService,
              private location: Location) {
    this.instalChauffage_in_progress = InstalChauffage.createBlank();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.get('id') != null) {
        this.mode_access = 'MODIFICATION';
        this.instalService.getInstallationChauffageByID(parseInt(params.get('id'), 10))
        .subscribe((response) => {
          this.instalChauffage_in_progress = response;
        })
      } else {
        this.mode_access = 'AJOUT';

      }
    });
  }


  public updateInstalChauffage(instalChauffage: InstalChauffage): void {
    this.instalService.updateInstallationChauffage(this.instalChauffage_in_progress).subscribe(
      (response) => {
        this.router.navigateByUrl('/SpringDomina/installations/Chauffages');
      }
    );
  }


  public addInstalChauffage(instalChauffage: InstalChauffage): void {
    this.instalService.createInstallationChauffage(this.instalChauffage_in_progress).subscribe(
      (response) => {
        this.router.navigateByUrl('/SpringDomina/installations/Chauffages');
      }
    );
  }

  public addUpdateInstalChauffageClicked(): void {
    if (this.mode_access === 'MODIFICATION') {
      this.updateInstalChauffage(this.instalChauffage_in_progress);
    } else {
      this.addInstalChauffage(this.instalChauffage_in_progress);
    }
  }

  goBackButtonPressed(): void {
    this.location.back();
  }
  }












