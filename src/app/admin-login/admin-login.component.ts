import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa fa-eye"
  constructor(){}
  ngOnInit(): void{

  }
  hideShowPass(){
     this.isText = !this.isText;
     this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon="fa-eye-slash";
     this.isText ? this.type = "text" : this.type = "password";
  }

}
