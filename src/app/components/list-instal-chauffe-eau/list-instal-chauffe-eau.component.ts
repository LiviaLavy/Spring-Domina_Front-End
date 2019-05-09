import { Component, OnInit } from '@angular/core';
import { InstalChauffeEau } from '../../models/installation';
import { ActivatedRoute, Router } from '@angular/router';
import { InstalServiceService } from '../../services/instal-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-list-instal-chauffe-eau',
  templateUrl: './list-instal-chauffe-eau.component.html',
  styleUrls: ['./list-instal-chauffe-eau.component.css']
})
export class ListInstalChauffeEauComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router, private instalService: InstalServiceService,
              private location: Location) { }
  instalChauffeEau_in_progress: InstalChauffeEau;
  instalChauffeEaux: InstalChauffeEau[];
  InstalChauffeEau: InstalChauffeEau;

  ngOnInit(): InstalChauffeEau[] {

    this.instalService.getAllInstallationChauffeEau().subscribe((response) => {
      this.instalChauffeEaux = response;
    });
    if (!this.instalChauffeEaux) {
    return this.instalChauffeEaux;
    } else {
      console.log('pas de chauffage ajouté');
    }
  }

  userClickedOnView(id): void {
    this.router.navigateByUrl('SpringDomina/installations/ChauffeEau/' + id);
  }

  addInstalChauffeEauClicked(): void {
    this.router.navigateByUrl('/SpringDomina/installations/ChauffeEau/edit');
  }

  goBackButtonPressed(): void {
    this.location.back();
  }
}
