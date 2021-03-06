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

import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { SliderModule } from 'primeng/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabViewModule } from '../../node_modules/primeng/tabview';
import { PanelModule } from '../../node_modules/primeng/panel';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ListChauffagesSummaryComponent } from './components/list-chauffages-summary/list-chauffages-summary.component';
import {FieldsetModule} from 'primeng/fieldset';
import { ChauffageDetailsComponent } from './components/chauffage-details/chauffage-details.component';
import {InputSwitchModule} from 'primeng/inputswitch';
import {ListboxModule} from 'primeng/listbox';
import {DropdownModule} from 'primeng/dropdown';
import {MultiSelectModule} from 'primeng/multiselect';
import {CheckboxModule} from 'primeng/checkbox';
import { TopPartComponent } from './components/top-part/top-part.component';
import {ToolbarModule} from 'primeng/toolbar';
import {RatingModule} from 'primeng/rating';
import { ListProgsComponent } from './components/list-progs/list-progs.component';
import { EditInstalEclairageComponent } from './components/edit-instal-eclairage/edit-instal-eclairage.component';
import { ListEclairagesSummaryComponent } from './components/list-eclairages-summary/list-eclairages-summary.component';
import { EclairageDetailsComponent } from './components/eclairage-details/eclairage-details.component';
import { ChauffeEauDetailsComponent } from './components/chauffe-eau-details/chauffe-eau-details.component';
import { EditInstalChauffeEauComponent } from './components/edit-instal-chauffe-eau/edit-instal-chauffe-eau.component';
import { ListChauffeEauSummaryComponent } from './components/list-chauffe-eau-summary/list-chauffe-eau-summary.component';
import { VmcDetailsComponent } from './components/vmc-details/vmc-details.component';
import { EditInstalVmcComponent } from './components/edit-instal-vmc/edit-instal-vmc.component';
import { ListVmcSummaryComponent } from './components/list-vmc-summary/list-vmc-summary.component';
import { VoletDetailsComponent } from './components/volet-details/volet-details.component';
import { EditInstalVoletComponent } from './components/edit-instal-volet/edit-instal-volet.component';
import { ListVoletsSummaryComponent } from './components/list-volets-summary/list-volets-summary.component';




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
    ListChauffagesSummaryComponent,
    ChauffageDetailsComponent,
    SummaryPieceComponent,
    TopPartComponent,
    ListProgsComponent,
    EditInstalEclairageComponent,
    ListEclairagesSummaryComponent,
    EclairageDetailsComponent,
    ChauffeEauDetailsComponent,
    EditInstalChauffeEauComponent,
    ListChauffeEauSummaryComponent,
    VmcDetailsComponent,
    EditInstalVmcComponent,
    ListVmcSummaryComponent,
    VoletDetailsComponent,
    EditInstalVoletComponent,
    ListVoletsSummaryComponent

  ],
  imports: [
    CommonModule,
    ToolbarModule,
    AppRoutingModule,
    CardModule,
    ButtonModule,
    FieldsetModule,
    InputTextModule,
    InputSwitchModule,
    ListboxModule,
    FormsModule,
    DropdownModule,
    SliderModule,
    BrowserModule,
    PanelModule,
    TabViewModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DropdownModule,
    MultiSelectModule,
    CheckboxModule,
    RatingModule,
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
        path: 'SpringDomina/programmes',
        component: ListProgsComponent
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
        path: 'SpringDomina/installations/ChauffeEau/edit',
        component: EditInstalChauffeEauComponent
      },
      {
        path: 'SpringDomina/installations/Eclairages/edit',
        component: EditInstalEclairageComponent
      },
      {
        path: 'SpringDomina/installations/VMCs/edit',
        component: EditInstalVmcComponent
      },
      {
        path: 'SpringDomina/installations/Volets/edit',
        component: EditInstalVoletComponent
      },
      {
        path: 'SpringDomina/installations/Chauffages/edit/:id',
        component: EditInstalChauffageComponent
      },
      {
        path: 'SpringDomina/installations/ChauffeEau/edit/:id',
        component: EditInstalChauffeEauComponent
      },
      {
        path: 'SpringDomina/installations/Eclairages/edit/:id',
        component: EditInstalEclairageComponent
      },
      {
        path: 'SpringDomina/installations/VMCs/edit/:id',
        component: EditInstalVmcComponent
      },
      {
        path: 'SpringDomina/installations/Volets/edit/:id',
        component: EditInstalVoletComponent
      },
      {
        path: 'SpringDomina/installations/Chauffages/:id',
        component: ChauffageDetailsComponent
      },
      {
        path: 'SpringDomina/installations/ChauffeEau/:id',
        component: ChauffeEauDetailsComponent
      },
      {
        path: 'SpringDomina/installations/Eclairages/:id',
        component: EclairageDetailsComponent
      },
      {
        path: 'SpringDomina/installations/VMCs/:id',
        component: VmcDetailsComponent
      },
      {
        path: 'SpringDomina/installations/Volets/:id',
        component: VoletDetailsComponent
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
