import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
// import { AuthService } from 'src/app/core/auth/services/auth.service';

interface IMenu {
  title: string,
  icon: string,
  link: string,
  // isActive: Boolean
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent {
  @Output() isOpenedValue = new EventEmitter<boolean>();
  isOpened:boolean =true;
  isMaxHeight:boolean=true;
  is100vHeight:boolean=false;

  constructor(
    // private _AuthService: AuthService, 
    private router: Router,
    // private toastr: ToastrService, 
    public dialog: MatDialog) { }


  // isManager(): boolean {
  //   return this._AuthService.role == 'Manager' ? true : false;
  // }
  // isEmployee(): boolean {
  //   return this._AuthService.role == 'Employee' ? true : false;
  // }
  // ngOnInit() {
  //   if (this.isManager()) {
  //     this.router.navigate(['/dashboard/manager/home'])
  //   }
  //   else if (this.isEmployee()) {
  //     this.router.navigate(['/dashboard/employee/home'])
  //   }
  // }

 menu:IMenu[]=[
   {
     title: 'Dashboard',
     icon: 'Dashboard-icon.svg',
     link: '/dashboard/instructor/dashboared-instruct',
    //  isActive: this.isManager()
   },

   {
     title: 'Groups',
     icon: 'Students-icon.svg',
     link: '/dashboard/instructor/groups',
    //  isActive: this.isManager()
   },
   {
     title: 'Quizzes',
     icon: 'Quiz-icon.svg',
     link: '/dashboard/instructor/quizzes',
    //  isActive: this.isManager()
   },
   {
     title: 'Results',
     icon: 'Results-icon.svg',
     link: '/dashboard/instructor/results',
    //  isActive: this.isManager()
   },
   {
    title: 'Students',
    icon: 'Students-icon.svg',
    link: '/dashboard/instructor/students',
   //  isActive: this.isManager()
  },
  // {
  //   title: 'Questions',
  //   icon: 'Question-icon.svg',
  //   link: '/dashboard/instructor/questions',
  //  //  isActive: this.isManager()
  // },
  //  {
  //   title: 'Home',
  //   icon: 'fa-solid fa-house',
  //   link: '/dashboard/employee/home',
  //   // isActive: this.isEmployee()
  // },
  // {
  //   title: 'Projects',
  //   icon: 'fa-solid fa-diagram-project',
  //   link: '/dashboard/employee/projects',
  //   // isActive: this.isEmployee()
  // },
  // {
  //   title: 'Tasks',
  //   icon: 'fa-solid fa-list-check',
  //   link: '/dashboard/employee/tasks',
  //   // isActive: this.isEmployee()
  // }
  
 ]
 onClicked() {
  this.isOpened = !this.isOpened;
  this.isOpenedValue.emit(this.isOpened);
  console.log(this.isOpened)
}
@HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = window.scrollY;
    this.isMaxHeight = offset < 64;
    this.is100vHeight= offset > 64;
  }
}
