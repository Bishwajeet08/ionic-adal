import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MSAdal, AuthenticationContext, AuthenticationResult } from '@ionic-native/ms-adal/ngx';
import { AuthService } from '../providers/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  responseData: any[];
  accessToken: any;
  test: any;
  hasNoData: boolean = false;

  constructor(public authService: AuthService, private router: Router, private msAdal: MSAdal) {
    this.accessToken = localStorage.AppaccessToken;
    console.log(localStorage.AppaccessToken);

    this.authService.getUserProfile(this.accessToken).then((result) => {
      this.test = result;
      this.responseData = [result];
    }).catch((err) => { console.log(err); });

  }

  // logout() {
  //   localStorage.clear();
  //   let authContext: AuthenticationContext = this.msAdal.createAuthenticationContext('https://login.microsoftonline.com/common');
  //   authContext.tokenCache.clear();
  //   this.router.navigate(['/login']);
  // }

  logout(){
    localStorage.clear();
    let authContext: AuthenticationContext = this.msAdal.createAuthenticationContext('https://login.microsoftonline.com/common');
    authContext.tokenCache.clear();
    this.router.navigate(['/login']);
  }

}
