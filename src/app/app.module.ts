import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from './component/Shared/header/header.component';
import {FooterComponent} from './component/Shared/footer/footer.component';
import {EquipmentRoomPageComponent} from './component/equipment/equipment-room-page/equipment-room-page.component';
import {EquipmentOverviewPageComponent} from './component/equipment/equipment-overview-page/equipment-overview-page.component';
import {FrontpageComponent} from './component/Shared/frontpage/frontpage.component';
import {MaterialModule} from './material.module';
import {LoginDialogComponent} from './component/Shared/login-dialog/login-dialog.component';
import {EquipmentAdminOverviewPageComponent} from './component/admin-page/equipment-admin-overview-page/equipment-admin-overview-page.component';
import {FormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material';
import {AuthenticationService} from './services/authentication.service';
import { HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EquipmentRoomPageComponent,
    EquipmentOverviewPageComponent,
    FrontpageComponent,
    EquipmentAdminOverviewPageComponent,
    LoginDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    MatDialogModule,
    HttpClientModule
  ],
  entryComponents: [
    LoginDialogComponent
  ],
  providers: [
    AuthenticationService,

  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule {
}
