import { Component } from '@angular/core';
import { FormBuilder, FormGroup,Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  adminForm!: FormGroup;
  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa fa-eye"

  constructor(private fb: FormBuilder){}

  ngOnInit(): 
    void{ this.adminForm = this.fb.group({
    emailID: ['',Validators.required],
    password: ['',Validators.required]
  });

  }
  hideShowPass(){
     this.isText = !this.isText;
     this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon="fa-eye-slash";
     this.isText ? this.type = "text" : this.type = "password";
  }
  onSubmit(){
    if(this.adminForm.valid){
      console.log(this.adminForm.value)
    }
    else{
      console.log('Form is not Valid!')
        this.validateAllFormFields(this.adminForm);
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
