import { Component, OnInit } from '@angular/core';
import { InstalEclairage } from '../../models/installation';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { InstalServiceService } from '../../services/instal-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-eclairage-details',
  templateUrl: './eclairage-details.component.html',
  styleUrls: ['./eclairage-details.component.css']
})
export class EclairageDetailsComponent implements OnInit {
  instalEclairage_in_progress: InstalEclairage;

  constructor(private route: ActivatedRoute, private router: Router, private instalService: InstalServiceService,
              private location: Location) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.getInstalEclairageById(parseInt(params.get('id'), 10));
    });

  }

  public getInstalEclairageById(id: number): InstalEclairage {
      this.instalService.getInstallationEclairageByID(id).subscribe((response) => {
        this.instalEclairage_in_progress = response;
      });
      return this.instalEclairage_in_progress;
    }

    public userClickedOnEditEclairage(): void {
      this.router.navigateByUrl('/SpringDomina/installations/Eclairages/edit/' + this.instalEclairage_in_progress.id);
    }

   public userClickedOnDeleteEclairage(): void {
    this.instalService.deleteInstallationEclairage(this.instalEclairage_in_progress).subscribe((response) => {
      this.router.navigateByUrl('/SpringDomina/installations/Eclairages');
    });
  }


      goBackButtonPressed(): void {
    this.location.back();
  }
}
