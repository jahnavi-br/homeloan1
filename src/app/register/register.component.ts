import { Component } from '@angular/core';
import { FormBuilder, FormGroup,Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm!: FormGroup;
  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa fa-eye"

  constructor(private fb: FormBuilder) {}

ngOnInit(): void{ 
  this.registerForm = this.fb.group({
    fName: ['',Validators.required],
    lName: ['',Validators.required],
  emailID: ['',Validators.required],
  password: ['',Validators.required],
  Phone: ['',Validators.required]
});}
hideShowPass(){
  this.isText = !this.isText;
  this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon="fa-eye-slash";
  this.isText ? this.type = "text" : this.type = "password";
}
onSubmit(){
  if(this.registerForm.valid){
    console.log(this.registerForm.value)
  }
  else{
    console.log('Form is not Valid!')
      this.validateAllFormFields(this.registerForm);
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
