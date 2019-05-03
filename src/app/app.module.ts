import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { RouterModule } from '@angular/router';
import { BottomPartComponent } from './components/bottom-part/bottom-part.component';
import { ListPiecesComponent } from './components/list-pieces/list-pieces.component';
import { ListInstalsComponent } from './components/list-instals/list-instals.component';
import { ListCapteursComponent } from './components/list-capteurs/list-capteurs.component';
import { ListConsosComponent } from './components/list-consos/list-consos.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    BottomPartComponent,
    ListPiecesComponent,
    ListInstalsComponent,
    ListCapteursComponent,
    ListConsosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
