import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InstalServiceService } from '../../services/instal-service.service';
import { Location } from '@angular/common';
import { InstalVolet } from '../../models/installation';

@Component({
  selector: 'app-list-instal-volet',
  templateUrl: './list-instal-volet.component.html',
  styleUrls: ['./list-instal-volet.component.css']
})
export class ListInstalVoletComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private instalService: InstalServiceService,
              private location: Location) { }
instalVolet_in_progress: InstalVolet;
instalVolets: InstalVolet[];
instalVolet: InstalVolet;

ngOnInit(): InstalVolet[] {

this.instalService.getAllInstallationVolet().subscribe((response) => {
this.instalVolets = response;
});
if (!this.instalVolets) {
return this.instalVolets;
} else {
console.log('pas de Volet ajouté');
}
}

userClickedOnView(id): void {
this.router.navigateByUrl('SpringDomina/installations/Volets/' + id);
}

addInstalVoletsClicked(): void {
this.router.navigateByUrl('/SpringDomina/installations/Volets/edit');
}

goBackButtonPressed(): void {
this.location.back();
}
}
