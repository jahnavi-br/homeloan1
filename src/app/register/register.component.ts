import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa fa-eye";

  constructor(private fb: FormBuilder, private auth: AuthService) {}

  ngOnInit(): void { 
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      phone: ['', Validators.required]
    });
  }

  hideShowPass(): void {
    this.isText = !this.isText;
    this.eyeIcon = this.isText ? "fa fa-eye" : "fa fa-eye-slash";
    this.type = this.isText ? "text" : "password";
  }

  onRegister(): void {
    if (this.registerForm.valid) {
      
      this.auth.register(this.registerForm.value)
      .subscribe({
        next:(res)=>{alert(res.message)},
        error:(err)=>{alert(err?.error.message)

      }
       
    })
      console.log(this.registerForm.value);
    } else {
      console.log('Form is not Valid!');
      this.validateAllFormFields(this.registerForm);
      alert("Your Form is Invalid!");
    }
  }

  private validateAllFormFields(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsDirty({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }
}
