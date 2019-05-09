import { Component, OnInit } from '@angular/core';
import { InstalVMC } from '../../models/installation';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { InstalServiceService } from '../../services/instal-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-vmc-details',
  templateUrl: './vmc-details.component.html',
  styleUrls: ['./vmc-details.component.css']
})
export class VmcDetailsComponent implements OnInit {

  instalVMC_in_progress: InstalVMC;

  constructor(private route: ActivatedRoute, private router: Router, private instalService: InstalServiceService,
              private location: Location) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.getInstalVMCById(parseInt(params.get('id'), 10));
    });

  }

  public getInstalVMCById(id: number): InstalVMC {
      this.instalService.getInstallationVMCByID(id).subscribe((response) => {
        this.instalVMC_in_progress = response;
      });
      return this.instalVMC_in_progress;
    }

    public userClickedOnEditVMC(): void {
      this.router.navigateByUrl('/SpringDomina/installations/VMCs/edit/' + this.instalVMC_in_progress.id);
    }

   public userClickedOnDeleteVMC(): void {
    this.instalService.deleteInstallationVMC(this.instalVMC_in_progress).subscribe((response) => {
      this.router.navigateByUrl('/SpringDomina/installations/VMCs');
    });
  }


      goBackButtonPressed(): void {
    this.location.back();
  }
}
