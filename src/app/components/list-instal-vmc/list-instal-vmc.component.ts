import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InstalServiceService } from '../../services/instal-service.service';
import { Location } from '@angular/common';
import { InstalVMC } from '../../models/installation';

@Component({
  selector: 'app-list-instal-vmc',
  templateUrl: './list-instal-vmc.component.html',
  styleUrls: ['./list-instal-vmc.component.css']
})
export class ListInstalVMCComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private instalService: InstalServiceService,
              private location: Location) { }
instalVMC_in_progress: InstalVMC;
instalVMCs: InstalVMC[];
instalVMC: InstalVMC;

ngOnInit(): InstalVMC[] {

this.instalService.getAllInstallationVMC().subscribe((response) => {
this.instalVMCs = response;
});
if (!this.instalVMCs) {
return this.instalVMCs;
} else {
console.log('pas de VMC ajouté');
}
}

userClickedOnView(id): void {
this.router.navigateByUrl('SpringDomina/installations/VMCs/' + id);
}

addInstalVMCsClicked(): void {
this.router.navigateByUrl('/SpringDomina/installations/VMCs/edit');
}

goBackButtonPressed(): void {
this.location.back();
}
}
