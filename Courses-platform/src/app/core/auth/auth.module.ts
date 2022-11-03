import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthGuard } from './guards/auth.guard';
import { JwtModule } from '@auth0/angular-jwt';
import { DecodedTokenPipe } from './pipes/decoded-token.pipe';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

export function tokenGetter() {
  return localStorage.getItem("UserToken");
}

@NgModule({
  declarations: [
    LoginPageComponent,
    DecodedTokenPipe,
    NotFoundPageComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["https://localhost:7188"],
        // disallowedRoutes: ["http://localhost:7188/"],
      },
    })
  ],
  providers: [
    AuthGuard,
    DecodedTokenPipe
  ]
})
export class AuthModule { }
