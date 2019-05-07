import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { RouterModule } from '@angular/router';
import { BottomPartComponent } from './components/bottom-part/bottom-part.component';
import { ListPiecesComponent } from './components/list-pieces/list-pieces.component';
import { ListInstalsComponent } from './components/list-instals/list-instals.component';
import { ListCapteursComponent } from './components/list-capteurs/list-capteurs.component';
import { ListConsosComponent } from './components/list-consos/list-consos.component';
import { ListInstalChauffageComponent } from './components/list-instal-chauffage/list-instal-chauffage.component';
import { ListInstalChauffeEauComponent } from './components/list-instal-chauffe-eau/list-instal-chauffe-eau.component';
import { ListInstalEclairageComponent } from './components/list-instal-eclairage/list-instal-eclairage.component';
import { ListInstalVMCComponent } from './components/list-instal-vmc/list-instal-vmc.component';
import { ListInstalVoletComponent } from './components/list-instal-volet/list-instal-volet.component';
import { EditInstalChauffageComponent } from './components/edit-instal-chauffage/edit-instal-chauffage.component';


import { DetailPieceComponent } from './components/detail-piece/detail-piece.component';
import { EditNewPieceComponent } from './components/edit-new-piece/edit-new-piece.component';
import { HttpClientModule } from '@angular/common/http';
import { SummaryPieceComponent } from './components/summary-piece/summary-piece.component';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import {FieldsetModule} from 'primeng/fieldset';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import {SliderModule} from 'primeng/slider';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    BottomPartComponent,
    EditNewPieceComponent,
    DetailPieceComponent,
    ListPiecesComponent,
    ListInstalsComponent,
    ListCapteursComponent,
    ListConsosComponent,

    DetailPieceComponent,
    EditNewPieceComponent,
    ListInstalChauffageComponent,
    ListInstalChauffeEauComponent,
    ListInstalEclairageComponent,
    ListInstalVMCComponent,
    ListInstalVoletComponent,
    EditInstalChauffageComponent,
    SummaryPieceComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    CardModule,
    ButtonModule,
    FieldsetModule,
    InputTextModule,
    SliderModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {
        path: 'SpringDomina/accueil',
        component: AccueilComponent
      },
      {
        path: 'SpringDomina/pieces',
        component: ListPiecesComponent
      },
      {
        path: 'SpringDomina/installations',
        component: ListInstalsComponent
      },
      {
        path: 'SpringDomina/capteurs',
        component: ListCapteursComponent
      },
      {
        path: 'SpringDomina/consommations',
        component: ListConsosComponent
      },
      {
        path: 'SpringDomina/pieces/details/:idPiece',
        component: DetailPieceComponent
      },
      {
        path: 'SpringDomina/pieces/editnewpieces/:idPiece',
        component: EditNewPieceComponent
      },
      {
        path: 'SpringDomina/pieces/editnewpiece',
        component: EditNewPieceComponent
      },
      {

        path: 'SpringDomina/installations/Chauffages',
        component: ListInstalChauffageComponent
      },
      {
        path: 'SpringDomina/installations/ChauffeEau',
        component: ListInstalChauffeEauComponent
      },
      {
        path: 'SpringDomina/installations/Eclairages',
        component: ListInstalEclairageComponent
      },
      {
        path: 'SpringDomina/installations/Volets',
        component: ListInstalVoletComponent
      },
      {
        path: 'SpringDomina/installations/VMCs',
        component: ListInstalVMCComponent
      },
      {
        path: 'SpringDomina/installations/Chauffages/edit',
        component: EditInstalChauffageComponent
      },
      {
        path: '',
        redirectTo: '/SpringDomina/accueil',
        pathMatch: 'full'
      }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
