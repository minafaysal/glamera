import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccountInfo, BusinessInfo } from '../RegistrationInfo'




const httpOptions = {

  headers: new HttpHeaders({

    'Content-Type': 'application/json'

  })
}
@Injectable({
  providedIn: 'root'
})
export class SaveDataService {

  private apiUrl = 'http://localhost:5000/accountsInfo'

  constructor(private http: HttpClient) { }

  createAccount(accountInfo: AccountInfo, businessInfo: BusinessInfo) {
    const account = {
      accountInfo: accountInfo,
      businessInfo: businessInfo
    }
    console.log("account", account)
    return this.http.post<any>(this.apiUrl, account, httpOptions);
  }
}
