import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ILogin } from '../../models/login.interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass']
})
export class LoginPageComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({});
  loginValues: ILogin | undefined;

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    
    if (this.authService.isLoggedIn){
      this.router.navigate(['']);
    }

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });    

    this.loginForm.valueChanges.subscribe({});
    

    if (sessionStorage.getItem("token")){
      console.log("You're logged in.");
    }else{
      console.log("Authentication denied!");
    }
  }

  get username(){
    return this.loginForm.get("username");
  }

  get password(){
    return this.loginForm.get("password");
  }

  login(){
    this.authService.login(this.username?.getRawValue(), this.password?.getRawValue()).subscribe({
      next: (response) => sessionStorage.setItem("UserToken", JSON.stringify(response)),
      error: (err: Error) => console.error("Could not log in: " + err.message),
      complete: () => this.authService.goToHome()
    });
  }

  
}


