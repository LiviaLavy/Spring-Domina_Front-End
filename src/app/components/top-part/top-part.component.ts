import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-part',
  templateUrl: './top-part.component.html',
  styleUrls: ['./top-part.component.css']
})
export class TopPartComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  public goBackToHome(): void {
    this.router.navigateByUrl('');
  }
}
