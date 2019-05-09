import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { InstalServiceService } from '../../services/instal-service.service';
import { InstalChauffage } from '../../models/installation';
import { Location } from '@angular/common';

@Component({
  selector: 'app-list-instal-chauffage',
  templateUrl: './list-instal-chauffage.component.html',
  styleUrls: ['./list-instal-chauffage.component.css']
})
export class ListInstalChauffageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private instalService: InstalServiceService,
              private location: Location) { }
  instalChauffage_in_progress: InstalChauffage;
  instalChauffages: InstalChauffage[];
  instalChauffage: InstalChauffage;

  ngOnInit(): InstalChauffage[] {

    this.instalService.getAllInstallationChauffage().subscribe((response) => {
      this.instalChauffages = response;
    });
    if (!this.instalChauffages) {
    return this.instalChauffages;
    } else {
      console.log('pas de chauffage ajouté');
    }
  }

  userClickedOnView(id): void {
    this.router.navigateByUrl('SpringDomina/installations/Chauffages/' + id);
  }

  addInstalChauffagesClicked(): void {
    this.router.navigateByUrl('/SpringDomina/installations/Chauffages/edit');
  }

  goBackButtonPressed(): void {
    this.location.back();
  }
}
