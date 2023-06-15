import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  userloginForm!: FormGroup;
  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa fa-eye";

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.userloginForm = this.fb.group({
      emailID: ['',Validators.required],
      password: ['',Validators.required]
    });
  }

  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }
  onSubmit(){
    if(this.userloginForm.valid){
      console.log(this.userloginForm.value)
    }
    else{
      console.log('Form is not Valid!')
        this.validateAllFormFields(this.userloginForm);
        alert("Your Form is Inavlid!");

    }
  }
  private validateAllFormFields(formGroup:FormGroup){
    Object.keys(formGroup.controls).forEach(field =>{
      const control =formGroup.get(field);
      if(control instanceof FormControl){
        control?.markAsDirty({onlySelf:true});
      }
        else if(control instanceof FormGroup){
          this.validateAllFormFields(control);
        }
      }
    )
  }
}
