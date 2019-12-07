import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FrontpageComponent} from './component/Shared/frontpage/frontpage.component';
import {EquipmentOverviewPageComponent} from './component/equipment/equipment-overview-page/equipment-overview-page.component';
import {EquipmentRoomPageComponent} from './component/equipment/equipment-room-page/equipment-room-page.component';
import {EquipmentAdminOverviewPageComponent} from './component/admin-page/equipment-admin-overview-page/equipment-admin-overview-page.component';
import {ProductListComponent} from './component/admin-page/product/product-list/product-list.component';
import {UserListComponent} from './component/admin-page/user/user-list/user-list.component';
import {CategoryListComponent} from './component/admin-page/category/category-list/category-list.component';
import {ProductAddComponent} from './component/admin-page/product/product-add/product-add.component';
import {ProductUpdateComponent} from './component/admin-page/product/product-update/product-update.component';
import {AuthGuard} from './Guards/auth.guard';


const routes: Routes = [
  {path: 'index', component: FrontpageComponent},
  {path: 'equipment', component: EquipmentOverviewPageComponent},
  {path: 'equipment/:id', component: EquipmentRoomPageComponent},
  {path: 'admin/equipment', component: ProductListComponent},
  {path: 'admin/equipment/create', component: ProductAddComponent},
  {path: 'admin/equipment/update/:id', component: ProductUpdateComponent},
  {path: 'admin/user', component: UserListComponent},
  {path: 'admin/category', component: CategoryListComponent},
  {path: 'admin', component: EquipmentAdminOverviewPageComponent/*, canActivate: [AuthGuard]*/},
  {path: '', redirectTo: 'index', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
