import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

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

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.userloginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  hideShowPass(): void {
    this.isText = !this.isText;
    this.eyeIcon = this.isText ? "fa fa-eye" : "fa fa-eye-slash";
    this.type = this.isText ? "text" : "password";
  }
  onUserLogin(): void {
    if (this.userloginForm.valid) {
      console.log(this.userloginForm.value);
  
      this.auth.userlogin(this.userloginForm.value).subscribe(
        (res) => {
          alert(res.message);
          this.userloginForm.reset();
          this.router.navigate(['user-dashboard']);
        },
        (err: HttpErrorResponse) => {
          console.log(err); // Log the error object to the console for debugging purposes
          if (err.status === 400 && err.error?.errors?.Email) {
            const validationErrors = err.error.errors.Email;
            const errorMessage = validationErrors[0] || 'Validation error';
            alert(errorMessage);
          } else {
            alert('An error occurred. Please try again later.');
          }
        }
      );
    } else {
      console.log('Form is not valid!');
      this.validateAllFormFields(this.userloginForm);
      alert("Your form is invalid!");
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
