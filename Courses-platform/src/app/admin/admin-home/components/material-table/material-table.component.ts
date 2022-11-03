import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { IUser } from 'src/app/core/models/user.interface';
import { UsersService } from 'src/app/core/services/users.service';
import { MaterialTableDataSource } from './material-table-datasource';

@Component({
  selector: 'app-material-table',
  templateUrl: './material-table.component.html',
  styleUrls: ['./material-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<IUser>;
  dataSource!: MaterialTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['username', 'email'];
  data: IUser[] = [];

  constructor(private usersService: UsersService, private ref: ChangeDetectorRef) {
    
  }

  ngOnInit(){
    this.dataSource = new MaterialTableDataSource(this.usersService);
    this.dataSource.getUsersData();
  }
  ngAfterViewInit(): void {
    // this.ref.detectChanges()
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  
}
