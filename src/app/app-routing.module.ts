import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FrontpageComponent} from './component/Shared/frontpage/frontpage.component';
import {EquipmentOverviewPageComponent} from './component/equipment/equipment-overview-page/equipment-overview-page.component';
import {EquipmentRoomPageComponent} from './component/equipment/equipment-room-page/equipment-room-page.component';
import {EquipmentAdminOverviewPageComponent} from "./component/admin-page/equipment-admin-overview-page/equipment-admin-overview-page.component";
import {AuthGuard} from './Guards/auth.guard';


const routes: Routes = [
  {path: 'index', component: FrontpageComponent},
  {path: 'equipment', component: EquipmentOverviewPageComponent},
  {path: 'equipment/:id', component: EquipmentRoomPageComponent},
  {path: 'admin-equipment', component: EquipmentAdminOverviewPageComponent, canActivate: [AuthGuard]},
  {path: '', redirectTo: 'index', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
