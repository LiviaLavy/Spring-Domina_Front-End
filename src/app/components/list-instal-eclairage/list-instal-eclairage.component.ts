import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InstalServiceService } from '../../services/instal-service.service';
import { Location } from '@angular/common';
import { InstalEclairage } from '../../models/installation';

@Component({
  selector: 'app-list-instal-eclairage',
  templateUrl: './list-instal-eclairage.component.html',
  styleUrls: ['./list-instal-eclairage.component.css']
})
export class ListInstalEclairageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private instalService: InstalServiceService,
              private location: Location) { }
  instalEclairage_in_progress: InstalEclairage;
  instalEclairages: InstalEclairage[];
  instalEclairage: InstalEclairage;

  ngOnInit(): InstalEclairage[] {

    this.instalService.getAllInstallationEclairage().subscribe((response) => {
      this.instalEclairages = response;
    });
    if (!this.instalEclairages) {
      return this.instalEclairages;
    } else {
      console.log('pas d eclairage ajouté');
    }
  }

  userClickedOnView(id): void {
    this.router.navigateByUrl('SpringDomina/installations/Eclairages/' + id);
  }

  addInstalEclairagesClicked(): void {
    this.router.navigateByUrl('/SpringDomina/installations/Eclairages/edit');
  }

  goBackButtonPressed(): void {
    this.location.back();
  }
}