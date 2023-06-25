import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { NgxOtpInputModule } from 'ngx-otp-input'
import { FormsModule } from '@angular/forms';
import { NgOtpInputModule } from 'ng-otp-input';
import { AppRoutingModule } from './app-routing.module';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';


import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { BusinessInfoComponent } from './business-info/business-info.component';
import { OtpVerifyComponent } from './otp-verify/otp-verify.component';
import { AccountSuccessCreationComponent } from './account-success-creation/account-success-creation.component';
import { NotFoundComponent } from './not-found/not-found.component';


export function playerFactory() {
  return import('lottie-web');
}
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    BusinessInfoComponent,
    OtpVerifyComponent,
    AccountSuccessCreationComponent,
    NotFoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxOtpInputModule,
    FormsModule,
    NgOtpInputModule,
    LottieModule.forRoot({ player: playerFactory })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
