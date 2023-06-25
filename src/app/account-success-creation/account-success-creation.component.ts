import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-account-success-creation',
  templateUrl: './account-success-creation.component.html',
  styleUrls: ['./account-success-creation.component.css']
})
export class AccountSuccessCreationComponent implements OnInit {

  options: AnimationOptions = {
    path: '../../assets/99592.json',

  };

  constructor() { }

  ngOnInit(): void {
  }
  animationCreated(animationItem: AnimationItem): void {
    // console.log(animationItem);
  }
}
