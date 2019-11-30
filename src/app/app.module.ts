import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent} from './component/Shared/header/header.component';
import { FooterComponent } from './component/Shared/footer/footer.component';
import { EquipmentRoomPageComponent } from './component/equipment/equipment-room-page/equipment-room-page.component';
import { EquipmentOverviewPageComponent } from './component/equipment/equipment-overview-page/equipment-overview-page.component';
import { LoginComponent } from './component/Shared/dialog/login/login.component';
import { FrontpageComponent } from './component/Shared/frontpage/frontpage.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EquipmentRoomPageComponent,
    EquipmentOverviewPageComponent,
    LoginComponent,
    FrontpageComponent,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
