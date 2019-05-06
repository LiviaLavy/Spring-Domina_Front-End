import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { InstalServiceService } from '../../services/instal-service.service';
import { InstalChauffage } from '../../models/installation';

@Component({
  selector: 'app-list-instal-chauffage',
  templateUrl: './list-instal-chauffage.component.html',
  styleUrls: ['./list-instal-chauffage.component.css']
})
export class ListInstalChauffageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private instalService: InstalServiceService) { }
  instalChauffage_in_progress: InstalChauffage;
  instalChauffages: InstalChauffage[];
  instalChauffage: InstalChauffage;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.getInstalChauffageById(parseInt(params.get('id'), 10));
    });
  }

  findInstalChauffageById(id: number): InstalChauffage {
    for (const instalChauffage of this.instalChauffages) {
      if (instalChauffage.id === id) {
        return instalChauffage;
      }
    }
    return null;
  }

  public getAllInstalChauffages(): void {
    this.instalService.getAllInstallationChauffage().subscribe((response) => {
      console.log(response['_body'] );
      this.instalChauffages = response;
      console.log(this.instalChauffages);
    });
  }

  public getInstalChauffageById(id: number): void {
    this.instalService.getInstallationChauffageByID(id).subscribe((response) => {
      this.instalChauffage = response;
      console.log(this.instalChauffage);
    });
  }

  public getInstalChauffageByEtat(etat: boolean): void {
    this.instalService.getInstallationChauffageByEtat(etat).subscribe((response) => {
      this.instalChauffage = response;
      console.log(this.instalChauffage);
    });
  }

  public getInstalChauffageByPiece(piece: number): void {
    this.instalService.getInstallationChauffageByPiece(piece).subscribe((response) => {
      this.instalChauffage = response;
      console.log(this.instalChauffage);
    });
  }

  public getInstalChauffageByProgramme(prog: number): void {
    this.instalService.getInstallationChauffageByProgramme(prog).subscribe((response) => {
      this.instalChauffage = response;
      console.log(this.instalChauffage);
    });
  }

  public editButtonPressed(): void {
    this.router.navigateByUrl('/SpringDomina/installations/Chauffages/edit/' + this.instalChauffage.id);
  }

  public deleteButtonPressed(): void {

    this.instalService.deleteInstallationChauffage(this.instalChauffage).subscribe((response) => {
      this.router.navigateByUrl('/SpringDomina/installations/Chauffages');
    });
  }
}
