import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  listPiecesClicked(): void {
    this.router.navigateByUrl('/SpringDomina/pieces');
  }

  listInstalsClicked(): void {
    this.router.navigateByUrl('/SpringDomina/installations');
  }

  listCapteursClicked(): void {
    this.router.navigateByUrl('/SpringDomina/capteurs');
  }

  listConsosClicked(): void {
    this.router.navigateByUrl('/SpringDomina/consommations');
  }
}
