import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';
import { IUser, UserRole } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  user: IUser | undefined;

  constructor(private httpClient: HttpClient, private authService: AuthService) { }
  
  getUsers(): Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.set("Authorization", `bearer ${this.authService.userToken.token}`);
    return this.httpClient.get("https://localhost:7118/api/Users", { headers }) as Observable<any>;
  }

}
