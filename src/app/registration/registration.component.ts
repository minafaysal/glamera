import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faLongArrowAltRight, faCoffee, faTrash } from '@fortawesome/free-solid-svg-icons'
import * as intlTelINput from 'ngx-intl-tel-input'


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  hide: boolean = true;

  constructor(private fb: FormBuilder, private router: Router) { }

  registrationForm = this.fb.group({
    firstName: ["", [Validators.required, Validators.minLength(3), Validators.pattern(/^[A-Za-z]+$/)]],
    lastName: ["", [Validators.required, Validators.minLength(3), Validators.pattern(/^[A-Za-z]+$/)]],
    email: ["", [Validators.required, Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$")]],
    phone: ["", [Validators.required, Validators.minLength(7), Validators.maxLength(12), Validators.pattern("^[0-9]*$")]],
    password: ["", [Validators.required, Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$")]],
    checkbox: [false]

  })

  ngOnInit(): void {

  }
  get firstName() {
    return this.registrationForm.get('firstName')
  };

  get lastName() {
    return this.registrationForm.get('lastName')
  };

  get email() {
    return this.registrationForm.get('email')
  };
  get phone() {
    return this.registrationForm.get('phone')
  };
  get password() {
    return this.registrationForm.get('password')
  };




  submiteForm() {

    let checkedValue = this.registrationForm.value.checkbox

    if (checkedValue) {
      if (this.registrationForm.invalid) {
        let Data = this.registrationForm.value;
        localStorage.setItem('session', JSON.stringify(Data))
        this.router.navigate(['/businessInfo'])
      } else {

        alert("you must fill all the Input field correctly ")
      }

    } else {
      alert("you must Agree to the Privacy Policy Terms & Conditions firstly")
      return
    }
  }

  toggleShow() {
    this.hide = !this.hide;

  }
}




