import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomePageComponent } from '../admin/admin-home/components/admin-home-page/admin-home-page.component';
import { HomePageComponent } from '../user/home/components/home-page/home-page.component';
import { LoginPageComponent } from './auth/components/login-page/login-page.component';
import { NotFoundPageComponent } from './auth/components/not-found-page/not-found-page.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { RoleGuard } from './auth/guards/role.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomePageComponent,
    canActivate: [ AuthGuard, RoleGuard ],
    data: {
      expectedRole: 'User'
    }
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'admin',
    component: AdminHomePageComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: {
      expectedRole: 'Administrator'
    }
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
