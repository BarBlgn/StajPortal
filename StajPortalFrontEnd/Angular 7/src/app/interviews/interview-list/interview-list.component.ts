import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import {Interview} from './../../shared/interview.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-interview-list',
  templateUrl: './interview-list.component.html',
  styles: []
})
export class InterviewListComponent implements OnInit {

  constructor(private service: UserService,private toastr: ToastrService) { }

  ngOnInit() {
    this.service.refreshListInterview();
  }

}
