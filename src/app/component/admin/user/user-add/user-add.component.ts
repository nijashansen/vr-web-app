import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {UserInfoService} from '../../../../services/user-info.service';
import {Router} from '@angular/router';
import {Location} from "@angular/common";

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
              private router: Router, private location: Location) { }





  ngOnInit() {
  }

  get firstName() {
    return this.userForm.get('firstName');
  }

  get lastName() {
    return this.userForm.get('lasttName');
  }

  get email() {
    return this.userForm.get('email');
  }

  get address() {
    return this.userForm.get('address');
  }

  get phoneNumber() {
    return this.userForm.get('phoneNumber');
  }

  onCancel() {
    this.location.back();
  }

  createUser() {
    const user = this.userForm.value;
    this.userInfoService.createUser(user)
      .subscribe(() => {
        this.router.navigateByUrl('/admin/user');
      });

  }

}
