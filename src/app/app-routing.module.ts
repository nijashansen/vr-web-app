import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FrontpageComponent} from './component/Shared/frontpage/frontpage.component';
import {EquipmentOverviewPageComponent} from './component/equipment/equipment-overview-page/equipment-overview-page.component';
import {EquipmentRoomPageComponent} from './component/equipment/equipment-room-page/equipment-room-page.component';
import {EquipmentAdminOverviewPageComponent} from "./component/admin-page/equipment-admin-overview-page/equipment-admin-overview-page.component";
import {ProductListComponent} from "./component/admin-page/product/product-list/product-list.component";
import {UserListComponent} from "./component/admin-page/user/user-list/user-list.component";
import {CategoryListComponent} from "./component/admin-page/category/category-list/category-list.component";
import {ProductAddComponent} from "./component/admin-page/product/product-add/product-add.component";


const routes: Routes = [
  {path: 'index', component: FrontpageComponent},
  {path: 'equipment', component: EquipmentOverviewPageComponent},
  {path: 'equipment/:id', component: EquipmentRoomPageComponent},
  {path: 'admin-operations-overview', component: EquipmentAdminOverviewPageComponent},
  {path: 'admin-equipment-list', component: ProductListComponent},
  {path: 'admin-equipment-add', component: ProductAddComponent},
  {path: 'admin-user-list', component: UserListComponent},
  {path: 'admin-category-list', component: CategoryListComponent},
  {path: '', redirectTo: 'index', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
