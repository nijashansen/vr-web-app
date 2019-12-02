import { Component, OnInit } from '@angular/core';
import {AdminPageServiceService} from "../../../services/admin-page-service.service";

@Component({
  selector: 'app-equipment-admin-overview-page',
  templateUrl: './equipment-admin-overview-page.component.html',
  styleUrls: ['./equipment-admin-overview-page.component.scss']
})
export class EquipmentAdminOverviewPageComponent implements OnInit {

  constructor(productService: AdminPageServiceService) { }

  ngOnInit() {
  }

}
