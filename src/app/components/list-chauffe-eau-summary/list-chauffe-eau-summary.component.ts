import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { InstalChauffeEau } from '../../models/installation';
import { Router } from '@angular/router';
import { InstalServiceService } from '../../services/instal-service.service';

@Component({
  selector: 'app-list-chauffe-eau-summary',
  templateUrl: './list-chauffe-eau-summary.component.html',
  styleUrls: ['./list-chauffe-eau-summary.component.css']
})
export class ListChauffeEauSummaryComponent {

  @Input()
  instalChauffeEau: InstalChauffeEau;


  @Output()
  userClick: EventEmitter<number> = new EventEmitter();

  constructor(private router: Router, private instalService: InstalServiceService) {}

  userClickedOnView() {
    this.userClick.emit(this.instalChauffeEau.id);
  }

  public userClickedOnEditChauffeEau(): void {
    this.router.navigateByUrl('/SpringDomina/installations/ChauffeEau/edit/' + this.instalChauffeEau.id);
  }

  public userClickedOnDeleteChauffeEau(): void {
    this.instalService.deleteInstallationChauffeEau(this.instalChauffeEau).subscribe((response) => {
      this.router.navigateByUrl('/SpringDomina/installations');
    });
  }
}
