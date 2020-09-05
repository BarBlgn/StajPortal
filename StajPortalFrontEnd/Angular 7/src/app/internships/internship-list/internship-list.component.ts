import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import {Internship} from './../../shared/internship.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-internship-list',
  templateUrl: './internship-list.component.html',
  styles: []
})
export class InternshipListComponent implements OnInit {

  constructor(private service: UserService,private toastr: ToastrService) { }
  ngOnInit() {
    this.service.refreshList();
  }
}
