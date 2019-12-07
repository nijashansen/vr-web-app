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

import {ProductListComponent} from './component/admin-page/product/product-list/product-list.component';
import {UserListComponent} from './component/admin-page/user/user-list/user-list.component';
import {CategoryListComponent} from './component/admin-page/category/category-list/category-list.component';
import {ProductAddComponent} from './component/admin-page/product/product-add/product-add.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ProductUpdateComponent} from './component/admin-page/product/product-update/product-update.component';
import {LoginDialogComponent} from './component/Shared/login-dialog/login-dialog.component';
import {EquipmentAdminOverviewPageComponent} from './component/admin-page/equipment-admin-overview-page/equipment-admin-overview-page.component';
import {FormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material';
import {AuthenticationService} from './services/authentication.service';
import {HttpClientModule} from '@angular/common/http';
import {DayComponent} from './component/booking-calendar/week-calender/component/day/day.component';
import {BookingComponent} from './component/booking-calendar/week-calender/component/booking/booking.component';
import {WeekComponent} from './component/booking-calendar/week-calender/component/week/week.component';
import {CurrentTimeIndicatorComponent} from './component/booking-calendar/week-calender/component/current-time-indicator/current-time-indicator.component';
import {BookingCalenderComponent} from './component/booking-calendar/booking-calender.component';
import {BookingDialogComponent} from './component/booking-calendar/week-calender/component/booking-dialog/booking-dialog.component';
import {MatNativeDateModule} from '@angular/material/core';
import {AuthGuard} from './Guards/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EquipmentRoomPageComponent,
    EquipmentOverviewPageComponent,
    FrontpageComponent,
    EquipmentAdminOverviewPageComponent,
    ProductListComponent,
    UserListComponent,
    CategoryListComponent,
    ProductAddComponent,
    ProductUpdateComponent,
    LoginDialogComponent,
    DayComponent,
    BookingComponent,
    WeekComponent,
    CurrentTimeIndicatorComponent,
    BookingCalenderComponent,
    BookingDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    MatNativeDateModule
  ],
  entryComponents: [
    LoginDialogComponent,
    BookingDialogComponent
  ],
  providers: [
    AuthenticationService,
    AuthGuard

  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule {
}
