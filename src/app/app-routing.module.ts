import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FrontpageComponent} from './component/Shared/frontpage/frontpage.component';
import {EquipmentOverviewPageComponent} from './component/equipment/equipment-overview-page/equipment-overview-page.component';
import {EquipmentRoomPageComponent} from './component/equipment/equipment-room-page/equipment-room-page.component';
import {EquipmentAdminOverviewPageComponent} from './component/admin-page/equipment-admin-overview-page/equipment-admin-overview-page.component';
import {ProductListComponent} from './component/admin/product/product-list/product-list.component';
import {UserListComponent} from './component/admin-page/user/user-list/user-list.component';
import {ProductAddComponent} from './component/admin/product/product-add/product-add.component';
import {ProductUpdateComponent} from './component/admin-page/product/product-update/product-update.component';
import {AuthGuard} from './Guards/auth.guard';
import {RoleGuard} from './Guards/auth.guard.admin';
import {AdminIndexComponent} from './component/admin/admin-index/admin-index.component';
import {EquipmentComponent} from './component/admin/equipment/equipment.component';
import {OptionMenuComponent} from './component/admin/option-menu/option-menu.component';
import {ProductDetailsComponent} from "./component/admin/product/product-details/product-details.component";


const routes: Routes = [
  {path: 'index', component: FrontpageComponent},
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
        component: ProductAddComponent,
        canActivate: [RoleGuard],
        data: {Role: 'Administrator'}
      },
      {
        path: 'equipment/:id',
        component: ProductDetailsComponent,
        canActivate: [RoleGuard],
        data: {Role: 'Administrator'}
      }
    ]
  },
  {
    path: 'admin/equipment',
    component: ProductListComponent,
    outlet: 'admin-sidebar' /*canActivate: [RoleGuard], data: {Role: 'Administrator'}*/
  },
  {path: 'admin/user', component: UserListComponent, canActivate: [RoleGuard], data: {Role: 'Administrator'}},
  {path: 'admin', component: EquipmentAdminOverviewPageComponent, canActivate: [RoleGuard], data: {Role: 'Administrator'}},
  {path: '', redirectTo: 'index', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
