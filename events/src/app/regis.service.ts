import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Loginuser} from './loginuser';
 import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class RegisService {

  _url='http://localhost:3000/register'; 
  urllogin='http://localhost:3000/login';
  constructor(private _http: HttpClient) { }
  register(userData: User)
  {
    return this._http.post<any>(this._url, userData);
  }
  userlogin(logindata: Loginuser)
  {
    return this._http.post<any>(this.urllogin, logindata);
  }
}
