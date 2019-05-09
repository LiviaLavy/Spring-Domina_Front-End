import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { InstalEclairage } from '../../models/installation';
import { Router } from '@angular/router';
import { InstalServiceService } from '../../services/instal-service.service';

@Component({
  selector: 'app-list-eclairages-summary',
  templateUrl: './list-eclairages-summary.component.html',
  styleUrls: ['./list-eclairages-summary.component.css']
})
export class ListEclairagesSummaryComponent {

  @Input()
  instalEclairage: InstalEclairage;


  @Output()
  userClick: EventEmitter<number> = new EventEmitter();

  constructor(private router: Router, private instalService: InstalServiceService) {}

  userClickedOnView() {
    this.userClick.emit(this.instalEclairage.id);
  }

  public userClickedOnEditEclairage(): void {
    this.router.navigateByUrl('/SpringDomina/installations/Eclairages/edit/' + this.instalEclairage.id);
  }

  public userClickedOnDeleteEclairage(): void {
    this.instalService.deleteInstallationEclairage(this.instalEclairage).subscribe((response) => {
      this.router.navigateByUrl('/SpringDomina/installations');
    });
  }
}
