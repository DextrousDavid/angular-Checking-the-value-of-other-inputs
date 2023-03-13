import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'thursday-exercise';
  newForm!: FormGroup;
  chargeUsd!: number;
  message: string = '';
  minimumCharge!: number;
  maximumCharge!: number;

  constructor() {}

  newFormInterface() {
    this.newForm = new FormGroup({
      chargeUsd: new FormControl(null, [
        Validators.required,
        Validators.pattern('[0-9]*'),
      ]),
      minimumCharge: new FormControl(null, [
        Validators.required,
        Validators.pattern('[0-9]*'),
      ]),
      maximumCharge: new FormControl(null, [
        Validators.required,
        Validators.pattern('[0-9]*'),
      ]),
    });
  }

  submitNewForm() {
    if (this.newForm.valid) {
      console.log('formValues>>', this.newForm.value);
    }
  }

  // Check chargeUsd input
  checkChargeUsd(inputValue: number) {
    this.chargeUsd = inputValue;
    if (this.chargeUsd < this.minimumCharge) {
      this.message = '*Charge Usd SHOULD BE MORE than minimum charge!';
    } else if (this.chargeUsd > this.maximumCharge) {
      this.message = '*Charge Usd SHOULD BE LESS than maximum charge!';
    } else {
      this.message = '';
    }
  }

  // Check Minimum charge input
  checkMinimumCharge(inputValue: number) {
    this.minimumCharge = inputValue;

    if (
      this.minimumCharge > this.maximumCharge &&
      this.minimumCharge > this.chargeUsd
    ) {
      this.message =
        '*Minimum price SHOULD be LESS than Charge and Maximum Charge!';
    } else if (this.minimumCharge >= this.maximumCharge) {
      this.message = '*Minimum price SHOULD be LESS than Maximum Charge!';
    } else if (this.minimumCharge >= this.chargeUsd) {
      this.message = '*Minimum price SHOULD be LESS than Charge USD!';
    } else {
      this.message = '';
    }
  }

  // Check Maximum Charge input
  checkMaximumCharge(inputValue: number) {
    this.maximumCharge = inputValue;

    if (
      this.maximumCharge < this.minimumCharge &&
      this.maximumCharge < this.chargeUsd
    ) {
      this.message =
        '*Maximum price SHOULD BE more than Charge and Minimum Charge!';
    } else if (this.maximumCharge <= this.minimumCharge) {
      this.message = '*Maximum price SHOULD BE more than Minimum Charge!';
    } else if (this.maximumCharge <= this.chargeUsd) {
      this.message = '*Maximum price SHOULD BE more than Charge USD!!';
    } else {
      this.message = '';
    }
  }

  ngOnInit(): void {
    this.newFormInterface();
  }
}
