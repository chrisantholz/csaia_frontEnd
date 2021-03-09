import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { FlightPageComponent } from './flight-page/flight-page.component';
import { UploadFlightsComponent } from './upload-flights/upload-flights.component';
import { QueryFlightsComponent } from './query-flights/query-flights.component';
import { DownloadFlightsComponent } from './download-flights/download-flights.component';
import { GenOrthoComponent } from './gen-ortho/gen-ortho.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { AdminSettingsComponent } from './admin-settings/admin-settings.component';
import { EditAccountSettingsComponent } from './edit-account-settings/edit-account-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    LandingComponent,
    FlightPageComponent,
    UploadFlightsComponent,
    QueryFlightsComponent,
    DownloadFlightsComponent,
    GenOrthoComponent,
    AccountSettingsComponent,
    AdminSettingsComponent,
    EditAccountSettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
