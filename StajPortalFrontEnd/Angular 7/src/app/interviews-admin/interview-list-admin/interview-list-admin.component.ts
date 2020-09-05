import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import {Interview} from './../../shared/interview.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-interview-list-admin',
  templateUrl: './interview-list-admin.component.html',
  styles: []
})
export class InterviewListAdminComponent implements OnInit {

  constructor(private service: UserService,private toastr: ToastrService) { }

  ngOnInit() {
    this.service.refreshListInterview();
  }
  populateForm(ml:Interview){
    this.service.formInterview = Object.assign({},ml);
  }

  onDeleteInterview(InterViewId){
    if(confirm('Seçili kaydı silmek istediğinize emin misiniz?')){
    this.service.deleteInterview(InterViewId).subscribe(
      res =>{
        this.service.refreshListInterview();
        this.toastr.warning('Silindi','Mülakat Ekle');
      },
      err =>{
        console.log(err);
      })
  }
}

}
