import { HttpClient } from '@angular/common/http';
import { Injectable, Optional, SkipSelf } from '@angular/core';
import { ILogin } from '../models/login.interface';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { IUserToken } from '../models/user-token.interface';
import { DecodedTokenPipe } from '../pipes/decoded-token.pipe';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router, private jwtHelper: JwtHelperService, private decodedTokenPipe: DecodedTokenPipe) { }
  

  login(username: string, password: string): Observable<IUserToken>{
    let body: ILogin = {
      username: username,
      password: password
    }
      return this.http.post('https://localhost:7118/api/Account/GetToken', body) as Observable<IUserToken>;
  }

  get userToken(): any {
    return JSON.parse(sessionStorage.getItem("UserToken")!);
  }

  get isLoggedIn(): boolean {
    if (this.userToken){
      return true;
    }else{
      return false;
    }
  }

  get decodedToken(): any {
    return this.decodedTokenPipe.transform(this.jwtHelper.decodeToken(this.userToken.token));
  }

  goToHome(){
    console.log("Role: " + JSON.stringify(this.decodedToken.claims.role));
    if (this.isLoggedIn){
      if (this.decodedToken.claims.role === 'Administrator')
        this.router.navigate(['/admin']);
      else
        this.router.navigate(['']);
    }
      
  }

}
