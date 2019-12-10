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
import {EquipmentAddComponent} from './component/admin/equipment/equipment-add/equipment-add.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginDialogComponent} from './component/Shared/login-dialog/login-dialog.component';
import {MatDialogModule} from '@angular/material';
import {AuthenticationService} from './services/authentication.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {DayComponent} from './component/booking-calendar/week-calender/component/day/day.component';
import {BookingComponent} from './component/booking-calendar/week-calender/component/booking/booking.component';
import {WeekComponent} from './component/booking-calendar/week-calender/component/week/week.component';
// tslint:disable-next-line:max-line-length
import {CurrentTimeIndicatorComponent} from './component/booking-calendar/week-calender/component/current-time-indicator/current-time-indicator.component';
import {BookingCalenderComponent} from './component/booking-calendar/booking-calender.component';
import {BookingDialogComponent} from './component/booking-calendar/week-calender/component/booking-dialog/booking-dialog.component';
import {MatNativeDateModule} from '@angular/material/core';
import {AuthGuard} from './Guards/auth.guard';
import {UserCardComponent} from './component/Shared/header/user-card/user-card.component';
import {RoleGuard} from './Guards/auth.guard.admin';
import {ProductsCardComponent} from './component/equipment/equipment-overview-page/products-card/products-card.component';
import {AdminIndexComponent} from './component/admin/admin-index/admin-index.component';
import {OptionCardComponent} from './component/admin/option-menu/option-card/option-card.component';
import {EquipmentComponent} from './component/admin/equipment/equipment.component';
import {OptionMenuComponent} from './component/admin/option-menu/option-menu.component';
import {BackButtonComponent} from './component/admin/component/back-button/back-button.component';
import {HttpIntercepter} from './interceptor/error-intercepter.service';
import {EquipmentDetailsComponent} from './component/admin/equipment/equipment-details/equipment-details.component';
import {CategoryComponent} from './component/admin/category/category.component';
import {CategoryAddComponent} from './component/admin/category/category-add/category-add.component';
import {CategoryDetailsComponent} from './component/admin/category/category-details/category-details.component';
import {BookingsComponent} from './component/admin/bookings/bookings/bookings.component';
import {BookingsAddComponent} from './component/admin/bookings/bookings-add/bookings-add.component';
import {BookingsDetailsComponent} from './component/admin/bookings/bookings-details/bookings-details.component';
import {UserAddComponent} from './component/admin/user/user-add/user-add.component';
import {UserListComponent} from './component/admin/user/user-list/user-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EquipmentRoomPageComponent,
    EquipmentOverviewPageComponent,
    FrontpageComponent,
    UserListComponent,
    EquipmentAddComponent,
    LoginDialogComponent,
    DayComponent,
    BookingComponent,
    WeekComponent,
    CurrentTimeIndicatorComponent,
    BookingCalenderComponent,
    BookingDialogComponent,
    UserCardComponent,
    ProductsCardComponent,
    AdminIndexComponent,
    OptionCardComponent,
    EquipmentComponent,
    OptionMenuComponent,
    BackButtonComponent,
    EquipmentDetailsComponent,
    CategoryComponent,
    CategoryAddComponent,
    CategoryDetailsComponent,
    BookingsComponent,
    BookingsAddComponent,
    BookingsDetailsComponent,
    UserAddComponent,
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
    AuthGuard,
    RoleGuard,
    {provide: HTTP_INTERCEPTORS, useClass: HttpIntercepter, multi: true}

  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule {
}
