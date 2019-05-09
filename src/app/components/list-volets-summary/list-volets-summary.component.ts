import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { InstalVolet } from '../../models/installation';
import { Router } from '@angular/router';
import { InstalServiceService } from '../../services/instal-service.service';

@Component({
  selector: 'app-list-volets-summary',
  templateUrl: './list-volets-summary.component.html',
  styleUrls: ['./list-volets-summary.component.css']
})
export class ListVoletsSummaryComponent {

  @Input()
  instalVolet: InstalVolet;


  @Output()
  userClick: EventEmitter<number> = new EventEmitter();

  constructor(private router: Router, private instalService: InstalServiceService) {}

  userClickedOnView() {
    this.userClick.emit(this.instalVolet.id);
  }

  public userClickedOnEditVolet(): void {
    this.router.navigateByUrl('/SpringDomina/installations/Volets/edit/' + this.instalVolet.id);
  }

  public userClickedOnDeleteVolet(): void {
    this.instalService.deleteInstallationVolet(this.instalVolet).subscribe((response) => {
      this.router.navigateByUrl('/SpringDomina/installations');
    });
  }
}
