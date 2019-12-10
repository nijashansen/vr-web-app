import {Component, OnInit} from '@angular/core';
import {User} from '../../../../models/User';
import {UserInfoService} from '../../../../services/user-info.service';
import {take} from 'rxjs/operators';

import {FilterPageUserList} from '../../../../models/FilterPageUserList';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: User[];
  currentPage: FilterPageUserList;
  pageSize: number;
  pageIndex: number;
  length: number;
  pageSizes: number[];


  constructor(private userService: UserInfoService, private router: Router) {
    this.pageSizes = [6, 12, 18];
    this.pageIndex = 0;
    this.pageSize = this.pageSizes[1];
  }

  ngOnInit() {
    this.loadPage(this.pageIndex, this.pageSize);
  }

  refresh() {
    this.userService.getUsers().pipe(take(1))
      .subscribe(listeOfUsers =>
        this.users = listeOfUsers);
  }

  delete(id: number) {
    this.userService.deleteUser(id).subscribe(() => {
      this.loadPage(this.pageIndex, this.pageSize);
  });
  }

  onNavigate(id: number) {
    this.router.navigate(['admin/user/' + id]);
  }

  private loadPage(pageIndex: number, pageSize: number) {

    this.userService.getUsersWithFilterPage({
      pageIndex,
      itemsPrPage: pageSize}).subscribe(result => {
      console.log(result);
      this.currentPage = result;
      this.pageSize = result.itemsPrPage;
      this.pageIndex = result.pageIndex;
      this.length = result.itemsTotal;
    });
  }


  onPageDataChange($event) {
    this.loadPage($event.pageIndex, $event.pageSize);
  }
}
