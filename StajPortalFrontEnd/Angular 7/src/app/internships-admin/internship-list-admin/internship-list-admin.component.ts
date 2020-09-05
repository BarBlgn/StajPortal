import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import {Internship} from './../../shared/internship.model';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-internship-list-admin',
  templateUrl: './internship-list-admin.component.html',
  styles: []
})
export class InternshipListAdminComponent implements OnInit {

  constructor(private service: UserService,private toastr: ToastrService) { }
  ngOnInit() {
    this.service.refreshList();
  }
  populateForm(st:Internship){
    this.service.formInt = Object.assign({},st);
  }

  onDelete(InternshipId){
    if(confirm('Seçili kaydı silmek istediğinize emin misiniz?')){
    this.service.deleteInternship(InternshipId).subscribe(
      res =>{
        this.service.refreshList();
        this.toastr.warning('Silindi','Staj Ekle');
      },
      err =>{
        console.log(err);
      })
  }
}

}
