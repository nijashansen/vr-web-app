import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Booking} from '../../models/Booking';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-booking-dialog',
  templateUrl: './booking-dialog.component.html',
  styleUrls: ['./booking-dialog.component.scss']
})
export class BookingDialogComponent implements OnInit {
  startTime: number;
  endTime: number;
  registerForm: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<BookingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Booking, private formBuilder: FormBuilder) {

  }

  onNoClick(): void {
    this.data.start = this.startTime - 12;
    this.data.end = this.endTime - 12;
    this.dialogRef.close(this.data);
  }

  public ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      title: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
    });
    this.startTime = this.data.start;
    this.endTime = this.data.start + 1;
  }

}
