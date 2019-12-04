import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from './component/Shared/header/header.component';
import {FooterComponent} from './component/Shared/footer/footer.component';
import {EquipmentRoomPageComponent} from './component/equipment/equipment-room-page/equipment-room-page.component';
import {EquipmentOverviewPageComponent} from './component/equipment/equipment-overview-page/equipment-overview-page.component';
import {LoginComponent} from './component/Shared/dialog/login/login.component';
import {FrontpageComponent} from './component/Shared/frontpage/frontpage.component';
import {MaterialModule} from './material.module';
import { EquipmentAdminOverviewPageComponent } from './component/admin-page/equipment-admin-overview-page/equipment-admin-overview-page.component';
import { ProductListComponent } from './component/admin-page/product/product-list/product-list.component';
import { UserListComponent } from './component/admin-page/user/user-list/user-list.component';
import { CategoryListComponent } from './component/admin-page/category/category-list/category-list.component';
import {HttpClientModule} from "@angular/common/http";
import {MatIconModule} from "@angular/material/icon";
import { ProductAddComponent } from './component/admin-page/product/product-add/product-add.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EquipmentRoomPageComponent,
    EquipmentOverviewPageComponent,
    LoginComponent,
    FrontpageComponent,
    EquipmentAdminOverviewPageComponent,
    ProductListComponent,
    UserListComponent,
    CategoryListComponent,
    ProductAddComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
