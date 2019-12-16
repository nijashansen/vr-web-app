import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {UserInfoService} from '../../../../services/User/user-info.service';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../../../models/User';

@Component({
  selector: 'app-user-update.component',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})
export class UserUpdateComponent implements OnInit {
  id: number;
  user: User;
  userForm: FormGroup;
  editBool: boolean;


  constructor(private userInfoService: UserInfoService, private route: ActivatedRoute) { }

  get formFirstName() {
    return this.userForm.get('firstName');
  }

  get formLastName() {
    return this.userForm.get('lastName');
  }

  get formEmail() {
    return this.userForm.get('email');
  }

  get formAddress() {
    return this.userForm.get('address');
  }

  get formPhoneNumber() {
    return this.userForm.get('phoneNumber');
  }

  ngOnInit() {
    this.editBool = false;
    this.id = +this.route.snapshot.paramMap.get('id');
    this.fetchData(this.id);
  }

  fetchData(id: number) {
    this.userInfoService.getUser(this.id)
      .subscribe(userFromId => {
      this.user = userFromId;
      this.userForm = new FormGroup({
        id: new FormControl(this.user.id),
        firstName: new FormControl( this.user.firstName),
        lastName: new FormControl(this.user.lastName),
        email: new FormControl(this.user.email),
        phoneNumber: new FormControl(this.user.phoneNumber),
        address: new  FormControl(this.user.address)
      });
      this.userForm.disable();
    });
  }

  onEdit() {
    this.editBool = !this.editBool;
    this.userForm.enable();
  }

  onCommit() {
    this.userInfoService.updateUser({
      id: this.user.id,
      firstName: this.formFirstName.value,
      lastName: this.formLastName.value,
      phoneNumber: this.formPhoneNumber.value,
      email: this.formEmail.value,
      address: this.formAddress.value
    }).subscribe(() => this.fetchData(this.id));
    console.log('æskjhb');
    this.userForm.disable();
  }




  onCancel() {
    this.userForm.disable();
  }


}
