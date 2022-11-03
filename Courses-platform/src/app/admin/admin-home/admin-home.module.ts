import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminHomeRoutingModule } from './admin-home-routing.module';
import { AdminHomePageComponent } from './components/admin-home-page/admin-home-page.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { MaterialTableComponent } from './components/material-table/material-table.component';


@NgModule({
  declarations: [
    AdminHomePageComponent,
    AdminDashboardComponent,
    MaterialTableComponent
  ],
  imports: [
    CommonModule,
    AdminHomeRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class AdminHomeModule { }
