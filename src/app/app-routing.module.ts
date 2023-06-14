import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ApplicationComponent } from './application/application.component';
import { LoginComponent } from './login/login.component';
import { FaqComponent } from './faq/faq.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { Application1Component } from './application1/application1.component';
import { Application2Component } from './application2/application2.component';
import { UploadDocumentsComponent } from './upload-documents/upload-documents.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [ { path: '', component: HomeComponent,},
  { path: 'about', component: AboutUsComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'application', component: ApplicationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'faq', component: FaqComponent },
  { path:'application1', component: Application1Component},
  {path:'application2', component: Application2Component},
  {path:'userlogin', component: UserLoginComponent},
  {path:'adminlogin', component: AdminLoginComponent},
  {path:'upload-documents', component: UploadDocumentsComponent},
  {path:'user-dashboard',component:UserDashboardComponent},
 {path:'register', component: RegisterComponent} ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
