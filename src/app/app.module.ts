import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { ClubCollectionComponent } from './club-collection/club-collection.component';
import { HomeComponent } from './home/home.component';
import { GeneralService } from './services/general.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { CalendarComponent } from './calendar/calendar.component';
import { FullCalendarModule } from 'ng-fullcalendar';
import { RotmArchiveComponent } from './rotm-archive/rotm-archive.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'club-collection', component: ClubCollectionComponent},
  //{ path: 'rotm-archive', component: RecordOfTheMonthCollectionComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ClubCollectionComponent,
    HomeComponent,
    FooterComponent,
    CalendarComponent,
    RotmArchiveComponent,
  ],
  imports: [
    BrowserModule,
    FullCalendarModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [HttpClient, GeneralService],
  bootstrap: [AppComponent]
})
export class AppModule { }
