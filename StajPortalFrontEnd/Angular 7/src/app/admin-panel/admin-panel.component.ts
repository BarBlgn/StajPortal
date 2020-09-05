import { UserService } from './../shared/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styles: []
})
export class AdminPanelComponent implements OnInit {
  userDetails;
  constructor(private router: Router,private service:UserService) { }

  ngOnInit() {
    this.service.getUserProfile().subscribe(
      res => {
        this.userDetails = res;
      },
      err => {
        console.log(err);
      },
    );
  }

  onLogout(){
    localStorage.removeItem('token');
    this.router.navigate(['/user/login']);
  }
  //deneme--------------
  onInternshipAdmin(){
    this.router.navigate(['/internshipsadmin']);
 }
 onInternship(){
  this.router.navigate(['/internships']);
}
  //deneme son----------------------------
 onInterviewAdmin(){
  this.router.navigate(['/interviewsadmin']);
}
onInterview(){
  this.router.navigate(['/interviews']);
}
onAdminPanel(){
  this.router.navigate(['/adminpanel']);
}
onHomePage(){
  this.router.navigate(['/home']);
}
 

}
