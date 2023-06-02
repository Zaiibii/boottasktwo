import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { MainPageOverviewComponent } from './main-page-overview/main-page-overview.component';

const routes: Routes = [
  { path: '', component: MainPageComponent,},
      {path: 'overview', component:MainPageOverviewComponent},
    { path: 'cricket', component: CricketComponent },
    { path: 'football', component: FootballComponent},
    { path: 'horse', component: HorseComponent },
    { path: 'tennis', component: TennisComponent },
    { path: 'kabaddi', component: KabaddiComponent },
    { path: 'casino', component: CasinoComponent },
    { path: 'inplay', component: InplayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
