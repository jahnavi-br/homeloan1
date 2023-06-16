import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BarComponent } from './bar/bar.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ApplicationComponent } from './application/application.component';
import { Application1Component } from './application1/application1.component';
import { Application2Component } from './application2/application2.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FaqComponent } from './faq/faq.component';
import { LoginComponent } from './login/login.component';
import { UploadDocumentsComponent } from './upload-documents/upload-documents.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BarComponent,
    AboutUsComponent,
    ApplicationComponent,
    Application1Component,
    Application2Component,
    CalculatorComponent,
    FaqComponent,
    LoginComponent,
    UploadDocumentsComponent,
    UserLoginComponent,
    AdminLoginComponent,
    UserDashboardComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
