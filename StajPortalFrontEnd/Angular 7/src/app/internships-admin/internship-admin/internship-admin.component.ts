import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/shared/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-internship-admin',
  templateUrl: './internship-admin.component.html',
  styles: []
})
export class InternshipAdminComponent implements OnInit {

  constructor(private service: UserService,
    private toastr: ToastrService) { }

  ngOnInit() { 
    this.resetForm();
  }
  resetForm(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.service.formInt = {
      InternshipId:0,
      CompanyName:'',
      Address:'',
      Field:'',
      Salary:0,
      Explanation:'',
      HowApplied:''

    }
  }

  onSubmit(form:NgForm){
    if(this.service.formInt.InternshipId==0)
    this.insertRecord(form);
    else
    this.updateRecord(form);
  }
insertRecord(form:NgForm){
    this.service.postInternship().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.success('Eklendi','Staj Ekle');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
}
updateRecord(form: NgForm){
  this.service.putInternship().subscribe(
    res => {
      this.resetForm(form);
      this.toastr.info('Eklendi','Staj Ekle');
      this.service.refreshList();
    },
    err => {
      console.log(err);
    }
  )
}

}
