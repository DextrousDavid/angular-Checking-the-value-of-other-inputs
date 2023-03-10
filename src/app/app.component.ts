import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'thursday-exercise';
  newForm!: FormGroup;
  chargeUsd!: number;
  message: string = '';
  minimumCharge!: number;
  maximumCharge!: number;

  constructor(private toastr: ToastrService) {}

  newFormInterface() {
    this.newForm = new FormGroup({
      chargeUsd: new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]),
      minimumCharge: new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]),
      maximumCharge: new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]),
    })
  }

  submitNewForm() {
    console.log('New form values>>', this.newForm.value.message);
  }
  
  // Check Minimum charge input
  checkMinimumCharge(inputValue: number) {
    this.minimumCharge = inputValue;

    if(inputValue > this.chargeUsd || inputValue > this.maximumCharge ) {
      // this.message = 'Hi, Minimum price SHOULD NOT be more than the CHARGE or MAXIMUM CHARGE!'
      // this.toastr.warning('Hi, Minimum price SHOULD NOT be more than the CHARGE or MAXIMUM CHARGE!');
      console.log('Hi, Minimum price SHOULD NOT be more than the CHARGE or MAXIMUM CHARGE!');
    } else {
      console.log('Minimum charge looks great!')
    }
  }


  // Check Maximum Charge
  checkMaximumCharge(inputValue: number) {
    this.maximumCharge = inputValue;

    if(inputValue < this.chargeUsd || inputValue < this.minimumCharge) {
      // this.message = 'Hello, Maximum Charge SHOULD BE more than the CHARGE and MINIMUM CHARGE!!'
      // this.toastr.warning('Hello, Maximum Charge SHOULD BE more than the CHARGE and MINIMUM CHARGE!!');
      console.log('Hello, Maximum Charge SHOULD BE more than the CHARGE and MINIMUM CHARGE!!');
    } else {
      this.toastr.success('Nice One!');
      console.log('Maximum charge looks great!')
    }
  }

  ngOnInit(): void {
    this.newFormInterface();
  }
}
