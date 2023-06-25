import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { BusinessInfoComponent } from './business-info/business-info.component';
import { OtpVerifyComponent } from './otp-verify/otp-verify.component';
import { AccountSuccessCreationComponent } from './account-success-creation/account-success-creation.component';
import { NotFoundComponent } from './not-found/not-found.component';



const routes: Routes = [

  { path: '', component: RegistrationComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'businessInfo', component: BusinessInfoComponent },
  { path: 'otpVerify', component: OtpVerifyComponent },
  { path: 'accountCreation', component: AccountSuccessCreationComponent },
  { path: '**', component: NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
