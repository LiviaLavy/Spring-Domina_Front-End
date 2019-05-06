import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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

import { DetailPieceComponent } from './components/detail-piece/detail-piece.component';
import { EditNewPieceComponent } from './components/edit-new-piece/edit-new-piece.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    BottomPartComponent,

    ListPiecesComponent,
    ListInstalsComponent,
    ListCapteursComponent,
    ListConsosComponent,

    DetailPieceComponent,
    EditNewPieceComponent
  ],
  imports: [
    BrowserModule,
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
