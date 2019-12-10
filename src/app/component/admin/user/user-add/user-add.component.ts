import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {UserInfoService} from '../../../../services/user-info.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {

    userForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
    phoneNumber: new FormControl('')
  });

  constructor(private userInfoService: UserInfoService,
              private router: Router) { }

  ngOnInit() {
  }

  createUser() {
    const user = this.userForm.value;
    this.userInfoService.createUser(user)
      .subscribe(() => {
        this.router.navigateByUrl('/admin/equipment');
      });

  }

}
