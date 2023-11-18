import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUsersignup } from 'src/app/interface/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  submited = false
  constructor(
    private UserService: UserService,
    private router: Router,

  ) { }

  signupform = new FormGroup({
    firstname: new FormControl("", [Validators.required]),
    lastname: new FormControl("", [Validators.required]),
    phoneNumber: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
    confirmPassword: new FormControl("", [Validators.required]),
  })

  get firstname() {
    return this.signupform.get("firstname")
  }
  get lastname() {
    return this.signupform.get("lastname")
  }
  get phoneNumber() {
    return this.signupform.get("phoneNumber")
  }
  get email() {
    return this.signupform.get("email")
  }
  get password() {
    return this.signupform.get("password")
  }
  get confirmPassword(): any {
    return this.signupform.get("confirmPassword")
  }

  onSubmit() {
    // console.log(this.signupform.valid, this.signupform.value);

    if (this.signupform.valid) {
      const userformsignup: IUsersignup = {
        firstname: this.firstname?.value || "",
        lastname: this.lastname?.value || "",
        phoneNumber: this.phoneNumber?.value || "",
        email: this.email?.value || "",
        password: this.password?.value || "",
        confirmPassword: this.confirmPassword?.value,
        image: "",
        birthday: "",
        gender: "",
        address: "",
        role: "user"
      }
      console.log('signup submitted:', this.signupform.value);
      // Goi API
      this.UserService.signup(userformsignup).subscribe(data => {
        alert("Đăng Ký Thành Công Tài Khoản")
        const user = {
          email: data.user.email,
          password: data.user.password
        }
        console.log("data dang ky", user);
        // Dang ky song thi dang nhap luon
        if (user) {
          this.UserService.signin(user)
        }
      })
    }
  }
}
