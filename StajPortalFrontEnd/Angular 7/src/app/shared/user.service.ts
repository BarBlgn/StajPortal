import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Internship } from './internship.model';
import {Interview} from './interview.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private fb: FormBuilder, private http: HttpClient) { }

  //deneme
  private UserRole    = new BehaviorSubject<string>(localStorage.getItem('userRole'));
  //denemeson
  readonly BaseURI = 'http://localhost:55146/api';
  formInt:Internship ={
    InternshipId:null,
    CompanyName: null,
    Address: null,
    Field:null,
    Salary:null,
    Explanation:null,
    HowApplied:null
  };
  list: Internship[];

  formInterview:Interview ={
    InterviewId:null,
    Questions:null,
    Answers:null,
    Explanation:null
  };
  listTwo: Interview[];


  formModel = this.fb.group({
    UserName: ['', Validators.required],
    Email: ['', Validators.email],
    FullName: [''],
    School:[''],
    Passwords: this.fb.group({
      Password: ['', [Validators.required, Validators.minLength(4)]],
      ConfirmPassword: ['', Validators.required]
    }, { validator: this.comparePasswords })

  });

  comparePasswords(fb: FormGroup) {
    let confirmPswrdCtrl = fb.get('ConfirmPassword');
    //passwordMismatch
    //confirmPswrdCtrl.errors={passwordMismatch:true}
    if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
      if (fb.get('Password').value != confirmPswrdCtrl.value)
        confirmPswrdCtrl.setErrors({ passwordMismatch: true });
      else
        confirmPswrdCtrl.setErrors(null);
    }
  }

  register() {
    var body = {
      UserName: this.formModel.value.UserName,
      Email: this.formModel.value.Email,                              
      FullName: this.formModel.value.FullName,
      School:this.formModel.value.School,
      Password: this.formModel.value.Passwords.Password
    };
    return this.http.post(this.BaseURI + '/ApplicationUser/Register', body);
  }

  login(formData) {
    return this.http.post(this.BaseURI + '/ApplicationUser/Login', formData);
  }

  getUserProfile() {
    var tokenHeader = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('token')});
    return this.http.get(this.BaseURI + '/UserProfile',{headers:tokenHeader});
  }
  roleMatch(allowedRoles): boolean {
    var isMatch = false;
    var payload = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
    var userRole = payload.role;
    allowedRoles.forEach(element => {
      if(userRole == element){
        isMatch = true;
        return false;
      }
    });
    return isMatch;
  }

  postInternship(){
    return this.http.post(this.BaseURI+'/Internships',this.formInt);
  }
  putInternship(){
    return this.http.put(this.BaseURI +'/Internships/'+ this.formInt.InternshipId, this.formInt);
  }
  deleteInternship(id){
    return this.http.delete(this.BaseURI +'/Internships/'+ id);
  }
 
  refreshList(){
    this.http.get(this.BaseURI + '/Internships')
    .toPromise()
    .then(res => this.list = res as Internship[]);
  }


  postInterview(){
    return this.http.post(this.BaseURI+'/Interviews',this.formInterview);
  }
  putInterview(){
    return this.http.put(this.BaseURI +'/Interviews/'+ this.formInterview.InterviewId, this.formInterview);
  }
  deleteInterview(id){
    return this.http.delete(this.BaseURI +'/Interviews/'+ id);
  }
  
  refreshListInterview(){
    this.http.get(this.BaseURI + '/Interviews')
    .toPromise()
    .then(res => this.listTwo = res as Interview[]);
  }
}