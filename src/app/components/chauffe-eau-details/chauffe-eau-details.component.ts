import { Component, OnInit } from '@angular/core';
import { InstalChauffeEau } from '../../models/installation';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { InstalServiceService } from '../../services/instal-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-chauffe-eau-details',
  templateUrl: './chauffe-eau-details.component.html',
  styleUrls: ['./chauffe-eau-details.component.css']
})
export class ChauffeEauDetailsComponent implements OnInit {

  instalChauffeEau_in_progress: InstalChauffeEau;

  constructor(private route: ActivatedRoute, private router: Router, private instalService: InstalServiceService,
              private location: Location) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.getInstalChauffeEauById(parseInt(params.get('id'), 10));
    });

  }

  public getInstalChauffeEauById(id: number): InstalChauffeEau {
      this.instalService.getInstallationChauffeEauByID(id).subscribe((response) => {
        this.instalChauffeEau_in_progress = response;
      });
      return this.instalChauffeEau_in_progress;
    }

    public userClickedOnEditChauffeEau(): void {
      this.router.navigateByUrl('/SpringDomina/installations/ChauffeEau/edit/' + this.instalChauffeEau_in_progress.id);
    }

   public userClickedOnDeleteChauffeEau(): void {
    this.instalService.deleteInstallationChauffeEau(this.instalChauffeEau_in_progress).subscribe((response) => {
      this.router.navigateByUrl('/SpringDomina/installations/ChauffeEau');
    });
  }


      goBackButtonPressed(): void {
    this.location.back();
  }
}
