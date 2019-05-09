import { Component, OnInit } from '@angular/core';
import { InstalServiceService } from 'src/app/services/instal-service.service';
import { Router } from '@angular/router';
import { Installation, InstalChauffage, InstalChauffeEau, InstalEclairage, InstalVolet, InstalVMC } from '../../models/installation';
import {CardModule} from 'primeng/card';


@Component({
  selector: 'app-list-instals',
  templateUrl: './list-instals.component.html',
  styleUrls: ['./list-instals.component.css'],
})

export class ListInstalsComponent implements OnInit {

  constructor(private router: Router, private instalService: InstalServiceService) { }
  installations: Installation[];
  installation: Installation;
  instal_in_progress: Installation;


  instalChauffeEau_in_progress: InstalChauffeEau;
  instalEclairage_in_progress: InstalEclairage;
  instalVMC_in_progress: InstalVMC;
  instalVolet_in_progress: InstalVolet;

  ngOnInit() {
  }

  listInstalChauffagesClicked(): void {
    this.router.navigateByUrl('/SpringDomina/installations/Chauffages');
  }

  addInstalChauffagesClicked(): void {
    this.router.navigateByUrl('/SpringDomina/installations/Chauffages/edit');
  }

  listInstalEclairagesClicked(): void {
    this.router.navigateByUrl('/SpringDomina/installations/Eclairages');
  }

  addInstalEclairagesClicked(): void {
    this.router.navigateByUrl('/SpringDomina/installations/Eclairages/edit');
  }


  public getAllInstals(): void {
    this.instalService.getAllInstallation().subscribe((response) => {
      console.log(response['_body']);
      this.installations = response;
      console.log(this.installations);
    });
  }


}
