import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-interviews-admin',
  templateUrl: './interviews-admin.component.html',
  styles: []
})
export class InterviewsAdminComponent implements OnInit {

  constructor(private router: Router,private service:UserService) { }

  ngOnInit() {
  }
  onLogout(){
    localStorage.removeItem('token');
    this.router.navigate(['/user/login']);
  }
  //deneme--------------
  onInternship(){
    this.router.navigate(['/internships']);
 }
  //deneme son----------------------------
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
