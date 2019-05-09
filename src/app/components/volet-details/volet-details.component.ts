import { Component, OnInit } from '@angular/core';
import { InstalVMC, InstalVolet } from '../../models/installation';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { InstalServiceService } from '../../services/instal-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-volet-details',
  templateUrl: './volet-details.component.html',
  styleUrls: ['./volet-details.component.css']
})
export class VoletDetailsComponent implements OnInit {

  instalVolet_in_progress: InstalVolet;

  constructor(private route: ActivatedRoute, private router: Router, private instalService: InstalServiceService,
              private location: Location) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.getInstalVoletById(parseInt(params.get('id'), 10));
    });

  }

  public getInstalVoletById(id: number): InstalVolet {
      this.instalService.getInstallationVoletByID(id).subscribe((response) => {
        this.instalVolet_in_progress = response;
      });
      return this.instalVolet_in_progress;
    }

    public userClickedOnEditVolet(): void {
      this.router.navigateByUrl('/SpringDomina/installations/Volets/edit/' + this.instalVolet_in_progress.id);
    }

   public userClickedOnDeleteVolet(): void {
    this.instalService.deleteInstallationVolet(this.instalVolet_in_progress).subscribe((response) => {
      this.router.navigateByUrl('/SpringDomina/installations/Volets');
    });
  }


      goBackButtonPressed(): void {
    this.location.back();
  }
}
