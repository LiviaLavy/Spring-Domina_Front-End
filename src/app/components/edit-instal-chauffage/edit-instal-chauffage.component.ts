import { Component, OnInit } from '@angular/core';
import { InstalChauffage } from 'src/app/models/installation';
import { InstalServiceService } from '../../services/instal-service.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-edit-instal-chauffage',
  templateUrl: './edit-instal-chauffage.component.html',
  styleUrls: ['./edit-instal-chauffage.component.css']
})
export class EditInstalChauffageComponent implements OnInit {

  instalChauffage_in_progress: InstalChauffage;
  mode_access: string;
  instalChauffage: InstalChauffage;
  instalChauffages: InstalChauffage[];

  constructor(private router: Router, private route: ActivatedRoute, private instalService: InstalServiceService) {
    this.instalChauffage_in_progress = InstalChauffage.createBlank();
    console.log(this.instalChauffage_in_progress);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.get('id') != null) {
        console.log(params.get('id'));
        this.mode_access = 'MODIFICATION';
        this.instalService.getInstallationChauffageByID(parseInt(params.get('id'), 10))
        .subscribe((response) => {
          this.instalChauffage_in_progress = response;
        })
      } else {
        this.mode_access = 'AJOUT';
        console.log('Good');
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

  public addInstalChauffageClicked() {
    console.log(JSON.stringify(this.instalChauffage_in_progress, null, 2));
    this.instalChauffages.unshift(this.instalChauffage_in_progress);
    this.instalChauffage_in_progress = InstalChauffage.createBlank();
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
}
