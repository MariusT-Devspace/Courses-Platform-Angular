import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth/services/auth.service';
import { IUser, UserRole } from 'src/app/core/models/user.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {

  user: IUser | undefined;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    console.log("Role: " + JSON.stringify(this.authService.decodedToken.claims.role));  }

}
