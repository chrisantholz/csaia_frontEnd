import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { AdminSettingsComponent } from './admin-settings/admin-settings.component';
import { DownloadFlightsComponent } from './download-flights/download-flights.component';
import { FlightPageComponent } from './flight-page/flight-page.component';
import { GenOrthoComponent } from './gen-ortho/gen-ortho.component';
import { QueryFlightsComponent } from './query-flights/query-flights.component';
import { UploadFlightsComponent } from './upload-flights/upload-flights.component'; 
import { EditAccountSettingsComponent } from './edit-account-settings/edit-account-settings.component'

const routes: Routes = [
  { path: '', redirectTo: '/Landing', pathMatch: 'full' },
  { path: 'Landing', component: LandingComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'AccountSettings', component: AccountSettingsComponent },
  { path: 'AdminSettings', component: AdminSettingsComponent },
  { path: 'DownloadFlights', component: DownloadFlightsComponent },
  { path: 'FlightPage', component: FlightPageComponent },
  { path: 'GenOrtho', component: GenOrthoComponent },
  { path: 'QueryFlights', component: QueryFlightsComponent },
  { path: 'UploadFlights', component: UploadFlightsComponent },
  { path: 'EditAccountSettings', component: EditAccountSettingsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
