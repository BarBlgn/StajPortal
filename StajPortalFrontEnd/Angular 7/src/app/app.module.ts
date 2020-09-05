import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClient,HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserService } from './shared/user.service';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { InternshipsComponent } from './internships/internships.component';
import { InternshipComponent } from './internships/internship/internship.component';
import { InternshipListComponent } from './internships/internship-list/internship-list.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { PermissionComponent } from './permission/permission.component';
import { InterviewsComponent } from './interviews/interviews.component';
import { InterviewComponent } from './interviews/interview/interview.component';
import { InterviewListComponent } from './interviews/interview-list/interview-list.component';
import { InternshipsAdminComponent } from './internships-admin/internships-admin.component';
import { InternshipAdminComponent } from './internships-admin/internship-admin/internship-admin.component';
import { InternshipListAdminComponent } from './internships-admin/internship-list-admin/internship-list-admin.component';
import { InterviewsAdminComponent } from './interviews-admin/interviews-admin.component';
import { InterviewAdminComponent } from './interviews-admin/interview-admin/interview-admin.component';
import { InterviewListAdminComponent } from './interviews-admin/interview-list-admin/interview-list-admin.component';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    InternshipsComponent,
    InternshipComponent,
    InternshipListComponent,
    AdminPanelComponent,
    PermissionComponent,
    InterviewsComponent,
    InterviewComponent,
    InterviewListComponent,
    InternshipsAdminComponent,
    InternshipAdminComponent,
    InternshipListAdminComponent,
    InternshipAdminComponent,
    InternshipListAdminComponent,
    InternshipsAdminComponent,
    InterviewsAdminComponent,
    InterviewAdminComponent,
    InterviewListAdminComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule
  ],
  providers: [UserService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
