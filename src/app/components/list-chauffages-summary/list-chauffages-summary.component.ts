import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { InstalChauffage } from '../../models/installation';

@Component({
  selector: 'app-list-chauffages-summary',
  templateUrl: './list-chauffages-summary.component.html',
  styleUrls: ['./list-chauffages-summary.component.css']
})
export class ListChauffagesSummaryComponent {

  @Input()
  instalChauffage: InstalChauffage;

  constructor() {}

}
