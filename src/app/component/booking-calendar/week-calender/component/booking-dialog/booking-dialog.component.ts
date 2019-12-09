import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {BehaviorSubject, Observable} from 'rxjs';

@Component({
  selector: 'app-booking-dialog',
  templateUrl: './booking-dialog.component.html',
  styleUrls: ['./booking-dialog.component.scss']
})
export class BookingDialogComponent implements OnInit {
  /*userControl: FormControl;
  startControl: FormControl;
  productControl: FormControl;
  endControl: FormControl;
  registerForm: FormArray;*/
  start: number;
  end: number;
  hours: number[];
  private startErrorBehave: BehaviorSubject<boolean>;
  private startErrorObv: Observable<boolean>;
  private endErrorBehave: BehaviorSubject<boolean>;
  private endErrorObv: Observable<boolean>;
  private bookingForm: FormGroup;


  constructor(
    public dialogRef: MatDialogRef<BookingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder) {

  }

  onNoClick(): void {
  }

  public ngOnInit(): void {


    this.startErrorBehave = new BehaviorSubject<boolean>(false);
    this.startErrorObv = this.startErrorBehave.asObservable();

    this.endErrorBehave = new BehaviorSubject<boolean>(false);
    this.endErrorObv = this.endErrorBehave.asObservable();

    this.start = this.data.startTimeOfBooking.getHours();
    const user = this.data.user;
    const product = this.data.product;
    this.end = this.data.startTimeOfBooking.getHours() + 1;

    this.hours = this.data.hours;


    this.bookingForm = new FormGroup({
      user: new FormControl(user, Validators.required),
      product: new FormControl(product, Validators.required),
      startTimeOfBooking: new FormControl(this.start, Validators.required),
      endTimeOfBooking: new FormControl(this.end, Validators.required)
    });
    this.startTimeOfBooking.setValidators([Validators.required, Validators.max(this.endTimeOfBooking.value)]);
    this.endTimeOfBooking.setValidators([Validators.required, Validators.min(this.startTimeOfBooking.value)]);
  }

  get startTimeOfBooking() { return this.bookingForm.get('startTimeOfBooking'); }

  get endTimeOfBooking() { return this.bookingForm.get('endTimeOfBooking'); }

  onBookClick() {
    if (this.bookingForm.valid) {
      this.dialogRef.close(this.bookingForm.value );
    }
  }

  onValueChange() {
    this.startTimeOfBooking.updateValueAndValidity();
    this.endTimeOfBooking.updateValueAndValidity();
    this.startErrorBehave.next(this.startTimeOfBooking.valid);
    this.endErrorBehave.next(this.endTimeOfBooking.valid);
  }


}
function validateTime(start: number, end: number) {
  return start !== end;
}
