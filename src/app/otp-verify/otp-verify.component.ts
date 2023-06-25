import { Component, OnInit } from '@angular/core';
import { NgxOtpInputConfig } from 'ngx-otp-input/public-api';
import { NgOtpInputComponent, NgOtpInputConfig } from 'ng-otp-input';
import { Router } from '@angular/router';
import { SaveDataService } from '../service/save-data.service';



@Component({
  selector: 'app-otp-verify',
  templateUrl: './otp-verify.component.html',
  styleUrls: ['./otp-verify.component.css']
})
export class OtpVerifyComponent implements OnInit {


  accountInfo: any
  businessInfo: any
  timeleft = 59;

  accountsInfo = []

  otpConfig: NgOtpInputConfig = {
    allowNumbersOnly: true,
    length: 4,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '',
    inputStyles: {
      'display': 'flex',
      'height': '48px',
      'width': '88px',
      'border': '1px solid #A59BE0',
      'margin-left': '6px',
      'font-size': '16px'
    },
    containerStyles: {
      'display': 'flex'
    },
    inputClass: 'each_input',
    containerClass: 'all_inputs'
  };


  constructor(private router: Router, private saveData: SaveDataService) { }

  ngOnInit(): void {

    this.countDown();

  }

  onOtpChange(value: any): void {
    if (value.length > 3) {
      this.accountInfo = localStorage.getItem('session')
      this.businessInfo = localStorage.getItem('session1')

      this.saveData.createAccount(this.accountInfo, this.businessInfo)
      this.router.navigate(['/accountCreation'])
    } else {
      return
    }
  }

  countDown() {
    var interval = setInterval(() => {
      if (this.timeleft > 0) {
        this.timeleft = --this.timeleft
      }
      else {
        this.timeleft = 59
      }
    }, 1000);
  }


}


