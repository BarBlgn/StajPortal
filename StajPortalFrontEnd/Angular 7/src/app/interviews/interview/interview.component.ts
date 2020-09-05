import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/shared/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styles: []
})
export class InterviewComponent implements OnInit {

  constructor(private service: UserService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.service.formInterview = {
      InterviewId:0,
      Questions:'',
      Answers:'',
      Explanation:''

    }
  }

  onSubmit(form:NgForm){
    if(this.service.formInterview.InterviewId==0)
    this.insertRecordInterview(form);
    else
    this.updateRecordInterview(form);
  }

  insertRecordInterview(form:NgForm){
    this.service.postInterview().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.success('Eklendi','Mülakat Ekle');
        this.service.refreshListInterview();
      },
      err => {
        console.log(err);
      }
    )
}
updateRecordInterview(form: NgForm){
  this.service.putInterview().subscribe(
    res => {
      this.resetForm(form);
      this.toastr.info('Eklendi','Mülakat Ekle');
      this.service.refreshListInterview();
    },
    err => {
      console.log(err);
    }
  )
}

}
