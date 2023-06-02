import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DatePipe } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { InplayComponent } from './inplay/inplay.component';
import { CardsComponent } from './cards/cards.component';
import { FooterComponent } from './footer/footer.component';
import { CricketComponent } from './cricket/cricket.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopcardsComponent } from './topcards/topcards.component';
import { MidcardComponent } from './midcard/midcard.component';
import { FootballComponent } from './football/football.component';
import { TennisComponent } from './tennis/tennis.component';
import { KabaddiComponent } from './kabaddi/kabaddi.component';
import { HorseComponent } from './horse/horse.component';
import { CasinoComponent } from './casino/casino.component';
import { AppRoutingModule } from './app-routing.module';
import { MainPageOverviewComponent } from './main-page-overview/main-page-overview.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageComponent,
    InplayComponent,
    CardsComponent,
    FooterComponent,
    CricketComponent,
    SidebarComponent,
    TopcardsComponent,
    MidcardComponent,
    FootballComponent,
    TennisComponent,
    KabaddiComponent,
    HorseComponent,
    CasinoComponent,
    MainPageOverviewComponent
  ],
  imports: [
    BrowserModule,
    NgImageSliderModule,
    AppRoutingModule
 
  ],
  providers: [
    DatePipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
