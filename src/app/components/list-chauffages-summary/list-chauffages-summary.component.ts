import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { InstalChauffage } from '../../models/installation';
import { Piece } from '../../models/piece';
import { Router } from '@angular/router';
import { InstalServiceService } from '../../services/instal-service.service';

@Component({
  selector: 'app-list-chauffages-summary',
  templateUrl: './list-chauffages-summary.component.html',
  styleUrls: ['./list-chauffages-summary.component.css']
})
export class ListChauffagesSummaryComponent {

  @Input()
  instalChauffage: InstalChauffage;


  @Output()
  userClick: EventEmitter<number> = new EventEmitter();

  constructor(private router: Router, private instalService: InstalServiceService) {}

  userClickedOnView() {
    this.userClick.emit(this.instalChauffage.id);
  }

  public userClickedOnEditChauffage(): void {
    this.router.navigateByUrl('/SpringDomina/installations/Chauffages/edit/' + this.instalChauffage.id);
  }

  public userClickedOnDeleteChauffage(): void {
    this.instalService.deleteInstallationChauffage(this.instalChauffage).subscribe((response) => {
      this.router.navigateByUrl('/SpringDomina/installations');
    });
  }
}
