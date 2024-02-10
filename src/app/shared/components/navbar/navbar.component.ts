import { Component } from '@angular/core';
import { LogoutComponent } from '../logout/logout.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  userName: string|null = localStorage.getItem('userName');
  role: string|null = localStorage.getItem('role')
  constructor(public dialog: MatDialog){}

  openLogoutDialog(): void{
    const dialogRef = this.dialog.open(LogoutComponent, {
      data: {},
      width: '35%',
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if(result){

      }
    });
  }

}
