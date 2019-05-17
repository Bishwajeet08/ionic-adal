import { Injectable } from '@angular/core';
import { MSAdal, AuthenticationContext, AuthenticationResult } from '@ionic-native/ms-adal/ngx';
import { Http, Headers } from '@angular/http';
import { Configurations } from '../config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private msAdal: MSAdal, public http: Http) { }

  login() {
    return new Promise((resolve, reject) => {
      let authContext: AuthenticationContext = this.msAdal.createAuthenticationContext('https://login.microsoftonline.com/common');
      authContext.acquireTokenAsync(Configurations.GRAPH_RESOURCE, Configurations.CLIENT_ID, 'msal3343453-4153-ad89-50050cdfebd5://auth', '', '')
        .then((authResponse: AuthenticationResult) => {
          localStorage.setItem("AppaccessToken", authResponse.accessToken);
          resolve(authResponse.accessToken);
        })
        .catch((e: any) => reject(console.log('Authentication failed', e)));
    });
  }

  getUserProfile(accessToken) {

    return new Promise((resolve, reject) => {

      this.http.get("https://graph.microsoft.com/v1.0/me/", {
        headers: new Headers({ "Authorization": "Bearer " + accessToken })
      })
        .subscribe(res => {
          if (res.status === 200) {
            resolve(res.json());
          }
        }), (err) => {
          reject(err);
        }
    });
  }

  getRefreshedToken() {
    return new Promise((resolve, reject) => {
      let authContext: AuthenticationContext = this.msAdal.createAuthenticationContext('https://login.microsoftonline.com/common');
      authContext.acquireTokenSilentAsync(Configurations.GRAPH_RESOURCE, Configurations.CLIENT_ID, '')
        .then((authResponse: AuthenticationResult) => {
          localStorage.setItem("AppaccessToken", authResponse.accessToken);
          resolve(authResponse.accessToken);
        })
        .catch((e: any) => reject(console.log('Authentication failed', e)));
    });
  }

}
