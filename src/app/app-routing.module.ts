import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FrontpageComponent} from './component/Shared/frontpage/frontpage.component';
import {EquipmentOverviewPageComponent} from './component/equipment/equipment-overview-page/equipment-overview-page.component';
import {EquipmentRoomPageComponent} from './component/equipment/equipment-room-page/equipment-room-page.component';
import {EquipmentAdminOverviewPageComponent} from "./component/admin-page/equipment-admin-overview-page/equipment-admin-overview-page.component";
import {AuthGuard} from './Guards/auth.guard';
import {RoleGuard} from './Guards/auth.guard.admin';
<<<<<<< Updated upstream
=======
import {AdminIndexComponent} from './component/admin/admin-index/admin-index.component';
import {EquipmentComponent} from './component/admin/equipment/equipment.component';
import {OptionMenuComponent} from './component/admin/option-menu/option-menu.component';
import {EquipmentDetailsComponent} from './component/admin/equipment/equipment-details/equipment-details.component';
import {CategoryComponent} from './component/admin/category/category.component';
import {CategoryAddComponent} from './component/admin/category/category-add/category-add.component';
import {CategoryDetailsComponent} from './component/admin/category/category-details/category-details.component';
import {BookingsComponent} from './component/admin/bookings/bookings/bookings.component';
import {BookingsAddComponent} from './component/admin/bookings/bookings-add/bookings-add.component';
import {BookingsDetailsComponent} from './component/admin/bookings/bookings-details/bookings-details.component';
import {UserListComponent} from './component/admin/user/user-list/user-list.component';
import {UserAddComponent} from "./component/admin/user/user-add/user-add.component";
>>>>>>> Stashed changes


const routes: Routes = [
  {path: 'index', component: FrontpageComponent},
<<<<<<< Updated upstream
  {path: 'equipment', component: EquipmentOverviewPageComponent},
  {path: 'equipment/:id', component: EquipmentRoomPageComponent},
  {path: 'admin-equipment', component: EquipmentAdminOverviewPageComponent, canActivate: [RoleGuard], data: {Role: 'Administrator'}},
  {path: '', redirectTo: 'index', pathMatch: 'full'}
=======
  {
    path: 'admin',
    component: AdminIndexComponent,
    children: [
      {
        path: '',
        component: OptionMenuComponent,
      },
      {
        path: 'equipment',
        component: EquipmentComponent,
      },
      {
        path: 'equipment/create',
        component: EquipmentAddComponent,
        /*canActivate: [RoleGuard],
        data: {Role: 'Administrator'}*/
      },
      {
        path: 'equipment/:id',
        component: EquipmentDetailsComponent,
        /*canActivate: [RoleGuard],
        data: {Role: 'Administrator'}*/
      },
      {
        path: 'category',
        component: CategoryComponent,
      },
      {
        path: 'category/create',
        component: CategoryAddComponent,
        canActivate: [RoleGuard],
        data: {Role: 'Administrator'}
      },
      {
        path: 'category/:id',
        component: CategoryDetailsComponent,
        canActivate: [RoleGuard],
        data: {Role: 'Administrator'}
      },
      {
        path: 'bookings',
        component: BookingsComponent,
      },
      {
        path: 'bookings/create',
        component: BookingsAddComponent,
        canActivate: [RoleGuard],
        data: {Role: 'Administrator'}
      },
      {
        path: 'bookings/:id',
        component: BookingsDetailsComponent,
        canActivate: [RoleGuard],
        data: {Role: 'Administrator'}
      },
      {
        path: 'user',
        component: UserListComponent,
        canActivate: [RoleGuard], data: {Role: 'Administrator'}
      },
      {
        path: 'user/create',
        component: UserAddComponent,
        data: {Role: 'Administrator'}
      }
    ]
  },
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
  {
    path: 'equipment',
    component: EquipmentOverviewPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'equipment/:id',
    component: EquipmentRoomPageComponent,
    canActivate: [AuthGuard]
  }
>>>>>>> Stashed changes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
