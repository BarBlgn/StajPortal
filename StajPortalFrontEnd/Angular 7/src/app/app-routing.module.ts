import { AuthGuard } from './auth/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { InternshipsComponent } from './internships/internships.component';
import { InternshipComponent } from './internships/internship/internship.component';
import { InternshipListComponent } from './internships/internship-list/internship-list.component';
import { PermissionComponent } from './permission/permission.component';
import { InterviewComponent } from './interviews/interview/interview.component';
import { InterviewsComponent } from './interviews/interviews.component';
import { InterviewListComponent } from './interviews/interview-list/interview-list.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { InternshipAdminComponent } from './internships-admin/internship-admin/internship-admin.component';
import { InternshipListAdminComponent } from './internships-admin/internship-list-admin/internship-list-admin.component';
import { InternshipsAdminComponent } from './internships-admin/internships-admin.component';
import { InterviewsAdminComponent } from './interviews-admin/interviews-admin.component';
import { InterviewAdminComponent } from './interviews-admin/interview-admin/interview-admin.component';
import { InterviewListAdminComponent } from './interviews-admin/interview-list-admin/interview-list-admin.component';


const routes: Routes = [
  {path:'',redirectTo:'/user/login',pathMatch:'full'},
  {
    path: 'user', component: UserComponent,
    children: [
      { path: 'registration', component: RegistrationComponent },
      { path: 'login', component: LoginComponent }
    ]
  },
  
   {path:'home',component:HomeComponent,canActivate:[AuthGuard]},
   {path:'permission',component:PermissionComponent},
   {path:'adminpanel',component:AdminPanelComponent,canActivate:[AuthGuard],data:{permittedRoles:['Admin']}
  },
  {path:'internshipsadmin',component:InternshipsAdminComponent, children: [
    {path:'', component:InternshipAdminComponent},
    {path:'', component:InternshipListAdminComponent,outlet:'outlet3'}
  ]},
  {path:'interviewsadmin',component:InterviewsAdminComponent, children: [
    {path:'', component:InterviewAdminComponent},
    {path:'', component:InterviewListAdminComponent,outlet:'outlet4'}
  ]},
 {
   path:'internships',component:InternshipsComponent,
   children: [
     {path:'', component:InternshipComponent},
     {path:'', component:InternshipListComponent,outlet:'outlet1'}
   ]
 },
 {
   path:'interviews',component:InterviewsComponent,
   children: [
     {path:'',component:InterviewComponent},
     {path:'',component:InterviewListComponent,outlet:'outlet2'}
   ]
 }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
