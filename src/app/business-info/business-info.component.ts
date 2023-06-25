import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-business-info',
  templateUrl: './business-info.component.html',
  styleUrls: ['./business-info.component.css']
})
export class BusinessInfoComponent implements OnInit {


  defaultOrders = [
    { name: 'facebook', icon: 'facebook.png' },
    { name: 'twitter', icon: 'facebook.png' },
    { name: 'friends', icon: 'facebook.png' }
  ];
  Governorates = [
    "Ad Daqahliyah", "Al Bahr al Ahmar", "Al Buhayrah", "Al Fayyum", "Al Gharbiyah", "Al Iskandariyah", "Al Isma'iliyah", "Al Jizah", "Al Minufiyah", "Al Minya", "Al Qahirah", "Al Qalyubiyah", "Al Wadi al Jadid", "Ash Sharqiyah", "As Suways", "Aswan", "Asyut", "Bani Suwayf", "Bur Sa'id", "Dumyat", "Janub Sina'", "Kafr ash Shaykh", "Matruh", "Qina", "Shamal Sina'", "Suhaj"
  ]
  Districts = [
    "Ad Daqahliyah", "Al Bahr al Ahmar", "Al Buhayrah", "Al Fayyum", "Al Gharbiyah", "Al Iskandariyah", "Al Isma'iliyah", "Al Jizah", "Al Minufiyah", "Al Minya", "Al Qahirah", "Al Qalyubiyah", "Al Wadi al Jadid", "Ash Sharqiyah", "As Suways", "Aswan", "Asyut", "Bani Suwayf", "Bur Sa'id", "Dumyat", "Janub Sina'", "Kafr ash Shaykh", "Matruh", "Qina", "Shamal Sina'", "Suhaj"
  ]


  constructor(private fb: FormBuilder, private router: Router) { }

  bussinessInfForm = this.fb.group({
    businessType: ["", [Validators.required, Validators.minLength(4), Validators.pattern(/^[A-Za-z]+$/)]],
    businessType2: [""],
    Governorate: ["", [Validators.required]],
    District: ["", [Validators.required]],
    knewUs: ['', [Validators.required]],
    systemUsing: [""],

  })

  ngOnInit(): void {

  }

  get businessType() {
    return this.bussinessInfForm.get('businessType')
  };
  get businessType2() {
    return this.bussinessInfForm.get('businessType2')
  };
  get Governorate() {
    return this.bussinessInfForm.get('Governorate')
  };

  get District() {
    return this.bussinessInfForm.get('District')
  };
  get knewUs() {
    return this.bussinessInfForm.get('knewUs')
  };



  submiteForm() {
    if (!this.bussinessInfForm.invalid) {
      let Data = this.bussinessInfForm.value;
      localStorage.setItem('session1', JSON.stringify(Data))
      this.router.navigate(['/otpVerify'])
    } else {
      alert("you must fill all the Input field correctly ")

    }
  }

}
