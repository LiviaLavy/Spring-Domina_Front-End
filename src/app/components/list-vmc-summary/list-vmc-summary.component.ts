import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { InstalVMC } from '../../models/installation';
import { Router } from '@angular/router';
import { InstalServiceService } from '../../services/instal-service.service';

@Component({
  selector: 'app-list-vmc-summary',
  templateUrl: './list-vmc-summary.component.html',
  styleUrls: ['./list-vmc-summary.component.css']
})
export class ListVmcSummaryComponent {

  @Input()
  instalVMC: InstalVMC;


  @Output()
  userClick: EventEmitter<number> = new EventEmitter();

  constructor(private router: Router, private instalService: InstalServiceService) {}

  userClickedOnView() {
    this.userClick.emit(this.instalVMC.id);
  }

  public userClickedOnEditVMC(): void {
    this.router.navigateByUrl('/SpringDomina/installations/VMCs/edit/' + this.instalVMC.id);
  }

  public userClickedOnDeleteVMC(): void {
    this.instalService.deleteInstallationVMC(this.instalVMC).subscribe((response) => {
      this.router.navigateByUrl('/SpringDomina/installations');
    });
  }
}
