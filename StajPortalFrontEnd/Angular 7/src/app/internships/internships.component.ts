import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-internships',
  templateUrl: './internships.component.html',
  styles: []
})
export class InternshipsComponent implements OnInit {

  constructor(private router: Router,private service: UserService) { }

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
