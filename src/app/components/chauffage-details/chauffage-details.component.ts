import { Component, OnInit } from '@angular/core';
import { InstalChauffage } from '../../models/installation';
import { InstalServiceService } from '../../services/instal-service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-chauffage-details',
  templateUrl: './chauffage-details.component.html',
  styleUrls: ['./chauffage-details.component.css']
})
export class ChauffageDetailsComponent implements OnInit {

  instalChauffage_in_progress: InstalChauffage;

  constructor(private route: ActivatedRoute, private router: Router, private instalService: InstalServiceService,
              private location: Location) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.getInstalChauffageById(parseInt(params.get('id'), 10));
    });

  }

  public getInstalChauffageById(id: number): InstalChauffage {
      this.instalService.getInstallationChauffageByID(id).subscribe((response) => {
        this.instalChauffage_in_progress = response;
      });
      return this.instalChauffage_in_progress;
    }

    public userClickedOnEditChauffage(): void {
      this.router.navigateByUrl('/SpringDomina/installations/Chauffages/edit/' + this.instalChauffage_in_progress.id);
    }

   public userClickedOnDeleteChauffage(): void {
    this.instalService.deleteInstallationChauffage(this.instalChauffage_in_progress).subscribe((response) => {
      this.router.navigateByUrl('/SpringDomina/installations/Chauffages');
    });
  }


      goBackButtonPressed(): void {
    this.location.back();
  }
}
