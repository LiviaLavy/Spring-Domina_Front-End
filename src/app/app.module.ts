import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
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
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    BottomPartComponent,
    ListPiecesComponent,
    ListInstalsComponent,
    ListCapteursComponent,
    ListConsosComponent,
    ListInstalChauffageComponent,
    ListInstalChauffeEauComponent,
    ListInstalEclairageComponent,
    ListInstalVMCComponent,
    ListInstalVoletComponent,
    EditInstalChauffageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot ([
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
  bootstrap: [AppComponent]
})
export class AppModule { }
